module.exports = {
  '4chan': {
    postIdPrefix: 'p',
    posts: '.post',
    // For 4chan there's native / 4chan X / 4chan X with file info formatting
    filename: {
      '.fileText .file-info .fnfull': 'textContent',
      '.fileText .file-info > a': 'textContent',
      // Native puts the full name of a truncated file in the link's title and of a
      // spoilered file in the .fileText title. 4chan X keeps the native link in a hidden
      // .fileText-original, which matters for file info formats without a filename link
      // (reading all of .fileText would see both copies and add every sound twice).
      '.fileText > a[title], .fileText-original > a[title]': 'title',
      '.fileText[title]': 'title',
      '.fileText > a, .fileText-original > a': 'textContent',
      '.fileText': 'textContent'
    },
    thumb: '.fileThumb',
    expandedImage: isChanX ? '.full-image' : '.expanded-thumb, .expandedWebm',
    hoverImage: isChanX ? '#ihover' : '#image-hover',
    playLink: {
      class: '',
      text: Icons.playFill,
      // In priority order. With 4chan X go after its whole .file-info: inside it the link
      // can sit in a hidden span or after other icons, and StyleChan can hide .file-info.
      relative: [ '.fileText .file-info', '.fileText a' ],
      position: 'afterend',
      prependText: ' ',
      unfilterText: Icons.filter,
      // For a post whose sounds were removed rather than filtered.
      restoreText: Icons.arrowCounterclockwise
    },
    // Deliberately missing dots because this is used to set the class
    styleFetcher: 'post reply style-fetcher',
    limitWidthOf: '.thread > .postContainer'
  },
  FoolFuuka: {
    postIdPrefix: '',
    posts: 'article',
    // For the archive the OP and reply selector differs
    filename: {
      '.thread_image_box .post_file_filename': 'textContent',
      '.post_file_filename': 'title'
    },
    thumb: '.thread_image_link',
    playLink: {
      class: 'btnr',
      text: 'Play',
      relative: '.post_controls',
      position: 'beforeend',
      unfilterText: 'Add'
    },
    styleFetcher: 'post_wrapper style-fetcher',
    limitWidthOf: '.posts > article.post'
  },
  Fuuka: {
    postIdPrefix: 'p',
    posts: '.content > div, td.reply',
    filename: {
      ':scope > br + span': 'textContent'
    },
    filenameParser: v => v.split(', ').slice(2).join(', '),
    thumb: '.thumb',
    playLink: {
      class: '',
      text: 'play',
      relative: 'br:nth-of-type(2)',
      position: 'beforebegin',
      prependText: ' [',
      appendText: ']',
      unfilterText: 'add'
    },
    styleFetcher: 'reply style-fetcher',
    limitWidthOf: '.content > div, .content > table'
  }
}[Site];
