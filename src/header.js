// ==UserScript==
// @name         4chan sounds player
// @version      VERSION
// @namespace    rccom
// @description  A player designed for 4chan sounds threads.
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjIgMy4yKSBzY2FsZSgyLjQpIiBmaWxsPSIjNzg5OTIyIiBkPSJNMTEuMDcgOC44MlM5LjgwMyAxLjA3OSA1LjE0NSAxLjA5N0MyLjAwNiAxLjEwOS43OCA0LjEyNCAzLjA1NSA0LjgwMmMwIDAtMi42OTguOTczLTIuNjk4IDIuNjk3IDAgMS43MjUgNC4yNzQgMy41NCAxMC43MTMgMS4zMnptMS45MzEgNS45MjRzLjkwNCA3Ljc5MSA1LjU1OCA3Ljk5MWMzLjEzNi4xMzUgNC41MDMtMi44MiAyLjI2Mi0zLjYwNCAwIDAgMi43NC0uODQ1IDIuODItMi41NjcuMDgtMS43MjMtNC4xMDUtMy43MzctMTAuNjQtMS44MnptLTMuNjcyLTEuNTVzLTcuNTMyIDIuMTktNi45NTIgNi44MTNjLjM5IDMuMTE0IDMuNTMgMy45NjkgMy45MyAxLjYzIDAgMCAxLjI5IDIuNTU5IDMuMDAyIDIuMzUxIDEuNzEyLS4yMDggMy00LjY3LjAyLTEwLjc5NHptNS42MjMtMi40NjdzNy43MjctMS4zNSA3LjY2LTYuMDA4Yy0uMDQ2LTMuMTM4LTMuMDc0LTQuMzMzLTMuNzI4LTIuMDUxIDAgMC0xLTIuNjg2LTIuNzI2LTIuNjY4LTEuNzI0LjAxOC0zLjQ5NCA0LjMxMi0xLjIwNiAxMC43Mjd6Ii8+PGcgZmlsbD0iI2NjMmIyYiI+PHBhdGggZD0iTTEyLDIzIGg4IGwxMywtMTAgdjM4IGwtMTMsLTEwIGgtOCB6Ii8+PHBhdGggZD0iTTM3LDE2IGExNywxNyAwIDAgMSAwLDMyIiBmaWxsPSJub25lIiBzdHJva2U9IiNjYzJiMmIiIHN0cm9rZS13aWR0aD0iMy42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMzcsMjQgYTguNSw4LjUgMCAwIDEgMCwxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2MyYjJiIiBzdHJva2Utd2lkdGg9IjMuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==
// @author       RCC
// @contributor  vampiricwulf
// @match        *://boards.4chan.org/*
// @match        *://boards.4channel.org/*
// @match        *://desuarchive.org/*
// @match        *://arch.b4k.co/*
// @match        *://archived.moe/*
// @match        *://warosu.org/*
// @match        *://archive.nyafuu.org/*
// @match        *://archive.palanq.win/*
// @match        *://arch.b4k.dev/*
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.xmlHttpRequest
// @grant        GM_addValueChangeListener
// @connect      4chan.org
// @connect      4channel.org
// @connect      a.4cdn.org
// @connect      desu-usergeneratedcontent.xyz
// @connect      arch-img.b4k.co
// @connect      archive-media-0.nyafuu.org
// @connect      4cdn.org
// @connect      a.pomf.cat
// @connect      pomf.cat
// @connect      files.catbox.moe
// @connect      catbox.moe
// @connect      litter.catbox.moe
// @connect      files.fatbox.moe
// @connect      fatbox.moe
// @connect      litter.fatbox.moe
// @connect      share.dmca.gripe
// @connect      z.zz.ht
// @connect      z.zz.fo
// @connect      zz.ht
// @connect      too.lewd.se
// @connect      lewd.se
// @connect      cdn.jsdelivr.net
// @connect      *
// @run-at       document-start
// @require      https://raw.githubusercontent.com/richtr/NoSleep.js/07fcee254724ab1b79076fbc22f3dd447649a2eb/dist/NoSleep.min.js
// @require      https://raw.githubusercontent.com/Stuk/jszip/7bbcb3873db23f6d27550cdbb6c4cc2bdeb32194/dist/jszip.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js
// @updateURL    https://raw.githubusercontent.com/vampiricwulf/4chan-sounds-player/BRANCH/dist/FILENAME.meta.js
// @downloadURL  https://raw.githubusercontent.com/vampiricwulf/4chan-sounds-player/BRANCH/dist/FILENAME.user.js
// ==/UserScript==

