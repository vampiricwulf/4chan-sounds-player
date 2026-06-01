#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const argv = require('minimist')(process.argv.slice(2));
typeof argv.env === 'string' && (argv.env = [ argv.env ]);
const env = (argv.env || []).reduce((env, val) => {
  const split = val.split('=');
  env[split[0]] = split.length === 1 ? true : split[1];
  return env;
}, { });
const webpack = require('webpack');
const config = require('./webpack.config')(env, Object.assign({ mode: 'production' }, argv));
const bannerPlugin = config.plugins.find(plugin => plugin instanceof webpack.BannerPlugin);
const header = bannerPlugin.options.banner;

webpack(config, (err, stats) => {
  console.log(stats.toString({
    colors: true
  }));

  if (err || stats.hasErrors()) {
    // Surface the failure to the shell so `npm run build` / CI chains don't treat a
    // broken compile as success and publish a stale or missing artifact.
    process.exitCode = 1;
    return;
  }

  fs.writeFileSync(path.join(__dirname, './dist/' + config.output.filename.replace('.user.js', '.meta.js')), header);
});
