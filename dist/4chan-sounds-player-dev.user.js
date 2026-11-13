// ==UserScript==
// @name         4chan sounds player
// @version      3.7.2.610
// @namespace    rccom
// @description  A player designed for 4chan sounds threads.
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjIgMy4yKSBzY2FsZSgyLjQpIiBmaWxsPSIjNzg5OTIyIiBkPSJNMTEuMDcgOC44MlM5LjgwMyAxLjA3OSA1LjE0NSAxLjA5N0MyLjAwNiAxLjEwOS43OCA0LjEyNCAzLjA1NSA0LjgwMmMwIDAtMi42OTguOTczLTIuNjk4IDIuNjk3IDAgMS43MjUgNC4yNzQgMy41NCAxMC43MTMgMS4zMnptMS45MzEgNS45MjRzLjkwNCA3Ljc5MSA1LjU1OCA3Ljk5MWMzLjEzNi4xMzUgNC41MDMtMi44MiAyLjI2Mi0zLjYwNCAwIDAgMi43NC0uODQ1IDIuODItMi41NjcuMDgtMS43MjMtNC4xMDUtMy43MzctMTAuNjQtMS44MnptLTMuNjcyLTEuNTVzLTcuNTMyIDIuMTktNi45NTIgNi44MTNjLjM5IDMuMTE0IDMuNTMgMy45NjkgMy45MyAxLjYzIDAgMCAxLjI5IDIuNTU5IDMuMDAyIDIuMzUxIDEuNzEyLS4yMDggMy00LjY3LjAyLTEwLjc5NHptNS42MjMtMi40NjdzNy43MjctMS4zNSA3LjY2LTYuMDA4Yy0uMDQ2LTMuMTM4LTMuMDc0LTQuMzMzLTMuNzI4LTIuMDUxIDAgMC0xLTIuNjg2LTIuNzI2LTIuNjY4LTEuNzI0LjAxOC0zLjQ5NCA0LjMxMi0xLjIwNiAxMC43Mjd6Ii8+PGcgZmlsbD0iI2NjMmIyYiI+PHBhdGggZD0iTTEyLDIzIGg4IGwxMywtMTAgdjM4IGwtMTMsLTEwIGgtOCB6Ii8+PHBhdGggZD0iTTM3LDE2IGExNywxNyAwIDAgMSAwLDMyIiBmaWxsPSJub25lIiBzdHJva2U9IiNjYzJiMmIiIHN0cm9rZS13aWR0aD0iMy42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMzcsMjQgYTguNSw4LjUgMCAwIDEgMCwxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2MyYjJiIiBzdHJva2Utd2lkdGg9IjMuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==
// @author       RCC
// @contributor  vampiricwulf
// @license      CC0-1.0
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
// @require      https://cdnjs.cloudflare.com/ajax/libs/nosleep/0.12.0/NoSleep.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js
// @updateURL    https://raw.githubusercontent.com/vampiricwulf/4chan-sounds-player/master/dist/4chan-sounds-player-dev.meta.js
// @downloadURL  https://raw.githubusercontent.com/vampiricwulf/4chan-sounds-player/master/dist/4chan-sounds-player-dev.user.js
// ==/UserScript==


/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bootstrap-icons/icons/arrow-clockwise.svg"
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/arrow-clockwise.svg ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-clockwise\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z\"/>\n  <path d=\"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/arrow-counterclockwise.svg"
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/arrow-counterclockwise.svg ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-counterclockwise\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z\"/>\n  <path d=\"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/arrow-down.svg"
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/arrow-down.svg ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-down\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/arrow-repeat.svg"
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/arrow-repeat.svg ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-repeat\" viewBox=\"0 0 16 16\">\n  <path d=\"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/arrow-up.svg"
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/arrow-up.svg ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-up\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/arrows-collapse.svg"
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/arrows-collapse.svg ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrows-collapse\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/arrows-expand.svg"
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/arrows-expand.svg ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrows-expand\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/bootstrap-reboot.svg"
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/bootstrap-reboot.svg ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bootstrap-reboot\" viewBox=\"0 0 16 16\">\n  <path d=\"M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z\"/>\n  <path d=\"M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/box-arrow-in-left.svg"
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/box-arrow-in-left.svg ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-box-arrow-in-left\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z\"/>\n  <path fill-rule=\"evenodd\" d=\"M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/box-arrow-right.svg"
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/box-arrow-right.svg ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-box-arrow-right\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z\"/>\n  <path fill-rule=\"evenodd\" d=\"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/chat-right-quote.svg"
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/chat-right-quote.svg ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chat-right-quote\" viewBox=\"0 0 16 16\">\n  <path d=\"M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z\"/>\n  <path d=\"M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/check-square.svg"
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/check-square.svg ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check-square\" viewBox=\"0 0 16 16\">\n  <path d=\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"/>\n  <path d=\"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/chevron-down.svg"
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/chevron-down.svg ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-down\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/chevron-up.svg"
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/chevron-up.svg ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-up\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/file-earmark-image.svg"
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/file-earmark-image.svg ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-earmark-image\" viewBox=\"0 0 16 16\">\n  <path d=\"M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"/>\n  <path d=\"M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/file-earmark-music.svg"
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/file-earmark-music.svg ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-earmark-music\" viewBox=\"0 0 16 16\">\n  <path d=\"M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z\"/>\n  <path d=\"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/file-earmark-play.svg"
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/file-earmark-play.svg ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-earmark-play\" viewBox=\"0 0 16 16\">\n  <path d=\"M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z\"/>\n  <path d=\"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/filter.svg"
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/filter.svg ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-filter\" viewBox=\"0 0 16 16\">\n  <path d=\"M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/fullscreen-exit.svg"
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/fullscreen-exit.svg ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-fullscreen-exit\" viewBox=\"0 0 16 16\">\n  <path d=\"M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/fullscreen.svg"
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/fullscreen.svg ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-fullscreen\" viewBox=\"0 0 16 16\">\n  <path d=\"M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/gear.svg"
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/gear.svg ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-gear\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z\"/>\n  <path d=\"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/github.svg"
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/github.svg ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-github\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/image.svg"
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/image.svg ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-image\" viewBox=\"0 0 16 16\">\n  <path d=\"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>\n  <path d=\"M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/info-circle.svg"
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/info-circle.svg ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-info-circle\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n  <path d=\"M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/layout-text-window.svg"
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/layout-text-window.svg ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-layout-text-window\" viewBox=\"0 0 16 16\">\n  <path d=\"M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z\"/>\n  <path d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1h12zm1 3v10a1 1 0 0 1-1 1h-2V4h3zm-4 0v11H2a1 1 0 0 1-1-1V4h10z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/link-45deg.svg"
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/link-45deg.svg ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-link-45deg\" viewBox=\"0 0 16 16\">\n  <path d=\"M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z\"/>\n  <path d=\"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/music-note-list.svg"
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/music-note-list.svg ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-music-note-list\" viewBox=\"0 0 16 16\">\n  <path d=\"M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z\"/>\n  <path fill-rule=\"evenodd\" d=\"M12 3v10h-1V3h1z\"/>\n  <path d=\"M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z\"/>\n  <path fill-rule=\"evenodd\" d=\"M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/pause-fill.svg"
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/pause-fill.svg ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pause-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/pause.svg"
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/pause.svg ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pause\" viewBox=\"0 0 16 16\">\n  <path d=\"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/play-fill.svg"
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/play-fill.svg ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-play-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/play.svg"
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/play.svg ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-play\" viewBox=\"0 0 16 16\">\n  <path d=\"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/plus-circle.svg"
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/plus-circle.svg ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-circle\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n  <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/search.svg"
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/search.svg ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-search\" viewBox=\"0 0 16 16\">\n  <path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/shuffle.svg"
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/shuffle.svg ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-shuffle\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z\"/>\n  <path d=\"M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/skip-end-fill.svg"
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/skip-end-fill.svg ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-skip-end-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/skip-end.svg"
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/skip-end.svg ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-skip-end\" viewBox=\"0 0 16 16\">\n  <path d=\"M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0V4zM5 4.633L10.804 8 5 11.367V4.633z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/skip-start-fill.svg"
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/skip-start-fill.svg ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-skip-start-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/skip-start.svg"
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/skip-start.svg ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-skip-start\" viewBox=\"0 0 16 16\">\n  <path d=\"M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/soundwave.svg"
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/soundwave.svg ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-soundwave\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/speaker.svg"
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/speaker.svg ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-speaker\" viewBox=\"0 0 16 16\">\n  <path d=\"M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z\"/>\n  <path d=\"M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/square.svg"
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/square.svg ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-square\" viewBox=\"0 0 16 16\">\n  <path d=\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/tools.svg"
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/tools.svg ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-tools\" viewBox=\"0 0 16 16\">\n  <path d=\"M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/trash.svg"
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/trash.svg ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n  <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n  <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/volume-mute-fill.svg"
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/volume-mute-fill.svg ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-volume-mute-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/volume-mute.svg"
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/volume-mute.svg ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-volume-mute\" viewBox=\"0 0 16 16\">\n  <path d=\"M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04L4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/volume-up-fill.svg"
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/volume-up-fill.svg ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-volume-up-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z\"/>\n  <path d=\"M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z\"/>\n  <path d=\"M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/volume-up.svg"
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/volume-up.svg ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-volume-up\" viewBox=\"0 0 16 16\">\n  <path d=\"M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z\"/>\n  <path d=\"M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z\"/>\n  <path d=\"M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39L6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z\"/>\n</svg>");

/***/ },

/***/ "./node_modules/bootstrap-icons/icons/x.svg"
/*!**************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/x.svg ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x\" viewBox=\"0 0 16 16\">\n  <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\n</svg>");

/***/ },

/***/ "./src/_.js"
/*!******************!*\
  !*** ./src/_.js ***!
  \******************/
(module) {

const _ = module.exports;

module.exports.set = function set(object, path, value) {
  const props = path.split('.');
  const lastProp = props.pop();
  const setOn = props.reduce((obj, k) => obj[k] || (obj[k] = {}), object);
  setOn && (setOn[lastProp] = value);
  return object;
};

module.exports.get = function get(object, path, dflt) {
  if (typeof path !== 'string') {
    return dflt;
  }
  if (path === '') {
    return object;
  }
  const props = path.split('.');
  const lastProp = props.pop();
  const parent = props.reduce((obj, k) => obj && obj[k], object);
  // Guard the `in` operator: it throws on a primitive parent (e.g. a mistyped config
  // value), so fall back to the default rather than throwing out of get().
  return parent !== null && typeof parent === 'object' && lastProp in parent ? parent[lastProp] : dflt;
};

/**
 * Check two values are equal. Arrays/Objects are deep checked.
 */
module.exports.isEqual = function isEqual(a, b, strict = true) {
  if (a === b) {
    return true;
  }
  if (a === null || b === null || typeof a !== typeof b) {
    return strict ? a === b : a == b;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return (
      a.length === b.length && a.every((_a, i) => isEqual(_a, b[i], strict))
    );
  }
  // An array and a plain object both report typeof 'object' and can both have zero
  // own keys, so without this guard isEqual([], {}) would wrongly return true.
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
      return false;
    }
    return keysA.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(b, key) &&
        isEqual(a[key], b[key], strict),
    );
  }
  return strict ? a === b : a == b;
};

/**
 * Deep copy a plain JSON value (setting values and defaults). Objects and arrays from
 * the settings config must not be shared with Player.config: in-place edits there
 * would change the defaults themselves.
 */
module.exports.clone = function clone(value) {
  return value !== null && typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : value;
};

module.exports.toDuration = function toDuration(number) {
  // isFinite filters Infinity (a live-stream / unknown media.duration) which would
  // otherwise propagate through the modulo math as NaN and render "NaN:NaN".
  number = isFinite(number) ? Math.floor(number) : 0;
  let [seconds, minutes, hours] = _duration(0, number);
  seconds < 10 && (seconds = '0' + seconds);
  hours && minutes < 10 && (minutes = '0' + minutes);
  return (hours ? hours + ':' : '') + minutes + ':' + seconds;
};

module.exports.timeAgo = function timeAgo(date) {
  const [seconds, minutes, hours, days, weeks] = _duration(
    Math.floor(date),
    Math.floor(Date.now() / 1000),
  );
  // >= 1: with > 1, 7-13 days showed only the leftover days ("10 days" as "3 days ago").
  return weeks >= 1
    ? weeks + (weeks === 1 ? ' week' : ' weeks') + ' ago'
    : days > 0
      ? days + (days === 1 ? ' day' : ' days') + ' ago'
      : hours > 0
        ? hours + (hours === 1 ? ' hour' : ' hours') + ' ago'
        : minutes > 0
          ? minutes + (minutes === 1 ? ' minute' : ' minutes') + ' ago'
          : seconds + (seconds === 1 ? ' second' : ' seconds') + ' ago';
};

function _duration(from, to) {
  const diff = Math.max(0, to - from);
  return [
    diff % 60,
    Math.floor(diff / 60) % 60,
    Math.floor(diff / 60 / 60) % 24,
    Math.floor(diff / 60 / 60 / 24) % 7,
    Math.floor(diff / 60 / 60 / 24 / 7),
  ];
}

module.exports.debounce = function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

module.exports.waitFor = async function waitFor(selector, timeout = 3000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const el = document.querySelector(selector);
    if (el) {
      return el;
    }
    await new Promise((r) => setTimeout(r, 100));
  }
  return null;
};

module.exports.element = function element(
  html,
  parent,
  position = 'beforeend',
) {
  let el;
  if (html instanceof Node) {
    el = html;
  } else {
    const container = document.createElement('div');
    container.innerHTML = html;
    el = container.children[0];
  }
  parent && parent.insertAdjacentElement(position, el);
  el instanceof Element && _.elementHandler(el);
  return el;
};

module.exports.elementHTML = function elementHTML(el, content) {
  el.innerHTML = content;
  _.elementHandler(el);
};

module.exports.elementHandler = function elementHandler(el) {
  // Wire up resize elements.
  el.querySelectorAll(`.${ns}-expander`).forEach((el) => {
    el.classList.add('no-touch-action');
    Player.events.set(el, 'pointdragstart', 'position.initResize');
    Player.events.set(el, 'pointdrag.unbound', 'position.doResize');
    Player.events.set(el, 'pointdragend', 'position.stopResize');
  });
  // Wire up popovers.
  const popovers = Array.from(el.querySelectorAll(`.${ns}-popover`));
  el.classList.contains(`${ns}-popover`) && popovers.push(el);
  popovers.forEach((popover) => {
    popover.addEventListener('mouseenter', Player.display._popoverMouseEnter);
    popover.addEventListener('mouseleave', Player.display._popoverMouseLeave);
    popover.nodeName !== 'A' &&
      popover.addEventListener('click', Player.display._popoverClick);
  });
  // Wire up events from attributes.
  Player.events.apply(el);
};

/**
 * Replace audio.src with newSrc while preserving the user's playback state
 * across the implicit HTML5 reload. On failure, revert to the pre-swap URL and
 * re-seek so playback resumes from where it was (not from 0). For sound-webm
 * pairs, the linked video is paused before the swap and re-synced on metadata
 * load so audio/video stay in lockstep across the reroute.
 *
 * opts:
 *   master           Element whose paused state mirrors user intent (default: audio).
 *                    For inline sound-webm where video is the master, pass data.master.
 *   getVideo         () => linked video element to keep in sync, or null. Called at
 *                    swap-time AND at apply-time (post-load) so callers that mutate
 *                    Player.video during the load window resolve the current pair.
 *   ownerStillValid  () => false to abort post-load callbacks (e.g. Player.audio was
 *                    swapped to a standalone video during the load). Default: always.
 *   setInProgress    If true, set audio._rerouteInProgress = true around the swap so
 *                    controls.handleAudioError skips its 3s auto-advance — the
 *                    helper's own onError owns recovery.
 *
 * The cleanup is wired to audio._pendingReroute and carries `.time` and `.wasPaused`
 * expandos so a rapid double-swap inherits the ORIGINAL pre-swap state instead of
 * the synthetic paused=true the HTML5 load algorithm imposes mid-load.
 */
module.exports.swapAudioSrc = function (audio, newSrc, opts) {
  opts = opts || {};
  const master = opts.master || audio;
  const getVideo = opts.getVideo || (() => null);
  const ownerStillValid = opts.ownerStillValid || (() => true);

  const prior = audio._pendingReroute;
  const time = (prior && typeof prior.time === 'number') ? prior.time : audio.currentTime;
  const wasPaused = (prior && typeof prior.wasPaused === 'boolean') ? prior.wasPaused : master.paused;
  const priorSrc = audio.src;
  prior && prior();

  const initialVideo = getVideo();
  if (initialVideo && !initialVideo.paused) initialVideo.pause();

  if (opts.setInProgress) audio._rerouteInProgress = true;
  audio.src = newSrc;
  // Re-read after assignment: the browser normalizes the stored URL form.
  const expectedSrc = audio.src;

  const resume = currentVideo => {
    try {
      audio.currentTime = time;
      if (currentVideo) currentVideo.currentTime = time;
    } catch (e) { /* seek out of range */ }
    if (!wasPaused) {
      master.play().catch(() => { /* autoplay blocked */ });
      // Player.controls.sync bails at low readyState so one element doesn't
      // drag the other. Play both explicitly when they're sync-linked.
      const other = master === audio ? currentVideo : audio;
      if (other) other.play().catch(() => { /* autoplay blocked */ });
    }
  };

  const onLoad = () => {
    cleanup();
    if (!ownerStillValid() || audio.src !== expectedSrc) return;
    resume(getVideo());
  };

  const onError = () => {
    cleanup();
    // If the caller no longer owns this swap (Player.audio swapped) or another
    // mutator already changed src, leave the new owner alone — don't clobber
    // their src with a stale priorSrc.
    if (!ownerStillValid() || audio.src !== expectedSrc) return;
    audio.src = priorSrc;
    // Re-read after assignment so a later external mutator's src change is
    // detectable via !== priorSrcExpected.
    const priorSrcExpected = audio.src;
    // Install a revert-phase cleanup tracked by _pendingReroute so external
    // src mutations (Player.actions.play, _movePlaying, _removeForNode, stop)
    // can cancel the orphan onRevert listener. Also attach an error handler
    // so a priorSrc that ALSO fails doesn't leak the loadedmetadata listener
    // onto whatever src the audio element is reused for next.
    let onRevert, onRevertError;
    const revertCleanup = () => {
      audio.removeEventListener('loadedmetadata', onRevert);
      audio.removeEventListener('error', onRevertError);
      if (audio._pendingReroute === revertCleanup) audio._pendingReroute = null;
    };
    onRevert = () => {
      revertCleanup();
      if (!ownerStillValid() || audio.src !== priorSrcExpected) return;
      // Re-derive the linked video at apply-time per the helper's contract —
      // Player.video may have been reassigned during the revert load window.
      resume(getVideo());
    };
    onRevertError = () => {
      revertCleanup();
      // Both reroute target and original failed. Yield to global error handling
      // (handleAudioError auto-advance) — the audio is in a known-broken state.
    };
    revertCleanup.time = time;
    revertCleanup.wasPaused = wasPaused;
    audio._pendingReroute = revertCleanup;
    audio.addEventListener('loadedmetadata', onRevert);
    audio.addEventListener('error', onRevertError);
  };

  const cleanup = () => {
    audio.removeEventListener('loadedmetadata', onLoad);
    audio.removeEventListener('error', onError);
    if (opts.setInProgress) audio._rerouteInProgress = false;
    if (audio._pendingReroute === cleanup) audio._pendingReroute = null;
  };
  cleanup.time = time;
  cleanup.wasPaused = wasPaused;
  audio._pendingReroute = cleanup;
  audio.addEventListener('loadedmetadata', onLoad);
  audio.addEventListener('error', onError);
  return cleanup;
};

// Two-tier escape:
//   escapeDoubleQuote=false → HTML-attribute context (href, value, title, data-*).
//                              Escape only the markup-significant chars that the
//                              HTML parser treats specially. `\`, `\n`, `\r`, `;`
//                              are NOT special in attribute values and must round
//                              trip verbatim, otherwise an input value containing
//                              a backslash doubles on every save/render cycle.
//   escapeDoubleQuote=true  → JS-string-inside-attribute context (e.g. inside an
//                              @click='handler("..."")' delimiter pair). Must also
//                              escape the JS-string break-out chars (`\`, `;`,
//                              `\n`, `\r`) AND emit `\"` for the inner double-quote
//                              so the HTML parser hands `\"` to JS verbatim.
// Single-pass replace prevents the prior `&` -> `&amp;` step from being re-encoded
// by a subsequent `;` -> `&#59;` step (which produced `&amp&#59;` rendering as `&;`).
const escAttrHtmlRE = /[&<>'"]/g;
const escAttrJsRE = /[&<>\\;'"\n\r]/g;
module.exports.escAttr = function (str, escapeDoubleQuote) {
  const s = String(str == null ? '' : str);
  if (escapeDoubleQuote) {
    return s.replace(escAttrJsRE, c => {
      switch (c) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '\\': return '\\\\';
      case ';': return '&#59;';
      // Both quotes are backslash-escaped so the value is safe inside a JS string with
      // either delimiter (a bare &#39; decoded back to a quote that ended a '...' string).
      case "'": return '\\&#39;';
      case '"': return '\\&#34;';
      case '\n': return '\\n';
      case '\r': return '\\r';
      }
    });
  }
  return s.replace(escAttrHtmlRE, c => {
    switch (c) {
    case '&': return '&amp;';
    case '<': return '&lt;';
    case '>': return '&gt;';
    case "'": return '&#39;';
    case '"': return '&#34;';
    }
  });
};

// Lightweight HTML escape for text-node and textarea-body contexts. Only escapes
// the three characters the HTML parser treats as markup in those contexts; in
// particular leaves real newlines and backslashes alone so multi-line textareas
// (allow/filters lists, JSON host data) round-trip cleanly through save/load.
const escHTMLRE = /[&<>]/g;
module.exports.escHTML = function (str) {
  return String(str == null ? '' : str).replace(escHTMLRE, c => {
    switch (c) {
    case '&': return '&amp;';
    case '<': return '&lt;';
    case '>': return '&gt;';
    }
  });
};

/**
 * A length setting as CSS: a bare number means pixels ("250" was an invalid value, which
 * left the size unlimited).
 */
module.exports.cssLength = function (value) {
  return /^\s*[0-9.]+\s*$/.test(String(value)) ? `${String(value).trim()}px` : value;
};


/***/ },

/***/ "./src/api.js"
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
(module) {

const cache = {};

module.exports = {
  get
};

// GM.xmlHttpRequest hands back the response headers as one raw string, not an object.
function getHeader(rawHeaders, name) {
  const match = new RegExp(`^${name}:[ \\t]*(.*)$`, 'im').exec(rawHeaders || '');
  return match ? match[1].trim() : undefined;
}

async function get(url) {
  return new Promise(function (resolve, reject) {
    const headers = {};
    if (cache[url] && cache[url].lastModified) {
      headers['If-Modified-Since'] = cache[url].lastModified;
    }
    GM.xmlHttpRequest({
      method: 'GET',
      url,
      headers,
      responseType: 'json',
      // A request that never answers left the threads view loading, with no way to retry.
      timeout: 30000,
      ontimeout: () => reject(new Error(`Request for ${url} timed out.`)),
      onabort: () => reject(new Error(`Request for ${url} was aborted.`)),
      onload: response => {
        if (response.status === 304 && cache[url]) {
          return resolve(cache[url].response);
        }
        // Reject HTTP errors so callers report them instead of reading a null body.
        if (response.status < 200 || response.status >= 300) {
          return reject(new Error(`Request for ${url} failed with status ${response.status}.`));
        }
        cache[url] = { lastModified: getHeader(response.responseHeaders, 'last-modified'), response: response.response };
        resolve(response.response);
      },
      onerror: reject
    });
  });
}


/***/ },

/***/ "./src/components/actions/index.js"
/*!*****************************************!*\
  !*** ./src/components/actions/index.js ***!
  \*****************************************/
(module) {

module.exports = {
  atRoot: ['togglePlay', 'play', 'pause', 'next', 'previous', 'stop', 'toggleMute', 'volumeUp', 'volumeDown'],
  public: ['togglePlay', 'play', 'pause', 'next', 'previous', 'stop', 'toggleMute', 'volumeUp', 'volumeDown'],

  initialize() {
    // Keep this reference to switch Player.audio to standalone videos and back.
    Player.controls._audio = Player.audio;
    Player.on('rendered', () => Player.$(`.${ns}-video`).addEventListener('error', Player.actions._handleVideoError));
  },

  /**
	 * Switching being playing and paused.
	 */
  togglePlay() {
    // A play waiting for a sound webm to load counts as playing, so this cancels it. A sound
    // that failed to load isn't playing, though the element doesn't say paused: play retries it.
    if ((Player.audio.paused || Player.audio.error) && !Player.actions._pendingPlay) {
      Player.play();
    } else {
      Player.pause();
    }
  },

  /**
	 * Start playback.
	 */
  async play(sound, { paused } = {}) {
    try {
      // Handle id instead of sound object.
      if (typeof sound === 'string') {
        sound = Player.sounds.find(s => s.id === sound);
        // An id that no longer resolves (removed or filtered) shouldn't play another sound.
        if (!sound) {
          return;
        }
      }
      // The play button (or a key) on a sound that failed to load: retry it, as clicking its
      // row does. play() on the errored element would only reject.
      if (!sound && Player.playing && Player.audio.error) {
        sound = Player.playing;
      }
      // If nothing is currently selected to play start playing the first sound.
      if (!sound && !Player.playing && Player.sounds.length) {
        sound = Player.sounds[0];
      }

      // Retrying the selected sound after it failed to load: play() on an errored element
      // only rejects, so reload it, and cancel the pending auto-advance.
      if (sound && sound === Player.playing && Player.audio.error) {
        clearTimeout(Player._errorAdvanceTO);
        Player.audio.load();
      }

      // If a new sound is being played update the display.
      if (sound && sound !== Player.playing) {
        if (Player.playing) {
          Player.playing.playing = false;
        }
        // Remove play on load listeners for the previous sound.
        Player.video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
        Player.audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
        // Dropping a pending play: put the buttons back to paused (play events set them
        // again if the new sound plays).
        Player.actions._pendingPlay && Player.controls.setPlayButtons(Player.audio, true);
        Player.actions._pendingPlay = false;
        // Remove audio events from the video, and add them back for standalone video.
        const audioEvents = Player.controls.audioEvents;
        for (let evt in audioEvents) {
          let handlers = Array.isArray(audioEvents[evt]) ? audioEvents[evt] : [audioEvents[evt]];
          handlers.forEach(handler => {
            const handlerFunction = Player.getHandler(handler);
            Player.video.removeEventListener(evt, handlerFunction);
            sound.standaloneVideo && Player.video.addEventListener(evt, handlerFunction);
          });
        }
        sound.playing = true;
        Player.playing = sound;
        const previousMedia = Player.audio;
        // Cancel any pending rerouter swap on the outgoing element so its onLoad/
        // onError listeners can't fire against the new src and revert it.
        previousMedia._pendingReroute && previousMedia._pendingReroute();
        Player.isVideo = sound.image.match(/\.(webm|mp4)$/i) || sound.type === 'video/webm' || sound.type === 'video/mp4';
        Player.isStandalone = sound.standaloneVideo;
        Player.video.loop = !Player.isStandalone;
        // Standalone videos play through the video element, everything else through the
        // audio element. Pick the element before setting src: setting it on the outgoing
        // element left the audio element with the previous sound after a standalone video.
        Player.audio = sound.standaloneVideo ? Player.video : Player.controls._audio;
        if (Player.audio !== previousMedia) {
          // Silence and unload the outgoing element: left loading, its late events (an
          // error, a duration) were handled as the new sound's. Keep the user's volume and
          // playback rate.
          previousMedia.pause();
          previousMedia.removeAttribute('src');
          previousMedia.load();
          Player.audio.volume = previousMedia.volume;
          Player.audio.defaultPlaybackRate = previousMedia.defaultPlaybackRate;
        }
        // A sound without a video doesn't use the video element: unload it rather than
        // leave the previous post's video looping (and decoding) out of sight.
        if (!Player.isVideo && Player.video !== previousMedia && Player.video.getAttribute('src')) {
          Player.video.pause();
          Player.video.removeAttribute('src');
          Player.video.load();
        }
        // A standalone video's source is the post's video, which playlist.showImage sets
        // on 'playsound'.
        sound.standaloneVideo || (Player.audio.src = sound.src);
        Player.audio._linked = Player.isVideo && !Player.isStandalone && Player.video;
        Player.video._linked = Player.isVideo && !Player.isStandalone && Player.audio;
        Player.container.classList[Player.isVideo ? 'add' : 'remove']('playing-video');
        Player.container.classList[Player.isVideo || sound.image.endsWith('gif') ? 'add' : 'remove']('playing-animated');
        await Player.trigger('playsound', sound);
      }

      if (!paused) {
        // If there's a video and sound wait for both to load before playing.
        if (!Player.isStandalone && Player.isVideo && (Player.video.readyState < 3 || Player.audio.readyState < 3)) {
          Player.video.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
          Player.audio.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
          // Remember the play is pending so pause() can cancel it, and show it as playing.
          Player.actions._pendingPlay = true;
          Player.controls.setPlayButtons(Player.audio, false);
        } else {
          // play() returns a promise that rejects asynchronously (so the try/catch
          // can't catch it): AbortError when a newer load/pause supersedes this call
          // — common during the rapid re-renders a shuffle/fullscreen toggle triggers —
          // or NotAllowedError when autoplay is blocked. Real media failures surface via
          // the element's 'error' event (handleAudioError), so swallow these.
          Player.audio.play().catch(() => { /* superseded play / autoplay blocked */ });
        }
      }
    } catch (err) {
      Player.logError('There was an error playing the sound. Please check the console for details.', err);
    }
  },

  /**
	 * Handler to only start playback once the video and audio are both loaded.
	 */
  playOnceLoaded(e) {
    // Unlinked meanwhile (its partner failed to load): nothing to wait for.
    if (!e.currentTarget._linked) {
      e.currentTarget.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      return;
    }
    if (e.currentTarget.readyState > 3 && e.currentTarget._linked.readyState > 3) {
      (e.currentTarget === Player.audio || e.currentTarget === Player.video) && (Player.actions._pendingPlay = false);
      e.currentTarget.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      e.currentTarget._linked.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      e.currentTarget._inlinePlayer && e.currentTarget._inlinePlayer.pendingControls && e.currentTarget._inlinePlayer.pendingControls();
      // As in play(): these reject benignly when superseded by a newer load/pause or
      // when autoplay is blocked; the 'error' event handles real failures.
      e.currentTarget._linked.play().catch(() => {});
      e.currentTarget.play().catch(() => {});
    } else {
      !e.currentTarget.paused && e.currentTarget.pause();
      !e.currentTarget._linked.paused && e.currentTarget._linked.pause();
      e.currentTarget.currentTime !== 0 && (e.currentTarget.currentTime = 0);
      e.currentTarget._linked.currentTime !== 0 && (e.currentTarget._linked.currentTime = 0);
    }
  },

  /**
	 * Pause playback.
	 */
  pause() {
    // Pausing during the wait before skipping a sound that failed: land on the next one paused.
    Player._errorAdvanceWasPlaying = false;
    // Cancel a play still waiting for a sound webm's audio and video to load; otherwise it
    // would start anyway once they had.
    if (Player.actions._pendingPlay) {
      Player.actions._pendingPlay = false;
      Player.video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      Player.audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      Player.controls.setPlayButtons(Player.audio, true);
    }
    Player.audio && Player.audio.pause();
  },

  /**
	 * The post's video failed to load for a sound webm (deleted, or an archive without the
	 * media). Play the sound without it instead of waiting for the video forever.
	 * A standalone video's errors go to controls.handleAudioError instead.
	 */
  _handleVideoError(e) {
    if (!Player.playing || Player.isStandalone || !Player.isVideo || e.currentTarget !== Player.video) {
      return;
    }
    Player.video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
    Player.audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
    Player.audio._linked = Player.video._linked = false;
    Player.isVideo = false;
    Player.container.classList.remove('playing-video');
    // document, not Player.$: the picture-in-picture thumbnail moves the image to <body>.
    document.querySelector(`.${ns}-image-link`).classList.remove(`${ns}-show-video`);
    if (Player.actions._pendingPlay) {
      Player.actions._pendingPlay = false;
      Player.audio.play().catch(() => {});
    }
  },

  /**
	 * Stop playback.
	 */
  stop() {
    // Cancel an auto-advance after a failed sound, which would otherwise start playing
    // again (from the first sound) after the player was closed.
    clearTimeout(Player._errorAdvanceTO);
    Player.pause();
    // Cancel any pending rerouter swap so its listeners don't fire after the stop.
    Player.audio._pendingReroute && Player.audio._pendingReroute();
    Player.audio.pause();
    // removeAttribute + load() unsets the source per the HTML5 load algorithm
    // without producing an error event. Even if a browser fires one anyway, the
    // Player.playing = null below short-circuits handleAudioError before the
    // queued error task can run (Player.playing is set synchronously here while
    // the error event is queued as a microtask).
    Player.audio.removeAttribute('src');
    Player.audio.load();
    // Clear the row's playing flag too; the next play() can't, with nothing playing.
    Player.playing && (Player.playing.playing = false);
    Player.playing = null;
    Player.isVideo = false;
    Player.isStandalone = false;
    // Unloading drops the queued pause event, which is what updates the buttons.
    Player.controls.setPlayButtons(Player.audio, true);
    Player.trigger('stop');
  },

  /**
	 * Play the next sound.
	 */
  next(opts) {
    Player.actions._movePlaying(1, opts);
  },

  /**
	 * Play the previous sound.
	 */
  previous(opts) {
    // Over three seconds into a sound restarts it instead.
    const restartSeconds = typeof Player.config.restartSeconds == 'number' && Player.config.restartSeconds;
    if (restartSeconds && Player.audio.currentTime > restartSeconds) {
      Player.audio.currentTime = 0;
    } else {
      Player.actions._movePlaying(-1, opts);
    }
  },

  _movePlaying(direction, { force, group, paused } = {}) {
    // If there's no sound fall out.
    if (!Player.sounds.length) {
      return;
    }
    // If there's no sound currently playing or it's not in the list then just play the first sound.
    const currentIndex = Player.sounds.indexOf(Player.playing);
    if (currentIndex === -1) {
      return Player.play(Player.sounds[0]);
    }
    // Get the next index, either repeating the same, wrapping round to repeat all or just moving the index.
    let nextSound;
    if (!force && Player.config.repeat === 'one') {
      nextSound = Player.sounds[currentIndex];
    } else {
      let newIndex = currentIndex;
      // Advance to the next index (wrapping when repeat-all). Keep skipping while either:
      //  - it's a group move and the candidate is still in the same group, or
      //  - the candidate is a known-dead sound (failed to load) — so traversal lands on a
      //    playable one. The `newIndex !== currentIndex` guard bounds it to one full pass;
      //    if everything is dead/same-group we fall back to the (dead) current and the
      //    play guard below refuses to replay it (no infinite 3s error loop).
      do {
        newIndex = Player.config.repeat === 'all'
          ? ((newIndex + direction) + Player.sounds.length) % Player.sounds.length
          : newIndex + direction;
        nextSound = Player.sounds[newIndex];
      } while (
        nextSound && newIndex !== currentIndex
        // Also skip sounds being removed along with the playing one (playlist.removeAll).
        && ((group && (!nextSound.post || nextSound.post === Player.playing.post)) || nextSound.error || nextSound._removing)
      );
      // A group move back lands on the first sound of the previous post, as one forward
      // lands on the first of the next. (It landed on the previous post's last sound.)
      if (group && direction < 0 && nextSound && nextSound.post && newIndex !== currentIndex) {
        let first = newIndex;
        for (let i = newIndex - 1; i >= 0 && Player.sounds[i].post === nextSound.post; i--) {
          !Player.sounds[i].error && (first = i);
        }
        nextSound = Player.sounds[first];
      }
    }
    // Don't auto-play a dead sound: when the skip loop wrapped back to a dead current
    // (every other sound is dead too) stop rather than looping on the error. Manual
    // selection (handleSelect) bypasses this and still retries a dead link.
    nextSound && !nextSound.error && !nextSound._removing && Player.play(nextSound, { paused });
  },

  /**
	 * Raise the volume by 5%.
	 */
  volumeUp() {
    Player.audio.volume = Math.min(Player.audio.volume + 0.05, 1);
  },

  /**
	 * Lower the volume by 5%.
	 */
  volumeDown() {
    Player.audio.volume = Math.max(Player.audio.volume - 0.05, 0);
  },

  /**
	 * Mute the audio, or reset it to the last volume prior to muting.
	 */
  toggleMute() {
    Player.audio.volume = (Player._lastVolume || 0.5) * !Player.audio.volume;
  }
};


/***/ },

/***/ "./src/components/controls/index.js"
/*!******************************************!*\
  !*** ./src/components/controls/index.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
// Volume changes fire many times a second while dragging the bar or holding the key, and
// every storage write is also sent to the other open tabs.
const saveVolume = _.debounce(vol => GM.setValue('volume', vol), 300);

module.exports = {
  template: __webpack_require__(/*! ./templates/controls.tpl */ "./src/components/controls/templates/controls.tpl"),

  audioEvents: {
    ended: () => Player.config.autoplayNext && Player.next(),
    pause: 'controls.handleMediaEvent',
    play: 'controls.handleMediaEvent',
    // After a stall ('waiting'), so the linked video restarts in step with the audio.
    playing: 'controls.handleMediaEvent',
    seeked: 'controls.handleMediaEvent',
    waiting: 'controls.handleMediaEvent',
    ratechange: 'controls.handleMediaEvent',
    timeupdate: 'controls.updateDuration',
    loadedmetadata: [ 'controls.updateDuration', 'controls.preventWrapping', 'controls.clearPlayingError' ],
    durationchange: 'controls.updateDuration',
    volumechange: 'controls.updateVolume',
    loadstart: 'controls.pollForLoading',
    error: 'controls.handleAudioError'
  },

  actions: {
    previous: 'previous({ force: true })',
    playPause: 'togglePlay',
    next: 'next({ force: true })',
    seek: 'controls.handleSeek($event, "main")',
    mute: 'toggleMute',
    volume: 'controls.handleVolume($event, "main")',
    fullscreen: 'display.toggleFullScreen'
  },

  async initialize() {
    // Apply the previous volume
    GM.getValue('volume').then(volume => volume >= 0 && volume <= 1 && (Player.audio.volume = volume)).catch(() => { /* never set */ });

    // Cancel a pending error auto-advance once any sound starts playing (covers
    // manual navigation and a recovered source within the 3s window).
    Player.on('playsound', () => clearTimeout(Player._errorAdvanceTO));

    // Sounds marked dead while the connection was down are worth trying again (not ones that
    // failed before, which are likely gone for good). Failures shortly before the browser
    // noticed count too.
    window.addEventListener('offline', () => Player.controls._offlineAt = Date.now());
    window.addEventListener('online', () => {
      const since = (Player.controls._offlineAt || Date.now()) - 30000;
      Player.controls.clearDeadMarks(Player.sounds.filter(sound => sound.errorAt >= since));
    });

    // Hide controls that don't fit once the player is shown: on the first show nothing
    // could be measured when it rendered, so they wrapped onto a second line.
    Player.on('show', () => Player.controls.preventWrapping());

    // Only poll for the loaded data when the player is open.
    Player.on('show', () => Player._hiddenWhilePolling && Player.controls.pollForLoading());
    Player.on('hide', () => {
      Player._hiddenWhilePolling = !!Player._loadingPoll;
      Player.controls.stopPollingForLoading();
    });
    Player.on('rendered', () => {
      Player.video = Player.$(`.${ns}-video`);
      Player.video.dataset.id = 'main';
      // Keep track of heavily updated elements.
      Player.audio.volumeBar = Player.video.volumeBar = Player.$(`.${ns}-volume-bar .${ns}-current-bar`);
      Player.audio.currentTimeBar = Player.video.currentTimeBar = Player.$(`.${ns}-seek-bar .${ns}-current-bar`);
      Player.audio.loadedBar = Player.video.loadedBar = Player.$(`.${ns}-seek-bar .${ns}-loaded-bar`);

      // Set the initial volume/seek bar positions and hidden controls.
      Player.controls.updateDuration({ currentTarget: Player.audio });
      Player.controls.updateVolume({ currentTarget: Player.audio });
      Player.controls.preventWrapping();
    });
    // Show all the controls when wrapping prevention is disabled. (Listener name
    // previously mismatched the config property — config uses singular
    // `preventControlWrapping` so the listener had to match for the toggle to fire.)
    Player.on('config:preventControlWrapping', newValue => !newValue && Player.controls.showAllControls());
    // Reset the hidden controls when the hide order is changed.
    Player.on('config:controlsHideOrder', () => {
      Player.controls.setHideOrder();
      Player.controls.preventWrapping();
    });
    // Sync audio/video when the tab is focused.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        Player.controls.sync(Player.audio);
      }
    });
  },

  /**
	 * Handle audio errors. During a rerouter swap the rerouter's own onError handler
	 * reverts to the pre-swap URL, so skip the 3s auto-advance.
	 */
  handleAudioError(err) {
    // Ignore a late error from an element the main player has switched away from.
    if (Player.controls._isStale(err)) {
      return;
    }
    // Clear any in-flight auto-advance first so repeated/duplicate error events
    // don't stack independent 3s timers (which would skip past several tracks).
    clearTimeout(Player._errorAdvanceTO);
    if (Player.audio && Player.audio._rerouteInProgress) {
      return;
    }
    if (Player.playing) {
      // Notifications are rendered as HTML and the title comes from the post filename.
      Player.logError(`Failed to play ${_.escHTML(Player.playing.title)}. Please check the console for details.`, err, 'warning');
      Player.playing.error = err;
      Player.playing.errorAt = Date.now();
      // Mark the row dead so it's visible and skipped during playlist traversal, and
      // refresh count templates (sound-count drops it; dead-count / d:{ } surface it).
      Player.playlist.refreshRow(Player.playing);
      Player.trigger('dead-change');
      // Preserve play state across the skip: if playback was running when the source
      // failed, keep playing the next sound; only stay paused if we were already paused.
      // Captured now (not at timer-fire) so it reflects the state at the moment of error.
      // A sound webm waiting for both to load still has a paused audio element, but
      // playback was requested: count it as playing, and cancel the wait.
      const wasPlaying = !!Player.actions._pendingPlay || (!!Player.audio && !Player.audio.paused);
      Player.actions._pendingPlay && Player.pause();
      // It isn't playing (the element still says it is): show the play button, which retries.
      Player.controls.setPlayButtons(Player.audio, true);
      // Nothing is loading now: stop asking how much has.
      Player.controls.stopPollingForLoading();
      // With no connection, or several failures in a row (a dropped connection, a blocked
      // host), stop instead of marking the whole playlist dead one sound every 3 seconds.
      Player._failStreak = (Player._failStreak || 0) + 1;
      if (navigator.onLine === false || Player._failStreak >= 3) {
        Player.logError(navigator.onLine === false
          ? 'You seem to be offline, so the player stopped. Click a sound to try again once you\'re connected.'
          : 'Several sounds in a row failed to load, so the player stopped. They may have been deleted, or there may be a connection problem (the Fatbox Rerouter can help with catbox). Click a sound to try again.', null, 'warning');
        return;
      }
      // Read when the timer fires: pausing in the meantime (pause() clears it) means the
      // next sound should start paused.
      Player._errorAdvanceWasPlaying = wasPlaying;
      Player._errorAdvanceTO = setTimeout(() => Player.playing && Player.next({ paused: !Player._errorAdvanceWasPlaying }), 3000);
    }
  },

  /**
	 * A successful metadata load proves the source is reachable, so clear any dead-link
	 * mark (set by handleAudioError) and refresh the row to drop the visual indicator.
	 * This lets a manual retry or a rerouter fix un-mark a previously-dead sound.
	 */
  clearPlayingError(e) {
    if (Player.controls._isStale(e)) {
      return;
    }
    if (Player.playing) {
      Player._failStreak = 0;
      // It recovered (a retry, or the rerouter's swap): don't skip past it after all.
      clearTimeout(Player._errorAdvanceTO);
    }
    if (Player.playing && Player.playing.error) {
      delete Player.playing.error;
      Player.playlist.refreshRow(Player.playing);
      Player.trigger('dead-change');
    }
  },

  /**
	 * Clear every dead mark, so sounds are tried again (back online, or their links changed).
	 */
  clearDeadMarks(sounds = Player.sounds) {
    const dead = sounds.filter(sound => sound.error);
    dead.forEach(sound => {
      delete sound.error;
      Player.playlist.refreshRow(sound);
    });
    Player._failStreak = 0;
    dead.length && Player.trigger('dead-change');
  },

  /**
	 * Handle audio events. Sync the video up, and update the controls.
	 */
  handleMediaEvent(e) {
    if (Player.controls._isStale(e)) {
      return;
    }
    const audio = e.currentTarget._inlineAudio || e.currentTarget;
    Player.controls.sync(e.currentTarget);
    Player.controls.updateDuration(e);
    Player.controls.setPlayButtons(audio, audio.paused);
  },

  /**
	 * Show the play or pause state on the play buttons for an audio element.
	 */
  setPlayButtons(audio, paused) {
    document.querySelectorAll(`.${ns}-play-button[data-audio="${audio.dataset.id}"]`).forEach(el => {
      el.classList[paused ? 'add' : 'remove'](`${ns}-play`);
    });
  },

  /**
	 * Whether a main-player media event comes from an element the player has since switched
	 * away from (the audio element while a standalone video plays, or vice versa).
	 */
  _isStale(e) {
    const media = e && e.currentTarget;
    return !!media && media.dataset && media.dataset.id === 'main' && media !== Player.audio;
  },

  /**
	 * Sync the webm to the audio. Matches the videos time and play state to the audios.
	 *
	 * The audio leads: while it's paused, ended or stalled waiting for data, the video
	 * waits too. (This used to do nothing unless both were fully ready, so a stalled audio
	 * left the video running ahead, and an ended one left it looping.) Positions are lined
	 * up whether or not it's playing, so seeking while paused moves the picture too.
	 */
  sync(from) {
    const to = from && from._linked;
    if (!to) {
      return;
    }
    const leading = !from.paused && !from.ended && from.readyState >= from.HAVE_FUTURE_DATA;
    if (leading) {
      to.playbackRate = from.playbackRate;
      to.defaultPlaybackRate = from.defaultPlaybackRate;
    }
    // Only seek when they've drifted apart: a seek makes the video wait and fire 'playing'
    // again. A shorter follower that loops is compared within its loop (one that doesn't
    // loop, like an inline player's audio following its video, has to be sent back).
    if (from.readyState >= from.HAVE_METADATA && to.duration > 0 && isFinite(to.duration)) {
      const target = from.currentTime % to.duration;
      const drift = Math.abs(to.currentTime - target);
      if ((to.loop ? Math.min(drift, to.duration - drift) : drift) > 0.15) {
        to.currentTime = target;
        to._syncSeekAt = performance.now();
      }
    }
    if (!leading) {
      !to.paused && to.pause();
      return;
    }
    // play() rejects when a newer load or pause interrupts it; that's expected here.
    to.paused && to.play().catch(() => {});
  },

  /**
	 * The main player's video started again after waiting for data: bring it back in step
	 * with the audio. (Only for a sound webm, where the video has a linked audio.)
	 */
  syncVideo(e) {
    const video = e.currentTarget;
    if (!video._linked || video._linked !== Player.audio) {
      return;
    }
    // The 'playing' that ends a seek sync made lags the audio by however long the seek
    // took. Seeking again would chase the audio for as long as each seek takes, with the
    // picture frozen, so let that one be.
    if (video._syncSeekAt && performance.now() - video._syncSeekAt < 3000) {
      video._syncSeekAt = 0;
      return;
    }
    Player.controls.sync(Player.audio);
  },

  /**
	 * Poll for how much has loaded. I know there's the progress event but it unreliable.
	 */
  pollForLoading() {
    Player._loadingPoll = Player._loadingPoll || setInterval(Player.controls.updateLoaded, 500);
  },

  /**
	 * Stop polling for how much has loaded.
	 */
  stopPollingForLoading() {
    Player._loadingPoll && clearInterval(Player._loadingPoll);
    Player._loadingPoll = null;
  },

  /**
	 * Update the loading bar.
	 */
  updateLoaded() {
    const length = Player.audio.buffered.length;
    const size = length > 0
      ? (Player.audio.buffered.end(length - 1) / Player.audio.duration) * 100
      : 0;
    // The playing row's loading bars also follow a sound webm's video.
    const rowLoaded = Player.playlist.updateLoadingBars();
    // Stop polling once everything is loaded, or nothing is playing.
    (!Player.playing || size === 100 && rowLoaded) && Player.controls.stopPollingForLoading();
    Player.audio.loadedBar && (Player.audio.loadedBar.style.width = size + '%');
  },

  /**
	 * Update the seek bar and the duration labels.
	 */
  updateDuration(e) {
    if (Player.controls._isStale(e)) {
      return;
    }
    const media = e.currentTarget;
    const audio = media._inlineAudio || media;
    // Where this media's time displays can be: its inline controls, or the player and the
    // 4chan X header controls. (Querying the whole document ran on every timeupdate.)
    const roots = media._inlinePlayer
      ? [ media._inlinePlayer.controls ]
      : [ Player.container, document.querySelector(`.${ns}-chan-x-controls`) ];
    const currentTime = _.toDuration(media.currentTime);
    const duration = _.toDuration(media.duration);
    const audioId = audio.dataset.id;
    // Gross use of childNodes to avoid textContent triggering mutation observers of other scripts.
    roots.forEach(root => {
      if (!root) {
        return;
      }
      root.querySelectorAll(`.${ns}-current-time[data-audio="${audioId}"]`).forEach(el => el.childNodes[0].textContent = currentTime);
      root.querySelectorAll(`.${ns}-duration[data-audio="${audioId}"]`).forEach(el => el.childNodes[0].textContent = duration);
    });
    Player.controls.updateProgressBarPosition(audio.currentTimeBar, media.currentTime, media.duration);
  },

  /**
	 * Update the volume bar.
	 */
  updateVolume(e) {
    const audio = e.currentTarget._inlineAudio || e.currentTarget;
    const controls = audio._inlinePlayer ? audio._inlinePlayer.controls : Player.container;
    const vol = audio.volume;
    // Store volume of the main player.
    if (audio === Player.audio) {
      // Not while dragging the bar: dragging to 0 passed through near-zero volumes, and
      // unmuting then restored one of those.
      vol > 0 && !Player.controls._volumeDragging && (Player._lastVolume = vol);
      saveVolume(vol);
    }
    controls && controls.querySelectorAll(`.${ns}-volume-button[data-audio="${audio.dataset.id}"]`).forEach(el => {
      el.classList[vol === 0 ? 'add' : 'remove']('mute');
      el.classList[vol > 0 ? 'add' : 'remove']('up');
    });
    Player.controls.updateProgressBarPosition(audio.volumeBar, audio.volume, 1);
  },

  /**
	 * Update a progress bar width. Adjust the margin of the circle so it's contained within the bar at both ends.
	 */
  updateProgressBarPosition(bar, current, total) {
    if (!bar) {
      return;
    }
    current || (current = 0);
    total || (total = 0);
    const ratio = !total ? 0 : Math.max(0, Math.min(((current || 0) / total), 1));
    bar.style.width = `calc(${ratio * 100}% - ${(0.8 * ratio) - 0.4}rem)`;
  },

  /**
	 * Handle the user interacting with the seek bar.
	 */
  handleSeek(e, audioId) {
    const media = audioId === 'main'
      ? Player.audio
      : Player.inline.audio[audioId]._inlinePlayer.master;
    if (media && media.duration && media.duration !== Infinity) {
      media.currentTime = media.duration * Player.controls._getBarXRatio(e);
    }
  },

  /**
	 * Volume bar drags: the volume to unmute to is the one the drag ends on.
	 */
  volumeDragStart() {
    Player.controls._volumeDragging = true;
  },

  volumeDragEnd() {
    Player.controls._volumeDragging = false;
    Player.audio && Player.audio.volume > 0 && (Player._lastVolume = Player.audio.volume);
  },

  /**
	 * Handle the user interacting with the volume bar.
	 */
  handleVolume(e, audioId) {
    const audio = audioId === 'main' ? Player.audio : Player.inline.audio[audioId];
    audio.volume = Player.controls._getBarXRatio(e);
  },

  _getBarXRatio(e) {
    const offset = 0.4 * Player.remSize;
    // offsetX is 0 on the bar's first pixel, so test for it rather than falling through.
    const offsetX = typeof e.offsetX === 'number' ? e.offsetX : (e.targetTouches[0].pageX - e.currentTarget.getBoundingClientRect().left);
    return Math.max(0, Math.min(1, (offsetX - offset) / (parseInt(getComputedStyle(e.currentTarget).width, 10) - (2 * offset))));
  },

  /**
	 * Set all controls visible.
	 */
  showAllControls() {
    Player.$all(`.${ns}-controls [data-hide-id]`).forEach(el => el.style.display = null);
  },

  /**
	 * Hide elements in the controls instead of wrapping
	 */
  preventWrapping() {
    if (!Player.config.preventControlWrapping) {
      return;
    }
    const controls = Player.$(`.${ns}-controls`);
    // If the offset top of the last visible child than this value it indicates wrapping.
    const expectedOffsetTop = parseFloat(window.getComputedStyle(controls).paddingTop);
    const hideElements = Player.controls.hideOrder || Player.controls.setHideOrder();
    let visibleChildren = Array.prototype.slice.call(controls.children);
    let lastChild = visibleChildren.pop();
    let hidden = 0;
    // Show everything to check what has wrapped.
    Player.controls.showAllControls();
    // Keep hiding elements until the last visible child has not wrapped, or there's nothing left to hide.
    while (lastChild.offsetTop > expectedOffsetTop && hidden < hideElements.length) {
      const hide = hideElements[hidden++];
      hide.style.display = 'none';
      visibleChildren = visibleChildren.filter(el => el !== hide);
      hide === lastChild && (lastChild = visibleChildren.pop());
    }
  },

  /**
	 * Set the hide order from the user config.
	 */
  setHideOrder() {
    if (!Array.isArray(Player.config.controlsHideOrder)) {
      Player.settings.reset('controlsHideOrder');
    }
    const controls = Player.$(`.${ns}-controls`);
    return Player.controls.hideOrder = Player.config.controlsHideOrder
      .map(id => controls.querySelector(`[data-hide-id="${id}"]`))
      .filter(el => el)
      .sort((a, b) => a.dataset.hideOrder - b.dataset.hideOrder);
  }
};

/***/ },

/***/ "./src/components/controls/templates/controls.tpl"
/*!********************************************************!*\
  !*** ./src/components/controls/templates/controls.tpl ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => `<div class="${ns}-controls ${ns}-row ${data.inline ? `${ns}-inline-controls` : '' }" data-audio="${data.audioId}">
	<div class="${ns}-col-auto">
		${data.inline && !data.multiple ? '' : `
			<div class="${ns}-media-control ${ns}-previous-button ${ns}-hover-fill ${data.inline && Player.config.expandedRepeat !== 'all' ? 'disabled' : ''}" @click.disabled='${data.actions.previous}' data-hide-id="previous">
				${Icons.skipStart} ${Icons.skipStartFill}
			</div>
		`}
		<div class="${ns}-media-control ${ns}-play-button ${ns}-hover-fill ${!data.audio || data.audio.paused ? `${ns}-play` : ''}" @click='${data.actions.playPause}' data-audio="${data.audioId}">
			${Icons.play} ${Icons.pause} ${Icons.playFill} ${Icons.pauseFill}
		</div>
		${data.inline && !data.multiple ? '' : `
			<div class="${ns}-media-control ${ns}-next-button ${ns}-hover-fill" @click.disabled='${data.actions.next}' data-hide-id="next">
				${Icons.skipEnd} ${Icons.skipEndFill}
			</div>
		`}
	</div>
	<div class="${ns}-col" data-hide-id="seek-bar">
		<div class="${ns}-seek-bar ${ns}-progress-bar" @pointdrag.prevent='${data.actions.seek}'>
			<div class="${ns}-full-bar">
				<div class="${ns}-loaded-bar"></div>
				<div class="${ns}-current-bar"></div>
			</div>
		</div>
	</div>
	<div class="${ns}-col-auto" data-hide-id="time">
		<span>
			<span class="${ns}-current-time" data-audio="${data.audioId}">0:00</span>
			<span class="${ns}-text-muted" data-hide-id="duration">
				/ <span class="${ns}-duration" data-audio="${data.audioId}">0:00</span>
			</span>
		</span>
	</div>
	<div class="${ns}-col-auto" data-hide-id="volume">
		<div class="${ns}-media-control ${ns}-volume-button ${ns}-hover-fill up" @click='${data.actions.mute}' data-hide-id="volume-button" data-audio="${data.audioId}">
			${Icons.volumeMute} ${Icons.volumeMuteFill}
			${Icons.volumeUp} ${Icons.volumeUpFill}
		</div>
		<div class="${ns}-volume-bar ${ns}-progress-bar" @pointdrag.prevent='${data.actions.volume}' @pointdragstart="controls.volumeDragStart" @pointdragend="controls.volumeDragEnd" data-hide-id="volume-bar">
			<div class="${ns}-full-bar">
				<div class="${ns}-current-bar" style="width: ${Player.audio.volume * 100}%"></div>
			</div>
		</div>
	</div>
	${data.inline ? '' : `
		<div class="${ns}-col-auto" data-hide-id="fullscreen">
			<div class="${ns}-media-control ${ns}-fullscreen-button" @click='${data.actions.fullscreen}'>
				${Icons.fullscreen} ${Icons.fullscreenExit}
			</div>
		</div>
	`}
</div>`

/***/ },

/***/ "./src/components/display/index.js"
/*!*****************************************!*\
  !*** ./src/components/display/index.js ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
const cssTemplate = __webpack_require__(/*! ../../scss/style.scss */ "./src/scss/style.scss");
const cssVarsTemplate = __webpack_require__(/*! ../../scss/root.scss */ "./src/scss/root.scss");
const css4chanXPolyfillTemplate = __webpack_require__(/*! ../../scss/4chan-x-polyfill.scss */ "./src/scss/4chan-x-polyfill.scss");

const menus = {
  themes: __webpack_require__(/*! ./templates/themes_menu.tpl */ "./src/components/display/templates/themes_menu.tpl"),
  views: __webpack_require__(/*! ./templates/views_menu.tpl */ "./src/components/display/templates/views_menu.tpl")
};

const dismissedContentCache = {};
const dismissedRestoreCache = {};

const noSleep = typeof NoSleep === 'function' && new NoSleep();
// Only for the element currently playing (the audio element, or the video element for a
// standalone video).
// enable() returns a promise that rejects while the page is hidden (a track changing in a
// background tab): it's taken again when the page is shown (see _initNoSleep).
// Not when it already holds one: NoSleep takes a new lock on every enable() and forgets
// the old one, which then never gets released (every skip while playing leaked one).
const enableNoSleep = e => e.currentTarget === Player.audio && !noSleep.isEnabled && !noSleep._wakeLock
  && Promise.resolve(noSleep.enable()).catch(() => {});
const disableNoSleep = e => e.currentTarget === Player.audio && noSleep.disable();

module.exports = {
  atRoot: [ 'show', 'hide' ],
  public: [ 'show', 'hide' ],
  template: __webpack_require__(/*! ./templates/body.tpl */ "./src/components/display/templates/body.tpl"),
  _noSleepEnabled: false,

  async initialize() {
    try {
      Player.display.dismissed = (await GM.getValue('dismissed')).split(',');
    } catch (err) {
      Player.display.dismissed = [];
    }
    // Reset marquees when a new sound is played.
    Player.on('playsound', () => {
      Player.display._marquees = {};
      !Player.display._marqueeTO && Player.display.runTitleMarquee();
    });
    // Store the rem size
    Player.remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // Set up no sleep
    Player.on('config:preventSleep', Player.display._initNoSleep);
    Player.display._initNoSleep(Player.config.preventSleep);
    // Bind the video element too once it exists.
    Player.on('rendered', () => Player.display._initNoSleep(Player.config.preventSleep));
    // Close dialogs when the user clicks anywhere or presses escape.
    document.body.addEventListener('click', Player.display.closeDialogs);
    // Escape closes every dialog, including one with focus inside (passing the event made
    // dialogs that allow clicks inside, like the theme save form, stay open).
    document.body.addEventListener('keydown', e => e.key === 'Escape' && Player.display.closeDialogs());
    // Update fullscreen details when details are changed/loaded
    Player.on('playsound', Player.display.updateFullScreenDetails);
    Player.on('tags-loaded', sound => sound === Player.playing && Player.display.updateFullScreenDetails());
  },

  /**
	 * Create the player show/hide button in to the 4chan X header.
	 */
  async createPlayerButton() {
    // Wait for the body to exist just in case.
    if (!document.body) {
      await _.waitFor('body');
    }

    if (Site === 'FoolFuuka') {
      // Add a sounds link in the nav for archives
      const nav = document.querySelector('.navbar-inner .nav:nth-child(2)');
      const li = _.element('<li><a href="javascript:;">Sounds</a></li>', nav);
      li.children[0].addEventListener('click', Player.display.toggle);
    } else if (Site === 'Fuuka') {
      const br = document.querySelector('div:has(#simple-search-form) + hr');
      // Not every warosu page has the search form; don't abort initialising over a button.
      if (!br) {
        return;
      }
      br.parentNode.insertBefore(document.createTextNode('['), br);
      _.element('<a href="#" @click.prevent="display.toggle">Sounds</a>', br, 'beforebegin');
      br.parentNode.insertBefore(document.createTextNode(']'), br);
    } else if (isChanX || isChanXT || document.documentElement.classList.contains('fourchan-x') || document.documentElement.classList.contains('fourchan-xt') || document.getElementById('shortcuts')) {
      // Wait for the settings icon to appear, which indicates the bar is populated.
      let ref = await _.waitFor('#shortcut-settings', 2000);
      let parent = ref && ref.parentNode;

      // If we timed out waiting for settings, make sure we at least have the shortcuts bar.
      if (!ref) {
        parent = await _.waitFor('#shortcuts', 1000);
      }

      if (parent) {
        const isXT = isChanXT || document.documentElement.classList.contains('fourchan-xt');
        const html = `<span id="shortcut-sounds" class="shortcut brackets-wrap" data-index="0">
					<a href="#" @click.prevent="display.toggle" class="${isXT ? 'settings-link' : 'fa fa-play-circle'}" title="Sounds">
						${isXT ? '<span class="icon--alt-text">Sounds</span><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m188.3-108.9c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" fill="currentColor"></path></svg>' : 'Sounds'}
					</a>
				</span>`;
        _.element(html, ref || parent, ref ? 'beforebegin' : 'beforeend');
      }
    } else {
      // Add a [Sounds] link in the top and bottom nav for native 4chan.
      const links = [ ...document.querySelectorAll('#settingsWindowLink, #settingsWindowLinkBot') ].map(function (link) {
        const soundsLink = _.element('<a href="#" @click.prevent="display.toggle">Sounds</a>', link, 'beforebegin');
        link.parentNode.insertBefore(document.createTextNode('] ['), link);
        return soundsLink;
      });
      // Those links live in the desktop nav bars, which 4chan's mobile view and StyleChan's
      // "Show Navigation Links" option hide, leaving no way to open the player. Fall back to
      // a small fixed button then. Checked after layout so stylesheets have applied.
      // Also when the window is narrowed later (4chan's mobile view hides them below 480px).
      let launcher = null;
      const checkLinks = () => {
        const hidden = !links.some(link => link.getClientRects().length);
        if (hidden && !launcher) {
          launcher = _.element(`<a href="#" class="${ns}-launcher" title="4chan Sounds" @click.prevent="display.toggle">${Icons.playFill}</a>`, document.body);
        }
        launcher && (launcher.style.display = hidden ? '' : 'none');
      };
      requestAnimationFrame(checkLinks);
      let resizeFrame = null;
      window.addEventListener('resize', () => {
        resizeFrame = resizeFrame || requestAnimationFrame(() => {
          resizeFrame = null;
          checkLinks();
        });
      });
    }
  },

  /**
	 * Render the player.
	 */
  async render() {
    try {
      if (Player.container) {
        // remove(), not body.removeChild: in native threads the container is in .board.
        Player.container.remove();
        // Don't detach the stylesheet — we just rewrite its innerHTML below.
        // Detaching it here without re-attachment leaves the page un-styled on
        // any subsequent render() call (the `||` below preserves the detached node).
      }

      // Create the main stylesheet on the first render; reuse it on subsequent ones.
      Player.stylesheet = Player.stylesheet || _.element('<style id="sound-player-css"></style>', document.head);
      Player.stylesheet.innerHTML = (!isChanX ? '/* 4chanX Polyfill */\n\n' + css4chanXPolyfillTemplate() : '')
				+ '\n\n/* Sounds Player CSS */\n\n' + cssTemplate();
      Player.display.updateCSSVars();

      // Create the main player. For native threads put it in the threads to get free quote previews.
      const parent = Thread && !isChanX && document.body.querySelector('.board') || document.body;
      Player.container = _.element(Player.display.template(), parent);
      // That's inside 4chan's post form (#delform): Enter in one of the player's text fields
      // submitted it, clicking the player's first button (Create, which uploads) or the
      // form's Delete button. Enter in a field does nothing beyond the field's own handling.
      // Stopped on keypress, where browsers submit, so keydown still reaches hotkeys (an
      // Enter binding in the search box), and only for text fields (Enter opens a file
      // picker). The change Enter would have made is still sent.
      // (Checkboxes submit on Enter too.)
      const textTypes = [ 'text', 'search', 'number', 'url', 'email', 'password', 'tel' ];
      const ownAction = [ 'file', 'button', 'submit', 'reset', 'image' ];
      Player.container.addEventListener('keypress', e => {
        const input = e.target;
        if (e.key === 'Enter' && input.nodeName === 'INPUT' && input.form && !ownAction.includes(input.type)) {
          e.preventDefault();
          textTypes.includes(input.type) && input.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });

      await Player.trigger('rendered');
    } catch (err) {
      Player.logError('There was an error rendering the sound player.', err);
      // Can't recover, throw.
      throw err;
    }
  },

  updateCSSVars() {
    // Insert the stylesheet if it doesn't exist. 4chan X polyfill, sound player styling, and user styling.
    Player.varsCSS = Player.varsCSS || _.element('<style id="sound-player-css-vars"></style>', document.head);
    Player.varsCSS.innerHTML = '\n\n/* Sounds Player CSS variables */\n\n' + cssVarsTemplate();
  },

  /**
	 * Change what view is being shown
	 */
  async setViewStyle(style) {
    // Get the size and style prior to switching.
    const previousStyle = Player.config.viewStyle;

    // Exit fullscreen before changing to a different view.
    if (style !== 'fullscreen') {
      document.fullscreenElement && document.exitFullscreen();
    }

    // Change the style.
    Player.set('viewStyle', style);
    Player.container.setAttribute('data-view-style', style);

    if (style === 'playlist' || style === 'image') {
      Player.controls.preventWrapping();
    }
    // Try to reapply the pre change sizing unless it was fullscreen.
    if (previousStyle !== 'fullscreen' || style === 'fullscreen') {
      const [ width, height ] = (await GM.getValue('size') || '').split(':');
      width && height && Player.position.resize(parseInt(width, 10), parseInt(height, 10));
      Player.position.setPostWidths();
    }

    Player.trigger('view', style, previousStyle);
  },

  /**
	 * Togle the display status of the player.
	 */
  toggle() {
    if (Player.container.style.display === 'none') {
      Player.theme.applyBoardTheme();
      Player.show();
    } else {
      Player.hide();
    }
  },

  /**
	 * Hide the player. Stops polling for changes, and pauses the aduio if set to.
	 */
  hide() {
    // Hiding the fullscreen element's container would leave a blank fullscreen page.
    document.fullscreenElement && Player.container.contains(document.fullscreenElement) && document.exitFullscreen();
    Player.container.style.display = 'none';

    Player.isHidden = true;
    Player.trigger('hide');
  },

  /**
	 * Show the player. Reapplies the saved position/size, and resumes loaded amount polling if it was paused.
	 */
  async show() {
    if (!Player.container.style.display) {
      return;
    }
    Player.container.style.display = null;

    Player.isHidden = false;
    await Player.trigger('show');
  },

  /**
	 * Stop playback and close the player.
	 */
  async close() {
    Player.stop();
    Player.hide();
  },

  /**
	 * Toggle the video/image and controls fullscreen state
	 */
  async toggleFullScreen() {
    if (!document.fullscreenElement) {
      // Make sure the player (and fullscreen contents) are visible first.
      if (Player.isHidden) {
        Player.show();
      }
      Player.$(`.${ns}-player`).requestFullscreen();
      document.body.addEventListener('pointermove', Player.display._fullscreenMouseMove);
      Player.display._fullscreenMouseMove();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      document.body.removeEventListener('pointermove', Player.display._fullscreenMouseMove);
    }
  },

  _fullscreenMouseMove() {
    Player.container.classList.remove('cursor-inactive');
    Player.display.fullscreenCursorTO && clearTimeout(Player.display.fullscreenCursorTO);
    Player.display.fullscreenCursorTO = setTimeout(function () {
      Player.container.classList.add('cursor-inactive');
    }, 2000);
  },

  updateFullScreenDetails() {
    const tags = Player.playing.tags || {};
    // textContent, not innerHTML: the name comes from the post filename and the tags
    // from ID3 data in the hosted file, both of which are untrusted.
    document.querySelector('.fullscreen-details').textContent = [
      Player.playing.name,
      [ tags.title, tags.artist ].filter(Boolean).join(' - ')
    ].filter(Boolean).join(' • ') || Player.playing.title;
  },

  /**
	 * Handle the fullscreen state being changed
	 */
  _handleFullScreenChange() {
    if (document.fullscreenElement) {
      Player.display.setViewStyle('fullscreen');
      document.querySelector(`.${ns}-image-link`).removeAttribute('href');
    } else {
      if (Player.playing) {
        document.querySelector(`.${ns}-image-link`).href = Player.playing.image;
      }
      Player.playlist.restore();
      // Exiting fullscreen via Esc / browser UI never calls toggleFullScreen, so tear
      // down the cursor-hiding pointermove listener and timer here too — otherwise it
      // leaks onto document.body and keeps toggling cursor-inactive across the page.
      document.body.removeEventListener('pointermove', Player.display._fullscreenMouseMove);
      clearTimeout(Player.display.fullscreenCursorTO);
      Player.container && Player.container.classList.remove('cursor-inactive');
    }
    Player.controls.preventWrapping();
  },

  async restore(restore) {
    const restoreIndex = Player.display.dismissed.indexOf(restore);
    if (restore && restoreIndex > -1) {
      Player.display.dismissed.splice(restoreIndex, 1);
      Player.$all(`[data-restore-id="${CSS.escape(restore)}"]`).forEach(el => {
        _.element(dismissedContentCache[restore], el, 'beforebegin');
        el.parentNode.removeChild(el);
      });
      await GM.setValue('dismissed', Player.display.dismissed.join(','));
    }
  },

  async dismiss(dismiss) {
    if (dismiss && !Player.display.dismissed.includes(dismiss)) {
      Player.display.dismissed.push(dismiss);
      Player.$all(`[data-dismiss-id="${dismiss}"]`).forEach(el => {
        _.element(`<a href="#" data-restore-id="${dismiss}" @click.prevent='display.restore("${dismiss}")'>${dismissedRestoreCache[dismiss]}</a>`, el, 'beforebegin');
        el.parentNode.removeChild(el);
      });
      await GM.setValue('dismissed', Player.display.dismissed.join(','));
    }
  },

  ifNotDismissed(name, restore, text) {
    dismissedContentCache[name] = text;
    dismissedRestoreCache[name] = restore;
    return Player.display.dismissed.includes(name)
      ? `<a href="#" data-restore-id="${name}" @click.prevent='display.restore("${name}")'>${restore}</a>`
      : text;
  },

  /**
	 * Display a menu
	 */
  showMenu(relative, menu, parent) {
    const dialog = typeof menu === 'string' ? _.element(menus[menu]()) : menu;
    Player.display.closeDialogs();
    parent || (parent = Player.container);
    parent.appendChild(dialog);

    // Position the menu.
    Player.position.showRelativeTo(dialog, relative);

    // Add the focused class handler
    dialog.querySelectorAll('.entry').forEach(el => {
      el.addEventListener('mouseenter', e => {
        Player.display._setFocusedMenuItem(e);
        el.dispatchEvent(new CustomEvent('entry-focus'));
      });
    });
    // Allow clicks of sub menus
    dialog._keepOpenFor = Array.from(dialog.querySelectorAll('.entry.has-submenu'));
    dialog._closeFor = Array.from(dialog.querySelectorAll('.submenu'));

    Player.trigger('menu-open', dialog);
  },

  _setFocusedMenuItem(e) {
    const submenu = e.currentTarget.querySelector('.submenu');
    const menu = e.currentTarget.closest('.dialog');
    const currentFocus = menu.querySelectorAll('.focused');
    currentFocus.forEach(el => {
      el.classList.remove('focused', 'submenu-open');
      el.dispatchEvent(new CustomEvent('entry-blur'));
    });
    // 4chan-neXT's mobile layout restyles #menu and only opens a submenu on .submenu-open.
    e.currentTarget.classList.add('focused', 'submenu-open');
    // Move the menu to the other side if there isn't room.
    if (submenu && submenu.getBoundingClientRect().right > document.documentElement.clientWidth) {
      submenu.style.inset = '0px 100% auto auto';
    }
  },

  /**
	 * Close any open menus.
	 */
  closeDialogs(e) {
    document.querySelectorAll(`.${ns}-dialog`).forEach(dialog => {
      const clickableElements = (dialog._keepOpenFor || []).concat(dialog.dataset.allowClick ? dialog : []);
      // Close the dialog if there's no event...
      const closeDialog = !e
				// ...the event was not for an element that allows the dialog to stay open
				|| !clickableElements.find(el => el === e.target || el.contains(e.target))
				// ...or the event was for an element explicitly set to close the dialog.
				|| (dialog._closeFor || []).find(el => el === e.target || el.contains(e.target));
      if (closeDialog) {
        dialog.parentNode.removeChild(dialog);
        Player.trigger('menu-close', dialog);
      }
    });
  },

  async runTitleMarquee() {
    Player.display._marqueeTO = setTimeout(Player.display.runTitleMarquee, 1000);
    // Skip the per-tick layout reads while the player is hidden — the marquee has
    // nothing visible to scroll. The timer stays alive so it resumes when shown.
    if (Player.isHidden) {
      return;
    }
    document.querySelectorAll(`.${ns}-title-marquee`).forEach(title => {
      const offset = title.parentNode.getBoundingClientRect().width - (title.scrollWidth + 1);
      const location = title.getAttribute('data-location');
      // Fall out if the title is fully visible.
      if (offset >= 0) {
        return title.style.marginLeft = null;
      }
      const data = Player.display._marquees[location] = Player.display._marquees[location] || {
        direction: 1,
        position: parseInt(title.style.marginLeft, 10) || 0
      };
      // Pause at each end.
      if (data.pause > 0) {
        data.pause--;
        return;
      }
      data.position -= (20 * data.direction);

      // Pause then reverse direction when the end is reached.
      if (data.position > 0 || data.position < offset) {
        data.position = Math.min(0, Math.max(data.position, offset));
        data.direction *= -1;
        data.pause = 1;
      }

      title.style.marginLeft = data.position + 'px';
    });
  },

  _popoverMouseEnter: e => {
    const icon = e.currentTarget;
    const wide = icon.classList.contains('wide');
    if (!icon.infoEl || !document.contains(icon.infoEl)) {
      // A post's filter hint while the player is hidden would be invisible in the
      // container, so put popovers for elements outside it in the page.
      const parent = Player.container.contains(icon) ? Player.container : document.body;
      icon.infoEl = _.element(`<div class="${ns}-popover-body ${wide ? 'wide' : ''} ${ns}-dialog dialog">${icon.dataset.content}</div>`, parent);
      icon.infoEl._keepOpenFor = [ icon ];
      Player.position.showRelativeTo(icon.infoEl, icon);
    }
  },

  _popoverMouseLeave: e => {
    const icon = e.currentTarget;
    if (icon.infoEl && !icon.infoEl._clicked) {
      icon.infoEl.parentNode.removeChild(icon.infoEl);
      delete icon.infoEl;
    }
  },

  _popoverClick: e => {
    const icon = e.currentTarget;
    const openPopover = icon.infoEl && document.contains(icon.infoEl);
    if (!openPopover) {
      Player.display._popoverMouseEnter(e);
    } else if (!(icon.infoEl._clicked = !icon.infoEl._clicked)) {
      Player.display._popoverMouseLeave(e);
    }
  },

  _initNoSleep: newValue => {
    if (!noSleep) {
      return;
    }
    const enabled = !!newValue;
    const action = enabled ? 'addEventListener' : 'removeEventListener';
    // Standalone videos play through the video element, so watch it as well as the audio
    // element (only the element current at startup was bound before).
    [ Player.controls._audio || Player.audio, Player.video ].filter(Boolean).forEach(media => {
      media[action]('play', enableNoSleep);
      media[action]('pause', disableNoSleep);
      media[action]('ended', disableNoSleep);
      // A sound that fails, or a new one replacing it, fires neither of those.
      media[action]('error', disableNoSleep);
      media[action]('emptied', disableNoSleep);
    });
    if (enabled !== Player.display._noSleepEnabled && Player.audio && !Player.audio.paused) {
      Promise.resolve(noSleep[enabled ? 'enable' : 'disable']()).catch(() => {});
    }
    Player.display._noSleepEnabled = enabled;
    // NoSleep only takes the wake lock back on its own if it still held one when the page
    // was hidden, not if a track started while hidden. Take it whenever the page is shown
    // during playback.
    if (!Player.display._noSleepVisibility) {
      Player.display._noSleepVisibility = true;
      document.addEventListener('visibilitychange', () => {
        // Not when NoSleep still holds a lock: its own handler takes that back, and taking
        // another here would leave one that disable() doesn't release.
        document.visibilityState === 'visible' && Player.display._noSleepEnabled && Player.audio && !Player.audio.paused
          && !noSleep.isEnabled && !noSleep._wakeLock && Promise.resolve(noSleep.enable()).catch(() => {});
      });
    }
  },

  untz() {
    // document, not Player.$: the picture-in-picture thumbnail moves the image to <body>.
    const container = document.querySelector(`.${ns}-image-link`);
    Player.untzing = !Player.untzing;
    Player.audio.playbackRate = Player.audio.defaultPlaybackRate = Player.untzing ? 1.3 : 1;
    Player.container.classList[Player.untzing ? 'add' : 'remove']('untz');
    if (Player.untzing) {
      const overlay = container.querySelector('.image-color-overlay');
      let rotate = 0;
      // Space-separate filter functions (`;` is a declaration terminator, not a
      // filter separator — it would break the whole value).
      overlay.style.filter = `brightness(1.5) hue-rotate(${rotate}deg)`;
      (function color() {
        // Progressive rotation so the hue actually shifts. The previous `360 - rotate`
        // oscillated between 0 and 360, both equivalent to no rotation. Also keep the
        // brightness boost — setting filter to just hue-rotate would drop it.
        rotate = (rotate + 30) % 360;
        overlay.style.filter = `brightness(1.5) hue-rotate(${rotate}deg)`;
        Player.untzColorTO = setTimeout(color, 500);
      }());
      (function bounce() {
        if (Player.untzing) {
          container.style.transform = `scale(${1 + Math.random() * 0.05})`;
          container.style.filter = `brightness(${1 + Math.random() * 0.5}) blur(${Math.random() * 3}px)`;
          Player.untzBounceTO = setTimeout(bounce, 200);
        }
      }());
    } else {
      container.style.transform = null;
      container.style.filter = null;
      clearTimeout(Player.untzBounceTO);
      clearTimeout(Player.untzColorTO);
    }
  }
};


/***/ },

/***/ "./src/components/display/templates/body.tpl"
/*!***************************************************!*\
  !*** ./src/components/display/templates/body.tpl ***!
  \***************************************************/
(module) {

module.exports = (data = {}) => `<div id="${ns}-container" data-view-style="${Player.config.viewStyle}" @dragover.prevent="" @drop.stop.prevent='playlist.addFromDrop' style="top: 30px; left: 0px; width: 360px; height: 360px; display: none;">
	<div class="${ns}-header ${ns}-row ${ns}-align-center ${ns}-hover-trigger" @pointdragstart="position.initMove" @pointdrag.unbound="position.doMove" @pointdragend="position.stopMove">
		${Player.header.template(data)}
	</div>

	<div class="${ns}-player ${!Player.config.hoverImages ? `${ns}-hide-hover-image` : ''}" @fullscreenchange="display._handleFullScreenChange">
		${Player.playlist.template(data)}
	</div>
	<div class="${ns}-settings ${ns}-panel">
		${Player.settings.template(data)}
	</div>
	<div class="${ns}-threads ${ns}-panel">
		${Player.threads.template(data)}
	</div>
	<div class="${ns}-tools ${ns}-panel">
		${Player.tools.template(data)}
	</div>

	<div class="${ns}-footer ${ns}-row ${ns}-align-center ${ns}-hover-trigger">
		${Player.footer.template(data)}
	</div>
	<input class="${ns}-add-local-file-input" type="file" @change.prevent="playlist.handleFileSelect" style="display: none" accept="image/*,.webm,.mp4" multiple>
</div>`


/***/ },

/***/ "./src/components/display/templates/themes_menu.tpl"
/*!**********************************************************!*\
  !*** ./src/components/display/templates/themes_menu.tpl ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `<div class="${ns}-menu ${ns}-dialog dialog" id="menu" tabindex="0" data-type="post" style="position: fixed;">
	${[ 'Default' ].concat(Player.config.savedThemesOrder).map(name => `
		<a class="${ns}-row nowrap ${ns}-align-center entry" href="#" @click.prevent='theme.switch("${_.escAttr(name, true)}");playlist.restore'>
			<span ${Player.config.selectedTheme === name ? 'style="font-weight: 700;"' : ''}>${_.escHTML(name)}</span>
		</a>
	`).join('')}
</div>`


/***/ },

/***/ "./src/components/display/templates/views_menu.tpl"
/*!*********************************************************!*\
  !*** ./src/components/display/templates/views_menu.tpl ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => `<div class="${ns}-menu ${ns}-dialog dialog" id="menu" tabindex="0" data-type="post" style="position: fixed;">
	${[ 'playlist', 'image' ].includes(Player.config.viewStyle) ? ''
		: `<a class="${ns}-row nowrap ${ns}-align-center entry" href="#" @click.prevent="playlist.restore"><div class="${ns}-col">Player</div><div class="${ns}-col-auto">${Icons.musicNoteList}</div></a>`}
	${Player.config.viewStyle === 'settings' ? ''
		: `<a class="${ns}-row nowrap ${ns}-align-center entry" href="#" @click.prevent="settings.toggle()"><div class="${ns}-col">Settings</div><div class="${ns}-col-auto">${Icons.gear}</div></a>`}
	${Player.config.viewStyle === 'threads' ? ''
		: `<a class="${ns}-row nowrap ${ns}-align-center entry" href="#" @click.prevent="threads.toggle"><div class="${ns}-col">Threads</div><div class="${ns}-col-auto">${Icons.search}</div></a>`}
	${Player.config.viewStyle === 'tools' ? ''
		: `<a class="${ns}-row nowrap ${ns}-align-center entry" href="#" @click.prevent="tools.toggle"><div class="${ns}-col">Tools</div><div class="${ns}-col-auto">${Icons.tools}</div></a>`}
</div>`


/***/ },

/***/ "./src/components/events/index.js"
/*!****************************************!*\
  !*** ./src/components/events/index.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const { compileAction, splitStatements } = __webpack_require__(/*! ./parse-action */ "./src/components/events/parse-action.js");

module.exports = {
  atRoot: ['on', 'off', 'trigger'],

  // Holder of event handlers.
  _events: {},

  initialize() {
    const eventLocations = { Player, ...Player.components };
    const audio = [];

    for (let comp of Object.values(eventLocations)) {
      comp.audioEvents && audio.push(comp.audioEvents);
    }

    // Clear mousedown listeners when the mouse/touch is released.
    document.body.addEventListener('pointerup', Player.events.clearMousedown);
    document.body.addEventListener(
      'pointercancel',
      Player.events.clearMousedown,
    );

    Player.on('rendered', function () {
      // Wire up audio events.
      for (let eventList of audio) {
        for (let evt in eventList) {
          let handlers = Array.isArray(eventList[evt])
            ? eventList[evt]
            : [eventList[evt]];
          handlers.forEach((handler) =>
            Player.audio.addEventListener(evt, Player.getHandler(handler)),
          );
        }
      }
    });
  },

  /**
   * Add event listeners from event attributes on an elements and all it's decendents.
   *
   * @param {Element} element The element to set event listeners for.
   */
  apply(element) {
    // Find all elements with event attributes, including the given element.
    const eventAttrs = [];
    const elAttrs = document.evaluate(
      './/attribute::*[starts-with(name(), "@")]',
      element,
      null,
      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
      null,
    );
    // './/' is descendant-or-self, so this already covers the descendants. (A second query
    // for them wired every handler twice.)
    for (let i = 0; i < elAttrs.snapshotLength; i++) {
      eventAttrs.push(elAttrs.snapshotItem(i));
    }

    for (let attr of eventAttrs) {
      Player.events.set(attr.ownerElement, attr.name.slice(1), attr.value);
    }
  },

  set(el, attr, action) {
    action = action.trim();
    const [evt, ...modsArr] = attr.split('.');
    const mods = modsArr.reduce((m, n) => {
      m[n] = true;
      return m;
    }, {});

    // Remove listener already set. A pointdrag listener is stored under pointerdown, which
    // is what it listens to, so look it up there (re-rendering the header added another
    // each time).
    const listeners = el._eventListeners || (el._eventListeners = {});
    const listenedEvt = evt === 'pointdrag' ? 'pointerdown' : evt;
    listeners[listenedEvt] && el.removeEventListener(listenedEvt, listeners[listenedEvt]);

    // Resolve the handler, cheapest first:
    //   1. getHandler — a bare method/property path (no eval).
    //   2. compileAction — parse a simple `method(args)` call and dispatch without
    //      eval, so arg-bearing handlers work under CSPs lacking 'unsafe-eval'.
    //   3. new Function — the general fallback (blocked by such CSPs, hence 1 & 2).
    // Several statements (`a.b;c.d($event)`) are resolved one by one and run in order.
    // They used to fall through to new Function, where a bare `a.b` is only referenced,
    // never called.
    const statements = action ? splitStatements(action) : [];
    const compiled = statements && statements.map(Player.events._compileStatement);
    let handler =
      action &&
      (compiled && compiled.length && compiled.every(Boolean) && (compiled.length === 1
        ? compiled[0]
        : function (...args) {
          let result;
          for (const fn of compiled) {
            result = fn.apply(this, args);
          }
          return result;
        }) ||
        function ($event) {
          try {
            const func = new Function(
              'Player',
              '$event',
              `with (Player) { ${action} }`,
            );
            handler = func.bind(null, Player);
            handler($event);
          } catch (err) {
            console.error('Error creating event handler:', err, action);
          }
        });
    const listener = function (evt) {
      if (mods.prevent) {
        evt.preventDefault();
      }
      if (mods.stop) {
        evt.stopPropagation();
      }
      // The `.disabled` modifier skips the handler when the element has the
      // disabled class (e.g. a greyed-out next/prev button).
      if (mods.disabled && evt.currentTarget.classList.contains('disabled')) {
        return;
      }

      return handler && handler.call(this, evt, Player);
    };

    // Point drag is a special case to handle pointer dragging.
    if (evt === 'pointdrag') {
      // Stop touch input panning the page instead, which cancels the drag. (A CSS rule on
      // the attribute missed every one with modifiers, like @pointdrag.prevent.)
      el.classList.add('no-touch-action');
      // A drag whose button was released where we didn't see it (a context menu took the
      // mouseup) ends at the next move rather than following the cursor around.
      const moveListener = function (e) {
        // Another finger moving isn't this drag.
        if (e.pointerId !== undefined && e.pointerId !== Player._mousedownPointerId) {
          return;
        }
        if (e.pointerType === 'mouse' && e.buttons === 0) {
          return Player.events.clearMousedown(e);
        }
        return listener.call(this, e);
      };
      const downListener = (e) => {
        // Only the main button (or a touch or pen) drags: a right-click opened a context
        // menu over a drag that then never ended, and seeked the seek bar.
        if (e.button > 0) {
          return;
        }
        // One drag at a time: a second finger on another handle replaced the drag being
        // tracked, and the first one's move listener was then never removed.
        if (Player._mousedown && Player._mousedownPointerId !== e.pointerId) {
          return;
        }
        // No idea why but this seems to fire twice. So avoid that.
        if (!e._dragInit) {
          e._dragInit = true;
          listeners.pointdragstart && listeners.pointdragstart(e);
          if (!e.preventDrag) {
            el.setPointerCapture(e.pointerId);
            Player._mousedown = el;
            Player._mousedownPointerId = e.pointerId;
            Player._mousedownListener = moveListener;
            Player._mousedownMoveEl = mods.unbound
              ? document.documentElement
              : el;
            Player._mousedownMoveEl.addEventListener(
              'pointermove',
              moveListener,
              mods,
            );
            el.addEventListener('pointerleave', moveListener, mods);
            mods.boxed &&
              el.addEventListener('pointerleave', Player.events.clearMousedown);
            !mods.move && listener(e);
          }
        }
      };
      el.addEventListener('pointerdown', downListener);
      listeners.pointerdown = downListener;
    } else if (evt === 'pointdragstart' || evt === 'pointdragend') {
      listeners[evt] = listener;
    } else {
      el.addEventListener(evt, listener, mods);
      listeners[evt] = listener;
    }
  },

  /**
   * Resolve one handler statement without eval: a bare method path, or a simple
   * `method(args)` call. Returns a function or null.
   */
  _compileStatement(statement) {
    const fn = Player.getHandler(statement);
    if (typeof fn === 'function') {
      return fn;
    }
    return compileAction(statement, path => {
      const fn = _.get(Player, path);
      if (typeof fn !== 'function') {
        return null;
      }
      const lastDot = path.lastIndexOf('.');
      const scope = lastDot > -1 ? _.get(Player, path.slice(0, lastDot)) : Player;
      return { fn, scope };
    });
  },

  /**
   * Create an event listener on the player.
   *
   * @param {String} evt The name of the events.
   * @param {function} handler The handler function.
   */
  on(evt, handler) {
    const evts = Array.isArray(evt) ? evt : [evt];
    evts.forEach((evt) => {
      Player.events._events[evt] || (Player.events._events[evt] = []);
      Player.events._events[evt].push(handler);
    });
  },

  /**
   * Remove an event listener on the player.
   *
   * @param {String} evt The name of the events.
   * @param {function} handler The handler function.
   */
  off(evt, handler) {
    const index =
      Player.events._events[evt] && Player.events._events[evt].indexOf(handler);
    if (index > -1) {
      Player.events._events[evt].splice(index, 1);
    }
  },

  /**
   * Trigger an event on the player.
   *
   * @param {String} evt The name of the events.
   * @param {*} data Data passed to the handler.
   */
  async trigger(evt, ...data) {
    // Iterate a copy: a handler that removes itself (threads._initialFetch does) would
    // otherwise make the loop skip the handler after it.
    const events = (Player.events._events[evt] || []).slice();
    for (let handler of events) {
      // One failing handler shouldn't stop the rest of the components reacting.
      try {
        await handler(...data);
      } catch (err) {
        console.error(`[4chan sounds player] Error handling '${evt}'`, err);
      }
    }
  },

  clearMousedown(e) {
    // Only the pointer that started the drag ends it (lifting another finger doesn't).
    if (Player._mousedown && (e.pointerId === undefined || e.pointerId === Player._mousedownPointerId)) {
      try {
        Player._mousedown.releasePointerCapture(Player._mousedownPointerId);
      } catch (err) { /* not captured any more */ }
      Player._mousedownMoveEl.removeEventListener(
        'pointermove',
        Player._mousedownListener,
      );
      Player._mousedown.removeEventListener(
        'pointerleave',
        Player._mousedownListener,
      );
      Player._mousedown._eventListeners.pointdragend &&
        Player._mousedown._eventListeners.pointdragend(e);
      Player._mousedown = Player._mousedownListener = null;
    }
  },
};


/***/ },

/***/ "./src/components/events/parse-action.js"
/*!***********************************************!*\
  !*** ./src/components/events/parse-action.js ***!
  \***********************************************/
(module) {

// Pure, side-effect-free parser for the player's @-attribute handler strings.
// Compiles the common `method(args)` shapes into a dispatcher WITHOUT eval /
// new Function, so those handlers work under CSPs that lack 'unsafe-eval'
// (e.g. some archives). Returns null for anything it can't safely parse — the
// caller then falls back to new Function. Kept Player-free so it's unit-testable.

// Split src at top-level `sep` characters (respecting quotes / brackets / braces /
// parens). Returns an array of trimmed sources, or null if unbalanced.
function splitTopLevel(src, sep) {
  src = src.trim();
  if (src === '') {
    return [];
  }
  const out = [];
  let depth = 0;
  let quote = null;
  let cur = '';
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      cur += c;
      if (c === '\\') {
        cur += src[++i] || '';
      } else if (c === quote) {
        quote = null;
      }
    } else if (c === '"' || c === '\'') {
      quote = c;
      cur += c;
    } else if (c === '{' || c === '[' || c === '(') {
      depth++;
      cur += c;
    } else if (c === '}' || c === ']' || c === ')') {
      depth--;
      cur += c;
    } else if (c === sep && depth === 0) {
      out.push(cur.trim());
      cur = '';
    } else {
      cur += c;
    }
  }
  if (quote || depth !== 0) {
    return null;
  }
  out.push(cur.trim());
  return out;
}

// Split a comma-separated arg list at top level.
function splitArgs(src) {
  return splitTopLevel(src, ',');
}

// Split a handler like `a.b;c.d($event)` into its statements, dropping empty ones (a
// trailing `;`). A `;` inside a string argument doesn't split. Null if unbalanced.
function splitStatements(src) {
  const parts = splitTopLevel(src, ';');
  return parts && parts.filter(Boolean);
}

// Un-escape a single/double quoted string literal to its value, or null if malformed.
// Handles exactly what _.escAttr(x, true) + HTML attribute decoding produce: \" \\ \n \r.
function parseString(src) {
  const q = src[0];
  if ((q !== '"' && q !== '\'') || src.length < 2 || src[src.length - 1] !== q) {
    return null;
  }
  let out = '';
  for (let i = 1; i < src.length - 1; i++) {
    const c = src[i];
    if (c === '\\') {
      const n = src[++i];
      out += n === 'n' ? '\n' : n === 't' ? '\t' : n === 'r' ? '\r' : n;
    } else if (c === q) {
      return null; // unescaped closing quote before the end — not a single literal
    } else {
      out += c;
    }
  }
  return out;
}

// Index of the first top-level colon (object key/value separator), or -1.
function topColon(src) {
  let depth = 0;
  let quote = null;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === '\\') {
        i++;
      } else if (c === quote) {
        quote = null;
      }
    } else if (c === '"' || c === '\'') {
      quote = c;
    } else if (c === '{' || c === '[' || c === '(') {
      depth++;
    } else if (c === '}' || c === ']' || c === ')') {
      depth--;
    } else if (c === ':' && depth === 0) {
      return i;
    }
  }
  return -1;
}

// Parse a { key: literal, ... } object of literal values only (no $event), or null.
function parseObject(src) {
  const inner = src.slice(1, -1).trim();
  if (inner === '') {
    return {};
  }
  const parts = splitArgs(inner);
  if (parts === null) {
    return null;
  }
  const obj = {};
  for (const part of parts) {
    const ci = topColon(part);
    if (ci === -1) {
      return null;
    }
    let key = part.slice(0, ci).trim();
    const valSrc = part.slice(ci + 1).trim();
    if (!/^[\w$]+$/.test(key)) {
      key = parseString(key);
      if (key === null) {
        return null;
      }
    }
    if (valSrc.indexOf('$event') !== -1) {
      return null; // object values must be plain literals
    }
    const ev = compileArg(valSrc);
    if (ev === null) {
      return null;
    }
    obj[key] = ev();
  }
  return obj;
}

// Compile one argument source into ($event) => value, or null if unsupported.
function compileArg(src) {
  src = src.trim();
  if (src === '$event') {
    return $event => $event;
  }
  const chain = src.match(/^\$event((?:\.[\w$]+)+)$/);
  if (chain) {
    const props = chain[1].slice(1).split('.');
    return $event => props.reduce((o, p) => (o == null ? o : o[p]), $event);
  }
  if (src[0] === '"' || src[0] === '\'') {
    const val = parseString(src);
    return val === null ? null : () => val;
  }
  if (/^-?\d+(\.\d+)?$/.test(src)) {
    const n = +src;
    return () => n;
  }
  if (src === 'true') {
    return () => true;
  }
  if (src === 'false') {
    return () => false;
  }
  if (src === 'null') {
    return () => null;
  }
  if (src === 'undefined') {
    return () => undefined;
  }
  if (src[0] === '{' && src[src.length - 1] === '}') {
    const tpl = parseObject(src);
    return tpl === null ? null : () => Object.assign({}, tpl);
  }
  return null;
}

// Compile `path(args)` into an ($event) => result dispatcher, or null if the action
// isn't a single simple call or uses an arg form we don't support. `resolve(path)`
// returns { fn, scope } or null (injected so this module stays Player-free).
function compileAction(action, resolve) {
  const m = action.trim().match(/^([\w$]+(?:\.[\w$]+)*)\s*\(([\s\S]*)\)$/);
  if (!m) {
    return null;
  }
  const resolved = resolve(m[1]);
  if (!resolved || typeof resolved.fn !== 'function') {
    return null;
  }
  const argSrcs = splitArgs(m[2]);
  if (argSrcs === null) {
    return null;
  }
  const argFns = [];
  for (const argSrc of argSrcs) {
    const fn = compileArg(argSrc);
    if (fn === null) {
      return null;
    }
    argFns.push(fn);
  }
  return function ($event) {
    return resolved.fn.apply(resolved.scope, argFns.map(f => f($event)));
  };
}

module.exports = { compileAction, splitArgs, splitStatements, parseString, parseObject, compileArg, topColon };


/***/ },

/***/ "./src/components/footer/index.js"
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = {
  template: () => Player.userTemplate.build({
    template: Player.config.footerTemplate
			+ `<div class="${ns}-expander" data-direction="sw"></div><div class="${ns}-expander" data-direction="se"></div>`,
    location: 'footer',
    sound: Player.playing,
    defaultName: '4chan Sounds',
    outerClass: `${ns}-col-auto`
  }),

  initialize() {
    Player.userTemplate.maintain(Player.footer, 'footerTemplate');
  },

  render() {
    _.elementHTML(Player.$(`.${ns}-footer`), Player.footer.template());
  }
};


/***/ },

/***/ "./src/components/header/index.js"
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = {
  template: () => Player.userTemplate.build({
    template: Player.config.headerTemplate
			+ `<div class="${ns}-expander" data-direction="nw"></div><div class="${ns}-expander" data-direction="ne"></div>`,
    location: 'header',
    sound: Player.playing,
    defaultName: '4chan Sounds',
    outerClass: `${ns}-col-auto`
  }),

  initialize() {
    Player.userTemplate.maintain(Player.header, 'headerTemplate');
  },

  render() {
    _.elementHTML(Player.$(`.${ns}-header`), Player.header.template());
  }
};


/***/ },

/***/ "./src/components/hotkeys/index.js"
/*!*****************************************!*\
  !*** ./src/components/hotkeys/index.js ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const settingsConfig = __webpack_require__(/*! config */ "./src/config/index.js");

let keyConfigs;

module.exports = {
  _keyMap: {
    ' ': 'space',
    arrowleft: 'left',
    arrowright: 'right',
    arrowup: 'up',
    arrowdown: 'down'
  },

  initialize() {
    Player.on('rendered', Player.hotkeys.apply);
    Player.on('config:hotkeys', Player.hotkeys.apply);

    keyConfigs = settingsConfig.reduce((c, s) => {
      s.property === 'hotkey_bindings' && s.settings.forEach(s => c[s.property.slice(16)] = s);
      return c;
    }, {});

    // Setup up hardware media keys, and follow the setting (it only applied after a reload).
    if ('mediaSession' in navigator) {
      Player.hotkeys._setMediaKeys(Player.config.hardwareMediaKeys);
      Player.on('config:hardwareMediaKeys', Player.hotkeys._setMediaKeys);
    }
  },

  /**
	 * Register the media session handlers (media keys, lock screen controls), or clear them.
	 */
  _setMediaKeys(enabled) {
    if (!('mediaSession' in navigator)) {
      return;
    }
    {
      const actions = [
        [ 'play', () => Player.play() ],
        [ 'pause', () => Player.pause() ],
        [ 'stop', () => Player.pause() ],
        // force, like the player's buttons: with repeat 'one' these did nothing.
        [ 'previoustrack', () => Player.previous({ force: true }) ],
        [ 'nexttrack', () => Player.next({ force: true }) ],
        [ 'seekbackward', evt => Player.audio.currentTime -= evt.seekOffset || 10 ],
        [ 'seekforward', evt => Player.audio.currentTime += evt.seekOffset || 10 ],
        // `seekto` carries an ABSOLUTE time per spec — assignment, not +=.
        [ 'seekto', evt => Player.audio.currentTime = evt.seekTime ]
      ];
      for (let [ type, handler ] of actions) {
        try {
          navigator.mediaSession.setActionHandler(type, enabled ? handler : null);
        } catch (err) {
          // not enabled...
        }
      }
      if (!enabled || Player.hotkeys._mediaListening) {
        return;
      }
      Player.hotkeys._mediaListening = true;

      // Keep the media metadata updated. Standalone videos play through the video
      // element, so listen on both and only act for whichever is currently playing.
      const paused = () => navigator.mediaSession.playbackState = 'paused';
      const listen = media => [
        [ 'pause', paused ],
        [ 'ended', paused ],
        [ 'play', Player.hotkeys.setMediaMetadata ],
        [ 'ratechange', Player.hotkeys.setMediaPosition ],
        [ 'seeked', Player.hotkeys.setMediaPosition ]
      ].forEach(([ evt, fn ]) => media.addEventListener(evt, e => Player.config.hardwareMediaKeys && e.currentTarget === Player.audio && fn()));
      listen(Player.controls._audio || Player.audio);
      // The video element exists once the player has rendered.
      Player.video ? listen(Player.video) : Player.on('rendered', () => Player.video && listen(Player.video));
      Player.on('tags-loaded', sound => Player.config.hardwareMediaKeys && sound === Player.playing && Player.hotkeys.setMediaMetadata());
    }
  },

  async setMediaMetadata() {
    const sound = Player.playing;
    // The deferred img.onload below re-invokes this; playback may have stopped in the
    // meantime (Player.playing === null), so bail rather than deref a null sound.
    if (!sound) {
      return;
    }
    const tags = sound.tags || {};
    navigator.mediaSession.playbackState = 'playing';
    const metadata = {
      title: tags.title || sound.name || sound.title,
      artist: tags.artist ||  `/${Board}/ - ${Thread || '4chan Sounds Player'}`,
      album: tags.album || document.title,
      artwork: [
        {
          src: Player.playing.thumb,
          sizes: '125x125'
        }
      ]
    };

    // If it's not a video add the full image to artwork.
    // If we have the dimensions already add the artwork, otherwise load them then reset the metadata.
    if (!Player.isVideo) {
      if (sound._fullDimension) {
        metadata.artwork.push({
          src: Player.playing.image,
          sizes: sound._fullDimension
        });
      } else {
        const img = new Image();
        img.onload = function () {
          sound._fullDimension = img.width + 'x' + img.height;
          Player.hotkeys.setMediaMetadata();
        };
        img.src = Player.playing.image;
      }
    }

    navigator.mediaSession.metadata = new MediaMetadata(metadata);
    Player.hotkeys.setMediaPosition();
  },

  setMediaPosition() {
    const { duration, playbackRate, currentTime } = Player.audio;
    // setPositionState throws unless 0 <= position <= a finite duration and the rate is
    // non-zero, e.g. before metadata has loaded.
    if (!isFinite(duration) || !(duration > 0) || !playbackRate) {
      return;
    }
    try {
      navigator.mediaSession.setPositionState({ duration, playbackRate, position: Math.min(currentTime, duration) });
    } catch (err) {
      // Not supported in this browser.
    }
  },

  addHandler: () => {
    Player.hotkeys.removeHandler();
    document.body.addEventListener('keydown', Player.hotkeys.handle);
  },
  removeHandler: () => {
    document.body.removeEventListener('keydown', Player.hotkeys.handle);
  },

  /**
	 * Apply the selecting hotkeys option
	 */
  apply() {
    const type = Player.config.hotkeys;
    Player.hotkeys.removeHandler();
    Player.off('show', Player.hotkeys.addHandler);
    Player.off('hide', Player.hotkeys.removeHandler);

    if (type === 'always') {
      // If hotkeys are always enabled then just set the handler.
      Player.hotkeys.addHandler();
    } else if (type === 'open') {
      // If hotkeys are only enabled with the player open toggle the handler as the player opens/closes.
      // If the player is already open set the handler now.
      if (!Player.isHidden) {
        Player.hotkeys.addHandler();
      }
      Player.on('show', Player.hotkeys.addHandler);
      Player.on('hide', Player.hotkeys.removeHandler);
    }
  },

  /**
	 * Handle a keydown even on the body
	 */
  handle(e) {
    // Ignore events on inputs so you can still type.
    if (Player.isHidden && (Player.config.hotkeys !== 'always' || !Player.sounds.length)) {
      return;
    }
    // Leave keys another handler already used (e.g. Space on a script's button-like
    // control), and synthetic events without a key (browser autofill).
    if (e.defaultPrevented || !e.key) {
      return;
    }
    // 4chan X/XT/neXT's gallery binds the arrow keys while it's open. This listener is on
    // body, so it runs before theirs and they can't stop it skipping tracks.
    if (document.getElementById('a-gallery') || document.documentElement.classList.contains('gallery-open')) {
      return;
    }
    const target = e.target;
    const inputFocused = [ 'INPUT', 'SELECT', 'TEXTAREA', 'BUTTON' ].includes(target.nodeName)
      || target.isContentEditable
      || (target.getAttribute && target.getAttribute('role') === 'button')
      // A video or audio with its own controls (an expanded webm) uses Space and the arrows.
      || ((target.nodeName === 'VIDEO' || target.nodeName === 'AUDIO') && target.controls);
    const k = e.key.toLowerCase();
    const bindings = Player.config.hotkey_bindings || {};

    // Look for a matching hotkey binding
    Object.entries(bindings).forEach(function checkBinding([ name, keyDef ]) {
      if (Array.isArray(keyDef)) {
        return keyDef.find(_def => checkBinding([ name, _def ]));
      }
      if (!keyDef || typeof keyDef.key !== 'string') {
        return;
      }
      const bindingConfig = k === keyDef.key
				&& (!!keyDef.shiftKey === !!e.shiftKey) && (!!keyDef.ctrlKey === !!e.ctrlKey) && (!!keyDef.metaKey === !!e.metaKey)
				// Unbound Alt combos (Alt+Left/Right is browser back/forward) pass through.
				&& (!!keyDef.altKey === !!e.altKey)
				// ignoreRepeat is part of the setting's config, not the stored binding.
				&& (!(keyConfigs[name] && keyConfigs[name].ignoreRepeat) || !e.repeat)
				&& keyConfigs[name];

      // allowFocusedInput is for the playlist search box only. Anywhere else (a reply, the
      // settings or tools fields) a printable binding would be swallowed while typing.
      if (bindingConfig && (!inputFocused || (bindingConfig.allowFocusedInput && target.classList.contains(`${ns}-playlist-search`)))) {
        e.preventDefault();
        e._binding = keyDef;
        Player.getHandler(bindingConfig.keyHandler)(e);
      }
    });
  },

  /**
	 * Turn a hotkey definition or key event into an input string.
	 */
  stringifyKey(key) {
    let k = String((key && key.key) || '').toLowerCase();
    key = key || {};
    Player.hotkeys._keyMap[k] && (k = Player.hotkeys._keyMap[k]);
    return (key.ctrlKey ? 'Ctrl+' : '') + (key.altKey ? 'Alt+' : '') + (key.shiftKey ? 'Shift+' : '') + (key.metaKey ? 'Meta+' : '') + k;
  },

  /**
	 * Turn an input string into a hotkey definition object.
	 */
  parseKey(str) {
    // Modifiers are a known prefix; everything after them is the key, which can itself be
    // '+' ("Shift++"), so don't just split on '+'.
    const [ , modifiers, rest ] = String(str).match(/^((?:(?:Ctrl|Alt|Shift|Meta)\+)*)([\s\S]*)$/);
    const keys = modifiers.split('+').filter(Boolean);
    let key = rest;
    Object.keys(Player.hotkeys._keyMap).find(k => Player.hotkeys._keyMap[k] === key && (key = k));
    const newValue = { key };
    keys.forEach(key => newValue[key.toLowerCase() + 'Key'] = true);
    return newValue;
  }
};


/***/ },

/***/ "./src/components/inline/index.js"
/*!****************************************!*\
  !*** ./src/components/inline/index.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const selectors = __webpack_require__(/*! ../../selectors */ "./src/selectors.js");
const controlsTemplate = __webpack_require__(/*! ../controls/templates/controls.tpl */ "./src/components/controls/templates/controls.tpl");

module.exports = {
  idx: 0,

  audio: { },
  expandedNodes: [ ],

  // Similar but not exactly the audio events in the controls component.
  mediaEvents: {
    // The master may be the post's video (expandedLoopMaster), which has no inline audio
    // id of its own, so resolve the linked audio element first.
    ended: evt => Player.inline._movePlaying((evt.currentTarget._inlineAudio || evt.currentTarget).dataset.id, +(Player.config.expandedRepeat !== 'one')),
    pause: 'controls.handleMediaEvent',
    play: 'controls.handleMediaEvent',
    playing: 'controls.handleMediaEvent',
    seeked: 'controls.handleMediaEvent',
    waiting: 'controls.handleMediaEvent',
    timeupdate: 'controls.updateDuration',
    loadedmetadata: 'controls.updateDuration',
    durationchange: 'controls.updateDuration',
    volumechange: 'controls.updateVolume'
  },

  initialize() {
    if (!is4chan) {
      return;
    }

    Player.inline.observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(Player.inline.handleAddedNode);
        mutation.removedNodes.forEach(Player.inline.handleRemovedNode);
      });
    });

    Player.on('config:playExpandedImages', Player.inline._handleConfChange);
    Player.on('config:playHoveredImages', Player.inline._handleConfChange);
    Player.inline._handleConfChange();
  },

  /**
	 * Swap the src of any currently-playing inline audio element when sound.src has been
	 * mutated (e.g. by the rerouter toggle). Called from the posts handler after sound.src
	 * is re-derived so that comparing to currentSound.src reflects the new URL.
	 *
	 * For sound-webms (audio+video sync pair) the linked video is paused before the swap
	 * and re-seeked on metadata load so audio and video stay in sync across the reroute.
	 */
  _reloadActiveAudio() {
    Object.values(Player.inline.audio).forEach(audio => {
      const data = audio._inlinePlayer;
      if (!data) return;
      const currentSound = data.sounds[data.index];
      if (!currentSound || !audio.src || audio.src === currentSound.src) return;
      // If the current sound is now disallowed for ANY reason (host, sound URL
      // matches a user filter, image MD5 filter), don't swap to the disallowed URL.
      // Skip only on `.invalid` since that's a synthetic flag set by getSounds for
      // sounds that fail decoding, not a user-driven block.
      if (currentSound.disallow && !currentSound.disallow.invalid) return;
      _.swapAudioSrc(audio, currentSound.src, {
        master: data.master || audio,
        getVideo: () => data.isVideo ? data.video : null,
      });
    });
  },

  /**
	 * Start/stop observing for hover images when a dependent conf is changed.
	 */
  _handleConfChange() {
    if (Player.config.playExpandedImages || Player.config.playHoveredImages) {
      Player.inline.start();
    } else {
      Player.inline.stop();
    }
  },

  /**
	 * Check if an added node is an expanded/hover sound image and play the audio.
	 *
	 * @param {Element} node Added node.
	 */
  handleAddedNode(node) {
    try {
      if (node.nodeName !== 'IMG' && node.nodeName !== 'VIDEO') {
        return;
      }
      const isExpandedImage = Player.config.playExpandedImages && node.matches(selectors.expandedImage);
      const isHoverImage = Player.config.playHoveredImages && node.matches(selectors.hoverImage);

      if (isExpandedImage || isHoverImage) {
        const isVideo = node.nodeName === 'VIDEO';
        let id;
        try {
          // 4chan X images have the id set. Handy.
          // Otherwise get the parent post, looking up the image link for native hover images, and the id from it.
          id = isChanX
            ? node.dataset.fileID.split('.')[1]
            : (isExpandedImage ? node : document.querySelector(`a[href$="${node.src.replace(/^https?:/, '')}"]`))
              .closest(selectors.posts).id.slice(selectors.postIdPrefix.length);
        } catch (err) {
          return;
        }
        // Check for sounds added to the player.
        let sounds = id && Player.sounds.filter(s => s.post === id && !s.standaloneVideo) || [];
        if (Player.config.expandedAllowFiltered) {
          sounds = sounds.concat(Player.filteredSounds.filter(s => s.post === id && !s.disallow.host));
        }
        if (!sounds.length) {
          return;
        }
        // 4chan XT/neXT's "sound posts" (on by default) put their own autoplaying <audio>
        // right after an expanded [sound=] image, so the sound played twice. It's added in
        // the same task as the image, before it can start: silence and remove it, and give
        // a video back the controls it would have had.
        const otherAudio = isChanX && isExpandedImage && node.nextElementSibling;
        if (otherAudio && otherAudio.nodeName === 'AUDIO') {
          otherAudio.autoplay = false;
          otherAudio.pause();
          otherAudio.removeAttribute('src');
          otherAudio.load();
          otherAudio.remove();
          if (isVideo) {
            const controls = otherAudio.controls;
            node.controls = controls;
            // XT/neXT still think the post has its audio, and turn the video's controls off
            // again once its metadata loads. Without the player's own controls (Expanded
            // Controls off) that left no way to pause or seek, so put them back after them.
            !Player.config.expandedControls && node.addEventListener('loadedmetadata', () => setTimeout(() => {
              node._inlineAudio && (node.controls = controls);
            }), { once: true });
          }
        }
        // Create a new audio element.
        const audio = new Audio(sounds[0].src);
        const aId = audio.dataset.id = Player.inline.idx++;
        const master = isVideo && Player.config.expandedLoopMaster === 'video' ? node : audio;
        Player.inline.audio[aId] = audio;

        // Remember this node is playing audio.
        Player.inline.expandedNodes.push(node);

        // Add some data and cross link the nodes.
        node.classList.add(`${ns}-has-inline-audio`);
        node._inlineAudio = audio;
        audio._inlinePlayer = node._inlinePlayer = {
          master,
          video: node,
          isVideo,
          audio,
          sounds,
          index: 0,
          expanded: isExpandedImage
        };
        // A sound that fails to load moves on to the post's next one, once round.
        audio._inlinePlayer.failed = 0;
        audio.addEventListener('playing', () => audio._inlinePlayer && (audio._inlinePlayer.failed = 0));
        !isVideo && audio.addEventListener('error', () => Player.inline._tryNextAfterError(audio));
        // One expanded image's sound at a time: 4chan X's Expand All Images expanded every
        // post at once, and every sound played over the others.
        // (Only if it's still playing when the event arrives: two started together would
        // otherwise each pause the other.)
        isExpandedImage && audio.addEventListener('play', () => !audio.paused && Player.inline._pauseOtherExpanded(audio));
        // Link video & audio so they sync.
        if (isVideo) {
          node._linked = audio;
          audio._linked = node;
          // 4chan X (and forks) pause an expanded video without sound of its own while it's
          // off-screen or the tab is hidden, then resume it from where it stopped. When the
          // audio leads, re-sync the video whenever something starts it.
          if (master === audio) {
            // Without the player's controls, the video's own controls are the only ones:
            // pressing play, pause or seeking on them acts on the sound. (Only for the user's
            // own presses: 4chan X pausing it off-screen shouldn't stop the sound.)
            const ownControls = isExpandedImage && !Player.config.expandedControls;
            // A press on the video itself in the last moment: not the sync's own pauses, a
            // loop wrapping round, or 4chan X pausing it (which a click anywhere else
            // shortly before used to count as).
            // Held down (scrubbing the seek bar) counts the whole time, and a second after.
            node._inlinePlayer.lastPress = 0;
            node._inlinePlayer.pressing = false;
            node._inlinePlayer.markPress = e => {
              node._inlinePlayer.lastPress = performance.now();
              node._inlinePlayer.pressing = e.type === 'pointerdown';
            };
            if (ownControls) {
              [ 'pointerdown', 'pointerup', 'pointercancel', 'keydown' ].forEach(type => node.addEventListener(type, node._inlinePlayer.markPress));
            }
            const byUser = () => ownControls && (node._inlinePlayer.pressing || performance.now() - node._inlinePlayer.lastPress < 1000);
            node._inlinePlayer.resync = () => audio.paused && byUser()
              ? audio.play().catch(() => {})
              : Player.controls.sync(audio);
            node.addEventListener('play', node._inlinePlayer.resync);
            if (ownControls) {
              node._inlinePlayer.forwardPause = () => byUser() && !audio.paused && audio.pause();
              // A seek the user started is forwarded however long it takes to finish.
              node._inlinePlayer.noteSeek = () => byUser() && (node._inlinePlayer.userSeek = true);
              node._inlinePlayer.forwardSeek = () => {
                const userSeek = node._inlinePlayer.userSeek || byUser();
                node._inlinePlayer.userSeek = false;
                // Not the seeks the sync makes.
                if (!userSeek || performance.now() - (node._syncSeekAt || 0) < 1000) {
                  return;
                }
                // The video loops under a longer sound: keep the sound in the same loop.
                const d = node.duration;
                audio.currentTime = d > 0 && isFinite(d) && audio.duration > d
                  ? Math.floor(audio.currentTime / d) * d + node.currentTime
                  : node.currentTime;
              };
              node.addEventListener('pause', node._inlinePlayer.forwardPause);
              node.addEventListener('seeking', node._inlinePlayer.noteSeek);
              node.addEventListener('seeked', node._inlinePlayer.forwardSeek);
            }
          }
        }

        // Start from the beginning taking the volume from the main player. (The src was set
        // when it was created; setting it again restarted the download.)
        audio.volume = Player.audio.volume;
        audio.currentTime = 0;

        // Add the sync handlers to which source is master.
        Player.inline.updateSyncListeners(master, 'add');

        // A dead [sound=] link: the video would wait for the audio forever, frozen and with
        // its controls taken away. Let it play on its own with its own controls instead.
        if (isVideo) {
          node._inlinePlayer.audioError = () => {
            // Another of the post's sounds is tried first (below).
            if (node._inlineAudio !== audio || Player.inline._tryNextAfterError(audio)) {
              return;
            }
            node.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
            audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
            node.controlsObserver && node.controlsObserver.disconnect();
            node._linked = audio._linked = null;
            node.controls = true;
            node.play().catch(() => {});
          };
          audio.addEventListener('error', node._inlinePlayer.audioError);
        }

        // Show the player controls for expanded images/videos.
        const showPlayerControls = isExpandedImage && Player.config.expandedControls;

        if (isVideo && showPlayerControls) {
          // Remove the default controls, and remove them again when 4chan X tries to add them.
          node.controls = false;
          node.controlsObserver = new MutationObserver(() => node.controls = false);
          node.controlsObserver.observe(node, { attributes: true });
          // Play/pause the audio instead when the video is clicked.
          node._inlinePlayer.clickToggle = () => Player.inline.playPause(aId);
          node.addEventListener('click', node._inlinePlayer.clickToggle);
        }

        // For videos wait for both to load before playing.
        if (isVideo && (node.readyState < 3 || audio.readyState < 3)) {
          audio.pause();
          node.pause();
          // Set the add controls function so playOnceLoaded can run it when it's ready.
          node._inlinePlayer.pendingControls = showPlayerControls && addControls;
          node.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
          audio.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
        } else {
          showPlayerControls && addControls();
          // play() rejects benignly when superseded by a newer load/pause or when
          // autoplay is blocked; real failures surface via the 'error' event.
          audio.play().catch(() => {});
        }

        function addControls() {
          delete node._inlinePlayer.pendingControls;
          node.parentNode.classList.add(`${ns}-has-controls`);
          // Create the controls and store the bars on the audio node for reference. Avoid checking the DOM.
          const controls = audio._inlinePlayer.controls = _.element(controlsTemplate({
            audio,
            multiple: sounds.length > 1,
            audioId: aId,
            inline: true,
            actions: {
              previous: `inline.previous("${aId}")`,
              playPause: `inline.playPause("${aId}")`,
              next: `inline.next("${aId}")`,
              seek: `controls.handleSeek($event, "${aId}")`,
              mute: `inline.mute("${aId}")`,
              volume: `controls.handleVolume($event, "${aId}")`
            }
          }), node.parentNode);
          // On native 4chan the expanded media sits in the post's whole file block: keep the
          // controls over the media itself (they spanned the block, wider than a small video).
          if (!isChanX && typeof ResizeObserver === 'function') {
            const fit = () => {
              if (!node.isConnected || node.offsetParent !== node.parentNode) {
                return;
              }
              controls.style.left = node.offsetLeft + 'px';
              controls.style.right = 'auto';
              controls.style.width = node.offsetWidth + 'px';
              controls.style.bottom = Math.max(0, node.parentNode.clientHeight - node.offsetTop - node.offsetHeight) + 'px';
            };
            node._inlinePlayer.controlsFit = new ResizeObserver(fit);
            node._inlinePlayer.controlsFit.observe(node);
            fit();
          }
          // Don't want to close the expanded image or open the image when the controls are clicked.
          controls.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
          });
          audio.volumeBar = controls.querySelector(`.${ns}-volume-bar .${ns}-current-bar`);
          audio.currentTimeBar = controls.querySelector(`.${ns}-seek-bar .${ns}-current-bar`);
          Player.controls.updateProgressBarPosition(audio.volumeBar, audio.volume, 1);
        }
      }
    } catch (err) {
      Player.logError('Failed to play sound.', err);
    }
  },

  /**
	 * Pause every other expanded image's sound (by pausing what leads it, so the sync doesn't
	 * start it again), including one still waiting for its video to load.
	 */
  _pauseOtherExpanded(playing) {
    Object.values(Player.inline.audio).forEach(audio => {
      const data = audio._inlinePlayer;
      if (audio === playing || !data || !data.expanded) {
        return;
      }
      audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      data.video && data.video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      // A video still loading gets its controls when it's ready to play; it won't now, so
      // give them to it here.
      data.pendingControls && data.pendingControls();
      const master = data.master || audio;
      !master.paused && master.pause();
    });
  },

  /**
	 * Check if a removed node is an expanded/hover sound image and stop the audio.
	 *
	 * @param {Element} node Added node.
	 */
  handleRemovedNode(node) {
    const nodes = [ node ];
    node.querySelectorAll && nodes.push(...node.querySelectorAll(`.${ns}-has-inline-audio`));
    nodes.forEach(node => {
      if (node._inlineAudio) {
        Player.inline._removeForNode(node);
      }
    });
  },

  _removeForNode(node) {
    // Stop removing controls.
    node.controlsObserver && node.controlsObserver.disconnect();
    // Stop listening for media events.
    Player.inline.updateSyncListeners(node._inlinePlayer.master, 'remove');
    node._inlinePlayer.resync && node.removeEventListener('play', node._inlinePlayer.resync);
    node._inlinePlayer.forwardPause && node.removeEventListener('pause', node._inlinePlayer.forwardPause);
    node._inlinePlayer.forwardSeek && node.removeEventListener('seeked', node._inlinePlayer.forwardSeek);
    node._inlinePlayer.noteSeek && node.removeEventListener('seeking', node._inlinePlayer.noteSeek);
    node._inlinePlayer.markPress && [ 'pointerdown', 'pointerup', 'pointercancel', 'keydown' ]
      .forEach(type => node.removeEventListener(type, node._inlinePlayer.markPress));
    node._inlinePlayer.audioError && node._inlineAudio.removeEventListener('error', node._inlinePlayer.audioError);
    // 4chan X reuses the expanded element on the next expand, so don't leave this behind.
    node._inlinePlayer.clickToggle && node.removeEventListener('click', node._inlinePlayer.clickToggle);
    // Remove controls.
    node._inlinePlayer.controlsFit && node._inlinePlayer.controlsFit.disconnect();
    const controls = node._inlineAudio._inlinePlayer.controls;
    if (controls) {
      controls.parentNode.classList.remove(`${ns}-has-controls`);
      controls.parentNode.removeChild(controls);
    }
    // Cancel any pending rerouter reload so its loadedmetadata/error listeners don't
    // outlive the audio element they were attached to.
    node._inlineAudio._pendingReroute && node._inlineAudio._pendingReroute();
    // Stop and unload the audio, and clean up the data. Only pausing left it downloading
    // the whole file: skimming hovered thumbnails started a full download for each.
    const audio = node._inlineAudio;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    audio._linked = null;
    delete Player.inline.audio[audio.dataset.id];
    delete node._inlineAudio;
    delete node._linked;
    Player.inline.expandedNodes = Player.inline.expandedNodes.filter(n => n !== node);
  },

  /**
	 * Set audio/video sync listeners on a video for an inline sound webm.
	 *
	 * @param {Element} video Video node.
	 * @param {String} action add or remove.
	 */
  updateSyncListeners(node, action) {
    if (node.nodeName === 'VIDEO' || node.nodeName === 'AUDIO') {
      const audio = node._inlineAudio || node;
      if (action === 'remove') {
        const video = audio._inlinePlayer.video;
        video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
        audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      }
      Object.entries(Player.inline.mediaEvents).forEach(([ event, handler ]) => {
        node[`${action}EventListener`](event, Player.getHandler(handler));
      });
      // Volume belongs to the audio even when the video is the master, so listen there
      // too or the inline volume bar and mute icon never update.
      if (audio !== node) {
        audio[`${action}EventListener`]('volumechange', Player.getHandler(Player.inline.mediaEvents.volumechange));
      }
    }
  },

  /**
	 * Start observing for expanded/hover images.
	 */
  start() {
    Player.inline.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  },

  /**
	 * Stop observing for expanded/hover images.
	 */
  stop() {
    Player.inline.observer.disconnect();
    Player.inline.expandedNodes.forEach(Player.inline._removeForNode);
    Player.inline.expandedNodes = [];
  },

  /**
	 * Handle previous click for inline controls.
	 *
	 * @param {String} audioId Identifier of the inline audio.
	 */
  previous(audioId) {
    const audio = Player.inline.audio[audioId];
    // The master (the video, with "Master Source: Video") drives the other.
    const master = audio && audio._inlinePlayer.master;
    if (master && master.currentTime > 3) {
      master.currentTime = 0;
    } else {
      Player.inline._movePlaying(audioId, -1);
    }
  },

  /**
	 * Handle next click for inline controls.
	 *
	 * @param {String} audioId Identifier of the inline audio.
	 */
  next(audioId) {
    Player.inline._movePlaying(audioId, 1);
  },

  /**
	 * After a sound fails, play the post's next sound if there is one it hasn't tried since
	 * one last played. Returns whether it did.
	 */
  _tryNextAfterError(audio) {
    const data = audio._inlinePlayer;
    if (!data || data.sounds.length < 2 || ++data.failed >= data.sounds.length
      // With Repeat off there's nothing after the last one.
      || (Player.config.expandedRepeat === 'none' && data.index + 1 >= data.sounds.length)) {
      return false;
    }
    Player.inline._movePlaying(audio.dataset.id, 1);
    return true;
  },

  _movePlaying(audioId, dir) {
    const audio = Player.inline.audio[audioId];
    const data = audio && audio._inlinePlayer;
    if (!data) {
      return;
    }
    const count = data.sounds.length;
    const repeat = Player.config.expandedRepeat;
    if (repeat !== 'none' || data.index + dir >= 0 && data.index + dir < count) {
      data.index = (data.index + dir + count) % count;
      // Cancel any pending rerouter swap so its onLoad/onError listeners can't
      // fire against the navigated src and revert to the previous sound.
      audio._pendingReroute && audio._pendingReroute();
      audio.src = data.sounds[data.index].src;
      // Link the video again: a dead sound before this one unlinked it to let it play alone.
      if (data.isVideo) {
        data.video._linked = audio;
        audio._linked = data.video;
      }
      if (data.controls) {
        const prev = data.controls.querySelector(`.${ns}-previous-button`);
        const next = data.controls.querySelector(`.${ns}-next-button`);
        prev && prev.classList[repeat !== 'all' && data.index === 0 ? 'add' : 'remove']('disabled');
        next && next.classList[repeat !== 'all' && data.index === count - 1 ? 'add' : 'remove']('disabled');
      }
      // For videos wait for both to load before playing.
      if (data.isVideo && (data.video.readyState < 3 || audio.readyState < 3)) {
        data.master.currentTime = 0;
        data.master.pause();
        data.video.pause();
        data.video.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
        audio.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
      } else {
        data.master.currentTime = 0;
        // Reject benignly when superseded / autoplay-blocked; 'error' handles real failures.
        data.master.play().catch(() => {});
      }
    }
  },

  /**
	 * Handle play/pause click for inline controls.
	 *
	 * @param {String} audioId Identifier of the inline audio.
	 */
  playPause(audioId) {
    const audio = Player.inline.audio[audioId];
    // Toggle the master: its events drive the sync, so toggling the other one (the audio
    // when the video is master) left the video looping and was undone by the next sync.
    const master = audio && audio._inlinePlayer.master;
    master && (master.paused ? master.play().catch(() => {}) : master.pause());
  },

  /**
	 * Handle mute click for inline controls.
	 *
	 * @param {String} audioId Identifier of the inline audio.
	 */
  mute(audioId) {
    const audio = Player.inline.audio[audioId];
    audio && (audio.volume = (Player._lastVolume || 0.5) * !audio.volume);
  }
};


/***/ },

/***/ "./src/components/minimised/index.js"
/*!*******************************************!*\
  !*** ./src/components/minimised/index.js ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = {
  _showingPIP: false,

  initialize() {
    if (isChanX) {
      Player.userTemplate.maintain(Player.minimised, 'chanXTemplate', [ 'chanXControls' ], [ 'show', 'hide', 'stop' ]);
    }
    Player.on('rendered', Player.minimised.render);
    Player.on('show', Player.minimised.hidePIP);
    Player.on('hide', Player.minimised.showPIP);
    Player.on('stop', Player.minimised.hidePIP);
    Player.on('playsound', Player.minimised.showPIP);
  },

  render() {
    if (Player.container && isChanX) {
      let container = document.querySelector(`.${ns}-chan-x-controls`);
      // Create the element if it doesn't exist.
      // Set the user template and control events on it to make all the buttons work.
      if (!container) {
        // hover-trigger: so h:{ } in the template shows on hover, as in the other templates.
        container = _.element(`<span class="${ns}-chan-x-controls ${ns}-col-auto ${ns}-align-center ${ns}-hover-trigger"></span>`, document.querySelector('#shortcuts'), 'afterbegin');
      }

      if (Player.config.chanXControls === 'never' || Player.config.chanXControls === 'closed' && !Player.isHidden) {
        return container.innerHTML = '';
      }

      const audioId = Player.audio.dataset.id;
      // Render the contents.
      _.elementHTML(container, Player.userTemplate.build({
        template: Player.config.chanXTemplate,
        location: '4chan-X-controls',
        sound: Player.playing,
        replacements: {
          'prev-button': `<a href="#" class="${ns}-media-control ${ns}-previous-button ${ns}-hover-fill" @click.prevent='previous({"force":true})'>${Icons.skipStart} ${Icons.skipStartFill}</a>`,
          'play-button': `<a href="#" class="${ns}-media-control ${ns}-play-button ${ns}-hover-fill ${!Player.audio || Player.audio.paused ? `${ns}-play` : ''}" @click.prevent="togglePlay" data-audio="${audioId}">${Icons.play} ${Icons.pause} ${Icons.playFill} ${Icons.pauseFill}</a>`,
          'next-button': `<a href="#" class="${ns}-media-control ${ns}-next-button ${ns}-hover-fill" @click.prevent='next({"force":true})'>${Icons.skipEnd} ${Icons.skipEndFill} </a>`,
          'sound-current-time': `<span class="${ns}-current-time" data-audio="${audioId}">0:00</span>`,
          'sound-duration': `<span class="${ns}-duration" data-audio="${audioId}">0:00</span>`
        }
      }));
      // Show the current time now rather than 0:00 until the next media event (none comes
      // while paused).
      Player.audio && Player.controls.updateDuration({ currentTarget: Player.audio });
    }
  },

  /**
	 * Move the image to a picture in picture like thumnail.
	 */
  showPIP() {
    if (!Player.isHidden || !Player.config.pip || !Player.playing || Player.minimised._showingPIP) {
      return;
    }
    Player.minimised._showingPIP = true;
    const image = document.querySelector(`.${ns}-image-link`);
    document.body.appendChild(image);
    image.classList.add(`${ns}-pip`);
    image.style.bottom = (Player.position.getHeaderOffset().bottom + 10) + 'px';
    image.style.height = null;
    // Show the player again when the image is clicked.
    image.addEventListener('click', Player.minimised._handleImageClick);
  },

  /**
	 * Move the image back to the player.
	 */
  hidePIP() {
    Player.minimised._showingPIP = false;
    const image = document.querySelector(`.${ns}-image-link`);
    const controls = Player.$(`.${ns}-controls`);
    controls.parentNode.insertBefore(document.querySelector(`.${ns}-image-link`), controls);
    image.classList.remove(`${ns}-pip`);
    image.style.bottom = null;
    image.style.height = Player.config.imageHeight + 'px';
    image.removeEventListener('click', Player.minimised._handleImageClick);
  },

  _handleImageClick: e => {
    e.preventDefault();
    Player.show();
  }
};


/***/ },

/***/ "./src/components/playlist/index.js"
/*!******************************************!*\
  !*** ./src/components/playlist/index.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
const { postIdPrefix } = __webpack_require__(/*! ../../selectors */ "./src/selectors.js");
const xhrReplacer = __webpack_require__(/*! ../../xhr-replace */ "./src/xhr-replace.js");

const itemMenuTemplate = __webpack_require__(/*! ./templates/item_menu.tpl */ "./src/components/playlist/templates/item_menu.tpl");

module.exports = {
  atRoot: ['add', 'remove'],
  public: ['search'],

  tagLoadTO: {},
  // Sounds the user removed from the playlist, by id. Kept until the page is reloaded, so
  // reading the posts again doesn't bring them back, and they can be restored from their
  // post's add link or the footer.
  _removed: new Map(),

  template: __webpack_require__(/*! ./templates/player.tpl */ "./src/components/playlist/templates/player.tpl"),
  listTemplate: __webpack_require__(/*! ./templates/list.tpl */ "./src/components/playlist/templates/list.tpl"),
  tagsDialogTemplate: __webpack_require__(/*! ./templates/tags_dialog.tpl */ "./src/components/playlist/templates/tags_dialog.tpl"),

  initialize() {
    // Keep track of the last view style so we can return to it.
    Player.playlist._lastView =
      Player.config.viewStyle === 'playlist' ||
      Player.config.viewStyle === 'image'
        ? Player.config.viewStyle
        : 'playlist';

    Player.on('view', (style) => {
      // Focus the playing song when switching to the playlist.
      style === 'playlist' && Player.playlist.scrollToPlaying();
      // Track state.
      if (style === 'playlist' || style === 'image') {
        Player.playlist._lastView = style;
      }
    });

    // Keey track of the hover image element.
    Player.on('rendered', Player.playlist.afterRender);

    // Various things to do when a new sound plays.
    Player.on('playsound', (sound) => {
      // Handlers run one after another, so a stop or another play can come first: then this
      // sound isn't the one to show.
      if (sound !== Player.playing) {
        return;
      }
      // Start the loading bars afresh, even for the same sound played again, timed from
      // about when its files started loading.
      Player.playlist._loading = null;
      const loadStart = performance.now();
      // Update the image/video.
      Player.playlist.showImage(sound);
      Player.playlist._loadingState(loadStart);
      // Update the previously and the new playing rows.
      Player.$all(
        `.${ns}-list-item.playing, .${ns}-list-item[data-id="${Player.playing.id}"]`,
      ).forEach((el) => {
        const rowSound = Player.sounds.find((s) => s.id === el.dataset.id);
        const newItem = rowSound && Player.playlist.listTemplate({ sounds: [ rowSound ] });
        // Empty when the previous sound no longer matches an active search (only the
        // playing sound is kept): drop its row, as the search would have.
        newItem && newItem.trim() && _.element(newItem, el, 'beforebegin');
        el.parentNode.removeChild(el);
      });
      // If the player isn't fullscreen scroll to the playing item.
      Player.config.viewStyle !== 'fullscreen' &&
        Player.playlist.scrollToPlaying('nearest');
      // Scroll the thread to the playing post.
      Player.config.autoScrollThread &&
        sound.post &&
        (location.href =
          location.href.split('#')[0] + '#' + postIdPrefix + sound.post);
      // Load tags from the audio file.
      Player.playlist.loadTags(Player.playing.id);
    });

    // Reset to the placeholder image when the player is stopped.
    Player.on('stop', () => {
      // Rebuild the row that was playing, so p:{ } in the row template goes too.
      Player.$all(`.${ns}-list-item.playing`).forEach((el) => {
        el.classList.remove('playing');
        const sound = Player.sounds.find((s) => s.id === el.dataset.id);
        sound && Player.playlist.refreshRow(sound);
      });
      Player.$all(`.${ns}-row-loading`).forEach((el) => el.remove());
      Player.playlist._loading = null;
      // document, not Player.$: the picture-in-picture thumbnail moves the image to <body>.
      const container = document.querySelector(`.${ns}-image-link`);
      // No link (with target _blank, "#" opened the thread again in a new tab).
      container.removeAttribute('href');
      document.querySelector(`.${ns}-background-image`).src = Player.video.src = '';
      document.querySelector(`.${ns}-image`).src =
        `data:image/svg+xml;base64,${btoa(Icons.fcSounds)}`;
      container.classList.remove(`${ns}-show-video`);
    });

    // Show or remove the playing row's loading bars.
    Player.on('config:rowLoadingBars', () => Player.playlist.refreshRow(Player.playing));

    // Reapply filters when they change
    Player.on('config:filters', Player.playlist.applyFilters);
    Player.on('config:allow', Player.playlist.applyFilters);

    // Listen to anything that can affect the display of hover images
    Player.on('config:hoverImages', Player.playlist.setHoverImageVisibility);
    Player.on('menu-open', Player.playlist.setHoverImageVisibility);
    Player.on('menu-close', Player.playlist.setHoverImageVisibility);

    // Listen to the search display being toggled
    Player.on('config:showPlaylistSearch', Player.playlist.toggleSearch);

    // Listen for the playlist being shuffled/ordered.
    Player.on('config:shuffle', Player.playlist._handleShuffle);

    // Update an open tags info dialog when tags are loaded for a sound.
    Player.on('tags-loaded', (sound) => {
      const dialog = Player.$(`.tags-dialog[data-sound-id="${sound.id}"]`);
      dialog &&
        _.elementHTML(dialog, Player.playlist.tagsDialogTemplate(sound));
    });

    // Resize the image when the config is changed (from other tabs)
    Player.on(
      'config:imageHeight',
      (height) => (document.querySelector(`.${ns}-image-link`).style.height = height + 'px'),
    );

    // Preload the next audio.
    Player.on(['playsound', 'order'], () => {
      const next =
        Player.sounds[
          (Player.sounds.indexOf(Player.playing) + 1) % Player.sounds.length
        ];
      // With a single sound the next one is the playing one, already loading.
      next && next !== Player.playing && Player.playlist.preload(next);
    });

    // Maintain changes to the user templates it's dependent values
    Player.userTemplate.maintain(Player.playlist, 'rowTemplate', ['shuffle']);

    // Resize observer to handle transparent images
    Player.playlist.imageResizeObserver = new ResizeObserver(
      Player.playlist.resizeTransBG,
    );
  },

  /**
   * Render the playlist.
   */
  render() {
    if (!Player.container) {
      return;
    }
    _.elementHTML(
      Player.$(`.${ns}-list-container`),
      Player.playlist.listTemplate(),
    );
    Player.playlist.afterRender();
  },

  afterRender() {
    Player.playlist.image = Player.$(`.${ns}-image`);
    Player.playlist.transparentImageBG = Player.$(
      `.${ns}-image-transparent-bg`,
    );
    Player.playlist.hoverImage = Player.$(`.${ns}-hover-image`);
    Player.playlist.imageResizeObserver.disconnect();
    Player.playlist.imageResizeObserver.observe(Player.playlist.image);
    Player.playlist.image.onload = Player.playlist.resizeTransBG;
  },

  /**
   * Restore the last playlist or image view.
   */
  restore() {
    Player.display.setViewStyle(Player.playlist._lastView || 'playlist');
  },

  /**
   * Update the image displayed in the player.
   */
  showImage(sound) {
    const container = document.querySelector(`.${ns}-image-link`);
    const img = container.querySelector(`.${ns}-image`);
    const background = container.querySelector(`.${ns}-background-image`);
    img.src = background.src = '';
    // Without a usable image keep the placeholder; assigning null requests ".../null".
    img.src = sound.imageOrThumb || `data:image/svg+xml;base64,${btoa(Icons.fcSounds)}`;
    background.src = sound.imageOrThumb || '';
    Player.isVideo && (Player.video.src = sound.image);
    if (Player.config.viewStyle !== 'fullscreen') {
      container.href = sound.image;
    }
    container.classList[Player.isVideo ? 'add' : 'remove'](ns + '-show-video');
  },

  /**
   * Resize the background element that prevents transparent images display over themself.
   */
  resizeTransBG() {
    const contentBoxRatio =
      Player.playlist.image.width / Player.playlist.image.height;
    const imageSizeRatio =
      Player.playlist.image.naturalWidth / Player.playlist.image.naturalHeight;
    const bgEl = Player.playlist.transparentImageBG;
    bgEl.style.width =
      Math.min((imageSizeRatio / contentBoxRatio) * 100, 100) + '%';
    bgEl.style.height =
      Math.min((contentBoxRatio / imageSizeRatio) * 100, 100) + '%';
  },

  /**
   * Switch between playlist and image view.
   */
  toggleView(e) {
    e && e.preventDefault();
    let style =
      Player.config.viewStyle === 'playlist'
        ? 'image'
        : Player.config.viewStyle === 'image'
          ? 'playlist'
          : Player.playlist._lastView;
    Player.display.setViewStyle(style);
  },

  /**
   * Add a new sound from the thread to the player.
   */
  add(sound, skipRender) {
    try {
      const id = sound.id;
      // Make sure the sound is not a duplicate.
      if (Player.sounds.find((sound) => sound.id === id)) {
        return;
      }

      // Add the sound with the location based on the shuffle settings.
      // Shuffle: a uniform insertion point in [0, length] (operator precedence made the
      // old `* length - 1` yield [-1, length-1), skewing the distribution and never
      // targeting the last slot). Sorted: the first sound that should sort AFTER the new
      // one — `> 0`, not `> 1` (compareIds returns the raw signed diff, so same-post
      // sounds whose SIDs differ by exactly 1 were inserted one position out of order).
      // Posts are parsed in thread order, so a new sound usually goes last: check that
      // first instead of scanning the whole list for every sound (quadratic on big threads).
      const last = Player.sounds[Player.sounds.length - 1];
      let index = Player.config.shuffle
        ? Math.floor(Math.random() * (Player.sounds.length + 1))
        : !last || Player.compareIds(last.id, id) <= 0
          ? Player.sounds.length
          : Player.sounds.findIndex((s) => Player.compareIds(s.id, id) > 0);
      index < 0 && (index = Player.sounds.length);
      Player.sounds.splice(index, 0, sound);

      if (Player.container) {
        if (!skipRender) {
          // Add the sound to the playlist.
          const list = Player.$(`.${ns}-list-container`);
          let rowContainer = _.element(
            `<div>${Player.playlist.listTemplate({ sounds: [sound] })}</div>`,
          );
          // listTemplate filters by the current search; if the new sound doesn't
          // match, rowContainer.children[0] is undefined. The sound stays in
          // Player.sounds (so search re-matching surfaces it) but has no DOM
          // row until the next full render. Skip the DOM insert; the 'add'
          // event still needs to fire below so count templates update.
          const newRow = rowContainer.children[0];
          if (newRow) {
            // The data-id selector falls back to appendChild when the next sound
            // is also search-filtered (its row isn't in DOM so `before` is null).
            const nextSound = Player.sounds[index + 1];
            const before = nextSound && Player.$(
              `.${ns}-list-item[data-id="${nextSound.id}"]`,
            );
            if (before) {
              list.insertBefore(newRow, before);
            } else {
              list.appendChild(newRow);
            }
          }
        }

        // If nothing else has been added yet show the image for this sound.
        if (Player.sounds.length === 1) {
          Player.playlist.showImage(sound);
        }
        // Auto show if enabled, we're on a thread, and this is the first non-standlone item.
        // Skip during applyFilters so a rerouter toggle / allow-list change doesn't pop a
        // hidden player open unexpectedly.
        if (
          !Player._applyingFilters &&
          Player.config.autoshow &&
          /\/thread\//.test(location.href) &&
          !sound.standaloneVideo && !Player.sounds.some((s) => s !== sound && !s.standaloneVideo)
        ) {
          Player.show();
        }
        Player.trigger('add', sound);
      }
    } catch (err) {
      Player.logError(
        'There was an error adding to the sound player. Please check the console for details.',
        err,
      );
    }
  },

  addFromDrop(e) {
    const entries = [ ...(e.dataTransfer.items || []) ].map(item => item.getAsEntry
      ? item.getAsEntry()
      : item.webkitGetAsEntry && item.webkitGetAsEntry()).filter(Boolean);
    if (entries.length) {
      entries.forEach(entry => Player.playlist._scanEntry(entry));
    } else if (e.dataTransfer.files && e.dataTransfer.files.length) {
      // No file-system entries (some browsers, or files that aren't on disk): use the files.
      Player.playlist.addFromFiles([ ...e.dataTransfer.files ]);
    }
  },

  _scanEntry(entry) {
    if (entry.isDirectory) {
      return Player.playlist._readEntries(entry.createReader());
    }
    return entry.file((file) => Player.playlist.addFromFiles([file]));
  },

  _readEntries(reader) {
    reader.readEntries((entries) => {
      if (entries.length) {
        entries.forEach(Player.playlist._scanEntry);
        Player.playlist._readEntries(reader);
      }
    });
  },

  /**
   * The add-files input changed. Take the files and clear the input, so picking the same
   * file again (after removing it) still fires a change.
   */
  handleFileSelect(e) {
    const files = [ ...e.currentTarget.files ];
    e.currentTarget.value = '';
    Player.playlist.addFromFiles(files);
  },

  addFromFiles(files) {
    // Check each of the files for sounds.
    [...files].forEach((file) => {
      if (
        !file.type.startsWith('image') &&
        file.type !== 'video/webm' &&
        file.type !== 'video/mp4'
      ) {
        return;
      }
      const imageSrc = URL.createObjectURL(file);
      const type = file.type;
      let thumbSrc = imageSrc;
      // Declared before the early return below: _continue reads it for images too.
      let added = false;

      // If it's not a webm just use the full image as the thumbnail
      if (file.type !== 'video/webm' && file.type !== 'video/mp4') {
        return _continue();
      }

      // If it's a webm grab the first frame as the thumbnail
      const canvas = document.createElement('canvas');
      const video = document.createElement('video');
      const context = canvas.getContext('2d');
      video.addEventListener('seeked', function () {
        if (video.videoWidth && video.videoHeight) {
          // Scaled down and as a JPEG: a full-size PNG of a 1080p frame is several MB,
          // kept for as long as the sound is in the playlist.
          const scale = Math.min(1, 640 / Math.max(video.videoWidth, video.videoHeight));
          canvas.width = Math.round(video.videoWidth * scale);
          canvas.height = Math.round(video.videoHeight * scale);
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          thumbSrc = canvas.toDataURL('image/jpeg', 0.85);
        } else {
          thumbSrc = null;
        }
        // Unload the probe video (the file stays available through its object URL).
        video.removeAttribute('src');
        video.load();
        _continue();
      }, { once: true });
      // A video the browser can't decode never seeks, which silently dropped the file.
      // Add it anyway, just without a thumbnail.
      video.addEventListener('error', () => {
        thumbSrc = null;
        _continue();
      }, { once: true });
      video.src = imageSrc;
      video.currentTime = 0.001;

      function _continue() {
        if (added) {
          return;
        }
        added = true;
        const { sounds } = Player.posts.getSounds(
          file.name,
          imageSrc,
          null,
          thumbSrc,
          null,
          true,
        );
        // getSounds only picks the thumbnail for URLs ending in .webm/.mp4, and a blob:
        // URL doesn't, so a local video's image would be the video itself, which an <img>
        // shows as broken. Use the extracted frame (or the placeholder without one).
        const isVideoFile = type === 'video/webm' || type === 'video/mp4';
        sounds.forEach((sound) => Player.add({ ...sound, local: true, type, ...(isVideoFile && { imageOrThumb: thumbSrc, thumb: thumbSrc }) }));
      }
    });
  },

  selectLocalFiles() {
    Player.$(`.${ns}-add-local-file-input`).click();
  },

  /**
   * Remove a sound
   */
  /**
   * Remove several sounds. If the playing one is among them, playback moves past all of
   * them at once instead of onto another that's about to go.
   */
  removeAll(sounds, opts) {
    sounds.forEach(sound => sound._removing = true);
    try {
      sounds.forEach(sound => Player.playlist.remove(sound, opts));
    } finally {
      sounds.forEach(sound => delete sound._removing);
    }
  },

  remove(sound, { temporary } = {}) {
    // Accept the sound object or id
    if (typeof sound !== 'object') {
      sound = Player.sounds.find((s) => s.id === '' + sound);
    }
    const index = Player.sounds.indexOf(sound);
    // Remember what the user removed so parsing the posts again (a setting change, a
    // thread update, a re-inserted post) doesn't bring it back, and so it can be restored.
    // Filters and settings that remove sounds temporarily don't count, and local files
    // can't come back (their object URL is released below).
    const userRemoved = !!sound && !temporary && !Player._applyingFilters;
    userRemoved && !sound.local && Player.playlist._removed.set(sound.id, sound);

    // If the playing sound is being removed then play the next sound.
    if (Player.playing === sound) {
      // A play still waiting for a sound webm to load counts as playing.
      Player.next({ force: true, paused: Player.audio.paused && !Player.actions._pendingPlay });
      // Nothing else to move to (it was the only sound, the last one with repeat off, or
      // every other sound is dead). Stop instead of playing a sound that's left the list.
      Player.playing === sound && Player.stop();
    }
    // Remove the sound from the the list and play order.
    index > -1 && Player.sounds.splice(index, 1);

    // A removed local file's object URL can go once no other sound uses it (a file can hold
    // several sounds). Not for temporary removals, which can bring the sound back.
    if (userRemoved && sound.local && !Player.sounds.some(s => s.image === sound.image) && /^blob:/.test(sound.image)) {
      URL.revokeObjectURL(sound.image);
    }
    // Remove the item from the list.
    const item = sound && Player.$(`.${ns}-list-item[data-id="${sound.id}"]`);
    item && Player.$(`.${ns}-list-container`).removeChild(item);
    // Update the post's play link (applyFilters does this itself once it's done).
    sound && sound.post && !Player._applyingFilters && Player.posts.updateButtons(sound.post);
    sound && Player.trigger('remove', sound);
  },

  /**
   * Put sounds the user removed back in the playlist, in their place: a post's, or all of
   * them when no post is given. Returns how many came back.
   */
  restoreRemoved(postId) {
    const restored = [];
    Player.playlist._removed.forEach((sound, id) => {
      if ((postId == null || sound.post === String(postId)) && Player.playlist._restorable(sound)) {
        Player.playlist._removed.delete(id);
        restored.push(sound);
      }
    });
    let filtered = false;
    restored.forEach(sound => {
      sound.playing = false;
      // The Fatbox rerouter may have been turned on or off since it was removed.
      typeof sound._origSrc === 'string' && (sound.src = Player.posts.rerouteSrc(sound._origSrc));
      // Coming back is a fresh try.
      delete sound.error;
      // Filters or allowed hosts changed since then apply as they would to a new post.
      sound.disallow = Player.disallowedSound(sound);
      if (!sound.disallow) {
        Player.add(sound);
      } else if (!sound.disallow.invalid) {
        Player.filteredSounds.push(sound);
        filtered = true;
      }
    });
    new Set(restored.map(sound => sound.post)).forEach(post => post && Player.posts.updateButtons(post));
    filtered && Player.trigger('filters-applied');
    return restored.length;
  },

  /**
   * How many sounds the user removed that can be restored: a post's, or all of them.
   */
  removedCount(postId) {
    let count = 0;
    Player.playlist._removed.forEach(sound => (postId == null || sound.post === postId) && Player.playlist._restorable(sound) && count++);
    return count;
  },

  /**
   * A removed video without a sound only comes back while Include Video allows videos.
   */
  _restorable(sound) {
    return !sound.standaloneVideo || sound.local || Player.posts.videosAllowed();
  },

  toggleRepeat() {
    const values = ['all', 'one', 'none'];
    const current = values.indexOf(Player.config.repeat);
    Player.set('repeat', values[(current + 4) % 3]);
  },

  toggleShuffle() {
    Player.set('shuffle', !Player.config.shuffle);
  },

  _handleShuffle() {
    // Update the play order.
    if (!Player.config.shuffle) {
      Player.sounds.sort((a, b) => Player.compareIds(a.id, b.id));
    } else {
      const sounds = Player.sounds;
      for (let i = sounds.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sounds[i], sounds[j]] = [sounds[j], sounds[i]];
      }
    }
    Player.trigger('order');
  },

  /**
   * Handle an playlist item being clicked. Either open/close the menu or play the sound.
   */
  handleSelect(e) {
    // Ignore if a link was clicked.
    if (e.target.nodeName === 'A' || e.target.closest('a')) {
      return;
    }
    const id = e.currentTarget.getAttribute('data-id');
    const sound = id && Player.sounds.find((sound) => sound.id === id);
    sound && Player.play(sound);
  },

  /**
   * Display an item menu.
   */
  handleItemMenu(e, id) {
    const sound = Player.sounds.find((s) => s.id === id);

    // Add row item menus to the list container. Append to the container otherwise.
    const listContainer = e.currentTarget.closest(`.${ns}-list-container`);
    const parent = listContainer || Player.container;

    // Create the menu.
    const html = itemMenuTemplate({ sound, postIdPrefix });
    const dialog = _.element(html, parent);
    const relative = e.currentTarget.classList.contains(
      `${ns}-item-menu-button`,
    )
      ? e.currentTarget
      : e;
    Player.display.showMenu(relative, dialog, parent);
  },

  /**
   * Toggle the hoverImages setting
   */
  toggleHoverImages(e) {
    e && e.preventDefault();
    Player.set('hoverImages', !Player.config.hoverImages);
  },

  /**
   * Only show the hover image with the setting enabled, no item menu open, and nothing being dragged.
   */
  setHoverImageVisibility() {
    const container = Player.$(`.${ns}-player`);
    const hideImage =
      !Player.config.hoverImages ||
      Player.playlist._dragging ||
      container.querySelector(`.${ns}-menu`);
    container.classList[hideImage ? 'add' : 'remove'](`${ns}-hide-hover-image`);
  },

  /**
   * Set the displayed hover image and reposition.
   */
  updateHoverImage(e) {
    const id = e.currentTarget.getAttribute('data-id');
    const sound = Player.sounds.find((sound) => sound.id === id);
    if (!sound || !sound.thumb) {
      return Player.playlist.removeHoverImage();
    }
    Player.playlist.hoverImage.style.display = 'block';
    Player.playlist.hoverImage.setAttribute('src', sound.thumb);
    Player.playlist.positionHoverImage(e);
  },

  /**
   * Reposition the hover image to follow the cursor.
   */
  positionHoverImage(e) {
    const { width, height } =
      Player.playlist.hoverImage.getBoundingClientRect();
    const maxX = document.documentElement.clientWidth - width - 5;
    Player.playlist.hoverImage.style.left =
      Math.min(e.clientX, maxX) + 5 + 'px';
    Player.playlist.hoverImage.style.top = e.clientY - height - 10 + 'px';
  },

  /**
   * Hide the hover image when nothing is being hovered over.
   */
  removeHoverImage() {
    Player.playlist.hoverImage.style.display = 'none';
  },

  /**
   * Start dragging a playlist item.
   */
  handleDragStart(e) {
    // Reordering while a search is active would splice Player.sounds at positions
    // derived from the full array, but only the matching rows are in the DOM — so the
    // array order would diverge from what the user sees. Disable reorder during search.
    if (Player.playlist._lastSearch) {
      return;
    }
    Player.playlist._dragging = e.currentTarget;
    Player.playlist.setHoverImageVisibility();
    e.currentTarget.classList.add(`${ns}-dragging`);
    const img = document.createElement('img');
    img.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    img.opacity = 0;
    e.dataTransfer.setDragImage(img, 0, 0);
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData(
      'text/plain',
      e.currentTarget.getAttribute('data-id'),
    );
  },

  /**
   * Swap a playlist item when it's dragged over another item.
   */
  handleDragEnter(e) {
    if (!Player.playlist._dragging) {
      return;
    }
    const moving = Player.playlist._dragging;
    const id = moving.getAttribute('data-id');
    let before = e.target.closest && e.target.closest(`.${ns}-list-item`);
    if (!before || moving === before) {
      return;
    }
    const movingIdx = Player.sounds.findIndex((s) => s.id === id);
    const list = moving.parentNode;

    // If the item is being moved down it needs inserting before the node after the one it's dropped on.
    const position = moving.compareDocumentPosition(before);
    if (position & 0x04) {
      before = before.nextElementSibling;
      // Skip anything that isn't a row (an open row menu lives in the list too).
      while (before && !before.classList.contains(`${ns}-list-item`)) {
        before = before.nextElementSibling;
      }
    }

    // Move the element and sound.
    // If there's nothing to go before then append.
    if (before) {
      const beforeId = before.getAttribute('data-id');
      const beforeIdx = Player.sounds.findIndex((s) => s.id === beforeId);
      const insertIdx = movingIdx < beforeIdx ? beforeIdx - 1 : beforeIdx;
      list.insertBefore(moving, before);
      Player.sounds.splice(insertIdx, 0, Player.sounds.splice(movingIdx, 1)[0]);
    } else {
      Player.sounds.push(Player.sounds.splice(movingIdx, 1)[0]);
      list.appendChild(moving);
    }
    // Announced once the drag ends: a re-render now (a row template showing sound-index
    // listens for it) would replace the row being dragged.
    Player.playlist._dragMoved = true;
  },

  /**
   * Start dragging a playlist item.
   */
  handleDragEnd(e) {
    if (!Player.playlist._dragging) {
      return;
    }
    delete Player.playlist._dragging;
    e.currentTarget.classList.remove(`${ns}-dragging`);
    Player.playlist.setHoverImageVisibility();
    if (Player.playlist._dragMoved) {
      Player.playlist._dragMoved = false;
      Player.trigger('order');
    }
  },

  /**
   * Scroll to the playing item, unless there is an open menu in the playlist.
   */
  scrollToPlaying(type = 'center') {
    if (Player.$(`.${ns}-list-container .${ns}-menu`)) {
      return;
    }
    const playing = Player.$(`.${ns}-list-item.playing`);
    playing && playing.scrollIntoView({ block: type });
  },

  /**
   * Remove any user filtered items from the playlist.
   */
  applyFilters() {
    const wasApplyingFilters = Player._applyingFilters;
    Player._applyingFilters = true;
    try {
      // Snapshot filteredSounds BEFORE Phase A pushes to it, so Phase B doesn't re-check
      // sounds Phase A just decided as disallowed.
      const filteredSnapshot = Array.from(Player.filteredSounds);

      // Phase A: partition Player.sounds into kept / newly-filtered.
      const newlyFiltered = [];
      Player.sounds.forEach((sound) => {
        // Local files were added without these checks (a blob: URL has no host to allow),
        // so filters and allowed hosts don't apply to them.
        sound.disallow = !sound.local && Player.disallowedSound(sound);
        if (sound.disallow) {
          newlyFiltered.push(sound);
        }
      });

      // Phase B: partition the pre-Phase-A filteredSounds into stillFiltered / newlyAllowed.
      const stillFiltered = [];
      const newlyAllowed = [];
      filteredSnapshot.forEach((sound) => {
        sound.disallow = Player.disallowedSound(sound);
        if (sound.disallow) {
          stillFiltered.push(sound);
        } else {
          newlyAllowed.push(sound);
        }
      });

      // Apply Phase A: remove newlyFiltered from Player.sounds (the DOM + Player.next
      // bookkeeping lives in playlist.remove). Don't call updateButtons yet —
      // getFilters reads Player.filteredSounds which won't include these sounds until
      // the rebuild below.
      Player.playlist.removeAll(newlyFiltered);

      // Apply Phase B: add newlyAllowed back to Player.sounds.
      newlyAllowed.forEach((sound) => {
        Player.playlist.add(sound);
      });

      // Rebuild Player.filteredSounds = stillFiltered ∪ newlyFiltered (preserve array
      // identity in case anything holds a reference). Iterative push to avoid the
      // engine-limited spread argument count on extreme inputs.
      Player.filteredSounds.length = 0;
      for (const s of stillFiltered) Player.filteredSounds.push(s);
      for (const s of newlyFiltered) Player.filteredSounds.push(s);

      // Now that filteredSounds is correct, refresh per-post UI for every sound that
      // changed buckets (so getFilters() reflects the post-move state).
      newlyFiltered.forEach((sound) => Player.posts.updateButtons(sound.post));
      newlyAllowed.forEach((sound) => Player.posts.updateButtons(sound.post));

      Player.trigger('filters-applied');
    } finally {
      Player._applyingFilters = wasApplyingFilters;
    }
  },

  // Add a filter.
  addFilter(filter) {
    filter && Player.set('filters', Player.config.filters.concat(filter));
  },

  /**
   * Search the playlist
   */
  _handleSearch(e) {
    Player.playlist.search(e.currentTarget.value.toLowerCase());
  },

  search(v) {
    // Matching is on lowercased text, as the search box lowercases what's typed; do the
    // same for a value passed in (the PlayerEvent API).
    v = typeof v === 'string' ? v.toLowerCase() : v;
    const lastSearch = Player.playlist._lastSearch;
    Player.playlist._lastSearch = v;
    if (v === lastSearch) {
      return;
    }
    Player.playlist.render();
  },

  matchesSearch(sound) {
    const v = Player.playlist._lastSearch;
    if (!v) return true;
    // Always include the currently-playing sound so its row stays in the DOM
    // (the .playing highlight + the playsound row-replace would otherwise have
    // nothing to target when search hides the row).
    if (sound === Player.playing) return true;
    // Cache the lowercased searchable text on the sound; the cache key is
    // sound.src so the rerouter mutation auto-invalidates. Saves an N×4
    // toLowerCase allocation per keystroke for large threads.
    let tokens = sound._searchTokens;
    if (!tokens || tokens._src !== sound.src) {
      tokens = sound._searchTokens = {
        _src: sound.src,
        title: (sound.title || '').toLowerCase(),
        post: (sound.post || '').toLowerCase(),
        src: (sound.src || '').toLowerCase(),
        origSrc: (typeof sound._origSrc === 'string' && sound._origSrc !== sound.src)
          ? sound._origSrc.toLowerCase()
          : null
      };
    }
    return tokens.title.includes(v)
      || (tokens.post && tokens.post.includes(v))
      || tokens.src.includes(v)
      || (tokens.origSrc && tokens.origSrc.includes(v));
  },

  /**
   * Re-render a single playlist row in place — e.g. after its dead-link mark
   * (sound.error) is set or cleared. No-op if the player isn't open or the row isn't
   * currently rendered (e.g. filtered out by an active search).
   */
  refreshRow(sound) {
    if (!sound || !Player.container) {
      return;
    }
    const el = Player.$(`.${ns}-list-item[data-id="${sound.id}"]`);
    const newItem = el && Player.playlist.listTemplate({ sounds: [ sound ] });
    if (el && newItem && newItem.trim()) {
      _.element(newItem, el, 'beforebegin');
      el.parentNode.removeChild(el);
    }
  },

  /**
   * The playing row's loading bars, at how much has loaded so far.
   */
  loadingBars() {
    if (!Player.config.rowLoadingBars) {
      return '';
    }
    const state = Player.playlist._loadingState();
    const hidden = `${ns}-row-loading-hidden`;
    return `<div class="${ns}-row-loading ${state.faded ? `${ns}-row-loaded` : ''}" aria-hidden="true">`
      + `<div class="${ns}-row-loading-video ${state.showVideo ? '' : hidden}" style="width: ${state.video * 100}%"></div>`
      + `<div class="${ns}-row-loading-audio ${state.showAudio ? '' : hidden}" style="width: ${state.audio * 100}%"></div>`
      + '</div>';
  },

  /**
   * Update the playing row's loading bars. Returns whether everything has loaded.
   */
  updateLoadingBars() {
    const state = Player.playlist._loadingState();
    const bars = Player.container && Player.$(`.${ns}-list-item.playing .${ns}-row-loading`);
    if (bars) {
      const [ video, audio ] = bars.children;
      video.style.width = `${state.video * 100}%`;
      audio.style.width = `${state.audio * 100}%`;
      video.classList[state.showVideo ? 'remove' : 'add'](`${ns}-row-loading-hidden`);
      audio.classList[state.showAudio ? 'remove' : 'add'](`${ns}-row-loading-hidden`);
      bars.classList[state.faded ? 'add' : 'remove'](`${ns}-row-loaded`);
    }
    return state.done;
  },

  /**
   * How much of the playing sound's video and audio have loaded, from 0 to 1, and which of
   * the two lines to show. A standalone video is both. A sound without a video only has audio.
   *
   * A line only shows for a file that came from the network: one that could play within
   * moments of being set (from the cache, or already preloaded) gets none. Whether the
   * browser is still downloading can't tell them apart, since it also pauses a network
   * download once it has enough buffered ahead. The choice is made once per sound.
   *
   * `faded` is when the shown lines are full; `done` is when everything has loaded.
   */
  _loadingState(start) {
    const playing = Player.playing;
    if (!playing) {
      return { video: 0, audio: 0, showVideo: false, showAudio: false, faded: false, done: false };
    }
    let track = Player.playlist._loading;
    if (!track || track.sound !== playing) {
      track = Player.playlist._loading = { sound: playing, start: start || performance.now(), decided: false, video: false, audio: false, readyAt: {} };
      Player.playlist._watchReady(track, 'audio', Player.audio);
      Player.isVideo && Player.playlist._watchReady(track, 'video', Player.video);
    }
    const hasVideo = !!Player.isVideo;
    const video = hasVideo ? Player.playlist._loadedRatio(Player.video) : 0;
    const audio = Player.playlist._loadedRatio(Player.audio);
    if (!track.decided && performance.now() - track.start >= Player.playlist.LOADING_GRACE_MS) {
      track.decided = true;
      const fromNetwork = kind => !(track.readyAt[kind] - track.start < Player.playlist.CACHED_READY_MS);
      track.video = hasVideo && video < 1 && fromNetwork('video');
      track.audio = audio < 1 && fromNetwork('audio');
    }
    return {
      video,
      audio,
      showVideo: track.video,
      showAudio: track.audio,
      faded: track.decided && (!track.video || video === 1) && (!track.audio || audio === 1),
      done: (!hasVideo || video === 1) && audio === 1
    };
  },

  // How long after a sound starts to decide which lines to show.
  LOADING_GRACE_MS: 500,
  // A file that can play within this long of being set didn't come from the network.
  // (Decoder start-up alone takes 100ms or more, so a cache hit isn't instant.)
  CACHED_READY_MS: 250,

  /**
   * Note when a media element first has enough data to play, for _loadingState. The event's
   * own timestamp is used, so a busy page doesn't make a cached file look slow.
   */
  _watchReady(track, kind, media) {
    if (!media) {
      return;
    }
    if (media.readyState >= media.HAVE_FUTURE_DATA) {
      track.readyAt[kind] = performance.now();
      return;
    }
    media.addEventListener('canplay', e => {
      Player.playlist._loading === track && track.readyAt[kind] === undefined && (track.readyAt[kind] = e.timeStamp);
    }, { once: true });
  },

  /**
   * The share of a media element's duration that has been downloaded.
   */
  _loadedRatio(media) {
    const duration = media && media.duration;
    if (!duration || !isFinite(duration) || !media.getAttribute('src')) {
      return 0;
    }
    let loaded = 0;
    for (let i = 0; i < media.buffered.length; i++) {
      loaded += media.buffered.end(i) - media.buffered.start(i);
    }
    const ratio = loaded / duration;
    // Durations are estimates for some formats, so the buffered end can stop just short.
    return ratio > 0.995 ? 1 : Math.max(0, ratio);
  },

  toggleSearch(show) {
    const input = Player.$(`.${ns}-playlist-search`);
    !show && Player.playlist._lastSearch && Player.playlist.search();
    // Hiding clears the search, so clear the box too rather than show a query that isn't applied.
    !show && (input.value = '');
    input.style.display = show ? null : 'none';
    show && input.focus();
  },

  /**
   * Attempt to load info tags from a sound source.
   * @param {String} id The sound id
   */
  loadTags(id) {
    const sound = Player.sounds.find((s) => s.id === id);
    // Fall out if they've already been loaded.
    if (sound.tags) {
      return;
    }
    // Wait a bit before fetching to ignore the mouse going across. Clear any pending
    // timer for this id first so rapid re-hover doesn't orphan an unclearable handle
    // (which would still fire a redundant fetch).
    clearTimeout(Player.playlist.tagLoadTO[id]);
    Player.playlist.tagLoadTO[id] = setTimeout(() => {
      const reader = new jsmediatags.Reader(sound.src);
      // Replace XMLHttpRequest to avoid cors.
      reader._findFileReader().prototype._createXHRObject = () =>
        new xhrReplacer.GM();
      // Load and read the tags.
      reader.read({
        onSuccess: handleTags,
        onError: handleTags,
      });
    }, 150);

    function handleTags(data) {
      // Store all the string tags that jsmediatags has set.
      sound.tags =
        data &&
        Object.entries(data.tags || {}).reduce((tags, [name, value]) => {
          typeof value === 'string' && (tags[name] = value);
          return tags;
        }, {});
      Player.trigger('tags-loaded', sound);
    }
  },

  /**
   * Cancel a pending of tags for a sond.
   * @param {String} id The sound id
   */
  abortTags(id) {
    clearTimeout(Player.playlist.tagLoadTO[id]);
    delete Player.playlist.tagLoadTO[id];
  },

  /**
   * Set a few initial values to being resizing the playlist image.
   */
  expandImageStart(e) {
    if (
      e.button !== 0 ||
      Player.isHidden ||
      Player.config.viewStyle !== 'playlist'
    ) {
      // Don't start a drag: expandImage would resize from stale or undefined start values
      // (e.g. a right-button drag).
      e.preventDrag = true;
    } else {
      Player.$(`.${ns}-image-link`).style.cursor = 'ns-resize';
      Player._imageResizeStartY = ((e.touches && e.touches[0]) || e).clientY;
      Player._imageResizeStartHeight = Player.config.imageHeight;
      Player._imageResized = false;
      Player._imageReizeMaxHeight =
        Player.$(`.${ns}-player`).getBoundingClientRect().height -
        Player.$(`.${ns}-controls`).getBoundingClientRect().height;
    }
  },

  /**
   * Resize the playlist image.
   */
  expandImage(e) {
    if (!Player.isHidden && Player.config.viewStyle === 'playlist') {
      Player._imageResized = true;
      const clientY = ((e.touches && e.touches[0]) || e).clientY;
      const height =
        Player._imageResizeStartHeight + clientY - Player._imageResizeStartY;
      Player.$(`.${ns}-image-link`).style.height =
        Math.min(Math.max(125, height), Player._imageReizeMaxHeight) + 'px';
    }
  },

  /**
   * Keep the image within the player.
   */
  setImageHeight(opts) {
    if (!Player.isHidden && Player.config.viewStyle === 'playlist') {
      Player.$(`.${ns}-image-link`).style.cursor = null;
      const imageLink = Player.$(`.${ns}-image-link`);
      const height = parseInt(imageLink.style.height);
      const maxHeight =
        Player.$(`.${ns}-player`).getBoundingClientRect().height -
        Player.$(`.${ns}-controls`).getBoundingClientRect().height;
      const finalHeight = Math.max(125, Math.min(height, maxHeight));
      imageLink.style.height = finalHeight + 'px';
      // Saved when the image itself was resized (the pointdragend event), not when the
      // player was.
      !(opts && opts.save === false) && Player.set('imageHeight', finalHeight);
    }
  },

  /**
   * If a click on the image link was after resizing then don't open the image.
   */
  expandImageClick(e) {
    !Player.isHidden &&
      Player.config.viewStyle === 'playlist' &&
      Player._imageResized &&
      e.preventDefault();
  },

  /**
   * Preload a sound.
   */
  async preload(sound) {
    // One element, reused: a new Audio per call (every track change and every drag step
    // fires this) left each one downloading. Setting a new src abandons the old load.
    if (sound.standaloneVideo || sound.error) {
      return;
    }
    const audio = Player.playlist._preloader || (Player.playlist._preloader = new Audio());
    audio.preload = 'auto';
    if (audio.src !== sound.src) {
      audio.src = sound.src;
    }
  },
};


/***/ },

/***/ "./src/components/playlist/templates/item_menu.tpl"
/*!*********************************************************!*\
  !*** ./src/components/playlist/templates/item_menu.tpl ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `<div class="${ns}-menu dialog ${ns}-dialog" id="menu" tabindex="0" data-type="post" style="position: fixed;">
	${data.sound.post ? `<a class="entry" href="#${_.escAttr(data.postIdPrefix + data.sound.post)}">Show Post</a>` : ''}
	<div class="entry has-submenu" @entry-focus='playlist.loadTags("${_.escAttr(data.sound.id, true)}")' @entry-blur='playlist.abortTags("${_.escAttr(data.sound.id, true)}")'>
		Details
		<div class="dialog submenu tags-dialog" @click.stop="" data-sound-id="${_.escAttr(data.sound.id)}" style="inset: 0px auto auto 100%;">
			${Player.playlist.tagsDialogTemplate(data.sound)}
		</div>
	</div>
	<div class="entry has-submenu">
		Open
		<div class="dialog submenu" style="inset: 0px auto auto 100%;">
			<a class="entry" href="${_.escAttr(data.sound.image)}" target="_blank">Image</a>
			<a class="entry" href="${_.escAttr(data.sound.src)}" target="_blank">Sound</a>
		</div>
	</div>
	<div class="entry has-submenu">
		Download
		<div class="dialog submenu" style="inset: 0px auto auto 100%;">
			<a class="entry" href="#" @click.prevent='tools.download("${_.escAttr(data.sound.image, true)}", "${_.escAttr(data.sound.filename, true)}")'>Image</a>
			<a class="entry" href="#" @click.prevent='tools.download("${_.escAttr(data.sound.src, true)}", "${_.escAttr(data.sound.name || data.sound.title, true)}")'>Sound</a>
			${Player.tools._encoderAvailable() && !data.sound.standaloneVideo ? `<a class="entry" href="#" @click.prevent='tools.downloadVideo("${_.escAttr(data.sound.id, true)}")'>Video</a>` : ''}
		</div>
	</div>
	<div class="entry has-submenu">
		Filter
		<div class="dialog submenu" style="inset: 0px auto auto 100%;">
			${data.sound.imageMD5 ? `<a class="entry" href="#" @click.prevent='playlist.addFilter("${_.escAttr(data.sound.imageMD5, true)}")'>Image</a>` : ''}
			<a class="entry" href="#" @click.prevent='playlist.addFilter("${_.escAttr(data.sound._origSrc || data.sound.src, true).replace(/^(https?\:)?\/\//, '')}")'>Sound</a>
		</div>
	</div>
	<a class="entry" href="#" @click.prevent='remove("${_.escAttr(data.sound.id, true)}")'>Remove</a>
</div>`


/***/ },

/***/ "./src/components/playlist/templates/list.tpl"
/*!****************************************************!*\
  !*** ./src/components/playlist/templates/list.tpl ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => (data.sounds || Player.sounds).map(sound => !Player.playlist.matchesSearch(sound) ? '' : `
	<div
		class="${ns}-list-item ${ns}-row ${sound.playing ? 'playing' : ''} ${sound.error ? `${ns}-dead` : ''} ${ns}-align-center ${ns}-hover-trigger"
		${sound.error ? 'title="This sound failed to load and is skipped during playback. Click to retry."' : ''}
		@click="playlist.handleSelect"
		@dragstart.passive="playlist.handleDragStart"
		@dragenter.prevent="playlist.handleDragEnter"
		@dragend.prevent="playlist.handleDragEnd"
		@dragover.prevent=""
		@drop.prevent=""
		@contextmenu.stop.prevent='playlist.handleItemMenu($event, "${_.escAttr(sound.id, true)}")'
		@mouseenter="playlist.updateHoverImage"
		@mouseleave="playlist.removeHoverImage"
		@mousemove.passive="playlist.positionHoverImage"
		data-id="${_.escAttr(sound.id)}"
		draggable="true"
	>
		${sound.playing ? Player.playlist.loadingBars() : ''}
		${Player.userTemplate.build({
			template: Player.config.rowTemplate,
			location: 'item-' + sound.id,
			sound,
			outerClass: `${ns}-col-auto`
		})}
	</div>`
).join('')


/***/ },

/***/ "./src/components/playlist/templates/player.tpl"
/*!******************************************************!*\
  !*** ./src/components/playlist/templates/player.tpl ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => `<a
	class="${ns}-image-link"
	target="_blank"
	style="height: ${Player.config.imageHeight}px"
	@pointdragstart.prevent="playlist.expandImageStart"
	@pointdrag.move.prevent="playlist.expandImage"
	@pointdragend.prevent="playlist.setImageHeight"
	@click="playlist.expandImageClick"
>
	<div class="fullscreen-details"></div>
	<div class="image-color-overlay"></div>
	<img class="${ns}-background-image"></img>
	<div class="${ns}-image-transparent-bg"></div>
	<img id="fcspImage" class="${ns}-image" src="data:image/svg+xml;base64,${btoa(Icons.fcSounds)}"></img>
	<video class="${ns}-video" @playing='controls.syncVideo' loop="true"></video>
</a>
${Player.controls.template({
	audio: Player.audio,
	audioId: Player.audio.dataset.id,
	actions: Player.controls.actions
})}
<div class="${ns}-under-image">
	<input
		type="input"
		class="${ns}-playlist-search"
		@input="playlist._handleSearch"
		style="min-width: 100%; box-sizing: border-box; ${!Player.config.showPlaylistSearch ? 'display: none;' : ''}"
		placeholder="Search"
	/>
	<div class="${ns}-list-container">
		${Player.playlist.listTemplate()}
	</div>
</div>
<img class="${ns}-hover-image">`

/***/ },

/***/ "./src/components/playlist/templates/tags_dialog.tpl"
/*!***********************************************************!*\
  !*** ./src/components/playlist/templates/tags_dialog.tpl ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => {
	if (!data.tags) {
		return '<div class="entry">Loading</div>';
	}
	const tagsArr = Object.entries(data.tags).filter(([ name ]) => name);
	if (!tagsArr.length) {
		return '<div class="entry">No data</div>';
	}
	// Escape both the tag name and value: ID3 tags come from arbitrary hosted audio
	// files and a malicious TIT2/COMM value would otherwise execute as HTML.
	return tagsArr.map(([ name, value ]) => `<div class="entry">
		<span class="tag-name">
			${_.escHTML(name[0].toUpperCase() + name.slice(1))}:
		</span>
		${_.escHTML(value)}
	</div>`).join('');
}


/***/ },

/***/ "./src/components/position/index.js"
/*!******************************************!*\
  !*** ./src/components/position/index.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const selectors = __webpack_require__(/*! ../../selectors */ "./src/selectors.js");

module.exports = {
  initialize() {
    // Set the header offsets for use in templates.
    const { top, bottom } = Player.position.getHeaderOffset();
    Player.config.offsetTop = top + 'px';
    Player.config.offsetBottom = bottom + 'px';

    // Apply the last position/size, and post width limiting, when the player is shown.
    Player.on('show', async function () {
      // NB: persisted format is "left:top" (see stopResize/stopMove) so we destructure
      // in that order. Previous code labelled them `top, left` then passed them to
      // `move(top, left)` which happens to call move(x, y) where x=savedLeft,
      // y=savedTop — accidentally correct via mirrored mislabelling.
      const [ left, top ] = (await GM.getValue('position') || '').split(':');
      const [ width, height ] = (await GM.getValue('size') || '').split(':');
      // Use isFinite + non-empty check so a saved corner like '0:0' (player
      // pinned to top-left) restores correctly instead of being skipped via the
      // falsy-zero short-circuit. size has no '0' case (a 0px window is junk).
      const savedSize = +width && +height;
      savedSize && Player.position.resize(width, height, true);
      if (left !== undefined && left !== '' && top !== undefined && top !== ''
          && isFinite(+left) && isFinite(+top)) {
        Player.position.move(+left, +top);
      } else {
        // The first time, keep the default position clear of the page's header.
        Player.position.move(Player.container.offsetLeft, Player.container.offsetTop);
      }
      // Without a saved size, the default one, fitted to the window once placed (on a narrow
      // phone its header buttons were off-screen). Not its current size: a theme's layout
      // can stretch that, and it was measured where it was last shown.
      savedSize || Player.position.resize(360, 360);

      if (Player.config.limitPostWidths) {
        Player.position.setPostWidths();
        window.addEventListener('scroll', Player.position._scheduleWidths, { passive: true });
      }
    });

    // Put the saved size back after a temporary one, when the view or theme changes (the
    // Fixed Playlist width handle's size carried over to the default layout, cut off).
    Player.on([ 'view', 'config:selectedTheme' ], Player.position.restoreSize);

    // Remove post width limiting when the player is hidden.
    Player.on('hide', function () {
      Player.position.setPostWidths();
      window.removeEventListener('scroll', Player.position._scheduleWidths, { passive: true });
    });

    // Reapply the post width limiting config values when they're changed.
    Player.on('config', prop => {
      if (prop === 'limitPostWidths' || prop === 'minPostWidth') {
        window.removeEventListener('scroll', Player.position._scheduleWidths, { passive: true });
        Player.position.setPostWidths();
        if (Player.config.limitPostWidths) {
          window.addEventListener('scroll', Player.position._scheduleWidths, { passive: true });
        }
      }
    });

    // Remove post width limit from inline quotes. Only when nodes were added, and at most
    // once a frame: this observes the whole page, which changes constantly.
    let resetFrame = null;
    new MutationObserver(function (mutations) {
      if (resetFrame || !mutations.some(m => m.addedNodes.length)) {
        return;
      }
      resetFrame = requestAnimationFrame(() => {
        resetFrame = null;
        document.querySelectorAll('#hoverUI .postContainer, .inline .postContainer, .backlink_container article').forEach(post => {
          post.style.maxWidth && (post.style.maxWidth = null);
          post.style.minWidth && (post.style.minWidth = null);
        });
      });
    }).observe(document.body, {
      childList: true,
      subtree: true
    });

    // Listen for changes from other tabs. Validate the remote string the same way the
    // `show` restore does, so a malformed/empty/deleted value can't set "NaNpx".
    Player.syncTab('position', value => {
      const [ left, top ] = (value || '').split(':');
      // Clamp to this window: the position may come from a larger one.
      if (isFinite(+left) && left !== '' && isFinite(+top) && top !== '') {
        Player.position.move(+left, +top);
      }
    });
    // Keep the player on screen when the window shrinks. Not saved, so a larger window
    // still gets the saved position back.
    window.addEventListener('resize', _.debounce(() => {
      if (!Player.container || Player.isHidden || Player.config.viewStyle === 'fullscreen') {
        return;
      }
      const { width, height } = Player.container.getBoundingClientRect();
      Player.position.move(Player.container.offsetLeft, Player.container.offsetTop);
      Player.position.resize(width, height);
    }, 150));
    Player.syncTab('size', value => {
      const [ width, height ] = (value || '').split(':');
      +width && +height && Player.position.resize(width, height, true);
    });
  },

  /**
	 * Applies a max width to posts next to the player so they don't get hidden behind it.
	 */
  setPostWidths() {
    // Posts start at the left, so narrowing them only moves them out from under a player on
    // the right. With the player on the left it squeezed them and they stayed covered.
    const rect = !Player.isHidden && Player.config.limitPostWidths && Player.container.getBoundingClientRect();
    const enabled = !!rect && rect.left + rect.width / 2 > document.documentElement.clientWidth / 2;
    const posts = document.querySelectorAll(selectors.limitWidthOf);
    let limits = [];
    let maxWidthCss = '';
    let minWidthCss = '';

    if (enabled) {
      const offset = (document.documentElement.clientWidth - Player.container.offsetLeft) + 10;
      const startY = Player.container.offsetTop;
      const endY = Player.container.getBoundingClientRect().height + startY;
      maxWidthCss = `calc(100% - ${offset}px)`;

      const minWidth = Player.config.minPostWidth;
      // Coerce a bare number/numeric-string to a px value; pass through any string that
      // already includes a CSS unit (e.g. "40em", "300px"). Previous code emitted bare
      // numbers as raw CSS which browsers reject.
      minWidthCss = minWidth == null || minWidth === '' ? '' : String(_.cssLength(minWidth));

      // Read every position before writing any style. Interleaving them forced a layout
      // per post on each call, and this runs on scroll.
      limits = Array.from(posts, post => {
        const rect = post.getBoundingClientRect();
        return rect.bottom > startY && rect.top < endY;
      });
    }

    const limited = Player.position._limitedPosts || (Player.position._limitedPosts = new Set());
    const current = new Set(posts);
    // Posts limited before that no longer match (moved by quote threading, or removed) keep
    // their width otherwise.
    limited.forEach(post => {
      if (!current.has(post)) {
        post.style.maxWidth = post.style.minWidth = '';
        limited.delete(post);
      }
    });
    posts.forEach((post, i) => {
      const maxWidth = limits[i] ? maxWidthCss : '';
      const minWidth = limits[i] ? minWidthCss : '';
      post.style.maxWidth !== maxWidth && (post.style.maxWidth = maxWidth);
      post.style.minWidth !== minWidth && (post.style.minWidth = minWidth);
      limits[i] ? limited.add(post) : limited.delete(post);
    });
  },

  /**
   * Update post widths at most once a frame (scroll fires far more often).
   */
  _scheduleWidths() {
    if (Player.position._widthsFrame) {
      return;
    }
    Player.position._widthsFrame = requestAnimationFrame(() => {
      Player.position._widthsFrame = null;
      Player.position.setPostWidths();
    });
  },

  /**
	 * Handle the user grabbing the expander.
	 */
  initResize(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }
    Player._startX = (e.touches && e.touches[0] || e).clientX;
    Player._startY = (e.touches && e.touches[0] || e).clientY;
    let { width, height } = Player.container.getBoundingClientRect();
    Player._startWidth = width;
    Player._startHeight = height;
    Player._startTop = Player.container.offsetTop;
    Player._startLeft = Player.container.offsetLeft;
    const dir = e.currentTarget.dataset.direction || 'se';
    Player._resizeX = dir.includes('e') ? 1 : dir.includes('w') ? -1 : 0;
    Player._resizeY = dir.includes('s') ? 1 : dir.includes('n') ? -1 : 0;
    Player._resizeMoveX = dir.includes('w') ? -1 : 0;
    Player._resizeMoveY = dir.includes('n') ? -1 : 0;
    Player._resizeTarget = e.currentTarget;
  },

  /**
	 * Handle the user dragging the expander.
	 */
  doResize(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }

    const xDelta = ((e.touches && e.touches[0] || e).clientX - Player._startX) * Player._resizeX;
    const yDelta = ((e.touches && e.touches[0] || e).clientY - Player._startY) * Player._resizeY;
    const reposition = Player._resizeTarget.dataset.bypassPosition !== 'true' && (Player._resizeMoveX || Player._resizeMoveY);

    Player.position.resize(Player._startWidth + xDelta, Player._startHeight + yDelta, reposition || Player._resizeTarget.dataset.allowOffscreen);

    // If the direction is north or east then the player will need moving first.
    if (reposition) {
      Player.position.move(Player._startLeft + (xDelta * Player._resizeMoveX), Player._startTop + (yDelta * Player._resizeMoveY));
    }
  },

  /**
	 * Handle the user releasing the expander.
	 */
  stopResize(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }

    const { width, height } = Player.container.getBoundingClientRect();

    // A handle that doesn't save (the Fixed Playlist theme's width handle) only sizes the
    // player for the current layout: note it, so the saved size comes back on a change.
    Player.position._temporarySize = Player._resizeTarget.dataset.bypassSave === 'true'
      && { view: Player.config.viewStyle, theme: Player.config.selectedTheme };
    if (Player._resizeTarget.dataset.bypassSave !== 'true') {
      GM.setValue('size', width + ':' + height);
      if (Player._resizeMoveX || Player._resizeMoveY) {
        GM.setValue('position', parseInt(Player.container.style.left, 10) + ':' + parseInt(Player.container.style.top, 10));
      }
    }
  },

  /**
	 * Go back to the saved size (or the default one) after a temporary resize.
	 */
  async restoreSize() {
    const temporary = Player.position._temporarySize;
    // Not in fullscreen, where resizing does nothing: keep the note for leaving it. Not when
    // back in the layout the size was made for (leaving fullscreen): it still applies.
    if (!temporary || !Player.container || Player.config.viewStyle === 'fullscreen'
      || (Player.config.viewStyle === temporary.view && Player.config.selectedTheme === temporary.theme)) {
      return;
    }
    Player.position._temporarySize = false;
    const [ width, height ] = (await GM.getValue('size') || '').split(':');
    +width && +height ? Player.position.resize(+width, +height, true) : Player.position.resize(360, 360, true);
  },

  /**
	 * Resize the player.
	 */
  resize(width, height, allowOffscreen) {
    if (!Player.container || Player.config.viewStyle === 'fullscreen') {
      return;
    }
    const { top, bottom } = Player.position.getHeaderOffset();
    // Make sure the player isn't larger than the screen, or going off screen unless allowed.
    height = Math.min(height, document.documentElement.clientHeight - (allowOffscreen ? (top + bottom) : Player.container.offsetTop + bottom));
    width = Math.min(width, document.documentElement.clientWidth - (allowOffscreen ? 0 : Player.container.offsetLeft));

    Player.container.style.width = width + 'px';
    Player.container.style.height = height + 'px';
    Player.controls.preventWrapping();
    // Keep the image within the player, without saving: shrinking the player shouldn't
    // overwrite the chosen image height (and saved on every pointermove).
    Player.playlist.setImageHeight({ save: false });
  },

  /**
	 * Handle the user grabbing the header.
	 */
  initMove(e) {
    if (e.target.nodeName === 'A' || e.target.closest('a') || e.target.classList.contains(`${ns}-expander`)) {
      return e.preventDrag = true;
    }
    try { e.preventDefault(); } catch (e) { /* ignore */ }
    Player.$(`.${ns}-header`).style.cursor = 'grabbing';

    // Try to reapply the current sizing to fix oversized winows.
    const { width, height } = Player.container.getBoundingClientRect();
    Player.position.resize(width, height);

    const clientX = (e.touches && e.touches[0] || e).clientX;
    const clientY = (e.touches && e.touches[0] || e).clientY;
    Player._offsetX = clientX - Player.container.offsetLeft;
    Player._offsetY = clientY - Player.container.offsetTop;
  },

  /**
	 * Handle the user dragging the header.
	 */
  doMove(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }
    const clientX = (e.touches && e.touches[0] || e).clientX;
    const clientY = (e.touches && e.touches[0] || e).clientY;
    Player.position.move(clientX - Player._offsetX, clientY - Player._offsetY);
  },

  /**
	 * Handle the user releasing the heaer.
	 */
  stopMove(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }
    Player.$(`.${ns}-header`).style.cursor = null;
    GM.setValue('position', parseInt(Player.container.style.left, 10) + ':' + parseInt(Player.container.style.top, 10));
  },

  /**
	 * Move the player.
	 */
  move(x, y, allowOffscreen) {
    if (!Player.container) {
      return;
    }

    const { top, bottom } = Player.position.getHeaderOffset();

    // Ensure the player stays fully within the window.
    const { width, height } = Player.container.getBoundingClientRect();
    const maxX = allowOffscreen ? Infinity : document.documentElement.clientWidth - width;
    const maxY = allowOffscreen ? Infinity : document.documentElement.clientHeight - height - bottom;

    // Move the window.
    Player.container.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
    Player.container.style.top = Math.max(top, Math.min(y, maxY)) + 'px';

    // Once a frame: this runs on every pointermove while dragging, and the update lays out
    // every post in the thread.
    if (Player.config.limitPostWidths) {
      Player.position._scheduleWidths();
    }
  },

  /**
	 * Get the offset from the top or bottom required for the 4chan X header.
	 */
  getHeaderOffset() {
    const docClasses = document.documentElement.classList;
    let top = 0;
    let bottom = 0;
    // Count a fixed bar on whichever edge it actually is: 4chan-neXT's phone layouts move
    // the header to the other edge (without changing the html classes) and add a bar of
    // their own.
    const reserve = el => {
      const rect = el && el.getClientRects().length && el.getBoundingClientRect();
      if (rect && rect.height) {
        rect.top + rect.height / 2 < window.innerHeight / 2 ? (top += rect.height) : (bottom += rect.height);
      }
    };
    docClasses.contains('fixed') && reserve(document.querySelector('#header-bar'));
    // 4chan-neXT's mobile bar, and native 4chan's mobile nav (which covered the player's
    // header, leaving no way to drag it out).
    [ 'mobile-bar', 'boardNavMobile' ].forEach(id => {
      const bar = document.getElementById(id);
      bar && getComputedStyle(bar).position === 'fixed' && reserve(bar);
    });
    return { top, bottom };
  },

  /**
	 * Position a fixed item with respect to an element or event.
	 */
  showRelativeTo(item, relative) {
    // Try and put the item aligned to the left under the relative.
    const relRect = relative instanceof Node
      ? relative.getBoundingClientRect()
      : { top: relative.clientY, left: relative.clientX, width: 0, height: 0 };
    item.style.top = relRect.top + relRect.height + 'px';
    item.style.left = relRect.left + 'px';

    // Reposition around the relative if the item is off screen.
    const { width: width, height: height } = item.getBoundingClientRect();
    if (relRect.left + width > document.documentElement.clientWidth) {
      item.style.left = (relRect.left + relRect.width - width) + 'px';
    }
    const { top: headerTop, bottom: headerBottom } = Player.position.getHeaderOffset();
    if (relRect.top + relRect.height + height > document.documentElement.clientHeight - headerBottom) {
      item.style.top = (relRect.top - height) + 'px';
    }
    // Never past the window's edges (on a narrow screen the colour picker opened half
    // off the left side).
    const clamp = (value, min, max) => Math.max(min, Math.min(value, Math.max(min, max)));
    item.style.left = clamp(parseFloat(item.style.left), 0, document.documentElement.clientWidth - width) + 'px';
    item.style.top = clamp(parseFloat(item.style.top), headerTop, document.documentElement.clientHeight - headerBottom - height) + 'px';
  }
};


/***/ },

/***/ "./src/components/posts/index.js"
/*!***************************************!*\
  !*** ./src/components/posts/index.js ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const selectors = __webpack_require__(/*! ../../selectors */ "./src/selectors.js");
const hosts = __webpack_require__(/*! ../../hosts */ "./src/hosts.js");

const protocolRE = /^(https?:)?\/\//;
// A tag closes with the bracket it opened with, so "[sound=…song(1).mp3]" keeps the ")" in
// its link. (Any closing bracket ended it before.) Inside, other brackets only come in
// balanced pairs, so a body can't run past a stray closer or into the next tag; failing that
// the first closing bracket of any kind ends it, as before. Groups: name, then host and
// link for [ ], ( ), { } or mismatched.
const hostAlternatives = Object.keys(hosts).join('|');
const noBrackets = '[^\\[\\](){}]';
const tagRE = (open, close, others) => `\\${open}(${hostAlternatives})[ =:|$]((?:${noBrackets}|${others.map(([ o, c ]) => `\\${o}${noBrackets}*\\${c}`).join('|')})*)\\${close}`;
const filenameRE = new RegExp('(.*?)(?:'
  + tagRE('[', ']', [ [ '(', ')' ], [ '{', '}' ] ]) + '|'
  + tagRE('(', ')', [ [ '[', ']' ], [ '{', '}' ] ]) + '|'
  + tagRE('{', '}', [ [ '[', ']' ], [ '(', ')' ] ]) + '|'
  + `[[({](${hostAlternatives})[ =:|$](.*?)[\\])}])`, 'gi');
// Hostname-anchored: requires // (or userinfo@) immediately before the matched
// catbox.moe, and a path/port/query/fragment/end immediately after. So substrings
// in paths or query strings don't match, and `xcatbox.moe` doesn't either.
const catboxHostReplaceRE = /(\/\/(?:[^/?#]*@)?(?:[^/?#]*\.)?)catbox\.moe(?=[:/?#]|$)/i;

let localCounter = 0;

// Returns the URL to actually use for `src`, given the user's stored original.
// Hostname-anchored so non-canonical bytes (raw spaces, casing, encoding) elsewhere
// in the URL are preserved verbatim — only the catbox.moe portion of the hostname
// changes. This avoids the URL-roundtrip normalization that would otherwise leave
// sound.src and sound._origSrc differing in more than just the host.
function rerouteSrc(src) {
  // Strict whitelist of "enabled" values. boolean true or the literal string "true" (from a
  // settings import that stringified the boolean) enable; anything else — including string
  // "false"/"False"/"0"/"no", or numeric coercions — leaves src untouched.
  const enabled = Player.config.fatboxRerouter;
  if (!src || (enabled !== true && enabled !== 'true')) return src;
  return src.replace(catboxHostReplaceRE, '$1fatbox.moe');
}

module.exports = {
  rerouteSrc,

  initialize() {
    // "Include Video" applies to the open thread straight away (it needed a reload): drop
    // the thread's standalone videos it no longer allows, then parse the posts again to add
    // newly allowed ones (posts already parsed are skipped).
    Player.on('config:addWebm', () => {
      const allowed = Player.posts.videosAllowed();
      if (!allowed) {
        Player.playlist.removeAll(Player.sounds.filter(s => s.standaloneVideo && !s.local), { temporary: true });
        const filtered = Player.filteredSounds.filter(s => s.standaloneVideo && !s.local);
        // In place: applyFilters keeps this array's identity too.
        filtered.forEach(s => Player.filteredSounds.splice(Player.filteredSounds.indexOf(s), 1));
        filtered.forEach(s => Player.posts.updateButtons(s.post));
      }
      // Removed videos can only be restored while videos are included: update their posts'
      // links and the removed count.
      Player.playlist._removed.forEach(s => s.standaloneVideo && s.post && Player.posts.updateButtons(s.post));
      Player.posts.addPosts(document.body, true);
      Player.trigger('filters-applied');
    });
    Player.on('config:fatboxRerouter', () => {
      // Re-derive src from each sound's stored original. Idempotent and safe to repeat.
      // fatbox is a byte-identical mirror so sound.tags (ID3) stays valid; no cache wipe.
      let changed = false;
      let deadCleared = false;
      Player.allSounds(sound => {
        if (typeof sound._origSrc !== 'string') return;
        const newSrc = rerouteSrc(sound._origSrc);
        if (sound.src !== newSrc) {
          sound.src = newSrc;
          // A new link deserves a new try: dead marks are often what the rerouter fixes.
          sound.error && (delete sound.error, deadCleared = true);
          changed = true;
        }
      });
      // Skip the downstream cascade when nothing was actually rerouted (no catbox sounds).
      if (!changed) return;
      Player._failStreak = 0;
      deadCleared && Player.trigger('dead-change');
      // Re-bucket sounds between sounds/filteredSounds (recomputes sound.disallow
      // against the new hostname, calls Player.posts.updateButtons, emits
      // 'filters-applied'). applyFilters internally sets Player._applyingFilters
      // to suppress autoshow during the rebucket.
      Player.playlist.applyFilters();
      // Refresh the playlist DOM so rendered hrefs/click handlers reflect the new src.
      Player.playlist.render();
      // Reload the live audio element in place for non-standalone playback. Gate on the
      // playing sound still being in Player.sounds (applyFilters may have moved it).
      const playing = Player.playing;
      if (playing && !playing.standaloneVideo && Player.sounds.indexOf(playing) !== -1 && Player.audio.src && Player.audio.src !== playing.src) {
        // Capture the audio element so the swap can't get redirected if Player.audio
        // is reassigned to a standalone video mid-load. getVideo() re-reads
        // Player.video at apply-time so display.render reassignments are honored.
        const audioEl = Player.audio;
        _.swapAudioSrc(audioEl, playing.src, {
          getVideo: () => (Player.isVideo && !Player.isStandalone) ? Player.video : null,
          ownerStillValid: () => Player.audio === audioEl,
          setInProgress: true,
        });
      }
      // Update any expanded/hover inline audio elements. Inline is required at module
      // load; the method is statically defined — no defensive null check needed.
      Player.inline._reloadActiveAudio();
    });
  },

  addPosts(target, postRender) {
    let addedSounds = false;
    let posts = target.classList.contains('post')
      ? [target]
      : target.querySelectorAll(selectors.posts);

    // The initial parse adds every sound in the thread. Hold the per-sound template
    // refreshes ('add', 'filters-applied'), which re-rendered the header/footer once per
    // sound, and refresh once at the end.
    postRender && (Player._bulkAdding = true);
    try {
      posts.forEach(post => Player.posts.addPost(post, postRender) && (addedSounds = true));
    } finally {
      postRender && (Player._bulkAdding = false);
    }
    postRender && Player.trigger('filters-applied');

    if (addedSounds && postRender && Player.container) {
      Player.playlist.render();
    }
  },

  addPost(post, skipRender) {
    try {
      // Posts inside the player are its own (the threads view's board layout shows other
      // threads' OPs), not this thread's.
      if (Player.container && Player.container.contains(post)) {
        return;
      }
      // Ignore the style fetcher post created by this script, quoted posts, and posts with no file.
      let parent = post.parentElement;
      let parentParent = parent && parent.parentElement;
      if (post.classList.contains('style-fetcher') || parentParent && parentParent.id === 'qp' || parent && parent.classList.contains('noFile')) {
        return;
      }

      const postID = post.id.slice(selectors.postIdPrefix.length);

      // If there's a play or add button this post has already been parsed. Just wire up the link.
      let playLink = Player.posts._ownLink(post, `${ns}-play-link`);
      let addLink = Player.posts._ownLink(post, `${ns}-unfilter-link`);
      if (playLink || addLink) {
        playLink && Player.events.apply(playLink);
        addLink && Player.events.apply(addLink);
        return;
      }

      // Only parse this page's own posts. 4chan X clones (inline quotes, including posts
      // fetched from other threads) get an "_N" suffix on every id, and 4chan-neXT's
      // comment preview is a fake .post#p-preview. Parsing those added stray sounds, and
      // a new duplicate each time an inline quote was re-expanded.
      if (Site === '4chan' && !/^\d+$/.test(postID)) {
        return;
      }

      let filename = null;
      let filenameLocations = selectors.filename;

      Object.keys(filenameLocations).some(function(selector) {
        const node = post.querySelector(selector);
        return node && (filename = node[filenameLocations[selector]]);
      });

      if (!filename) {
        return;
      }

      selectors.filenameParser && (filename = selectors.filenameParser(filename));

      const thumbContainer = post.querySelector(selectors.thumb);
      const fileThumb = thumbContainer && thumbContainer.closest('a');
      const imageSrc = fileThumb && fileThumb.href;
      if (!imageSrc) {
        return;
      }
      // 4chan X's "Replace WEBM" swaps a video's thumbnail <img> for a <video> that keeps
      // the thumbnail as its poster and the MD5 in data-md5. Only looking for an <img>
      // left webm sounds with a null thumbnail, shown as a broken image.
      const thumbEl = fileThumb && fileThumb.querySelector('img, video');
      const thumbSrc = thumbEl && (thumbEl.nodeName === 'VIDEO'
        ? thumbEl.poster
        : thumbEl.src || thumbEl.dataset.src) || null;
      const imageMD5 = Site === 'Fuuka'
        ? post.querySelector(':scope > br + a').href.split('/').pop()
        : thumbEl && thumbEl.getAttribute('data-md5');

      if (imageMD5 === 'HO0kbeZNQqBye1CF7Tq7hg==' && post.innerHTML.includes('[futari no christmas]')) {
        filename = 'futari no christmas[sound=files.catbox.moe/ahvi2c.opus]';
      }

      const parsed = Player.posts.getSounds(filename, imageSrc, postID, thumbSrc, imageMD5);
      // Leave out sounds the user removed.
      const sounds = parsed.sounds.filter(sound => !Player.playlist._removed.has(sound.id));
      const filtered = parsed.filtered;

      // A post rebuilt after its sounds were removed still needs its restore link.
      if (sounds.length || filtered.length || sounds.length !== parsed.sounds.length) {
        sounds.forEach(sound => Player.add(sound, skipRender));
        filtered.forEach(sound => Player.filteredSounds.push(sound));
        Player.posts.updateButtons(postID);
        filtered.length && Player.trigger('filters-applied');
      }
      return sounds.length > 0;
    } catch (err) {
      Player.logError('There was an issue parsing the files. Please check the console for details.', err);
      if (!post) {
        return;
      }
    }
  },

  getSounds(filename, image, post, thumb, imageMD5, bypassVerification) {
    if (!filename) {
      return { sounds: [], filtered: [] };
    }
    // Best quality image. For webms this has to be the thumbnail still. SAD!
    const imageOrThumb = image.match(/(webm|mp4)$/i) ? thumb : image;
    // matchAll isolates regex state per call instead of relying on filenameRE.lastIndex.
    // The tag syntax also matches ordinary bracketed text ("clip (sound on).webm",
    // "song (audio only)"), so drop a "link" without a dot or with spaces in it, and keep
    // its text as part of the next sound's name.
    let carried = '';
    const matches = Array.from(filename.matchAll(filenameRE)).reduce((valid, match) => {
      const host = match[2] || match[4] || match[6] || match[8];
      const src = (match[3] || match[5] || match[7] || match[9] || '').trim();
      // Spaces are fine in what's clearly a link (host.tld/…); they rule out the rest.
      if (!src.includes('.') || (/\s/.test(src) && !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/|%2F)/i.test(src))) {
        carried += match[0];
        return valid;
      }
      valid.push([ match[0], carried + match[1], host, src ]);
      carried = '';
      return valid;
    }, []);
    // Add webms without a sound filename as a standalone video if enabled. The synthetic
    // match must align with the regex's capture groups: [full, name, host, src].
    // (Always for a local file, which the user added on purpose: there's no post.)
    if (!matches.length && (Player.posts.videosAllowed() || !post) && filename.match(/\.(webm|mp4)$/i)) {
      // `.webm` is 5 chars, `.mp4` is 4 — strip the actual extension instead of a
      // fixed-width slice that truncates an extra char for .mp4 titles.
      matches.push([null, filename.replace(/\.(webm|mp4)$/i, ''), 'sound', image]);
    }
    const defaultName = matches[0] && matches[0][1].trim() || post || 'Local Sound ' + localCounter;
    matches.length && !post && localCounter++;

    return matches.reduce(({ sounds, filtered }, match, i) => {
      // filenameRE is case-insensitive (gi), so a tag like `[Sound=…]`/`[Catbox=…]`
      // captures the host in its original case. The `hosts` map is keyed lowercase, so
      // lowercase before lookup or `hosts[host]` is undefined → throws → sound dropped.
      let host = match[2].toLowerCase();
      let src = match[3];
      const id = (post || 'local' + localCounter) + ':' + i;
      const name = match[1].trim();
      const title = name || defaultName + (matches.length > 1 ? ` (${i + 1})` : '');
      const standaloneVideo = src === image;

      try {
        if (hosts[host].decode) {
          // standaloneVideo synthetic matches (addWebm fallback) inject the 4cdn
          // image URL verbatim; skip the percent-decoding pass so any encoded path
          // segments aren't silently corrupted.
          if (!standaloneVideo && src.includes('%')) {
            src = decodeURIComponent(src);
          }

          if (!src.startsWith('blob:') && src.match(protocolRE) === null) {
            src = (location.protocol + '//' + src);
          }
        } else {
          src = (location.protocol + hosts[host].filepath + src);
        }
      } catch (error) {
        return { sounds, filtered };
      }

      const _origSrc = src;
      src = rerouteSrc(src);

      const sound = { src, _origSrc, id, title, name, post, image, imageOrThumb, filename, thumb, imageMD5, standaloneVideo };
      sound.disallow = !bypassVerification && Player.disallowedSound(sound);
      if (!sound.disallow) {
        sounds.push(sound);
      } else if (!sound.disallow.invalid) {
        filtered.push(sound);
      }
      return { sounds, filtered };
    }, { sounds: [], filtered: [] });
  },

  /**
	 * Whether videos without a sound are added to the playlist here (Include Video).
	 */
  videosAllowed() {
    const setting = Player.config.addWebm;
    return setting === 'always' || (setting === 'soundBoards' && (Board === 'gif' || Board === 'wsg'));
  },

  /**
	 * Read all the sounds from the thread again, including ones the user removed.
	 */
  refresh() {
    Player.playlist.restoreRemoved();
    Player.posts.addPosts(document.body);
  },

  updateButtons(postId) {
    const postEl = document.getElementById(selectors.postIdPrefix + postId);

    if (postEl) {
      const linkInfo = selectors.playLink;
      // relative may be a list of selectors in priority order.
      const relative = Player.posts._linkAnchor(postEl);
      if (!relative) {
        return;
      }

      // Create/update the add button for filtered or removed sounds, or remove it.
      let addLink = Player.posts._ownLink(postEl, `${ns}-unfilter-link`);
      const allFilters = Player.posts.getFilters(postId);
      const hasFilter = allFilters.host.length || allFilters.image || allFilters.sound.length;
      const removed = Player.playlist.removedCount(postId);
      postEl.classList[hasFilter ? 'add' : 'remove']('filtered-sound');
      if (hasFilter || removed) {
        // There is a filtered sound for the post so create/update the add link,
        const filtered = [allFilters.image && 'image', allFilters.sound.length && 'sound'].filter(Boolean).join(' and ');
        // Hosts come from post filenames and the URL parser keeps characters like `"`,
        // `=` and `(` in hostnames. The hint is rendered as HTML by the popover, so
        // escape the hosts here and escape the whole hint again for the attribute below.
        const hosts = allFilters.host.map(_.escHTML);
        const hint = (hosts.length > 1 ? `The hosts ${hosts.join(', ')} are not allowed` : '')
					+ (hosts.length === 1 ? `The host ${hosts[0]} is not allowed` : '')
					+ (filtered ? `${allFilters.host.length ? ', and the' : 'The'} player filters disallow this ${filtered}` : '')
					+ (removed ? `${hasFilter ? '. ' : ''}You removed ${removed > 1 ? `${removed} sounds in this post` : 'this sound'} from the player` : '')
					+ (hasFilter ? '. Click to allow and add to the player.' : '. Click to add it back.');

        // A filtered post shows the filter icon; one with only removed sounds a restore icon.
        const kind = hasFilter ? 'filtered' : 'removed';
        const linkText = (kind === 'removed' && linkInfo.restoreText) || linkInfo.unfilterText || '';
        if (addLink) {
          addLink.dataset.content = hint;
          addLink.dataset.kind !== kind && (addLink.innerHTML = linkText);
          addLink.dataset.kind = kind;
        } else {
          _.element('<span>'
						+ (linkInfo.prependText || '')
						+ `<a href="javascript:" class="${linkInfo.class} ${ns}-unfilter-link ${ns}-popover" data-kind="${kind}" data-content="${_.escAttr(hint)}" @click='posts.allowPost("${_.escAttr(postId, true)}")'>${linkText}</a>`
						+ (linkInfo.appendText || '')
						+ '</span>', relative, Player.posts._linkPosition(relative));
        }
      } else {
        // Nothing filtered or removed, so remove the add link.
        addLink && addLink.parentNode.parentNode.removeChild(addLink.parentNode);
        addLink && addLink.infoEl && addLink.infoEl.parentNode.removeChild(addLink.infoEl);
      }

      // Remove the play button if all sounds in the post are filtered, otherwise create it if needed.
      let playLink = Player.posts._ownLink(postEl, `${ns}-play-link`);
      const addedSound = Player.sounds.find(sound => sound.post === postId);
      if (playLink && !addedSound) {
        playLink.parentNode.parentNode.removeChild(playLink.parentNode);
      } else if (!playLink && addedSound) {
        _.element('<span>'
					+ (linkInfo.prependText || '')
					+ `<a href="javascript:" class="${ns}-play-link ${linkInfo.class}" @click='posts.playPost("${_.escAttr(postId, true)}")'>${linkInfo.text || ''}</a>`
					+ (linkInfo.appendText || '')
					+ '</span>', relative, Player.posts._linkPosition(relative));
      }
    }
  },

  /**
	 * Play a post's first sound in the player. Looked up when clicked: the post's first
	 * sound changes when sounds are filtered or removed.
	 */
  playPost(postId) {
    const sound = Player.sounds.find(sound => sound.post === postId);
    sound && Player.play(sound);
  },

  /**
	 * The element a post's play/add links go next to: the first of the site's anchors that's
	 * shown. 4chan-neXT's phone layout hides the file info, so they follow the thumbnail
	 * there instead.
	 */
  _linkAnchor(post) {
    const { relative, position } = selectors.playLink;
    // The post's own, not one in a post inlined inside it (4chan X puts inlined backlinks
    // before the file), where the link would be lost.
    const own = sel => Array.from(post.querySelectorAll(sel)).find(el => el.closest(selectors.posts) === post);
    const candidates = [].concat(relative || []).map(own).filter(Boolean);
    // Links go inside the anchor (FoolFuuka) or beside it, in its parent.
    const holder = el => position === 'beforeend' || position === 'afterbegin' ? el : el.parentNode;
    return candidates.find(el => holder(el).getClientRects().length) || candidates[0];
  },

  /**
	 * Where a link goes relative to its anchor. Before a thumbnail, not after it: native
	 * 4chan finds the thumbnail to show again when closing an expanded webm as the element
	 * just before the video.
	 */
  _linkPosition(anchor) {
    return anchor.matches('a.fileThumb') ? 'beforebegin' : selectors.playLink.position;
  },

  /**
	 * A post's own play or add link, wherever it was put, but not one of a post nested in it
	 * (an inline quote, a FoolFuuka OP's replies).
	 */
  _ownLink(post, className) {
    return Array.from(post.querySelectorAll(`.${className}`)).find(link => link.closest(selectors.posts) === post) || null;
  },

  getFilters(postId) {
    return Player.filteredSounds.reduce((reason, sound) => {
      if (sound.post === postId) {
        reason.host = reason.host.concat(sound.disallow.host || []);
        reason.image = reason.image || sound.disallow.image;
        reason.sound = reason.sound.concat(sound.disallow.sound || []);
      }
      return reason;
    }, { host: [], image: false, sound: [] });
  },

  allowPost(postId) {
    // Only what the link said was filtered is allowed. Sounds the user removed from this
    // post come back too, unless a filter made since then applies to them; the link then
    // shows that instead.
    const allowed = Player.posts.getFilters(postId);
    Player.playlist.restoreRemoved(postId);
    // The host comes from the post. Allow entries also match subdomains, so refuse a
    // single label ("com" would allow every .com site) and local or IP-address hosts (the
    // player fetches allowed sounds with the userscript's cross-site requests).
    const unsafe = allowed.host.filter(host => !host.includes('.') || /^[\d.]+$|^\[|(^|\.)localhost$|\.local$/.test(host));
    unsafe.length && Player.logError(`Not allowing ${_.escHTML(unsafe.join(', '))} from a post. Add it in Settings &gt; Filter if you trust it.`, null, 'warning');
    const hosts = allowed.host.filter(host => !unsafe.includes(host));
    if (hosts.length) {
      Player.set('allow', Player.config.allow.concat(hosts));
    }
    if (allowed.image || allowed.sound.length) {
      Player.set('filters', Player.config.filters.filter(filter => {
        return filter !== allowed.image
					&& !allowed.sound.find(sound => filter.replace(/^(https?:)?\/\//, '') === sound);
      }));
    }
  }
};


/***/ },

/***/ "./src/components/settings/colorpicker.js"
/*!************************************************!*\
  !*** ./src/components/settings/colorpicker.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const colorpickerTemplate = __webpack_require__(/*! ./templates/colorpicker.tpl */ "./src/components/settings/templates/colorpicker.tpl");

const HEIGHT = 200;
const WIDTH = 200;

module.exports = {
  initialize() {
    Player.on('menu-close', menu => menu._input && (delete menu._input._colorpicker));
  },

  create(e) {
    const parent = e.currentTarget.parentNode;
    const input = e.currentTarget.nodeName === 'INPUT' ? e.currentTarget : parent.querySelector('input');
    const preview = parent.querySelector(`.${ns}-cp-preview`);
    if (!input || input._colorpicker) {
      return;
    }

    Player.display.closeDialogs();

    // Get the color from the preview.
    const rgb = Player.colorpicker.parseRGB(window.getComputedStyle(preview).backgroundColor);

    const colorpicker = _.element(colorpickerTemplate({ HEIGHT, WIDTH, rgb }), parent);
    Player.position.showRelativeTo(colorpicker, input);

    input._colorpicker = colorpicker;
    colorpicker._input = input;

    colorpicker._colorpicker = { hsv: [ 0, 1, 1, 1 ], rgb: rgb };

    // If there's a color in the input then update the hue/saturation positions to show it.
    Player.colorpicker.updateOutput(colorpicker);
  },

  hueMove(e) {
    const colorpicker = e.currentTarget.closest(`.${ns}-colorpicker`);
    // Clamp to the bar: past the bottom the hue wrapped round from red to orange.
    const y = Math.min(HEIGHT, Math.max(0, e.clientY - e.currentTarget.getBoundingClientRect().top));
    colorpicker._colorpicker.hsv[0] = y / HEIGHT;
    const _hue = Player.colorpicker.hsv2rgb(colorpicker._colorpicker.hsv[0], 1, 1, 1);

    colorpicker.querySelector(`.${ns}-cp-saturation`).style.background = `linear-gradient(to right, white, rgb(${_hue[0]}, ${_hue[1]}, ${_hue[2]}))`;
    e.currentTarget.querySelector('.position').style.top = Math.max(-3, (y - 6)) + 'px';

    Player.colorpicker.updateOutput(colorpicker, true);
  },

  satMove(e) {
    const colorpicker = e.currentTarget.closest(`.${ns}-colorpicker`);
    const saturationPosition = e.currentTarget.querySelector('.position');
    // Clamp to the box: outside it the RGB values went below 0 or above 255.
    const x = Math.min(WIDTH, Math.max(0, e.clientX - e.currentTarget.getBoundingClientRect().left));
    const y = Math.min(HEIGHT, Math.max(0, e.clientY - e.currentTarget.getBoundingClientRect().top));

    colorpicker._colorpicker.hsv[1] = x / WIDTH;
    colorpicker._colorpicker.hsv[2] = 1 - y / HEIGHT;
    saturationPosition.style.top = Math.min(HEIGHT - 3, Math.max(-3, (y - 6))) + 'px';
    saturationPosition.style.left = Math.min(WIDTH - 3, Math.max(-3, (x - 5))) + 'px';

    Player.colorpicker.updateOutput(colorpicker, true);
  },

  inputRGBA(e) {
    const colorpicker = e.currentTarget.closest(`.${ns}-colorpicker`);
    const channel = +e.currentTarget.getAttribute('data-color');
    // RGB channels (0-2) are 0-255 integers; alpha (3) is 0-1 float. Coerce and clamp
    // so downstream hsv conversion math doesn't operate on strings/NaN.
    const raw = parseFloat(e.currentTarget.value);
    if (Number.isNaN(raw)) return;
    colorpicker._colorpicker.rgb[channel] = channel === 3
      ? Math.min(1, Math.max(0, raw))
      : Math.min(255, Math.max(0, Math.round(raw)));
    Player.colorpicker.updateOutput(colorpicker);
  },

  updateOutput(colorpicker, fromHSV) {
    const order = fromHSV ? [ 'hsv', 'rgb' ] : [ 'rgb', 'hsv' ];
    colorpicker._colorpicker[order[1]] = Player.colorpicker[`${order[0]}2${order[1]}`](...colorpicker._colorpicker[order[0]]);
    const [ r, g, b, a ] = colorpicker._colorpicker.rgb;

    // Update the display.
    if (fromHSV) {
      colorpicker.querySelector(`.${ns}-rgb-input[data-color="0"]`).value = r;
      colorpicker.querySelector(`.${ns}-rgb-input[data-color="1"]`).value = g;
      colorpicker.querySelector(`.${ns}-rgb-input[data-color="2"]`).value = b;
      colorpicker.querySelector(`.${ns}-rgb-input[data-color="3"]`).value = a;
    } else {
      const [ h, s, v ] = colorpicker._colorpicker.hsv;
      const huePos = colorpicker.querySelector(`.${ns}-cp-hue .position`);
      const satPos = colorpicker.querySelector(`.${ns}-cp-saturation .position`);
      const _hue = Player.colorpicker.hsv2rgb(h, 1, 1, 1);
      colorpicker.querySelector(`.${ns}-cp-saturation`).style.background = `linear-gradient(to right, white, rgb(${_hue[0]}, ${_hue[1]}, ${_hue[2]}))`;
      huePos.style.top = (HEIGHT * h) - 3 + 'px';
      satPos.style.left = (s * WIDTH) - 3 + 'px';
      satPos.style.top = ((1 - v) * WIDTH) - 3 + 'px';
    }

    colorpicker.querySelector('.output-color').style.background = `rgb(${r}, ${g}, ${b}, ${a})`;
  },

  apply(e) {
    // Update the input.
    const colorpicker = e.currentTarget.closest(`.${ns}-colorpicker`);
    const [ r, g, b, a ] = colorpicker._colorpicker.rgb;
    const input = colorpicker._input;
    input.value = `rgb(${r}, ${g}, ${b}, ${a})`;

    // Remove the colorpicker.
    delete input._colorpicker;
    colorpicker.parentNode.removeChild(colorpicker);

    // Focus and blur to trigger the change handler.
    input.focus();
    input.blur();
  },

  parseRGB(str) {
    const rgbMatch = String(str).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    // Computed colours in other notations (e.g. oklch()) don't match; start from black
    // rather than throwing and leaving the picker unable to open.
    if (!rgbMatch) {
      return [ 0, 0, 0, 1 ];
    }
    const alpha = parseFloat(rgbMatch[4]);
    return [ +rgbMatch[1] || 0, +rgbMatch[2] || 0, +rgbMatch[3] || 0, isNaN(alpha) ? 1 : alpha ];
  },

  hsv2rgb(h, s, v, a) {
    const i = Math.floor((h * 6));
    const f = (h * 6) - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const mod = i % 6;
    const r = [ v, q, p, p, t, v ][mod];
    const g = [ t, v, v, q, p, p ][mod];
    const b = [ p, p, t, v, v, q ][mod];

    return [
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255),
      // An alpha of 0 is valid; only default a missing one.
      a == null ? 1 : a
    ];
  },

  rgb2hsv(r, g, b, a) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    const s = (max === 0 ? 0 : d / max);
    const v = max / 255;
    let h;

    switch (max) {
    case min:
      h = 0;
      break;
    case r:
      h = (g - b) + d * (g < b ? 6 : 0);
      h /= 6 * d;
      break;
    case g:
      h = (b - r) + d * 2;
      h /= 6 * d;
      break;
    case b:
      h = (r - g) + d * 4;
      h /= 6 * d;
      break;
    }

    return [ h, s, v, a == null ? 1 : a ];
  },

  _updatePreview(e) {
    const value = e.currentTarget.value;
    const preview = e.currentTarget.parentNode.querySelector(`.${ns}-cp-preview`);
    preview.style.background = value;
  }
};


/***/ },

/***/ "./src/components/settings/hosts.js"
/*!******************************************!*\
  !*** ./src/components/settings/hosts.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
// The form data must send the file somewhere: a "$file" value in a JSON object.
function validData(data) {
  return !!data && typeof data === 'object' && !Array.isArray(data) && Object.values(data).includes('$file');
}

// A response match must compile and capture the link.
function validMatch(value) {
  try {
    return new RegExp(`${value}|`).exec('').length > 1;
  } catch (err) {
    return false;
  }
}

function validURL(value) {
  try {
    // Regex was missing the `:` so it never matched a real protocol — it would
    // double-prefix every URL with https:// and the URL constructor would throw.
    new URL(value.replace(/%s/, 'sound').replace(/^(https?:\/\/)?/, 'https://'));
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  template: __webpack_require__(/*! ./templates/host_input.tpl */ "./src/components/settings/templates/host_input.tpl"),

  fields: {
    name: 'Name',
    url: 'URL',
    responsePath: 'Response Path',
    responseMatch: 'Response Match',
    soundUrl: 'File URL Format'
  },

  parse(newValue, hosts, e) {
    const container = e.currentTarget.closest(`.${ns}-host-input`);
    let name = container.getAttribute('data-host-name');
    const changedField = e.currentTarget.getAttribute('name');
    // Settings save on every focusout: leaving a field without editing it isn't a change.
    // (Writing it back anyway, as name or an empty string, made a built-in host a stored
    // custom copy.)
    const current = hosts[name] || {};
    const shown = changedField === 'name' ? name
      : changedField === 'data' ? JSON.stringify(current.data, null, 4)
        : changedField === 'headers' ? (current.headers ? JSON.stringify(current.headers, null, 4) : '')
          : current[changedField] == null ? '' : String(current[changedField]);
    if (newValue === shown) {
      return hosts;
    }
    hosts = { ...hosts };
    let host = hosts[name] = { ...hosts[name] };

    try {
      // If the name was changed then reassign in hosts and update the data-host-name attribute.
      if (changedField === 'name' && newValue !== name) {
        if (!newValue || hosts[newValue]) {
          throw new PlayerError('A unique name for the host is required.', 'warning');
        }
        container.setAttribute('data-host-name', newValue);
        hosts[newValue] = host;
        // A built-in host has to stay as null under its old name, or the next load mixes
        // the default back in next to the renamed copy.
        if (Player.settings.findDefault('uploadHosts').default[name]) {
          hosts[name] = null;
        } else {
          delete hosts[name];
        }
        // Keep the default upload host pointing at the renamed host.
        Player.config.defaultUploadHost === name && Player.set('defaultUploadHost', newValue);
        name = newValue;
      }

      // Validate URL
      if ((changedField === 'url' || changedField === 'soundUrl' && newValue) && !validURL(newValue)) {
        throw new PlayerError('The value must be a valid URL.', 'warning');
      }
      // Uploads go to the URL as given, so store it with its scheme: without one it was read
      // relative to the page.
      if (changedField === 'url' && !/^https?:\/\//i.test(newValue)) {
        newValue = `https://${newValue.replace(/^\/\//, '')}`;
        e.currentTarget.value = newValue;
      }
      if (changedField === 'responseMatch' && newValue && !validMatch(newValue)) {
        throw new PlayerError('The response match must be a regular expression with a capture group, ( ), around the link.', 'warning');
      }

      // Parse the data
      if (changedField === 'data') {
        try {
          newValue = JSON.parse(newValue);
        } catch (err) {
          throw new PlayerError('The data must be valid JSON.', 'warning');
        }
        if (!validData(newValue)) {
          throw new PlayerError('The data must be a JSON object with "$file" as the value of the file\'s field.', 'warning');
        }
      }

      if (changedField === 'headers') {
        try {
          newValue = newValue ? JSON.parse(newValue) : undefined;
        } catch (err) {
          throw new PlayerError('The headers must be valid JSON.', 'warning');
        }
      }
    } catch (err) {
      host.invalid = true;
      container.classList.add('invalid');
      throw err;
    }

    // The name is the key, not a field; an emptied optional field is left out.
    if (changedField !== 'name') {
      if (newValue === undefined || newValue === '') {
        delete host[changedField];
      } else {
        host[changedField] = newValue;
      }
    }

    try {
      const soundUrlValue = container.querySelector('[name=soundUrl]').value;
      const headersValue = container.querySelector('[name=headers]').value;
      const matchValue = container.querySelector('[name=responseMatch]').value;
      if (name
				&& validData(JSON.parse(container.querySelector('[name=data]').value))
				&& validURL(container.querySelector('[name=url]').value)
				&& (!matchValue || validMatch(matchValue))
				&& (!soundUrlValue || validURL(soundUrlValue))
				&& (!headersValue || JSON.parse(headersValue))) {

        delete host.invalid;
        container.classList.remove('invalid');
      }
    } catch (err) {
      // leave it invalid
    }

    return hosts;
  },

  add() {
    let i = '',
      name = 'New Host';
    while (Player.config.uploadHosts[`${name}${i}`]) {
      i = ` ${++i}`;
    }
    const hosts = {
      [`${name}${i}`]: { invalid: true, data: { file: '$file' } },
      ...Player.config.uploadHosts
    };
    Player.settings.set('uploadHosts', hosts, { bypassValidation: true, silent: true });
  },

  remove(e) {
    const hosts = Player.config.uploadHosts;
    const container = e.currentTarget.closest(`.${ns}-host-input`);
    const name = container.getAttribute('data-host-name');
    // For hosts in the defaults set null so we know to not include them on load
    if (Player.settings.findDefault('uploadHosts').default[name]) {
      hosts[name] = null;
    } else {
      delete hosts[name];
    }
    container.parentNode.removeChild(container);
    Player.settings.set('uploadHosts', hosts, { bypassValidation: true, bypassRender: true });
    // The default can't be a host that's gone: make the first remaining one the default.
    if (Player.config.defaultUploadHost === name) {
      const next = Object.keys(hosts).find(key => hosts[key] && !hosts[key].invalid);
      next && Player.set('defaultUploadHost', next);
      Player.settings.renderSetting(Player.settings.findDefault('uploadHosts'));
    }
  },

  setDefault(_new, _current, e) {
    const selected = e.currentTarget.closest(`.${ns}-host-input`).getAttribute('data-host-name');
    if (selected === Player.config.defaultUploadHost) {
      return selected;
    }

    Object.keys(Player.config.uploadHosts).forEach(name => {
      const checkbox = Player.$(`.${ns}-host-input[data-host-name="${CSS.escape(name)}"] input[data-property="defaultUploadHost"]`);
      checkbox && (checkbox.checked = name === selected);
    });
    return selected;
  },

  restoreDefaults() {
    Object.assign(Player.config.uploadHosts, _.clone(Player.settings.findDefault('uploadHosts').default));
    Player.set('uploadHosts', Player.config.uploadHosts, { bypassValidation: true });
  }
};


/***/ },

/***/ "./src/components/settings/index.js"
/*!******************************************!*\
  !*** ./src/components/settings/index.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const settingsConfig = __webpack_require__(/*! config */ "./src/config/index.js");
const migrations = __webpack_require__(/*! ../../migrations */ "./src/migrations.js");
const settingTpl = __webpack_require__(/*! ./templates/setting.tpl */ "./src/components/settings/templates/setting.tpl");

const hosts = __webpack_require__(/*! ./hosts */ "./src/components/settings/hosts.js");

module.exports = {
  atRoot: [ 'set' ],
  public: [ 'set', 'export', 'import', 'reset', 'load' ],
  hosts,

  template: __webpack_require__(/*! ./templates/settings.tpl */ "./src/components/settings/templates/settings.tpl"),
  // A setting that can't be shown (a bad imported value) gets a row with a Reset link
  // instead of stopping the whole settings view, and the player with it, from rendering.
  settingTemplate(setting) {
    try {
      return settingTpl(setting);
    } catch (err) {
      console.error('[4chan sounds player] Could not show setting', setting && setting.property, err);
      const prop = setting && setting.property;
      return `<div class="${ns}-row ${ns}-setting" data-property="${_.escAttr(prop || '')}">`
        + `<div class="${ns}-col">${_.escHTML((setting && setting.title) || prop || 'A setting')} couldn't be shown.`
        + (prop ? ` <a href="#" @click.prevent='settings.reset("${_.escAttr(prop, true)}")'>Reset it</a>` : '')
        + '</div></div>';
    }
  },
  inputTemplates: {
    checkbox: __webpack_require__(/*! ./templates/inputs/checkbox.tpl */ "./src/components/settings/templates/inputs/checkbox.tpl"),
    input: __webpack_require__(/*! ./templates/inputs/input.tpl */ "./src/components/settings/templates/inputs/input.tpl"),
    select: __webpack_require__(/*! ./templates/inputs/select.tpl */ "./src/components/settings/templates/inputs/select.tpl"),
    textarea: __webpack_require__(/*! ./templates/inputs/textarea.tpl */ "./src/components/settings/templates/inputs/textarea.tpl")
  },

  changelog: 'https://github.com/vampiricwulf/4chan-sounds-player/releases',
  groups: settingsConfig.reduce((groups, setting) => {
    if (setting.displayGroup) {
      groups[setting.displayGroup] || (groups[setting.displayGroup] = []);
      groups[setting.displayGroup].push(setting);
    }
    return groups;
  }, {}),

  async initialize() {
    Player.settings.view = 'Display';

    // Apply the board theme as default.
    Player.theme.applyBoardTheme({ bypassRender: true });

    // Load the config.
    const stored = await GM.getValue('settings') || {};
    await Player.settings.load(stored, {
      applyDefault: true,
      bypassAll: true
    });

    // VERSION is stored alongside the settings but isn't a setting itself, so read it
    // from the stored blob (Player.config never has it). load() reports corrupt JSON.
    let storedVersion;
    try {
      storedVersion = (typeof stored === 'string' ? JSON.parse(stored) : stored).VERSION;
    } catch (err) { /* reported by load() */ }
    if (storedVersion !== "3.7.2.610") {
      // Show update notifications.
      if (storedVersion && Player.config.showUpdatedNotification) {
        Player.alert(`4chan Sounds Player has been updated to <a href="${Player.settings.changelog}" target="_blank">version ${"3.7.2.610"}</a>.`);
      }
      // Persist the new version (and any migration changes) now. load() above bypasses
      // saving, so without this the notification and migrations repeat on every page
      // load until some unrelated setting happens to change.
      Player.settings.save();
    }

    // Listen for the player closing to apply the pause on hide setting.
    Player.on('hide', function () {
      if (Player.config.pauseOnHide) {
        Player.pause();
      }
    });

    // Listen for changes from other tabs
    // Re-render only the settings that changed, leaving the one being edited alone: a full
    // re-render on every save elsewhere (toggling shuffle, resizing) wiped edits in progress.
    Player.syncTab('settings', value => Player.settings.load(value, {
      bypassSave: true,
      bypassRender: true,
      applyDefault: true,
      ignore: [ 'viewStyle' ]
    }).then(Player.settings._renderChanged));

    Player.on('rendered', Player.settings.setChangeListeners);
  },

  render() {
    const settingsContainer = Player.$(`.${ns}-settings`);
    _.elementHTML(settingsContainer, Player.settings.template());
    Player.settings.setChangeListeners();
  },

  renderSetting(settingConfig) {
    const settingEl = Player.$(`.${ns}-setting[data-property="${settingConfig.property}"]`);
    // Settings without a row (hidden ones) have nothing to re-render.
    if (!settingEl) {
      return;
    }
    const newEl = _.element(Player.settings.settingTemplate(settingConfig), settingEl, 'beforebegin');
    settingEl.parentNode.removeChild(settingEl);
    Player.settings.setChangeListeners(newEl);
  },

  /**
	 * Update a setting.
	 */
  set(property, value, { bypassAll, bypassValidation, bypassSave, bypassRender, silent, bypassStylesheet, settingConfig } = {}) {
    settingConfig = settingConfig || Player.settings.findDefault(property);
    const previous = _.get(Player.config, property);

    // Check if the value has actually changed.
    if (!bypassValidation && _.isEqual(previous, value)) {
      return;
    }

    // Set the new value.
    _.set(Player.config, property, value);

    // Trigger events, unless they are disabled in opts.
    if (!bypassAll) {
      !bypassStylesheet && settingConfig && settingConfig.updateCSSVars && Player.display.updateCSSVars();
      !silent && Player.trigger('config', property, value, previous);
      !silent && Player.trigger('config:' + property, value, previous);
      !bypassSave && Player.settings.save();
      !bypassRender && settingConfig.displayGroup && Player.settings.renderSetting(settingConfig);
      (!bypassRender || bypassRender === 'self') && settingConfig.dependentRender
				&& settingConfig.dependentRender.forEach(prop => Player.settings.renderSetting(Player.settings.findDefault(prop)));
    }
    return [ previous, value ];
  },

  /**
	 * Whether a page script may change a setting through the PlayerEvent API, and the
	 * value it gives is valid: only switches, numbers and choices. Templates, CSS,
	 * colours, hosts, filters and the allow list are HTML/CSS or decide where requests
	 * go, so they're never changed that way.
	 */
  _apiAllows(property, value) {
    const conf = Player.settings.findDefault(property);
    if (!conf || conf.runtime || conf.default === undefined) {
      return false;
    }
    if (conf.options) {
      return Object.prototype.hasOwnProperty.call(conf.options, value);
    }
    if (typeof conf.default === 'boolean') {
      return typeof value === 'boolean';
    }
    if (typeof conf.default === 'number') {
      return typeof value === 'number' && isFinite(value);
    }
    return false;
  },

  /**
	 * settings.reset for the PlayerEvent API: only settings the API may set, so a page script
	 * can't wipe saved themes, filters, hosts or templates back to their defaults.
	 */
  resetPublic(property) {
    const conf = Player.settings.findDefault(property);
    if (!conf || !Player.settings._apiAllows(property, conf.default)) {
      return console.warn('[4chan sounds player] PlayerEvent: reset not allowed:', property);
    }
    return Player.settings.reset(property);
  },

  /**
	 * Player.set for the PlayerEvent API, limited to what _apiAllows.
	 */
  setPublic(property, value, opts) {
    if (!Player.settings._apiAllows(property, value)) {
      return console.warn('[4chan sounds player] PlayerEvent: setting not allowed:', property);
    }
    return Player.set(property, value, { bypassValidation: !!(opts && opts.bypassValidation) });
  },

  /**
	 * settings.load for the PlayerEvent API: only the settings _apiAllows, and never
	 * resetting the others (applyDefault would wipe the user's customisations).
	 */
  loadPublic(settings) {
    const allowed = {};
    settingsConfig.flatMap(s => s.settings || [ s ]).forEach(({ property }) => {
      const value = property && _.get(settings || {}, property);
      value !== undefined && Player.settings._apiAllows(property, value) && _.set(allowed, property, value);
    });
    return Player.settings.load(allowed);
  },

  /**
	 * Reset a setting to the default value
	 */
  reset(property, opts) {
    let settingConfig = Player.settings.findDefault(property);
    Player.set(property, _.clone(settingConfig.default), { ...opts, settingConfig });
  },

  /**
	 * Reset every setting (except the current view) to its default.
	 */
  resetAll() {
    Player.settings.load({}, { applyDefault: true, ignore: [ 'viewStyle' ], bypassSave: true, bypassRender: true });
    // Rebuild the saved themes order from the default themes before saving/rendering.
    Player.theme.validateOrder();
    Player.settings.save();
    Player.settings.render();
  },

  /**
	 * Load a configuration object.
	 *
	 * @param {Object} settings Config to load
	 * @param {Object} opts Same as Player.set, and applyDefault to reset defaults instead mixing current values.
	 */
  async load(settings, opts = {}) {
    if (typeof settings === 'string') {
      try {
        settings = JSON.parse(settings);
      } catch (err) {
        // A corrupt stored blob (truncated write, bad import, manual edit) must not
        // brick init — fall back to defaults rather than throwing out of load().
        Player.logError('Saved settings were corrupt and could not be parsed; falling back to defaults.', err, 'warning');
        settings = {};
      }
    }
    // Guard the rest of the function against a null/undefined config (e.g. a failed
    // import that still calls load()) so `settings.VERSION` / _.get don't throw.
    settings = settings || {};
    const changes = {};
    settingsConfig.forEach(function _handleSetting(setting) {
      if (setting.settings) {
        return setting.settings.forEach(subSetting => _handleSetting({
          property: setting.property,
          default: setting.default,
          ...subSetting
        }));
      }
      // Measured per page (the header offsets), so never taken from stored or imported settings.
      if (setting.runtime || (opts.ignore && opts.ignore.includes(setting.property))) {
        return;
      }
      let value = _.get(settings, setting.property, opts.applyDefault ? setting.default : undefined);
      // Values from storage, imports and other tabs must match the setting's type: a
      // string where a list belongs ("allow": "x") crashed rendering on every page load.
      if (value !== undefined) {
        const valid = Player.settings._coerce(value, setting.default);
        if (valid === undefined) {
          console.warn('[4chan sounds player] Ignoring a setting of the wrong type:', setting.property, value);
        }
        value = valid !== undefined ? valid : opts.applyDefault ? setting.default : undefined;
      }
      if (value !== undefined) {
        // Mix in default.
        // An import merges into the current value instead, so it doesn't drop the user's own
        // themes or hosts that the file doesn't mention.
        setting.mix && (value = { ...(opts.mergeCurrent ? _.get(Player.config, setting.property) : setting.default), ...(value || {}) });
        // Copy, so editing the loaded value in place can't change the default (or the
        // saved theme it came from).
        value = _.clone(value);
        const data = Player.set(setting.property, value, { bypassAll: true, settingConfig: setting });
        data && (changes[setting.property] = data);
      }
    });
    // Run any migrations to get up to date, and update the stored changes for event triggering.
    // For an import, only keep migrations of settings the file contains: the upgrade steps
    // (e.g. turning inline playback off) aren't meant for the current settings.
    const beforeMigrations = opts.migrateImportedOnly && _.clone(Player.config);
    Object.entries(await Player.settings.migrate(settings.VERSION)).forEach(([ prop, [ previous, current ] ]) => {
      if (beforeMigrations && _.get(settings, prop) === undefined) {
        _.set(Player.config, prop, _.get(beforeMigrations, prop));
        return;
      }
      changes[prop] = [ changes[prop] ? changes[prop][1] : previous, current ];
    });
    // Finally, trigger events.
    if (!opts.bypassAll) {
      !opts.bypassStylesheet && Player.display.updateCSSVars();
      !opts.silent && Object.entries(changes).forEach(([ prop, [ previous, current ] ]) => {
        Player.trigger('config', prop, current, previous);
        Player.trigger('config:' + prop, current, previous);
      });
      !opts.bypassSave && Player.settings.save();
      !opts.bypassRender && Player.settings.render();
    }
    return changes;
  },

  /**
	 * A value converted to its setting's type (from the default), or undefined if it can't
	 * be. Booleans and numbers may arrive as strings from hand-edited or older exports.
	 */
  _coerce(value, def) {
    if (def === undefined || def === null) {
      return value;
    }
    if (typeof def === 'boolean') {
      return value === true || value === 'true' ? true : value === false || value === 'false' ? false : undefined;
    }
    if (typeof def === 'number') {
      const n = typeof value === 'string' && value.trim() !== '' ? +value : value;
      return typeof n === 'number' && isFinite(n) ? n : undefined;
    }
    if (typeof def === 'string') {
      return typeof value === 'string' ? value : typeof value === 'number' ? String(value) : undefined;
    }
    if (Array.isArray(def)) {
      return Array.isArray(value) ? value : undefined;
    }
    // A keybind needs its key: rendering the keybinds threw on anything else.
    if (typeof def.key === 'string') {
      return value && typeof value === 'object' && !Array.isArray(value) && typeof value.key === 'string' ? value : undefined;
    }
    return value && typeof value === 'object' && !Array.isArray(value) ? value : undefined;
  },

  /**
	 * Re-render the settings in a set of changes, except one being edited.
	 */
  _renderChanged(changes) {
    if (!Player.container) {
      return;
    }
    const focused = document.activeElement;
    // Settings without a row of their own show up in another one, and some rows depend on
    // other settings (dependentRender).
    const shownIn = { selectedTheme: 'savedThemes', savedThemesOrder: 'savedThemes', defaultUploadHost: 'uploadHosts' };
    const props = new Set();
    Object.keys(changes || {}).forEach(prop => {
      props.add(shownIn[prop] || prop);
      (Player.settings.findDefault(prop).dependentRender || []).forEach(dep => props.add(dep));
    });
    props.forEach(prop => {
      const row = Player.$(`.${ns}-setting[data-property="${prop}"]`);
      if (row && !row.contains(focused)) {
        Player.settings.renderSetting(Player.settings.findDefault(prop));
      }
    });
  },

  /**
	 * Persist the player settings.
	 */
  save() {
    try {
      // Filter settings that haven't been modified from the default.
      const settings = settingsConfig.reduce(function _handleSetting(settings, setting) {
        if (setting.settings) {
          setting.settings.forEach(subSetting => _handleSetting(settings, {
            property: setting.property,
            default: setting.default,
            ...subSetting
          }));
        } else if (!setting.runtime) {
          let userVal = _.get(Player.config, setting.property);
          if (userVal !== undefined && !_.isEqual(userVal, setting.default)) {
            // If the setting is a mixed in object only store items that differ from the default.
            if (setting.mix) {
              userVal = Object.keys(userVal).reduce((changed, key) => {
                if (!_.isEqual(setting.default[key], userVal[key])) {
                  changed[key] = userVal[key];
                }
                return changed;
              }, {});
            }
            _.set(settings, setting.property, userVal);
          }
        }
        return settings;
      }, {});
      // Show the playlist or image view on load, whichever was last shown. The current view
      // when it's one of them (the 'view' event that records it comes after this save).
      const view = Player.config.viewStyle;
      settings.viewStyle = view === 'playlist' || view === 'image' ? view : Player.playlist._lastView || view;
      // Store the player version with the settings.
      settings.VERSION = "3.7.2.610";
      // Save the settings. The surrounding try/catch only covers synchronous
      // serialization errors, so attach a .catch for an async write rejection too.
      return GM.setValue('settings', JSON.stringify(settings)).catch(err => {
        Player.logError('There was an error saving the sound player settings.', err);
      });
    } catch (err) {
      Player.logError('There was an error saving the sound player settings.', err);
    }
  },

  /**
	 * Run migrations when the player is updated.
	 */
  async migrate(fromVersion) {
    // Fall out if the player hasn't updated.
    if (!fromVersion || fromVersion === "3.7.2.610") {
      return {};
    }
    const changes = {};
    for (let i = 0; i < migrations.length; i++) {
      let mig = migrations[i];
      if (Player.settings.compareVersions(fromVersion, mig.version) < 0) {
        try {
          // Migrations return [ previous, updated ] (see migrations.js). When several
          // migrations touch the same prop (e.g. `allow` in 3.4.7 and 3.6.3) keep the
          // ORIGINAL previous (changes[prop][0]) and the latest updated value so the
          // emitted config event reflects the full before/after, not an intermediate.
          Object.entries(await mig.run()).forEach(([ prop, [ previous, current ] ]) => {
            changes[prop] = [ changes[prop] ? changes[prop][0] : previous, current ];
          });
        } catch (err) {					console.error(err);
        }
      }
    }
    return changes;
  },

  /**
	 * Compare two semver strings. Returns -1 / 0 / 1.
	 * Per semver, a prerelease tag sorts BEFORE the unsuffixed release of the same base
	 * (3.6.4-beta < 3.6.4), so migrations keyed at "3.6.4" still run for a beta upgrader.
	 */
  compareVersions(a, b) {
    // Use indexOf rather than split('-') so a multi-segment prerelease ('beta.2'
    // / 'rc-1') is preserved intact instead of being silently truncated to its
    // first identifier (which made e.g. 'rc.1' and 'rc.2' compare equal).
    const aDash = a.indexOf('-');
    const bDash = b.indexOf('-');
    const aVer = aDash === -1 ? a : a.slice(0, aDash);
    const bVer = bDash === -1 ? b : b.slice(0, bDash);
    const aHash = aDash === -1 ? '' : a.slice(aDash + 1);
    const bHash = bDash === -1 ? '' : b.slice(bDash + 1);
    const aParts = aVer.split('.');
    const bParts = bVer.split('.');
    for (let i = 0; i < 3; i++) {
      // Missing segments coerce to NaN via +undefined; treat them as 0 so '3.6' vs
      // '3.6.0' compare equal and '3.6' vs '3.6.4' returns -1 (migration eligible).
      const aP = +aParts[i] || 0;
      const bP = +bParts[i] || 0;
      if (aP > bP) return 1;
      if (aP < bP) return -1;
    }
    if (aHash === bHash) return 0;
    // Empty prerelease (= release version) sorts AFTER any prerelease tag.
    if (!aHash) return 1;
    if (!bHash) return -1;
    // Per-identifier compare so 'rc.10' > 'rc.9' (numeric, not lex). Identifiers
    // composed solely of digits compare numerically; otherwise lex. Shorter
    // identifier list sorts first when the prefix matches.
    const aIds = aHash.split('.');
    const bIds = bHash.split('.');
    const max = Math.max(aIds.length, bIds.length);
    for (let i = 0; i < max; i++) {
      const aId = aIds[i];
      const bId = bIds[i];
      if (aId === undefined) return -1;
      if (bId === undefined) return 1;
      const aIsNum = /^\d+$/.test(aId);
      const bIsNum = /^\d+$/.test(bId);
      if (aIsNum && bIsNum) {
        const an = +aId, bn = +bId;
        if (an !== bn) return an < bn ? -1 : 1;
      } else if (aIsNum !== bIsNum) {
        // Numeric identifiers always sort before non-numeric (semver §11.4.3).
        return aIsNum ? -1 : 1;
      } else if (aId !== bId) {
        return aId < bId ? -1 : 1;
      }
    }
    return 0;
  },

  /**
	 * Find a setting in the default configuration.
	 */
  findDefault(property) {
    let settingConfig;
    settingsConfig.find(function (setting) {
      if (setting.property === property) {
        return settingConfig = setting;
      }
      if (setting.settings) {
        let subSetting = setting.settings.find(_setting => _setting.property === property);
        return subSetting && (settingConfig = {
          ...setting,
          actions: null,
          settings: null,
          description: null,
          ...subSetting,
          isSubSetting: true
        });
      }
      return false;
    });
    return settingConfig || { property };
  },

  /**
	 * Toggle whether the player or settings are displayed.
	 */
  toggle(group) {
    // Blur anything focused so the change is applied.
    let focused = Player.$(`.${ns}-settings :focus`);
    focused && focused.blur();

    // Restore the playlist if there's no group given and the settings are already open.
    if (!group && Player.config.viewStyle === 'settings') {
      return Player.playlist.restore();
    }
    // Switch to the settings view if it's not already showing.
    if (Player.config.viewStyle !== 'settings') {
      Player.display.setViewStyle('settings');
    }
    // Switch to a given group.
    if (group && group !== Player.settings.view) {
      Player.settings.showGroup(group);
    }
  },

  showGroup(group) {
    Player.settings.view = group;
    const currentGroup = Player.$(`.${ns}-settings-group.active`);
    const currentTab = Player.$(`.${ns}-settings-tab.active`);
    currentGroup && currentGroup.classList.remove('active');
    currentTab && currentTab.classList.remove('active');
    Player.$(`.${ns}-settings-group[data-group="${group}"]`).classList.add('active');
    Player.$(`.${ns}-settings-tab[data-group="${group}"]`).classList.add('active');
  },

  async import() {
    const fileInput = _.element('<input type="file">');
    const _import = async () => {
      let config;
      try {
        config = JSON.parse(await fileInput.files[0].text());
      } catch (err) {
        Player.logError(`Expected a JSON config file and got ${_.escHTML(fileInput.files[0].type)}.`, err, 'warning');
      }
      fileInput.removeEventListener('change', _import);
      // Keep the current view (exports include viewStyle), merge themes and hosts into the
      // current ones, and only migrate what the file contains. Then reconcile the theme
      // order with the themes before saving and rendering.
      await Player.settings.load(config, {
        ignore: [ 'viewStyle' ],
        mergeCurrent: true,
        migrateImportedOnly: true,
        bypassSave: true,
        bypassRender: true
      });
      Player.theme.validateOrder();
      Player.settings.save();
      Player.settings.render();
    };
    fileInput.addEventListener('change', _import);
    fileInput.click();
  },

  async export(e) {
    // Use the saved settings to only export non-default user settings. Shift click exports everything for testing.
    const settings = e && e.shiftKey ? JSON.stringify(Player.config, null, 4) : await GM.getValue('settings') || '{}';
    const blob = new Blob([ settings ], { type: 'application/json' });
    const a = _.element(`<a href="${URL.createObjectURL(blob)}" download="4chan-sp-config.json" rel="noopener" target="_blank"></a>`);
    a.click();
    URL.revokeObjectURL(a.href);
  },

  setChangeListeners(target) {
    const settingsContainer = target || Player.$(`.${ns}-settings`);
    settingsContainer.querySelectorAll(`.${ns}-settings input, .${ns}-settings textarea`).forEach(el => {
      el.addEventListener('focusout', Player.settings.handleChange);
    });
    settingsContainer.querySelectorAll(`.${ns}-settings input[type=checkbox], .${ns}-settings select`).forEach(el => {
      el.addEventListener('change', Player.settings.handleChange);
    });
  },

  /**
	 * Handle the user making a change in the settings view.
	 */
  handleChange(e) {
    try {
      const input = e.currentTarget;
      const property = input.getAttribute('data-property');
      if (!property) {
        return;
      }
      let settingConfig = Player.settings.findDefault(property);

      // Get the new value of the setting.
      const currentValue = _.get(Player.config, property);
      let newValue = input[input.getAttribute('type') === 'checkbox' ? 'checked' : 'value'];

      if (settingConfig.parse) {
        newValue = Player.getHandler(settingConfig.parse)(newValue, currentValue, e);
      }

      // Not the most stringent check but enough to avoid some spamming.
      if (!_.isEqual(currentValue, newValue, !settingConfig.looseCompare)) {
        // Update the setting.
        Player.set(property, newValue, { bypassValidation: true, bypassRender: 'self', settingConfig });
      }
      // The field isn't re-rendered, so show a number setting's kept value ("abc" became 0
      // but stayed in the box).
      const kept = _.get(Player.config, property);
      typeof settingConfig.default === 'number' && input.value !== String(kept) && (input.value = kept);
    } catch (err) {
      Player.logError('There was an error updating the setting.', err);
    }
  },

  /**
	 * Converts a key event in an input to a string representation set as the input value.
	 */
  handleKeyChange(e) {
    // Tab and Shift+Tab move focus as usual (a field that captured them trapped keyboard
    // users, and a Tab binding then took over Tab on the page).
    if (e.key === 'Tab' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      return;
    }
    e.preventDefault();
    // Keys still being composed (an IME, a dead key) aren't a key to bind.
    if (e.isComposing || e.key === 'Process' || e.key === 'Dead' || e.key === 'Unidentified') {
      return;
    }
    if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Meta' || e.key === 'Alt' || e.key === 'AltGraph') {
      return;
    }
    e.currentTarget.value = e.which === 8 || e.key.toLowerCase() === 'backspace'
      ? ''
      : Player.hotkeys.stringifyKey(e);
  }
};


/***/ },

/***/ "./src/components/settings/templates/colorpicker.tpl"
/*!***********************************************************!*\
  !*** ./src/components/settings/templates/colorpicker.tpl ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => `<div class="${ns}-colorpicker ${ns}-dialog dialog" data-allow-click="true" style="top: 0px; left: 0px;">
	<div class="${ns}-cp-saturation" @pointdrag="colorpicker.satMove" style="height: ${data.HEIGHT}px; width: ${data.WIDTH}px;">
		<div class="position" style="left: ${data.WIDTH - 3}px; top: -3px;"></div>
	</div>
	<div class="${ns}-cp-hue" @pointdrag="colorpicker.hueMove" style="height: ${data.HEIGHT}px">
		<div class="position"></div>
	</div>
	<div class="${ns}-output" style="text-align: right;">
		<a href="#" class="${ns}-close-colorpicker" @click.prevent="display.closeDialogs()">${Icons.close}</a>
		<div class="output-color" style="background: rgb(${data.rgb[0]}, ${data.rgb[1]}, ${data.rgb[2]});"></div>

		<table>
			${['R','G','B','A'].map((n, i) => `
				<tr>
					<td>${n}:</td>
					<td>
						<input
							type="text"
							class="${ns}-rgb-input"
							@change="colorpicker.inputRGBA"
							data-color="${i}"
							value="${data.rgb[i]}"
						/>
					</td>
				</tr>
			`).join('')}
		</table>

		<button type="button" @click.stop.prevent="colorpicker.apply">Apply</button><br>
	</div>
</div>`

/***/ },

/***/ "./src/components/settings/templates/host_input.tpl"
/*!**********************************************************!*\
  !*** ./src/components/settings/templates/host_input.tpl ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => // Removed built-in hosts are stored as null so they stay removed; skip them.
Object.entries(Player.config.uploadHosts).filter(([ , host ]) => host).map(([ name, host ]) => `
	<div class="${ns}-row ${ns}-col ${ns}-host-input ${host.invalid ? 'invalid' : ''}" data-host-name="${_.escAttr(name)}">
		<div class="${ns}-row ${ns}-host-controls">
			<div class="${ns}-col-auto">
				<label>
					<input
						type="checkbox"
						data-property="defaultUploadHost"
						${Player.config.defaultUploadHost === name ? 'checked': ''}
					/>
					Default
				</label>
			</div>
			<div class="${ns}-col-auto">
				<a href="#" class="${ns}-heading-action" @click.prevent="settings.hosts.remove">
					Remove
				</a>
			</div>
		</div>
		<div class="${ns}-row">
			${Object.entries(Player.settings.hosts.fields).map(([ field, title ]) => `
				<div class="${ns}-col">
					<input
						type="text"
						data-property="uploadHosts"
						name="${_.escAttr(field)}"
						value="${_.escAttr((field === 'name' ? name : host[field]) || '')}"
						placeholder="${_.escAttr(title)}"
					/>
				</div>
			`).join('')}
		</div>
		<div class="${ns}-row">
			<div class="${ns}-col">
				<textarea data-property="uploadHosts" name="data" placeholder="Data (JSON)">${
					_.escHTML(JSON.stringify(host.data, null, 4))
				}</textarea>
			</div>
		</div>
		<div class="${ns}-row">
			<div class="${ns}-col">
				<textarea data-property="uploadHosts" name="headers" placeholder="Headers (JSON)">${
					_.escHTML(host.headers ? JSON.stringify(host.headers, null, 4) : '')
				}</textarea>
			</div>
		</div>
	</div>
`).join('')


/***/ },

/***/ "./src/components/settings/templates/inputs/checkbox.tpl"
/*!***************************************************************!*\
  !*** ./src/components/settings/templates/inputs/checkbox.tpl ***!
  \***************************************************************/
(module) {

module.exports = (data = {}) => `<div class="${ns}-col ${ns}-align-center">
	<input type="checkbox" ${data.attrs} ${data.value ? 'checked' : ''} />
</div>`

/***/ },

/***/ "./src/components/settings/templates/inputs/input.tpl"
/*!************************************************************!*\
  !*** ./src/components/settings/templates/inputs/input.tpl ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `<div class="${ns}-col ${ns}-align-center">
	<input type="text" ${data.attrs} value="${_.escAttr(data.value)}"/>
</div>`


/***/ },

/***/ "./src/components/settings/templates/inputs/select.tpl"
/*!*************************************************************!*\
  !*** ./src/components/settings/templates/inputs/select.tpl ***!
  \*************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `<div class="${ns}-col ${ns}-align-center">
	<select ${data.attrs}>
		${Object.keys(data.setting.options).map(k => `<option value="${_.escAttr(k)}" ${data.value === k ? 'selected' : ''}>
			${_.escHTML(data.setting.options[k])}
		</option>`).join('')}
	</select>
</div>`


/***/ },

/***/ "./src/components/settings/templates/inputs/textarea.tpl"
/*!***************************************************************!*\
  !*** ./src/components/settings/templates/inputs/textarea.tpl ***!
  \***************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `<div class="${ns}-col ${!data.setting.inlineTextarea ? `${ns}-row` : ''} ${ns}-align-center">
	<textarea ${data.attrs}>${_.escHTML(data.value)}</textarea>
</div>`


/***/ },

/***/ "./src/components/settings/templates/setting.tpl"
/*!*******************************************************!*\
  !*** ./src/components/settings/templates/setting.tpl ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => data.displayMethod === null ? '' : `
<div class="${ns}-row ${ns}-align-start ${ns}-setting ${data.isSubSetting ? `${ns}-sub-settings` : ''}" data-property="${data.property}">
	<div class="${ns}-col ${ns}-heading">
		<span>
			${data.title}
			${data.description ? `<i class="${ns}-info-circle ${ns}-popover ${data.wideDesc ? 'wide' : ''}" data-content="${_.escAttr(data.description)}">${Icons.infoCircle}</i>` : ''}
		</span>
		${!data.actions || !data.actions.length ? '' : `<div style="display: inline-block; margin: 0 .25rem">
			${(data.actions || []).map(action => `
				<a href="#" class="${ns}-heading-action" @click${action.mods || ''}='${action.handler}'>${action.title}</a>
			`).join(' ')}
		</div>`}
	</div>

	${data.dismissTextId
		? `<div class="${ns}-col" style="min-width: 100%">
			${Player.display.ifNotDismissed(
				data.dismissTextId,
				data.dismissRestoreText,
				`<div data-dismiss-id="${data.dismissTextId}">
					${data.text}
					<a href="#" @click.prevent='display.dismiss("${data.dismissTextId}")' style="display:block; margin-top:.25rem">
						Dismiss
					</a>
				</div>`
			)}
		</div>`
	: data.text
		? data.text
	: ''}

	${(() => {
		// Recusively call for sub settings.
		if (data.settings) {
			return data.settings.map(subSetting => Player.settings.settingTemplate({
				...data,
				actions: null,
				settings: null,
				description: null,
				...subSetting,
				isSubSetting: true
			})).join('')
		}

		// Declared: without let these became globals on the page's window.
		let value = _.get(Player.config, data.property, data.default);
		const attrs = (typeof data.attrs === 'function' ? data.attrs() : data.attrs || '')
			+ (data.class ? ` class="${data.class}"` : '')
			+ ` data-property="${data.property}"`;

		if (data.format) {
			value = Player.getHandler(data.format)(value);
		}
		let type = typeof value;
		if (type === 'object') {
			value = JSON.stringify(value, null, 4)
		}

		const inputTemplate = typeof data.displayMethod === 'function' && data.displayMethod
			|| _.get(Player, data.displayMethod)
			|| data.displayMethod && Player.settings.inputTemplates[data.displayMethod]
			|| type === 'boolean' && Player.settings.inputTemplates.checkbox
			|| type === 'object' && Player.settings.inputTemplates.textarea
			|| data.options && Player.settings.inputTemplates.select
			|| Player.settings.inputTemplates.input;

		return inputTemplate({ value, attrs, setting: data });
	})()}
</div>`

/***/ },

/***/ "./src/components/settings/templates/settings.tpl"
/*!********************************************************!*\
  !*** ./src/components/settings/templates/settings.tpl ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => `<div class="${ns}-settings-tabs ${ns}-row">
	<div class="${ns}-settings-tab-group ${ns}-col-auto">
		<a href="#" class="${ns}-settings-reset-all ${ns}-settings-tab"
			@click.prevent="settings.resetAll"
			title="Reset all settings to their default values.">
			${Icons.reboot}
		</a>
		<a href="#" class="${ns}-settings-export ${ns}-settings-tab"
			@click.prevent="settings.export"
			title="Export. Shift click to export all settings. Otherwise only modified settings are included in the export.">
			${Icons.boxArrowRight}
		</a>
		<a href="#" class="${ns}-settings-import ${ns}-settings-tab"
			@click.prevent="settings.import"
			title="Import. Settings not included in the import will be left as their current value.">
			${Icons.boxArrowInLeft}
		</a>
		<a href="${Player.settings.changelog}" class="${ns}-settings-tab" target="_blank" title="v${"3.7.2.610"}">
			${Icons.github}
		</a>
	</div>
	<div class="${ns}-settings-tab-group ${ns}-col-auto">
		${Object.keys(Player.settings.groups).map(name => 
			`<a href="#" class="${ns}-settings-tab ${Player.settings.view !== name ? '' : 'active'}"
				@click.prevent='settings.showGroup("${name}")'
				data-group="${name}">
				${name}
			</a>`
		).join(' | ')}
	</div>
</div>
${Object.entries(Player.settings.groups).map(([ name, settings ]) => `
	<div class="${ns}-settings-group ${Player.settings.view !== name ? '' : 'active'}" data-group="${name}">
		${settings.map(Player.settings.settingTemplate).join('')}
	</div>
`).join('')}`

/***/ },

/***/ "./src/components/theme/index.js"
/*!***************************************!*\
  !*** ./src/components/theme/index.js ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const selectors = __webpack_require__(/*! ../../selectors */ "./src/selectors.js");
const settingsConfig = __webpack_require__(/*! config */ "./src/config/index.js");

const saveMenuTemplate = __webpack_require__(/*! ./templates/save_theme_menu.tpl */ "./src/components/theme/templates/save_theme_menu.tpl");

module.exports = {
  public: [ 'switch', 'next', 'previous' ],

  savedThemesTemplate: __webpack_require__(/*! ./templates/saved_themes.tpl */ "./src/components/theme/templates/saved_themes.tpl"),
  themeKeybindsTemplate: __webpack_require__(/*! ./templates/theme_keybinds.tpl */ "./src/components/theme/templates/theme_keybinds.tpl"),

  async initialize() {
    // Create the user stylesheet and update it when dependent config values are changed.
    Player.theme.render();
    Player.userTemplate.maintain(Player.theme, 'customCSS');
    Player.theme.validateOrder();

    // Observe changes to stylesheets and classes to re-apply the board theme dynamically.
    // Ignore the player's own stylesheets: applyBoardTheme rewrites them, and reacting to
    // that re-ran it (and re-rendered the settings) every 500ms, forever.
    const applyBoardTheme = _.debounce(() => Player.theme.applyBoardTheme(), 500);
    // Also ignore the title and favicon, which 4chan X rewrites for every new post.
    const isOwn = node => node && ([ Player.stylesheet, Player.varsCSS, Player.userStylesheet ].some(el => el && (el === node || el.contains(node)))
      || node.nodeName === 'TITLE' || (node.parentNode && node.parentNode.nodeName === 'TITLE')
      || (node.nodeName === 'LINK' && /icon/i.test(node.getAttribute('rel') || '')));
    const observer = new MutationObserver(mutations => {
      const external = mutations.some(m => !isOwn(m.target)
        && !(m.type === 'childList' && [ ...m.addedNodes, ...m.removedNodes ].every(isOwn)));
      external && applyBoardTheme();
    });

    // Watch for stylesheet changes in head
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href', 'disabled', 'rel']
    });

    // Watch for class changes on html and body (often used for theme toggling)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style']
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  },

  render() {
    Player.userStylesheet = Player.userStylesheet || _.element('<style id="sound-player-user-css"></style>', document.head);
    Player.userStylesheet.innerHTML = Player.userTemplate.build({
      template: '/* Sounds Player User CSS */\n\n' + Player.config.customCSS,
      sound: Player.playing,
      ignoreButtons: true,
      ignoreDisplayBlocks: true,
      ignoreSoundName: true,
      ignoreVersion: true
    });
  },

  forceBoardTheme() {
    Player.theme.applyBoardTheme({ force: true });
    Player.settings.save();
  },

  /**
	 * Get colors from the board theme.
	 */
  applyBoardTheme(opts = {}) {
    // Create a reply element to gather the style from
    const div = _.element(`<div class="${selectors.styleFetcher}"></div>`, document.body);
    const style = document.defaultView.getComputedStyle(div);

    // Make sure the style is loaded. Remove the fetcher element first or one is left in
    // the page each time this runs (the theme observer and every player toggle call it).
    if (style.backgroundColor === 'rgba(0, 0, 0, 0)') {
      div.remove();
      return;
    }
    Object.assign(style, { page_background: window.getComputedStyle(document.body).backgroundColor });

    // Apply the computed style to the color config.
    const colorSettingMap = {
      'colors.text': style.color,
      'colors.background': style.backgroundColor,
      'colors.odd_row': style.backgroundColor,
      'colors.border': style.borderBottomColor,
      // If the border is the same color as the text don't use it as a background color.
      'colors.even_row': style.borderBottomColor === style.color ? style.backgroundColor : style.borderBottomColor,
      // Set this for use in custom css and templates
      'colors.page_background': window.getComputedStyle(document.body).backgroundColor,
      // Playing row is a more saturated and brighter odd row.
      'colors.playing': (() => {
        const oddRowHSV = Player.colorpicker.rgb2hsv(...Player.colorpicker.parseRGB(style.backgroundColor));
        const playingRGB = Player.colorpicker.hsv2rgb(
          oddRowHSV[0],
          Math.min(1, oddRowHSV[1] + 0.25),
          Math.min(1, oddRowHSV[2] + 0.15)
        );
        return `rgb(${playingRGB[0]}, ${playingRGB[1]}, ${playingRGB[2]})`;
      })()
    };
    let changed = false;
    settingsConfig.find(s => s.property === 'colors').settings.forEach(setting => {
      const updateConfig = opts.force || (setting.default === _.get(Player.config, setting.property));
      colorSettingMap[setting.property] && (setting.default = colorSettingMap[setting.property]);
      // Player.set returns nothing when the value is unchanged.
      updateConfig && Player.set(setting.property, setting.default, { bypassSave: true, bypassRender: true, bypassStylesheet: true }) && (changed = true);
    });

    // Clean up the element.
    document.body.removeChild(div);

    // Only rewrite the CSS and re-render the settings when a colour actually changed: a
    // re-render closes an open colour picker and drops focus from the settings inputs.
    if (!opts.bypassRender && (changed || opts.force)) {
      // Updated the stylesheet.
      Player.display.updateCSSVars();
      // Re-render the settings.
      Player.settings.render();
    }
  },

  /**
	 * Switch to the next theme, wrapping round to the beginning.
	 */
  next() {
    const order = [ 'Default' ].concat(Player.config.savedThemesOrder);
    const cIndex = order.indexOf(Player.config.selectedTheme);
    const next = order[(cIndex + order.length + 1) % order.length];
    Player.theme.switch(next);
  },

  /**
	 * Switch to the previous theme, wrapping round to the end.
	 */
  previous() {
    const order = [ 'Default' ].concat(Player.config.savedThemesOrder);
    const cIndex = order.indexOf(Player.config.selectedTheme);
    const previous = order[(cIndex + order.length - 1) % order.length];
    Player.theme.switch(previous);
  },

  /**
	 * Switch theme.
	 * @param {String} name The name of the theme to switch to.
	 * @param {Object} opts Options passed to player.load
	 */
  switch(name) {
    if (name !== 'Default' && !Player.config.savedThemes[name]) {
      return Player.logError(`Theme '${_.escHTML(name)}' does not exist.`, null, 'warning');
    }
    // Only what switching to it could have set.
    const previous = Player.theme._themeFieldsOf(Player.config.savedThemes[Player.config.selectedTheme]);
    // Apply only the settings a theme can hold. Themes can be imported or shared, and one
    // with other settings (the allow list, upload hosts) would change those too.
    const next = name === 'Default' ? {} : Player.theme._themeFieldsOf(Player.config.savedThemes[name]);
    Player.set('selectedTheme', name);
    // Put back what the previous theme set and this one doesn't, so it doesn't carry over
    // (switching from Fixed Playlist kept its 4chan X header controls setting, for
    // example, whether going to Default or to another theme). Default always gets the
    // default templates; other settings only while they still have the previous theme's
    // value, so edits made after selecting it (e.g. new theme keybinds) are kept.
    const props = new Set(name === 'Default' ? [ 'headerTemplate', 'footerTemplate', 'rowTemplate', 'chanXTemplate', 'customCSS' ] : []);
    settingsConfig.flatMap(s => s.settings || [ s ]).forEach(s => {
      const themeValue = s.property && _.get(previous, s.property);
      // Keybinds a theme brought stay: resetting them stopped Next Theme after one press.
      themeValue !== undefined && !s.property.startsWith('hotkey_bindings.') && _.get(next, s.property) === undefined
        && _.isEqual(_.get(Player.config, s.property), themeValue) && props.add(s.property);
    });
    props.forEach(prop => {
      Player.settings.reset(prop, { bypassRender: true, bypassStylesheet: true });
    });
    if (name === 'Default') {
      Player.settings.render();
      Player.display.updateCSSVars();
    } else {
      Player.settings.load(next);
    }
  },

  /**
	 * The part of a theme's data that themes are allowed to set.
	 */
  _themeFieldsOf(theme) {
    const fields = {};
    (function collect(settings, parent) {
      settings.forEach(s => {
        if (s.settings) {
          return collect(s.settings, s);
        }
        const allowed = s.themeField || (s.allowInTheme !== undefined ? s.allowInTheme : parent && parent.allowInTheme);
        if (!allowed || !s.property) {
          return;
        }
        const value = _.get(theme || {}, s.property);
        value !== undefined && _.set(fields, s.property, value);
      });
    })(settingsConfig);
    return fields;
  },

  /**
	 * Make sure the saved themes order contains all and only the saved themes, without duplicates.
	 */
  validateOrder() {
    const order = Player.config.savedThemesOrder;
    let _i;
    Player.config.savedThemesOrder = order
      .concat(Object.keys(Player.config.savedThemes))
      .filter((name, i) => Player.config.savedThemes[name] && (_i = order.indexOf(name), _i === -1 || _i === i));
  },

  parseSwitch(newValue, bindings, e) {
    bindings = [ ...bindings ];
    const themeName = e.currentTarget.parentNode.dataset.name;
    if (themeName !== 'Default' && !Player.config.savedThemes[themeName]) {
      Player.logError(`No theme named '${_.escHTML(themeName)}'.`, null, 'warning');
    }
    const keyDef = Player.hotkeys.parseKey(newValue);
    if (!keyDef.key) {
      bindings = bindings.filter(def => def.themeName !== themeName);
    } else {
      // Replace rather than modify the existing binding: modifying it in place made the
      // change compare equal to the stored value, so it was never saved, and it kept
      // modifiers from the previous key.
      const binding = { themeName, ...keyDef };
      const index = bindings.findIndex(def => def.themeName === themeName);
      index === -1 ? bindings.push(binding) : (bindings[index] = binding);
    }
    return bindings;
  },

  handleSwitch(e) {
    Player.theme.switch(e._binding.themeName);
  },

  moveUp: e => Player.theme._swapOrder(e, -1),
  moveDown: e => Player.theme._swapOrder(e, 1),
  _swapOrder(e, dir) {
    const name = e.currentTarget.closest('[data-theme]').dataset.theme;
    const order = Player.config.savedThemesOrder;
    const i = order.indexOf(name);
    if (i + dir >= 0 && i + dir < order.length) {
      [ order[i], order[i + dir] ] = [ order[i + dir], order[i] ];
      // CSS.escape the theme name — a name containing a quote would otherwise break
      // the attribute selector (SyntaxError) or match unintended rows.
      Player.$(`[data-theme="${CSS.escape(name)}"]`).style.order = i + dir;
      Player.$(`[data-theme="${CSS.escape(order[i])}"]`).style.order = i;
      Player.settings.set('savedThemes', Player.config.savedThemes, { bypassValidation: true, bypassRender: true });
    }
  },

  remove(e) {
    const themes = Player.config.savedThemes;
    const row = e.currentTarget.closest('[data-theme]');
    const name = row.dataset.theme;
    // Can't delete the default. It's not actually a stored theme.
    if (name === 'Default') {
      return Player.logError('Cannot delete the default theme. You can instead overwrite it.', null, 'warning');
    }
    // Switch away first, while its settings are still known, so they're put back.
    const wasSelected = Player.config.selectedTheme === name;
    wasSelected && Player.theme.switch('Default');
    // For default themes set null so we know to not include them.
    if (Player.settings.findDefault('savedThemes').default[name]) {
      themes[name] = null;
    } else {
      delete themes[name];
    }
    Player.config.savedThemesOrder = Player.config.savedThemesOrder.filter(_name => _name !== name);
    // Remove the row
    row.parentNode.removeChild(row);
    Player.settings.set('savedThemes', themes, { bypassValidation: true, bypassRender: true });
    // A removed theme can't stay selected (next/previous would start from a missing entry).
    if (wasSelected) {
      Player.settings.renderSetting(Player.settings.findDefault('savedThemes'));
    }
    // Its row in the theme keybinds list goes too.
    Player.settings.renderSetting(Player.settings.findDefault('hotkey_bindings.switchTheme'));
    // Remove hotkey binding. The previous code used `.find()` (which returns the
    // matching object) but then passed it as the index to `.splice()` — splice
    // coerces an object to NaN→0 and splice itself returns the REMOVED items, so
    // the original call removed binding[0] and persisted only the removed binding.
    const bindings = Player.config.hotkey_bindings.switchTheme;
    const bindingIndex = bindings.findIndex(def => def.themeName === name);
    if (bindingIndex !== -1) {
      const updated = bindings.slice(0, bindingIndex).concat(bindings.slice(bindingIndex + 1));
      Player.set('hotkey_bindings.switchTheme', updated, { bypassValidation: true });
    }
  },

  restoreDefaults() {
    Object.assign(Player.config.savedThemes, _.clone(Player.settings.findDefault('savedThemes').default));
    Player.theme.validateOrder();
    Player.set('savedThemes', Player.config.savedThemes, { bypassValidation: true });
  },

  showSaveOptions(e) {
    const open = Player.$(`.${ns}-theme-save-options`);
    if (open) {
      return Player.container.removeChild(open);
    }
    const el = _.element(saveMenuTemplate({ settingsConfig }), Player.container);
    // Kept to reposition against when the fields are toggled.
    Player.theme._saveOptionsAnchor = e.currentTarget;
    Player.position.showRelativeTo(el, e.currentTarget);
    Player.$(`.${ns}-save-theme-name`).focus();
  },

  toggleSaveFields() {
    Player.$(`.${ns}-theme-save-options`).classList.toggle('fields-collapsed');
    // The old lookup by an '@click' attribute never matched ('@click.prevent.stop').
    const anchor = Player.theme._saveOptionsAnchor;
    anchor && document.contains(anchor) && Player.position.showRelativeTo(Player.$(`.${ns}-theme-save-options`), anchor);
  },

  toggleSaveButtonText(e) {
    Player.$(`.${ns}-save-theme`).innerHTML = Player.config.savedThemes[e.currentTarget.value] ? 'Update' : 'Create';
  },

  /**
	 * Enter in the theme name box saves, like the Create/Update link.
	 */
  handleNameKey(e) {
    // Not the Enter that confirms an IME conversion.
    if (e.key === 'Enter' && !e.isComposing) {
      e.preventDefault();
      Player.theme.save();
    }
  },

  save() {
    const name = Player.$(`.${ns}-save-theme-name`).value;
    if (!name) {
      return Player.logError('A name is required to save a theme.', null, 'warning');
    }
    // "Default" isn't a stored theme: a saved one by that name could be neither applied
    // nor deleted.
    if (name === 'Default') {
      return Player.logError('"Default" is reserved. Choose another name.', null, 'warning');
    }
    const checked = Player.$all(`.${ns}-theme-save-options input:checked`);
    const data = [ ...checked ].reduce((data, el) => _.set(data, el.value, _.get(Player.config, el.value)), {});
    Player.config.savedThemes[name] = data;
    Player.config.savedThemesOrder.indexOf(name) === -1 && Player.config.savedThemesOrder.push(name);
    Player.set('savedThemes', Player.config.savedThemes, { bypassValidation: true });
    Player.container.removeChild(Player.$(`.${ns}-theme-save-options`));
  }
};


/***/ },

/***/ "./src/components/theme/templates/save_theme_menu.tpl"
/*!************************************************************!*\
  !*** ./src/components/theme/templates/save_theme_menu.tpl ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => `<div class="${ns}-theme-save-options ${ns}-dialog fields-collapsed dialog" data-allow-click="true" style="top: 0px; left: 0px;">
	<div class="${ns}-row ${ns}-align-center">
		<div class="${ns}-col">
			<input type="text" class="${ns}-save-theme-name" @input="theme.toggleSaveButtonText" @keydown="theme.handleNameKey" placeholder="Name">
		</div>
		<div class="${ns}-col">
			<a class="${ns}-save-theme" @click.prevent="theme.save" href="#">Create</a>
		</div>
	</div>
	<a class="${ns}-row" @click.prevent="theme.toggleSaveFields" href="#" style="margin: .25rem 0">
		<span style="margin-right: .25rem">Included Settings</span>
		${Icons.chevronDown}
		${Icons.chevronUp}
	</a>
	${(function saveFieldOptions(settings, parent) {
		return settings.map(s => {
			const id = s.property && `theme_field-${s.property.replace(/\./g, '_')}`;
			return s.settings
				? saveFieldOptions(s.settings, s)
				: { ...(parent || {}), ...s }.allowInTheme || s.themeField
					? `<div><input type="checkbox" id="${id}" value="${s.property}" ${s.themeField ? 'checked' : ''}><label for="${id}">${parent ? `${parent.themeFieldTitle || parent.title}: ` : ''}${s.title}</label></div>`
					: '';
		}).join('');
	})(data.settingsConfig)}
</div>`

/***/ },

/***/ "./src/components/theme/templates/saved_themes.tpl"
/*!*********************************************************!*\
  !*** ./src/components/theme/templates/saved_themes.tpl ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `<div class="${ns}-row ${ns}-saved-themes">
	<div class="${ns}-row ${ns}-align-start ${ns}-sub-settings" data-theme="Default" style="order: ${-1}">
		<div class="${ns}-col ${ns}-space-between">Default</div>
		<div class="${ns}-col">
			<a href="#" class="${ns}-heading-action" @click.prevent='theme.switch("Default")' data-property="savedTheme">${Player.config.selectedTheme === 'Default' ? Icons.checkSquare : Icons.square}</a>
		</div>
	</div>
	${Player.config.savedThemesOrder.map((name, i) => `
		<div class="${ns}-row ${ns}-align-start ${ns}-sub-settings" data-theme="${_.escAttr(name)}" style="order: ${i}">
			<div class="${ns}-col ${ns}-space-between">${_.escHTML(name)}</div>
			<div class="${ns}-col">
				<a href="#" class="${ns}-heading-action" @click.prevent='theme.switch("${_.escAttr(name, true)}")'>${Player.config.selectedTheme === name ? Icons.checkSquare : Icons.square}</a>
				<a href="#" class="${ns}-heading-action ${ns}-move-theme-up ${i === 0 ? 'disabled' : '' }" @click.prevent="theme.moveUp" >${Icons.arrowUp}</a>
				<a href="#" class="${ns}-heading-action ${ns}-move-theme-down ${i === Player.config.savedThemesOrder.length - 1 ? 'disabled' : '' }" @click.prevent="theme.moveDown">${Icons.arrowDown}</a>
				<a href="#" class="${ns}-heading-action ${ns}-remove-theme" @click.prevent="theme.remove">${Icons.trash}</a>
			</div>
		</div>
	`).join('')}
</div>`


/***/ },

/***/ "./src/components/theme/templates/theme_keybinds.tpl"
/*!***********************************************************!*\
  !*** ./src/components/theme/templates/theme_keybinds.tpl ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => [ 'Default' ].concat(Player.config.savedThemesOrder).map(name => `
	<div class="${ns}-row ${ns}-select-themes">
		<div class="${ns}-col"><span style="padding-left: .5rem">- ${_.escHTML(name)}</span></div>
		<div class="${ns}-col" data-name="${_.escAttr(name)}">
			<input
				type="text"
				@keydown="settings.handleKeyChange"
				value="${_.escAttr(Player.hotkeys.stringifyKey(Player.config.hotkey_bindings.switchTheme.find(def => def && def.themeName === name) || { key: '' }))}"
				data-property="hotkey_bindings.switchTheme"
			/>
		</div>
	</div>
`).join('')


/***/ },

/***/ "./src/components/theme/themes.js"
/*!****************************************!*\
  !*** ./src/components/theme/themes.js ***!
  \****************************************/
(module) {

module.exports = {
  'Fixed Playlist': {
    chanXControls: 'always',
    headerTemplate: '<div class="playlist-resizer fcsp-expander" data-direction="w" data-bypass-save="true" data-bypass-position="true" data-allow-offscreen="true"></div>\nrepeat-button shuffle-button hover-images-button playlist-button\nsound-title-marquee\nview-menu-button add-button theme-menu-button close-button',
    rowTemplate: 'sound-title\np:{<img class="fcsp-row-image" src="sound-imageOrThumb">}\n<img class="fcsp-row-thumb" src="sound-thumb">',
    customCSS: '/* Fix the player to the right at full height (minus the 4chan X header) */\n#fcsp-container[data-view-style="playlist"] {\n\t/* Fixed width *\\/\n\twidth: 25rem !important;/**/\n\theight: auto !important;\n\ttop: $config[offsetTop] !important;\n\tright: 0px !important;\n\tbottom: $config[offsetBottom] !important;\n\tleft: auto !important;\n\theight: auto !important;\n\tmax-height: calc(100% - 24px);\n\tbackground: none !important;\n\tborder: none !important;\n}\n\n/* Hide things when the playlist is open */\n/* Hide the image with the playlist open, unless it\'s a webm.\n * To show gifs as well change playing-video to playing-animated. */\n#fcsp-container[data-view-style="playlist"]:not(.playing-video) .fcsp-image-link,/**/ \n#fcsp-container[data-view-style="playlist"] .fcsp-controls,\n#fcsp-container[data-view-style="playlist"] .fcsp-hover-image,\n#fcsp-container[data-view-style="playlist"] .fcsp-footer,\n#fcsp-container[data-view-style="fullscreen"] .fcsp-row-thumb,\n#fcsp-container[data-view-style="fullscreen"] .fcsp-row-image {\n\tdisplay: none !important;\n}\n/* Header is shown with adjustments to handle the changed container style */\n/* Opacity and absolute position are used to auto hide the header */\n#fcsp-container[data-view-style="playlist"] .fcsp-header {\n\tposition: absolute !important;\n\topacity: 0;\n\tz-index: 9;\n\tcursor: inherit;\n\tbackground: $config[colors.background];\n\tborder-width: 0 1px 1px 0;\n\ttransition: all .3s ease;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-header:hover {\n\topacity: 1;\n}\n\n/* Don\'t show a scrollbar for the playlist for aesthetic reasons */\n#fcsp-container[data-view-style="playlist"] .fcsp-under-image {\n\tscrollbar-width: none;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-under-image::-webkit-scrollbar {\n\tdisplay: none;\n}\n\n/* Chunky playlist items, with no background and a squared thumbnail image. */\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item {\n\tbackground: none !important;\n\theight: auto !important;\n\tline-height: initial;\n\ttext-align: right;\n\talign-items: center;\n\ttransition: all .5s ease;\n\tfont-size: 1rem;\n\tcolor: $config[colors.text];\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-row-thumb, #fcsp-container[data-view-style="playlist"] .fcsp-row-image {\n\theight: 3rem;\n\twidth: 3rem;\n\tobject-fit: cover;\n\ttransition: all .5s ease;\n}\n/* Show a gradient background and increase the size of list items when you hover over them. */\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item:hover {\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n\tbackground-image: radial-gradient(circle at -50%, #0000 70%, $config[colors.odd_row]) !important;\n\tcolor: $config[colors.background];\n\t-webkit-text-stroke: 1px black;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item:hover .fcsp-row-thumb {\n\theight: 4rem;\n\twidth: 4rem;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-row-image {\n\theight: 7rem;\n\twidth: 7rem;\n}\n/* Add a gradient background to the playing item, make the text bigger, and style the text. */\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item.playing {\n\tbackground-image: radial-gradient(circle at -50%, #0000 70%, $config[colors.playing]) !important;\n\tpadding-left: 2px;\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tcolor: $config[colors.page_background];\n\t-webkit-text-stroke: 1px black;\n\ttext-shadow: 0 0 2px $config[colors.border];\n}\n/* Swap the thumb image with the full image for the playing item. */\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item:not(.playing) .fcsp-row-image {\n\tdisplay: none;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item.playing .fcsp-row-thumb {\n\tdisplay: none;\n}\n/* Same gradient background style for dragging items. */\n#fcsp-container[data-view-style="playlist"] .fcsp-dragging {\n\tbackground-image: radial-gradient(circle at -50%, #0000 70%, $config[colors.dragging]) !important\n}\n\n/* Add a resizer to the left of the header when the playlist is open. */\n.playlist-resizer {\n\topacity: 1 !important;\n\tmargin: 0 !important;\n\twidth: .25rem !important;\n\theight: auto !important;\n\tbackground-color: $config[colors.border] !important;\n\tposition: absolute;\n\tleft: -.25rem !important;\n\ttop: 0 !important;\n\tbottom: 0 !important;\n\tborder-radius: 100% 0 0 100%;\n\tcursor: ew-resize !important;\n\tdisplay: none;\n\ttransition: all .5s ease;\n}\n.playlist-resizer:hover {\n\twidth: .4rem !important;\n\tleft: -.4rem !important;\n}\n#fcsp-container[data-view-style="playlist"] .playlist-resizer {\n\tdisplay: block;\n}\n/* Hide the default resizers */\n#fcsp-container[data-view-style="playlist"] .fcsp-expander:not(.playlist-resizer) {\n\tdisplay: none;\n}\n'
  }
};


/***/ },

/***/ "./src/components/threads/index.js"
/*!*****************************************!*\
  !*** ./src/components/threads/index.js ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const { get } = __webpack_require__(/*! ../../api */ "./src/api.js");

const maxSavedBoards = 10;
const boardsURL = 'https://a.4cdn.org/boards.json';
const catalogURL = 'https://a.4cdn.org/%s/catalog.json';

// API subjects and comments are HTML (entities, <br>, quote spans). Parse them in an
// inert DOMParser document, which runs no scripts and loads nothing, to get plain text.
function htmlToText(html) {
  if (!html) {
    return '';
  }
  const text = String(html).replace(/<br\s*\/?>/gi, ' ');
  return new DOMParser().parseFromString(text, 'text/html').body.textContent;
}

module.exports = {
  template: __webpack_require__(/*! ./templates/threads.tpl */ "./src/components/threads/templates/threads.tpl"),
  boardsTemplate: __webpack_require__(/*! ./templates/boards.tpl */ "./src/components/threads/templates/boards.tpl"),
  listsTemplate: __webpack_require__(/*! ./templates/list.tpl */ "./src/components/threads/templates/list.tpl"),

  boardList: null,
  soundThreads: null,
  displayThreads: {},
  selectedBoards: Board ? [ Board ] : [ 'a' ],
  showAllBoards: false,

  async initialize() {
    Player.threads.hasParser = is4chan && typeof Parser !== 'undefined';
    // If the native Parser hasn't been intialised chuck customSpoiler on it so we can call it for threads.
    // You shouldn't do things like this. We can fall back to the table view if it breaks though.
    if (Player.threads.hasParser && !Parser.customSpoiler) {
      Parser.customSpoiler = {};
    }

    Player.on('show', Player.threads._initialFetch);
    Player.on('view', Player.threads._initialFetch);
    Player.on('rendered', Player.threads.afterRender);
    Player.on('config:threadsViewStyle', Player.threads.render);
    try {
      const savedBoards = await GM.getValue('threads_board_selection');
      savedBoards && (Player.threads.selectedBoards = savedBoards.split(','));
    } catch (err) {
      // Leave it defaulted to the current board.
    }
  },

  /**
	 * Fetch the threads when the threads view is opened for the first time.
	 */
  _initialFetch() {
    if (Player.container && Player.config.viewStyle === 'threads' && Player.threads.boardList === null) {
      Player.threads.fetchBoards(true).catch(err => Player.logError('Failed fetching the boards list.', err));
      Player.off('show', Player.threads._initialFetch);
      Player.off('view', Player.threads._initialFetch);
    }
  },

  render() {
    if (Player.container) {
      _.elementHTML(Player.$(`.${ns}-threads`), Player.threads.template());
      Player.threads.afterRender();
    }
  },

  /**
	 * Render the threads and apply the board styling after the view is rendered.
	 */
  afterRender() {
    const threadList = Player.$(`.${ns}-thread-list`);
    if (threadList) {
      const bodyStyle = document.defaultView.getComputedStyle(document.body);
      threadList.style.background = bodyStyle.backgroundColor;
      threadList.style.backgroundImage = bodyStyle.backgroundImage;
      threadList.style.backgroundRepeat = bodyStyle.backgroundRepeat;
      threadList.style.backgroundPosition = bodyStyle.backgroundPosition;
    }
    Player.threads.renderThreads();
  },

  /**
	 * Render just the threads.
	 */
  renderThreads() {
    if (!Player.threads.hasParser || Player.config.threadsViewStyle === 'table') {
      _.elementHTML(Player.$(`.${ns}-threads-body`), Player.threads.listsTemplate());
    } else {
      try {
        const list = Player.$(`.${ns}-thread-list`);
        list.innerHTML = '';
        for (let board in Player.threads.displayThreads) {
          // Create a board title — board/title come from the official 4chan API
          // (boards.json) but escape for defense in depth. Text-node context so
          // escHTML (no `;`/`\`/quote handling needed).
          const boardConf = Player.threads.boardList.find(boardConf => boardConf.board === board);
          const boardTitle = `/${_.escHTML(boardConf.board)}/ - ${_.escHTML(boardConf.title)}`;
          _.element(`<div class="boardBanner"><div class="boardTitle">${boardTitle}</div></div>`, list);

          // Add each thread for the board
          const threads = Player.threads.displayThreads[board];
          for (let i = 0; i < threads.length; i++) {
            list.appendChild(Parser.buildHTMLFromJSON.call(Parser, threads[i], threads[i].board, true, true));

            // Add a line under each thread
            _.element('<hr style="clear: both">', list);
          }
        }
      } catch (err) {
        Player.logError('Unable to display the threads board view.', err, 'warning');
        // If there was an error fall back to the table view. Previous code called
        // `Player.renderThreads()` which doesn't exist (not exported at root) —
        // crashing the fallback too.
        Player.set('threadsViewStyle', 'table');
        Player.threads.renderThreads();
      }
    }
  },

  /**
	 * Render just the board selection.
	 */
  renderBoards() {
    _.elementHTML(Player.$(`.${ns}-thread-board-list`), Player.threads.boardsTemplate());
  },

  /**
	 * Toggle the threads view.
	 */
  toggle() {
    if (Player.config.viewStyle === 'threads') {
      Player.playlist.restore();
    } else {
      Player.display.setViewStyle('threads');
    }
  },

  /**
	 * Switch between showing just the selected boards and all boards.
	 */
  toggleBoardList() {
    Player.threads.showAllBoards = !Player.threads.showAllBoards;
    Player.$(`.${ns}-all-boards-link`).innerHTML = Player.threads.showAllBoards ? 'Selected Only' : 'Show All';
    Player.threads.renderBoards();
  },

  /**
	 * Select/deselect a board.
	 */
  async toggleBoard(board, selected) {
    if (selected) {
      !Player.threads.selectedBoards.includes(board) && Player.threads.selectedBoards.unshift(board);
    } else {
      Player.threads.selectedBoards = Player.threads.selectedBoards.filter(b => b !== board);
    }
    await GM.setValue('threads_board_selection', Player.threads.selectedBoards.slice(0, maxSavedBoards).join(','));
  },

  /**
	 * Fetch the board list from the 4chan API.
	 */
  async fetchBoards(fetchThreads) {
    Player.threads.loading = true;
    Player.threads.render();
    try {
      const response = await get(boardsURL);
      if (!response || !Array.isArray(response.boards)) {
        throw new Error('The boards list response had no boards.');
      }
      Player.threads.boardList = response.boards;
    } catch (err) {
      // Clear the loading state so the Update link comes back and the user can retry.
      Player.threads.loading = false;
      Player.threads.render();
      throw err;
    }
    if (fetchThreads) {
      Player.threads.fetch();
    } else {
      Player.threads.loading = false;
      Player.threads.render();
    }
  },

  /**
	 * Fetch the catalog for each selected board and search for sounds in OPs.
	 */
  async fetch() {
    // Only the latest fetch shows its results.
    const token = Player.threads._fetching = {};
    Player.threads.loading = true;
    Player.threads.render();
    if (!Player.threads.boardList) {
      try {
        await Player.threads.fetchBoards();
      } catch (err) {
        return Player.logError('Failed fetching the boards list.', err);
      }
      // fetchBoards ends by showing the idle view, but the catalogs are still to come.
      if (Player.threads._fetching !== token) {
        return;
      }
      Player.threads.loading = true;
      Player.threads.render();
    }
    const failedBoards = [];
    const boards = Player.threads.selectedBoards.slice();
    const byBoard = new Array(boards.length);
    const fetchBoard = async (board, i) => {
      const boardConf = Player.threads.boardList.find(boardConf => boardConf.board === board);
      if (!boardConf) {
        return;
      }
      // Catch per board so one failing catalog doesn't discard every other board's threads.
      let pages;
      try {
        pages = await get(catalogURL.replace('%s', board));
      } catch (err) {
        console.error('[4chan sounds player]', err);
        failedBoards.push(board);
        return;
      }
      byBoard[i] = (pages || []).flatMap(({ page, threads }) => threads.map(thread => Object.assign(thread, { board, page, ws_board: boardConf.ws_board })));
    };
    try {
      // A couple of catalogs at a time (4chan's API asks clients not to flood it), kept in
      // the order the boards are selected rather than the order they arrive.
      let next = 0;
      const worker = async () => {
        while (next < boards.length) {
          const i = next++;
          await fetchBoard(boards[i], i);
        }
      };
      await Promise.all([ worker(), worker() ]);
      if (Player.threads._fetching !== token) {
        return;
      }
      const allThreads = byBoard.flat().filter(Boolean);
      failedBoards.length && Player.logError(`Failed fetching the catalog for /${failedBoards.map(_.escHTML).join('/, /')}/.`, null, 'warning');

      Player.threads.soundThreads = allThreads.filter(thread => {
        const { sounds } = Player.posts.getSounds(thread.filename, `https://i.4cdn.org/${thread.board}/${thread.tim}${thread.ext}`, thread.no, `https://i.4cdn.org/${thread.board}/${thread.tim}s${thread.ext}`, thread.md5, true);
        return sounds.length;
      });
      // Plain text for the table view (escaped there) and for the filter, which would
      // otherwise match markup like "span" and miss entity-encoded text like "don't".
      Player.threads.soundThreads.forEach(thread => {
        thread._subText = htmlToText(thread.sub);
        thread._searchText = (thread._subText + ' ' + htmlToText(thread.com)).toLowerCase();
      });
    } catch (err) {
      Player.logError('Failed searching for sounds threads.', err);
    }
    Player.threads.loading = false;
    Player.threads.filter(Player.$(`.${ns}-threads-filter`).value, true);
    Player.threads.render();
  },

  /**
	 * Apply the filter input to the already fetched threads.
	 */
  filter(search, skipRender) {
    // The box shows what was typed; matching ignores case.
    Player.threads.filterValue = search || '';
    search = (search || '').toLowerCase();
    if (Player.threads.soundThreads === null) {
      return;
    }
    Player.threads.displayThreads = Player.threads.soundThreads.reduce((threadsByBoard, thread) => {
      // Show every thread when search is empty; otherwise match against sub OR com.
      // Original `search || ...` made any non-empty search match every thread.
      const matches = !search || (thread._searchText || '').includes(search);
      if (matches) {
        threadsByBoard[thread.board] || (threadsByBoard[thread.board] = []);
        threadsByBoard[thread.board].push(thread);
      }
      return threadsByBoard;
    }, {});
    !skipRender && Player.threads.renderThreads();
  }
};


/***/ },

/***/ "./src/components/threads/templates/boards.tpl"
/*!*****************************************************!*\
  !*** ./src/components/threads/templates/boards.tpl ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => (Player.threads.boardList || []).map(board => {
	let checked = Player.threads.selectedBoards.includes(board.board);
	return !checked && !Player.threads.showAllBoards ? '' : `
		<label>
			<input
				type="checkbox"
				@change='threads.toggleBoard("${_.escAttr(board.board, true)}", $event.currentTarget.checked)'
				value="${_.escAttr(board.board)}"
				${checked ? 'checked' : ''}
			/>
			/${_.escHTML(board.board)}/
		</label>`
}).join('')


/***/ },

/***/ "./src/components/threads/templates/list.tpl"
/*!***************************************************!*\
  !*** ./src/components/threads/templates/list.tpl ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => Object.keys(Player.threads.displayThreads).reduce((rows, board) => {
	return rows.concat(Player.threads.displayThreads[board].map(thread => `
		<tr>
			<td>
				<a class="quotelink" href="//boards.${thread.ws_board ? '4channel' : '4chan'}.org/${_.escAttr(thread.board)}/thread/${_.escAttr(thread.no)}#p${_.escAttr(thread.no)}" target="_blank">
					>>>/${_.escHTML(thread.board)}/${_.escHTML(thread.no)}
				</a>
			</td>
			<td>${_.escHTML(thread._subText)}</td>
			<td>${_.escHTML(thread.replies)} / ${_.escHTML(thread.images)}</td>
			<td>${_.timeAgo(thread.time)}</td>
			<td>${_.timeAgo(thread.last_modified)}</td>
		</tr>
	`))
}, []).join('')


/***/ },

/***/ "./src/components/threads/templates/threads.tpl"
/*!******************************************************!*\
  !*** ./src/components/threads/templates/threads.tpl ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `<div class="${ns}-heading lined">
	Active Threads
	${!Player.threads.loading ? `- <a class="${ns}-heading-action" @click.prevent="threads.fetch" href="#">Update</a>` : ''}
</div>

<div style="margin: 0 .25rem; display: ${Player.threads.loading ? 'block' : 'none'}">Loading</div>

<div style="margin: 0 .25rem; display: ${Player.threads.loading ? 'none' : 'block'}">
	<div class="${ns}-heading">
		Filter
	</div>
	<input
		type="text"
		class="${ns}-threads-filter"
		@input='threads.filter($event.target.value)'
		value="${_.escAttr(Player.threads.filterValue || '')}"
	/>

	<div class="${ns}-heading">
		Boards -
		<a class="${ns}-all-boards-link ${ns}-heading-action" @click.prevent="threads.toggleBoardList" href="#">
			${Player.threads.showAllBoards ? 'Selected Only' : 'Show All'}
		</a>
	</div>
	<div class="${ns}-thread-board-list">
		${Player.threads.boardsTemplate(data)}
	</div>

	${!Player.threads.hasParser
		? ''
		: `<div class="${ns}-heading" style="text-align: center">
			${Player.config.threadsViewStyle !== 'table'
				? `<a class="${ns}-heading-action" @click.prevent='set("threadsViewStyle","table")' href="#">Table</a>`
				: `<span>Table</span>`}
			|
			${Player.config.threadsViewStyle !== 'board'
				? `<a class="${ns}-heading-action" @click.prevent='set("threadsViewStyle","board")' href="#">Board</a>`
				: `<span>Board</span>`}
		</div>`
	}
	${
		!Player.threads.hasParser || Player.config.threadsViewStyle === 'table'
		? `<table>
				<tr>
					<th>Thread</th>
					<th>Subject</th>
					<th>Replies/Images</th>
					<th>Started</th>
					<th>Updated</th>
				</tr>
				<tbody class="${ns}-threads-body"></tbody>
			</table>`
		: `<div class="${ns}-thread-list"></div>`
	}
</div>`


/***/ },

/***/ "./src/components/tools/create.js"
/*!****************************************!*\
  !*** ./src/components/tools/create.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
// Seems to be the cut off point for file names
const maxFilenameLength = 218;

const completeTemplate = __webpack_require__(/*! ./templates/create-complete.tpl */ "./src/components/tools/templates/create-complete.tpl");
const hostsTemplate = __webpack_require__(/*! ./templates/hosts-select.tpl */ "./src/components/tools/templates/hosts-select.tpl");

/**
 * This component is mixed into tools so these function are under `Player.tools`.
 */
const createTool = module.exports = {
  _uploadIdx: 0,
  createTemplate: __webpack_require__(/*! ./templates/create.tpl */ "./src/components/tools/templates/create.tpl"),
  createHostsTemplate: hostsTemplate,
  createCompleteTemplate: completeTemplate,

  /**
	 * Update the view when the hosts are updated.
	 */
  initialize() {
    Player.on('config:uploadHosts', () => Player.$(`.${ns}-create-hosts-container`).innerHTML = hostsTemplate());
    Player.on('config:defaultUploadHost', newValue => Player.$(`.${ns}-create-sound-host`).value = newValue);
    Player.on('rendered', createTool.afterRender);
  },

  /**
	 * Store references to various elements.
	 */
  afterRender() {
    createTool.status = Player.$(`.${ns}-create-sound-status`);
    Player.tools.imgInput = Player.$(`.${ns}-create-sound-img`);
    Player.tools.sndInput = Player.$(`.${ns}-create-sound-snd`);
  },

  /**
	 * Show/hide the "Use webm" checkbox when an image is selected.
	 */
  async handleImageSelect(e) {
    const input = e && e.currentTarget || Player.tools.imgInput;
    const image = input.files[0];
    if (!image) {
      return;
    }
    let placeholder = image.name.replace(/\.[^/.]+$/, '');

    if (await Player.tools.hasAudio(image)) {
      Player.logError('Audio not allowed for the image video.', null, 'warning');
    }

    // Show the image name as the placeholder for the name input since it's the default
    Player.$(`.${ns}-create-sound-name`).setAttribute('placeholder', placeholder);
  },

  /**
	 * Update the custom file input display when the input changes
	 */
  handleFileSelect(input, files) {
    const container = input.closest(`.${ns}-file-input`);
    const fileText = container.querySelector('.text');
    const fileList = container.querySelector(`.${ns}-file-list`);
    files || (files = [...input.files]);
    container.classList[files.length ? 'remove' : 'add']('placeholder');
    // textContent: a file name can contain markup.
    fileText.textContent = files.length > 1
      ? files.length + ' files'
      : files[0] && files[0].name || '';
    fileList && (_.elementHTML(fileList, files.length < 2 ? '' : files.map((file, i) =>
      `<div class="${ns}-row">
				<div class="${ns}-col ${ns}-truncate-text">${_.escHTML(file.name)}</div>
				<a class="${ns}-col-auto" @click.prevent="tools.handleFileRemove" href="#" data-idx="${i}">${Icons.close}</a>
			</div>`
    ).join('')));
  },

  /**
	 * Handle a file being removed from a multi input
	 */
  handleFileRemove(e) {
    const idx = +e.currentTarget.getAttribute('data-idx');
    const input = e.currentTarget.closest(`.${ns}-file-input`).querySelector('input[type="file"]');
    const dataTransfer = new DataTransfer();
    for (let i = 0; i < input.files.length; i++) {
      i !== idx && dataTransfer.items.add(input.files[i]);
    }
    input.files = dataTransfer.files;
    Player.tools.handleFileSelect(input);
  },

  /**
	 * Show/hide the sound input when "Use webm" is changed.
	 */
  handleWebmSoundChange(e) {
    const sound = Player.tools.sndInput;
    const image = Player.tools.imgInput;
    Player.tools.handleFileSelect(sound, e.currentTarget.checked && [image.files[0]]);
  },

  toggleSoundInput(type) {
    const showURL = type === 'url';
    Player.$(`.${ns}-create-sound-snd-url`).closest(`.${ns}-row`).style.display = showURL ? null : 'none';
    Player.$(`.${ns}-create-sound-snd`).closest(`.${ns}-file-input`).style.display = showURL ? 'none' : null;
    Player.tools.useSoundURL = showURL;
  },

  /**
	 * Handle files being dropped on the create sound section.
	 */
  handleCreateSoundDrop(e) {
    const targetInput = e.target.nodeName === 'INPUT' && e.target.getAttribute('type') === 'file' && e.target;
    [...e.dataTransfer.files].forEach(file => {
      const isVideo = file.type.startsWith('video');
      const isImage = file.type.startsWith('image') || file.type === 'video/webm' || file.type === 'video/mp4';
      const isSound = file.type.startsWith('audio');
      if (isVideo || isImage || isSound) {
        const input = (file.type === 'video/webm' || file.type === 'video/mp4') && targetInput
          ? targetInput
          : isImage
            ? Player.tools.imgInput
            : Player.tools.sndInput;
        const dataTransfer = new DataTransfer();
        if (input.multiple) {
          [...input.files].forEach(file => dataTransfer.items.add(file));
        }
        dataTransfer.items.add(file);
        input.files = dataTransfer.files;
        Player.tools.handleFileSelect(input);
        input === Player.tools.imgInput && Player.tools.handleImageSelect();
        // Make sure sound file input is shown if a sound file is dropped
        if (input === Player.tools.sndInput && Player.tools.useSoundURL) {
          Player.tools.toggleSoundInput('file');
        }
      }
    });
    return false;
  },

  /**
	 * Handle the create button.
	 * Extracts video/audio if required, uploads the sound, and creates an image file names with [sound=url].
	 */
  async handleCreate() {
    // Revoke the URL for an existing created image.
    Player.tools._createdImageURL && URL.revokeObjectURL(Player.tools._createdImageURL);
    Player.tools._createdImage = null;

    createTool.status.style.display = 'block';
    createTool.status.innerHTML = 'Creating sound image';

    Player.$(`.${ns}-create-button`).disabled = true;

    // Gather the input values.
    const host = Player.config.uploadHosts[Player.$(`.${ns}-create-sound-host`).value];
    const useSoundURL = Player.tools.useSoundURL;
    let image = Player.tools.imgInput.files[0];
    let soundURLs = useSoundURL && Player.$(`.${ns}-create-sound-snd-url`).value.split(',').map(v => v.trim()).filter(v => v);
    let sounds = !(Player.$(`.${ns}-use-video`) || {}).checked || !image || !image.type.startsWith('video')
      ? [...Player.tools.sndInput.files]
      : image && [image];
    const customName = Player.$(`.${ns}-create-sound-name`).value;
    // Only split a given name if there's multiple sounds.
    const names = customName
      ? ((soundURLs || sounds).length > 1 ? customName.split(',') : [customName]).map(v => v.trim())
      : image && [image.name.replace(/\.[^/.]+$/, '')];

    try {
      if (!image) {
        throw new PlayerError('Select an image or video.', 'warning');
      }

      // No audio allowed for the "image" webm.
      if (image.type.startsWith('video') && await Player.tools.hasAudio(image)) {
        createTool.status.innerHTML += '<br>Audio not allowed for the image video.'
					+ '<br>Remove the audio from the video and try again.';
        throw new PlayerError('Audio not allowed for the image video.', 'warning');
      }

      const soundlessLength = names.join('').length + (soundURLs || sounds).length * 8;
      if (useSoundURL) {
        try {
          // Strip the protocol, then make sure what's left is a valid URL. Scheme-less
          // URLs (files.catbox.moe/x.mp3) are the format sound filenames use, so accept them.
          soundURLs = soundURLs.map(url => {
            const bare = url.replace(/^(https?:)?\/\//, '');
            // Browsers accept a lot as a URL ("not a url at all" included): require a host
            // with a dot and no spaces (spaces in the path are fine).
            const host = bare.split(/[/?#]/)[0];
            if (/\s/.test(host) || !host.includes('.') || !new URL('https://' + bare).hostname) {
              throw new Error('Invalid URL');
            }
            return bare;
          });
        } catch (err) {
          throw new PlayerError('The provided sound URL is invalid.', 'warning');
        }
        // The URLs are percent-encoded in the filename, so measure the encoded length.
        if (maxFilenameLength < soundlessLength + soundURLs.map(encodeURIComponent).join('').length) {
          throw new PlayerError('The generated image filename is too long.', 'warning');
        }
      } else {
        if (!sounds || !sounds.length) {
          throw new PlayerError('Select a sound.', 'warning');
        }
        if (!host || host.invalid) {
          throw new PlayerError('Select a valid upload host.', 'warning');
        }

        // Check the final filename length if the URL length is known for the host.
        // Limit to 8 otherwise. zz.ht is as small as you're likely to get and that can only fit 8.
        const tooManySounds = host.filenameLength
          ? maxFilenameLength < soundlessLength + (host.filenameLength) * sounds.length
          : sounds.length > 8;
        if (tooManySounds) {
          throw new PlayerError('The generated image filename is too long.', 'warning');
        }

        // Check videos have audio.
        sounds = await Promise.all(sounds.map(async sound => {
          if (sound.type.startsWith('video')) {
            if (!await Player.tools.hasAudio(sound)) {
              throw new PlayerError(`The selected video has no audio. (${sound.name})`, 'warning');
            }
          }
          return sound;
        }));

        // Upload the sounds.
        try {
          soundURLs = await Promise.all(sounds.map(async sound => Player.tools.postFile(sound, host)));
        } catch (err) {
          // Say why where we know: a misconfigured host, or the host's answer.
          const why = err instanceof PlayerError ? ` ${err.reason}`
            : err && err.status ? ` The host answered ${err.status}${err.statusText ? ` ${err.statusText}` : ''}.` : '';
          throw new PlayerError(`Upload failed.${why}`, 'error', err);
        }
      }

      if (!soundURLs.length) {
        throw new PlayerError('No sounds selected.', 'warning');
      }

      // Create a new file that includes [sound=url] in the name. encodeURIComponent leaves
      // ( and ) alone, but a tag can also end at ")", so "song(1).mp3" cut the link short.
      const encodeLink = url => encodeURIComponent(url.replace(/^(https?:)?\/\//, '')).replace(/\(/g, '%28').replace(/\)/g, '%29');
      let filename = '';
      for (let i = 0; i < soundURLs.length; i++) {
        filename += (names[i] || '') + '[sound=' + encodeLink(soundURLs[i]) + ']';
      }
      // Read it back as the player will, so a name that reads as a sound link of its own
      // ("[sound=x.mp3]" typed into the name) is caught here rather than in the thread.
      const readBack = Player.posts.getSounds(filename + '.png', 'created.png', 'created', null, null, true).sounds;
      if (readBack.length !== soundURLs.length) {
        throw new PlayerError('The name contains text that reads as a sound link. Change the name and try again.', 'warning');
      }
      // The checks above estimate the URL lengths before uploading; check the real name.
      // 4chan cuts longer names, which loses the last [sound=] tag.
      if (filename.length > maxFilenameLength) {
        throw new PlayerError(`The generated image filename is too long (${filename.length} of ${maxFilenameLength} characters). `
          + 'Use a shorter name or fewer sounds. The uploaded links are listed above and can be reused with the URL option.', 'warning');
      }
      // Match-then-[1] would throw on extension-less filenames; fall back gracefully.
      const extMatch = image.name.match(/\.([^/.]+)$/);
      const ext = extMatch ? extMatch[1] : (image.type.split('/')[1] || 'bin');

      // Keep track of the create image and a url to it.
      Player.tools._createdImage = new File([image], filename + '.' + ext, { type: image.type });
      Player.tools._createdImageURL = URL.createObjectURL(Player.tools._createdImage);

      // Complete! with some action links
      _.element(completeTemplate(), createTool.status);
    } catch (err) {
      // Some reasons include a file name, so escape.
      createTool.status.innerHTML += '<br>Failed! ' + (err instanceof PlayerError ? _.escHTML(err.reason) : '');
      Player.logError('Failed to create sound image', err);
    }
    Player.$(`.${ns}-create-button`).disabled = false;
  },

  hasAudio(file) {
    if (!file.type.startsWith('audio') && !file.type.startsWith('video')) {
      return false;
    }
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const video = document.createElement('video');
      video.addEventListener('loadeddata', () => {
        URL.revokeObjectURL(url);
        resolve(video.mozHasAudio || !!video.webkitAudioDecodedByteCount);
      });
      video.addEventListener('error', e => {
        // Revoke on the error path too so a probe failure doesn't leak the object URL.
        URL.revokeObjectURL(url);
        reject(e);
      });
      video.src = url;
    });
  },

  /**
	 * Upload the sound file and return a link to it.
	 */
  async postFile(file, host) {
    const idx = Player.tools._uploadIdx++;

    if (!host || host.invalid) {
      throw new PlayerError('Invalid upload host.', 'error');
    }

    const formData = new FormData();
    Object.keys(host.data).forEach(key => {
      if (host.data[key] !== null) {
        formData.append(key, host.data[key] === '$file' ? file : host.data[key]);
      }
    });

    createTool.status.innerHTML += `<br><span class="${ns}-upload-status-${idx}">Uploading ${_.escHTML(file.name)}</span>`;

    // Responses are matched as text: compile the pattern up front so a broken one is reported.
    let responseRE;
    try {
      responseRE = host.responseMatch && new RegExp(host.responseMatch);
    } catch (err) {
      throw new PlayerError('The host\'s response match isn\'t a valid regular expression.', 'error');
    }

    return new Promise((resolve, reject) => {
      GM.xmlHttpRequest({
        method: 'POST',
        // A URL saved without its scheme would be read relative to the page.
        url: /^https?:\/\//i.test(host.url) ? host.url : `https://${String(host.url).replace(/^\/\//, '')}`,
        data: formData,
        // A host that never answers left Create disabled until a reload. The limit is for the
        // whole upload, so allow for big files on slow connections (5 minutes, plus a second
        // for every 25KB).
        timeout: 5 * 60 * 1000 + Math.ceil((file.size || 0) / 25000) * 1000,
        ontimeout: () => reject(new PlayerError(`The upload host didn't answer for ${file.name}.`, 'error')),
        onabort: () => reject(new PlayerError(`The upload of ${file.name} was stopped.`, 'error')),
        responseType: host.responsePath ? 'json' : 'text',
        // Like the form data, leave out headers set to null (the default hosts' empty
        // token): they'd be sent as the text "null".
        headers: Object.fromEntries(Object.entries(host.headers || {}).filter(([ , value ]) => value != null)),
        onload: response => {
          if (response.status < 200 || response.status >= 300) {
            return reject(response);
          }
          // Anything thrown here has to reject the upload: the create flow awaits this
          // promise, and an uncaught throw left it pending with the Create button disabled.
          try {
            const responseVal = host.responsePath
              ? _.get(response.response, host.responsePath)
              : responseRE
                ? (response.responseText.match(responseRE) || [])[1]
                : response.responseText;
            // A host that answers 200 with an error body has no link at the expected place.
            // (A number is fine, e.g. a file id used with the file URL format.)
            if (responseVal == null || typeof responseVal === 'object' || !String(responseVal).trim()) {
              throw new PlayerError(`The upload host's response didn't include a link for ${file.name}.`, 'error');
            }
            // A function replacement, so '$&' and the like in the response aren't patterns.
            const uploadedUrl = (host.soundUrl ? host.soundUrl.replace('%s', () => String(responseVal)) : String(responseVal)).trim();
            // uploadedUrl comes from the upload host's response — escape so a host
            // that returns HTML can't inject scripts into the status panel.
            // escAttr is used for the href attribute; escHTML for the visible text.
            // Only link http(s) addresses (a hostile host could answer with a javascript:
            // URL); scheme-less ones, like the file URL formats produce, get https.
            const href = /^https?:\/\//i.test(uploadedUrl) ? uploadedUrl
              : /^[a-z][a-z0-9+.-]*:/i.test(uploadedUrl) ? null
                : 'https://' + uploadedUrl.replace(/^\/\//, '');
            const shown = href ? `<a href="${_.escAttr(href)}" target="_blank">${_.escHTML(uploadedUrl)}</a>` : _.escHTML(uploadedUrl);
            const statusEl = Player.$(`.${ns}-upload-status-${idx}`);
            statusEl && (statusEl.innerHTML = `Uploaded ${_.escHTML(file.name)} to ${shown}`);
            resolve(uploadedUrl);
          } catch (err) {
            reject(err);
          }
        },
        upload: {
          onprogress: response => {
            const total = response.total > 0 ? response.total : file.size;
            const statusEl = Player.$(`.${ns}-upload-status-${idx}`);
            statusEl && (statusEl.innerHTML = `Uploading ${_.escHTML(file.name)} - ${Math.floor(response.loaded / total * 100)}%`);
          }
        },
        onerror: reject
      });
    });
  },

  /**
	 * Add the created sound image to the player.
	 */
  addCreatedToPlayer() {
    Player.playlist.addFromFiles([Player.tools._createdImage]);
  },

  /**
	 * Open the QR window and add the created sound image to it.
	 */
  addCreatedToQR() {
    if (!is4chan) {
      return;
    }
    // 4chan X and its forks (XT, neXT): their QR takes files through the documented
    // QRSetFile event, which also opens it. The old synthetic drop event carried the file
    // in an expando that's invisible across script sandboxes and extension builds.
    // Don't send a name: they assign it to file.name, which throws for a File.
    if (isChanX && document.querySelector('.qr-link, #qr')) {
      const detail = { file: Player.tools._createdImage };
      document.dispatchEvent(new CustomEvent('QRSetFile', {
        bubbles: true,
        detail: typeof cloneInto === 'function' ? cloneInto(detail, document.defaultView) : detail
      }));
      // 4chan X's Randomize Filename option renames the file, which loses the [sound=]
      // links (XT and neXT leave such names alone). Put the name back in the QR's filename
      // field; 4chan X saves that field on input.
      const name = Player.tools._createdImage.name;
      const restoreName = () => {
        const input = document.getElementById('qr-filename');
        if (input && input.value && input.value !== name) {
          input.value = name;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      };
      setTimeout(restoreName, 100);
      setTimeout(restoreName, 600);
      return;
    }

    // Native: open the quick reply if there is one, otherwise the post form, and set the
    // file input.
    const qrLink = document.querySelector('.open-qr-link');
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(Player.tools._createdImage);
    let fileInput;
    if (qrLink) {
      qrLink.click();
      fileInput = document.querySelector('#qrFile');
    } else {
      document.querySelector('#togglePostFormLink a').click();
      fileInput = document.querySelector('#postFile');
      document.querySelector('.postForm').scrollIntoView();
    }
    fileInput.files = dataTransfer.files;
    // Let scripts with their own file box (StyleChan) see the file. Deliberately not
    // 'change': StyleChan's "Randomize filename" renames on change, dropping [sound=].
    fileInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
};


/***/ },

/***/ "./src/components/tools/download.js"
/*!******************************************!*\
  !*** ./src/components/tools/download.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const progressBarsTemplate = __webpack_require__(/*! ./templates/download-progress.tpl */ "./src/components/tools/templates/download-progress.tpl");
const videoUtil = __webpack_require__(/*! ./video-util */ "./src/components/tools/video-util.js");

// File types that run or render as code when opened.
const RISKY_EXTENSIONS = /\.(exe|com|bat|cmd|scr|pif|cpl|msi|msp|hta|html?|xhtml|mht|svg|js|jse|vbs|vbe|wsf|wsh|ps1|psm1|lnk|url|reg|jar|sh|app|dmg|pkg|deb|rpm|apk)$/i;

const MEDIA_EXTENSIONS = {
  'audio/mpeg': 'mp3', 'audio/mp3': 'mp3', 'audio/ogg': 'ogg', 'audio/opus': 'opus', 'audio/wav': 'wav',
  'audio/x-wav': 'wav', 'audio/flac': 'flac', 'audio/mp4': 'm4a', 'audio/aac': 'aac', 'audio/webm': 'weba',
  'video/webm': 'webm', 'video/mp4': 'mp4', 'image/png': 'png', 'image/jpeg': 'jpg', 'image/gif': 'gif'
};

// A file name that can't be saved as something that runs: posts choose both the name and
// the link, so either can carry the extension. Windows drops trailing dots and spaces
// ("invoice.exe." saves as invoice.exe), so those go first; a risky extension gets .bin.
function safeFileName(name) {
  name = String(name || '').replace(/[. ]+$/, '') || 'download';
  return RISKY_EXTENSIONS.test(name) ? `${name}.bin` : name;
}

const get = (src, opts) => {
  let xhr;
  // The page's own files (local sounds, as blob: links): fetch them directly. A userscript
  // manager's request may not reach them, and this keeps their type for the file name.
  if (/^(blob|data):/i.test(String(src))) {
    const controller = new AbortController();
    xhr = { abort: () => controller.abort() };
    let p = fetch(src, { signal: controller.signal }).then(response => response.blob(), err => {
      err && err.name === 'AbortError' && (err.aborted = true);
      throw err;
    });
    if (opts && opts.catch) {
      p = p.catch(opts.catch);
    }
    p.abort = () => xhr.abort();
    return p;
  }
  // Wrap so aborting rejects.
  let p = new Promise((resolve, reject) => {
    xhr = GM.xmlHttpRequest({
      method: 'GET',
      url: src,
      responseType: 'blob',
      // Reject HTTP errors so an error page isn't saved (or zipped) as the file.
      onload: response => response.status >= 400 ? reject(response) : resolve(response.response),
      onerror: response => reject(response),
      onabort: response => {
        response.aborted = true;
        reject(response);
      },
      ...(opts || {})
    });
  });
  if (opts && opts.catch) {
    p = p.catch(opts.catch);
  }
  // Wrap rather than assign the bare reference: invoked as `dl.abort()`, an unbound
  // xhr.abort would run with `this` = the promise, breaking managers whose abort uses `this`.
  p.abort = () => xhr.abort();
  return p;
};

/**
 * This component is mixed into tools so these function are under `Player.tools`.
 */
const downloadTool = module.exports = {
  downloadTemplate: __webpack_require__(/*! ./templates/download.tpl */ "./src/components/tools/templates/download.tpl"),
  _downloading: null,

  /**
	 * Update the view when the hosts are updated.
	 */
  initialize() {
    Player.on('rendered', downloadTool.afterRender);
  },

  /**
	 * Store references to various elements.
	 */
  afterRender() {
    downloadTool.resetDownloadButtons();
  },

  async _handleDownloadCancel() {
    if (Player.tools._downloading) {
      Player.tools._downloadAllCanceled = true;
      Player.tools._downloading.forEach(dls => dls.forEach(dl => dl && dl.abort()));
    }
  },

  async _handleDownload(e) {
    Player.tools._downloadAllCanceled = false;
    e.currentTarget.style.display = 'none';
    Player.$(`.${ns}-download-all-cancel`).style.display = null;

    const combineVideo = Player.$('.download-all-video').checked;

    await Player.tools.downloadThread({
      includeImages: Player.$('.download-all-images').checked,
      includeSounds: Player.$('.download-all-audio').checked,
      ignoreDownloaded: Player.$('.download-all-ignore-downloaded').checked,
      maxSounds: +Player.$('.download-all-max-sounds').value || 0,
      // One ffmpeg instance muxes serially, so force single concurrency when combining.
      // Number inputs accept fractions despite step=1; both values must be integers
      // (new Array(1.5) throws, and the zip compressor has no level 1.5).
      concurrency: combineVideo ? 1 : Math.max(1, Math.floor(+Player.$('.download-all-concurrency').value) || 1),
      compression: Math.max(0, Math.min(Math.round(+Player.$('.download-all-compression').value) || 0, 9)),
      combineVideo,
      status: Player.$(`.${ns}-download-all-status`)
    }).catch(() => { /* it's logged */ });

    Player.tools.resetDownloadButtons();
  },

  resetDownloadButtons() {
    Player.$(`.${ns}-download-all-start`).style.display = Player.tools._downloading ? 'none' : null;
    Player.$(`.${ns}-download-all-cancel`).style.display = Player.tools._downloading ? null : 'none';
    Player.$(`.${ns}-download-all-save`).style.display = Player.tools.threadDownloadBlob ? null : 'none';
    Player.$(`.${ns}-download-all-clear`).style.display = Player.tools.threadDownloadBlob ? null : 'none';
    Player.$(`.${ns}-ignore-downloaded`).style.display = Player.sounds.some(s => s.downloaded) ? null : 'none';
  },

  /**
	 * Trigger a download for a file using GM.xmlHttpRequest to avoid cors issues.
	 *
	 * @param {String} src URL of the field to download.
	 * @param {String} name Name to save the file as.
	 */
  async download(src, name) {
    try {
      // The name comes from the post, but keep the extension of what's actually being
      // saved: "setup.exe[sound=...].png" would otherwise save the sound as setup.exe.
      // Sources without one (local blob: files) keep the name unless it's an executable or
      // script type.
      const urlExt = (String(src).split(/[?#]/)[0].match(/\.([a-z0-9]{1,5})$/i) || [])[1];
      name = String(name || 'download');
      const base = name.replace(/\.[a-z0-9]{1,5}$/i, '') || 'download';
      name = safeFileName(urlExt ? `${base}.${urlExt}` : name);
      const blob = await get(src);
      // Nothing to go on from the link (a local file's blob: URL): name it by its type.
      const typeExt = !urlExt && !/\.[a-z0-9]{1,5}$/i.test(name) && MEDIA_EXTENSIONS[(blob.type || '').split(';')[0]];
      typeExt && (name = `${name}.${typeExt}`);
      const a = _.element(`<a href="${URL.createObjectURL(blob)}" download="${_.escAttr(name)}" rel="noopener" target="_blank"></a>`);
      a.click();
      URL.revokeObjectURL(a.href);
    } catch (err) {
      Player.logError('There was an error downloading.', err, 'warning');
    }
  },

  /**
	 * Download the images and/or sounds in the thread as zip file.
	 *
	 * @param {Boolean} includeImages Whether images should be included in the download.
	 * @param {Boolean} includeSounds Whether audio files should be included in the download.
	 * @param {Boolean} ignoreDownloaded Whether sounds previously downloaded should be omitted from the download.
	 * @param {Boolean} maxSounds The maximum number of sounds to download.
	 * @param {Boolean} concurrency How many sounds can be download at the same time.
	 * @param {Boolean} compression Compression level.
	 * @param {Element} [status] Element in which to display the ongoing status of the download.
	 */
  async downloadThread({ includeImages, includeSounds, ignoreDownloaded, maxSounds, concurrency, compression, combineVideo, status }) {
    const zip = new JSZip();

    !(maxSounds > 0) && (maxSounds = Infinity);
    // What was already downloaded is tracked per kind, so skipping only skips sounds that
    // already have everything this run asks for (combining to mp4, then downloading the
    // images and audio, used to find "nothing to download").
    const wanted = combineVideo ? [ 'video' ] : [ includeImages && 'image', includeSounds && 'sound' ].filter(Boolean);
    const alreadyDone = s => s.downloaded && wanted.every(kind => s.downloaded[kind]);
    const toDownload = Player.sounds.filter(s => s.post && (!ignoreDownloaded || !alreadyDone(s))).slice(0, maxSounds);
    const count = toDownload.length;

    status && (status.style.display = 'block');

    if (!count || (!includeImages && !includeSounds && !combineVideo)) {
      return status && (status.innerHTML = 'Nothing to download.');
    }

    // Fail fast (before downloading anything) if this site's CSP blocks the encoder.
    if (combineVideo) {
      try {
        Player.tools._assertEncoderAvailable();
      } catch (err) {
        return status && (status.innerHTML = _.escHTML(err.reason || 'Combined video download is not available on this site.'));
      }
    }

    Player.tools._downloading = [];
    status && (status.innerHTML = `Downloading ${count} sound images.<br><br>
			This may take a while. You can leave it running in the background, but if you background the tab your browser will slow it down.
			You'll be prompted to download the zip file once complete.<br><br>`);
    // Skip/failure messages go here. They used to be inserted before the first worker's
    // progress element, which is removed when that worker runs out of sounds, so later
    // messages from the other workers were lost.
    const messages = status && _.element('<div></div>', status);

    const elementsArr = new Array(concurrency).fill(0).map(() => {
      // Show currently downloading files with progress bars.
      const el = status && _.element(progressBarsTemplate({ includeSounds: includeSounds || combineVideo, includeImages: includeImages && !combineVideo }), status);
      const dlRef = [];
      Player.tools._downloading.push(dlRef);
      const data = {
        dlRef,
        el,
        status: el && el.querySelector(`.${ns}-current-status`),
        image: el && el.querySelector(`.${ns}-image-bar`),
        sound: el && el.querySelector(`.${ns}-sound-bar`)
      };
      // Allow each download to be canceled individually. In case there's a huge download you don't want to include.
      // skipped also stops a combine job, which has no request here to abort.
      el && (el.querySelector(`.${ns}-cancel-download`).onclick = () => {
        data.skipped = true;
        dlRef.forEach(dl => dl && dl.abort());
      });
      return data;
    });

    // Two entries with the same path silently overwrite each other (two sounds in a post
    // with the same title, or names differing only in characters stripped from file
    // names), so number repeats. Case-insensitive, as most file systems are.
    const usedNames = new Set();
    const addFile = (name, content) => {
      name = safeFileName(name);
      let unique = name;
      for (let n = 2; usedNames.has(unique.toLowerCase()); n++) {
        unique = name.replace(/(\.[^./]*)?$/, ext => ` (${n})${ext}`);
      }
      usedNames.add(unique.toLowerCase());
      zip.file(unique, content);
    };
    const markDownloaded = (sound, ...kinds) => {
      sound.downloaded = { ...(sound.downloaded || {}) };
      kinds.forEach(kind => sound.downloaded[kind] = true);
    };

    let running = 0;

    // Download arg builder. Update progress bars, and catch errors to log and continue.
    const getArgs = (data, sound, type) => ({
      responseType: 'arraybuffer',
      onprogress: data[type] && (rsp => data[type].style.width = ((rsp.loaded / rsp.total) * 100) + '%'),
      catch: err => {
        if (err.aborted) {
          return 'aborted';
        }
        if (!err.aborted && !Player.tools._downloadAllCanceled) {
          console.error('[4chan sounds player] Download failed', err);
          // Escape title — it's parsed from arbitrary post filenames. Text-node
          // context, so escHTML (no `;`/`\`/quote handling needed).
          status && _.element(`<p>Failed to download ${_.escHTML(sound.title)} ${type}!</p>`, messages);
        }
      }
    });

    await Promise.all(elementsArr.map(async function downloadNext(data) {
      const sound = toDownload.shift();
      // Fall out if all downlads were canceled.
      if (!sound || Player.tools._downloadAllCanceled) {
        data.el && status.removeChild(data.el);
        return;
      }
      const i = ++running;
      data.skipped = false;
      // Show the name and reset the progress bars.
      if (data.el) {
        data.status.textContent = `${i} / ${count}: ${sound.title}`;
        data.image.style.width = data.sound.style.width = '0';
      }

      // Snapshot the src once so the GET and the zip entry key agree even if the
      // user toggles the rerouter mid-download.
      const soundSrc = sound.src;
      // Folder per post whenever images are downloaded: sound.filename is NOT unique
      // across posts, so a flat layout would silently overwrite same-named images from
      // different posts (data loss). Sounds keep a unique encoded-src key, so a
      // sounds-only download stays flat.
      // A standalone video is its own sound: fetch it once, as the image, and never
      // re-encode it when combining (it was fetched twice, and re-encoded at a loss).
      const standalone = sound.standaloneVideo;
      const prefix = (includeImages || standalone) && sound.post ? sound.post + '/' : '';
      // Download image and sound as selected.
      const [ imageRsp, soundRsp ] = await Promise.all([
        data.dlRef[0] = (combineVideo ? standalone : includeImages || (standalone && includeSounds)) && get(sound.image, getArgs(data, sound, 'image')),
        data.dlRef[1] = !combineVideo && includeSounds && !standalone && get(soundSrc, getArgs(data, sound, 'sound'))
      ]);

      // No post-handling if the whole download was canceled.
      if (!Player.tools._downloadAllCanceled) {
        if (imageRsp === 'aborted' || soundRsp === 'aborted' || data.skipped) {
          // Show which sounds were individually aborted.
          status && _.element(`<p>Skipped ${_.escHTML(sound.title)}.</p>`, messages);
        } else if (combineVideo && standalone) {
          imageRsp && addFile(`${prefix}${sound.filename}`, imageRsp);
          imageRsp && markDownloaded(sound, 'video', 'image', 'sound');
        } else if (combineVideo) {
          // Mux this sound's visual + audio into a single looping mp4.
          try {
            const blob = await Player.tools.mux(sound, {
              onProgress: data.sound && (p => data.sound.style.width = (p * 100) + '%'),
              isCanceled: () => Player.tools._downloadAllCanceled || data.skipped
            });
            // Always folder combined videos per-post: muxFileName (from the title) is
            // NOT unique across posts, so a flat layout would silently overwrite
            // same-named mp4s from different posts.
            const vidPrefix = sound.post ? sound.post + '/' : '';
            addFile(`${vidPrefix}${videoUtil.muxFileName(sound.title, sound.filename)}`, blob);
            markDownloaded(sound, 'video');
          } catch (err) {
            if (err.canceled) {
              !Player.tools._downloadAllCanceled && status && _.element(`<p>Skipped ${_.escHTML(sound.title)}.</p>`, messages);
            } else if (err.encoderLoad) {
              // Without the encoder nothing can be combined: stop, and say why once.
              if (!Player.tools._downloadAllCanceled) {
                status && _.element(`<p>${_.escHTML(err.reason || 'Couldn\'t load the video encoder.')} Stopped combining.</p>`, messages);
                Player.tools._downloadAllCanceled = true;
              }
            } else if (!Player.tools._downloadAllCanceled) {
              console.error('[4chan sounds player] Mux failed', err);
              status && _.element(`<p>Failed to combine ${_.escHTML(sound.title)}!</p>`, messages);
              // A failed job can dirty the wasm heap; reset for the next sound.
              Player.tools.terminate();
            }
          }
        } else {
          // Add the downloaded files to the zip, and record what arrived (the getArgs
          // catch resolves failures to undefined) so "skip downloaded" retries the rest.
          // Every sound of a multi-sound post brings the same post image: add it once.
          imageRsp && !usedNames.has(safeFileName(`${prefix}${sound.filename}`).toLowerCase()) && addFile(`${prefix}${sound.filename}`, imageRsp);
          soundRsp && addFile(`${prefix}${encodeURIComponent(soundSrc)}`, soundRsp);
          imageRsp && markDownloaded(sound, ...(standalone ? [ 'image', 'sound' ] : [ 'image' ]));
          soundRsp && markDownloaded(sound, 'sound');
        }
      }
      // Move on to the next sound.
      await downloadNext(data);
    }));

    // Free the encoder's memory now the batch is done; the next use re-creates it from the
    // cached core without downloading it again.
    combineVideo && Player.tools.terminate();
    // Show where we canceled at, if we did cancel.
    Player.tools._downloadAllCanceled && _.element(`<span>Canceled at ${running} / ${count}.`, status);
    // Nothing arrived (canceled straight away, or everything failed): don't offer an empty zip.
    if (!usedNames.size) {
      status && _.element('<div>Nothing was downloaded.</div>', status);
      Player.tools._downloading = null;
      Player.tools.resetDownloadButtons();
      return;
    }
    // Generate the zip file.
    const zipProgress = status && _.element('<div>Generating zip file...</div>', status);
    try {
      const zipOptions = {
        type: 'blob',
        compression: compression ? 'DEFLATE' : 'STORE',
        compressionOptions: {
          level: compression
        }
      };
      Player.tools.threadDownloadBlob = await zip.generateAsync(zipOptions, metadata => {
        status && (zipProgress.textContent = `Generating zip file (${metadata.percent.toFixed(2)}%)...`);
      });

      // Update the display and prompt to download.
      status && _.element('<span>Complete!', status);
      Player.tools.saveThreadDownload();
    } catch (err) {
      console.error('[4chan sounds player] Failed to generate zip', err);
      status && (zipProgress.textContent = 'Failed to generate zip file!');
    }
    Player.tools._downloading = null;
    Player.tools.resetDownloadButtons();
  },

  saveThreadDownload() {
    const threadNum = Thread || '-';
    const a = _.element(`<a href="${URL.createObjectURL(Player.tools.threadDownloadBlob)}" download="sounds-thread-${Board}-${threadNum}" rel="noopener" target="_blank"></a>`);
    a.click();
    URL.revokeObjectURL(a.href);
  },

  clearDownloadBlob() {
    delete Player.tools.threadDownloadBlob;
    Player.tools.resetDownloadButtons();
  }
};


/***/ },

/***/ "./src/components/tools/ffmpeg-config.js"
/*!***********************************************!*\
  !*** ./src/components/tools/ffmpeg-config.js ***!
  \***********************************************/
(module) {

// Pinned ffmpeg.wasm asset locations + encode constants.
// The core (glue + wasm) is lazy-fetched at runtime and run on the MAIN THREAD
// (no Web Worker — 4chan's CSP blocks blob: workers). Versions verified in the spike.
module.exports = {
  // @ffmpeg/core 0.12.10 UMD build (ffmpeg-core.js + ffmpeg-core.wasm).
  FFMPEG_CORE_BASE: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd',
  // SHA-256 of those two files. The core is eval'd with the userscript's privileges, so
  // it's only run if it's exactly the pinned release (update these with the version).
  FFMPEG_CORE_JS_SHA256: 'b266ab5b952555881dd6310663986994a182acb2b7ff25cf10a25f7a37ac2b21',
  FFMPEG_CORE_WASM_SHA256: '9f57947a5bd530d8f00c5b3f2cb2a3492faa7e5d823315342d6a8656d0a6b7b7',
  AUDIO_BITRATE: '192k',
  // A still's picture never changes, so encode exactly ONE frame and let it span
  // the whole track — the cheapest possible encode and the smallest possible file.
  // Very low frame rates are unusual though, so if a player shows black, refuses to
  // seek, or won't thumbnail, set this false to fall back to STILL_FPS below.
  STILL_SINGLE_FRAME: true,
  // Used when STILL_SINGLE_FRAME is false: one frame every 10s, so a 4 minute sound
  // is ~24 frames under a single keyframe. Raise toward '1' if a player struggles.
  STILL_FPS: '1/10',
  // Each encoding step runs on the main thread, so a step that never finishes freezes the
  // tab for good: a "visual" that isn't really an image (an HTML error page served with
  // status 200, a corrupt file) never yields a frame. Abort a step after this long; real
  // encodes of 4chan-sized media finish well within it.
  EXEC_TIMEOUT_MS: 10 * 60 * 1000
};


/***/ },

/***/ "./src/components/tools/index.js"
/*!***************************************!*\
  !*** ./src/components/tools/index.js ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const createTool = __webpack_require__(/*! ./create */ "./src/components/tools/create.js");
const downloadTool = __webpack_require__(/*! ./download */ "./src/components/tools/download.js");
const videoTool = __webpack_require__(/*! ./video */ "./src/components/tools/video.js");

module.exports = {
  template: __webpack_require__(/*! ./templates/tools.tpl */ "./src/components/tools/templates/tools.tpl"),

  ...createTool,
  ...downloadTool,
  ...videoTool,

  initialize() {
    createTool.initialize();
    downloadTool.initialize();
  },

  toggle() {
    if (Player.config.viewStyle === 'tools') {
      Player.playlist.restore();
    } else {
      Player.display.setViewStyle('tools');
    }
  },

  /**
	 * Encode the decoded input.
	 */
  handleDecoded(e) {
    // ( and ) too: a tag written with parentheses would otherwise end at the first ")".
    Player.$(`.${ns}-encoded-input`).value = encodeURIComponent(e.currentTarget.value).replace(/\(/g, '%28').replace(/\)/g, '%29');
  },

  /**
	 * Decode the encoded input.
	 */
  handleEncoded(e) {
    try {
      Player.$(`.${ns}-decoded-input`).value = decodeURIComponent(e.currentTarget.value);
    } catch (err) {
      // An incomplete escape ("%2") while typing. Leave the decoded value as it was.
    }
  }
};


/***/ },

/***/ "./src/components/tools/templates/create-complete.tpl"
/*!************************************************************!*\
  !*** ./src/components/tools/templates/create-complete.tpl ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `<span>
	<br>Complete!<br>
	${is4chan ? '<a href="#" @click.prevent="tools.addCreatedToQR">Post</a> - ' : ''}
	<a href="#" @click.prevent="tools.addCreatedToPlayer">Add</a> -
	<a href="${_.escAttr(Player.tools._createdImageURL)}" download="${_.escAttr(Player.tools._createdImage.name)}" title="${_.escAttr(Player.tools._createdImage.name)}">Download</a>
</span>`

/***/ },

/***/ "./src/components/tools/templates/create.tpl"
/*!***************************************************!*\
  !*** ./src/components/tools/templates/create.tpl ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => `<div class="${ns}-heading lined">
	Create Sound Image
</div>
<div class="m-2">
	<div class="${ns}-create-sound-form" @drop.stop.prevent="tools.handleCreateSoundDrop">
		<div class="${ns}-row mb-4">
			${Player.display.ifNotDismissed('createSoundDetails', 'Show Help',
			`<div class="${ns}-col" data-dismiss-id="createSoundDetails">
				Select an image and sound to combine as a sound image.
				The sound will be uploaded to the selected file host and the url will be added to the image filename.<br/>
				<br/>
				Multiple sound files, or a comma-separated list of sound URLs, can be given for a single image.
				If you do have multiple sounds the name will also be a considered comma-separated list.<br/>
				<a href="#" @click.prevent='display.dismiss("createSoundDetails")'>Dismiss</a>
			</div>`)}
		</div>

		<div class="${ns}-row">
			<span>Host - <a @click.prevent='settings.toggle("Hosts")' href="#">Config</a></span>
		</div>
		<div class="${ns}-row">
			<div class="${ns}-col ${ns}-create-hosts-container">
				${Player.tools.createHostsTemplate()}
			</div>
		</div>

		<div class="${ns}-row mt-2">
			Data
		</div>
		<div class="${ns}-row">
			<div class="${ns}-col">
				<input type="text" class="${ns}-create-sound-name w-100" placeholder="Name/s">
			</div>
		</div>

		<div class="${ns}-row">
			<div class="${ns}-col">
				<div class="${ns}-file-input placeholder">
					<div class="${ns}-file-overlay w-100">
						<span class="placeholder-text">Select/Drop Image</span>
						<span class="text"></span>
						<input
							class="${ns}-create-sound-img"
							@change='tools.handleImageSelect;tools.handleFileSelect($event.target)'
							type="file"
							accept="image/*,.webm,.mp4"
						/>
					</div>
				</div>
			</div>

			<div class="${ns}-col">
				<div class="${ns}-file-input placeholder" style="${Player.tools.useSoundURL ? 'display: none;' : ''}">
					<div class="${ns}-file-overlay w-100">
						<span class="placeholder-text">Select/Drop Sound/s</span>
						<span class="text"></span>
						<div class="overfile ${ns}-input-append">
							<a href="#" @click.prevent='tools.toggleSoundInput("url")' title="Enter a URL of a previously uploaded file.">
								${Icons.link}
							</a>
						</div>
						<input
							type="file"
							class="${ns}-create-sound-snd"
							@change='tools.handleFileSelect($event.target)'
							accept="audio/*,video/*"
							multiple
						/>
					</div>
					<div class="${ns}-file-list"></div>
				</div>
				<div class="${ns}-row ${ns}-align-center" style="position: relative; ${Player.tools.useSoundURL ? '' : 'display: none;'}">
					<a href="#" class="${ns}-input-append" @click.prevent='tools.toggleSoundInput("file")' title="Select a file to upload.">
						${Icons.fileEarmarkMusic}
					</a>
					<input
						type="text"
						class="${ns}-create-sound-snd-url w-100"
						placeholder="Sound URL/s"
					/>
				</div>
			</div>
		</div>

		<div class="${ns}-row mt-4">
			<div class="${ns}-col-auto">
				<button type="button" class="${ns}-create-button" @click.prevent="tools.handleCreate">Create</button>
			</div>
		</div>
	</div>

	<div class="${ns}-create-sound-status" ${Player.tools._createdImage ? '' : 'style="display: none"'}>
		${Player.tools._createdImage ? Player.tools.createCompleteTemplate() : ''}
	</div>
</div>`


/***/ },

/***/ "./src/components/tools/templates/download-progress.tpl"
/*!**************************************************************!*\
  !*** ./src/components/tools/templates/download-progress.tpl ***!
  \**************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => `<div class="mb-2">
	<div>
		<a class="${ns}-cancel-download pointer">${Icons.close}</a>
		<span class="${ns}-current-status"></span>
	</div>
	<div class="${ns}-row ${ns}-align-center" ${data.includeImages ? '' : 'style="display: none;"'}>
		<div class="${ns}-col-auto mr-4">${Icons.image}</div>
		<div class="${ns}-col"><div class="${ns}-full-bar"><div class="${ns}-image-bar"></div></div></div>
	</div>
	<div class="${ns}-row ${ns}-align-center" ${data.includeSounds ? '' : 'style="display: none;"'}>
		<div class="${ns}-col-auto mr-4">${Icons.soundwave}</div>
		<div class="${ns}-col"><div class="${ns}-full-bar"><div class="${ns}-sound-bar"></div></div></div>
	</div>
</div>`


/***/ },

/***/ "./src/components/tools/templates/download.tpl"
/*!*****************************************************!*\
  !*** ./src/components/tools/templates/download.tpl ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
module.exports = (data = {}) => `<div class="${ns}-heading lined mt-5">Download All</div>
<div class="m-2">
	<div class="${ns}-row" style="white-space: nowrap">
		<label class="${ns}-col-auto m-0 mr-3" style="height: 1.5rem;">
			<input type="checkbox" class="download-all-images m-0 mr-2" checked>
			Images
		</label>
		<label class="${ns}-col-auto m-0 mr-3" style="height: 1.5rem;">
			<input type="checkbox" class="download-all-audio m-0 mr-2" checked>
			Audio
		</label>
		<label class="${ns}-col-auto m-0 mr-3" style="height: 1.5rem;">
			<input type="checkbox" class="download-all-video m-0 mr-2">
			<span>
				Combine to mp4 <i class="${ns}-info-circle ${ns}-popover" data-content="Mux each sound's image/video with its audio into a single looping mp4. Uses the video encoder (downloads ~31MB once).">${Icons.infoCircle}</i>
			</span>
		</label>
		<label class="${ns}-col-auto m-0 mr-3 ${ns}-ignore-downloaded" style="height: 1.5rem;">
			<input type="checkbox" class="download-all-ignore-downloaded m-0 mr-2" checked>
			<span>
				Skip Downloaded <i class="${ns}-info-circle ${ns}-popover" data-content="Skip sounds you've already downloaded.">${Icons.infoCircle}</i>
			</span>
		</label>
		<div class="${ns}-row ${ns}-align-center">
			<div class="${ns}-col mr-2">Download Concurrency</div>
			<div class="${ns}-col"><input type="number" class="download-all-concurrency" min="1" value="1" style="width: 3rem;"></div>
		</div>
		<div class="${ns}-row ${ns}-align-center">
			<div class="${ns}-col mr-2">
				Compression Level
				<i class="${ns}-info-circle ${ns}-popover" data-content="0 (none/fastest) to 9 (best/slowest). It's unlikely to achieve significant compression however.">${Icons.infoCircle}</i>
			</div>
			<div class="${ns}-col"><input type="number" class="download-all-compression" min="0" max="9" value="0" style="width: 3rem;"></div>
		</div>
		<div class="${ns}-row ${ns}-align-center">
			<div class="${ns}-col mr-2">
				Max Sounds
				<i class="${ns}-info-circle ${ns}-popover" data-content="Maximum number of sounds to download in one zip. 0 for unlimited. Useful for batching downloads to avoid memory contraints.">${Icons.infoCircle}</i>
			</div>
			<div class="${ns}-col"><input type="number" class="download-all-max-sounds" min="0" value="0" style="width: 3rem;"></div>
		</div>
	</div>
	<div class="${ns}-download-all-status" style="display: none;"></div>
	<div class="${ns}-row mt-4 ${ns}-align-center">
		<button type="button" @click.prevent="tools._handleDownload" class="${ns}-download-all-start">Download</button>
		<button type="button" @click.prevent="tools._handleDownloadCancel" class="${ns}-download-all-cancel">Cancel</button>
		<button type="button" @click.prevent="tools.saveThreadDownload" class="${ns}-download-all-save ml-2 ${ns}-popover" @click="tools.saveThreadDownload" data-content="Save the last download.">Save</button>
		<div class="${ns}-download-all-clear ml-2">
			<a href="#" @click.prevent="tools.clearDownloadBlob">Clear</a><i class="${ns}-info-circle ${ns}-popover ml-1" data-content="Clear the last download to free memory.">${Icons.infoCircle}</i>
		</div>
	</div>
</div>`

/***/ },

/***/ "./src/components/tools/templates/hosts-select.tpl"
/*!*********************************************************!*\
  !*** ./src/components/tools/templates/hosts-select.tpl ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `<select class="${ns}-create-sound-host">
	${Object.keys(Player.config.uploadHosts).map((hostId) =>
		Player.config.uploadHosts[hostId] && !Player.config.uploadHosts[hostId].invalid
			? `<option value="${_.escAttr(hostId)}" ${Player.config.defaultUploadHost === hostId ? 'selected' : ''}>${_.escHTML(hostId)}</option>`
			: ''
	).join('')}
</select>`


/***/ },

/***/ "./src/components/tools/templates/tools.tpl"
/*!**************************************************!*\
  !*** ./src/components/tools/templates/tools.tpl ***!
  \**************************************************/
(module) {

module.exports = (data = {}) => `${Player.tools.createTemplate()}
${Player.tools.downloadTemplate()}

<div class="${ns}-heading lined mt-5">Encode / Decode URL</div>
<div class="m-2">
	<div class="${ns}-row">
		<input type="text" class="${ns}-col ${ns}-decoded-input" @keyup="tools.handleDecoded" placeholder="https://">
		<input type="text" class="${ns}-col ${ns}-encoded-input" @keyup="tools.handleEncoded" placeholder="https%3A%2F%2F">
	</div>
</div>`

/***/ },

/***/ "./src/components/tools/video-util.js"
/*!********************************************!*\
  !*** ./src/components/tools/video-util.js ***!
  \********************************************/
(module) {

// Pure, side-effect-free helpers for the muxed video download feature.
// No DOM / GM / Player / ns / _ / Icons usage, so this file is require-able and
// unit-testable under plain Node (see test/video-util.test.js).

// Content keeps its original dimensions. The only adjustment is rounding an odd
// width/height down by a pixel, which H.264 with yuv420p requires — it rejects
// odd dimensions outright.
const EVEN_SCALE = 'scale=trunc(iw/2)*2:trunc(ih/2)*2';

// Decide how the visual should be encoded, from its URL and optional MIME type.
function classifyVisual(image, type) {
  image = image || '';
  if (/\.(webm|mp4)(\?|$)/i.test(image) || type === 'video/webm' || type === 'video/mp4') {
    return 'video';
  }
  // A local file's image is a blob: URL with no extension, so also go by its type.
  if (/\.gif(\?|$)/i.test(image) || type === 'image/gif') {
    return 'gif';
  }
  return 'still';
}

// Build a filesystem-safe output name ending in .mp4. Preserves spaces; replaces
// only characters that are actually illegal in filenames (and control chars).
function muxFileName(title, fallback) {
  let base = (title || fallback || 'sound').toString();
  // Drop a media extension only. Titles are free text, so stripping any ".xyz" suffix
  // turned "Mr. Blue Sky" into "Mr" and "Song v1.5 remix" into "Song v1".
  base = base.replace(/\.(webm|mp4|m4a|mp3|ogg|oga|opus|flac|wav|aac|png|jpe?g|gif|webp)$/i, '');
  // eslint-disable-next-line no-control-regex
  base = base.replace(/[\\/:*?"<>|\x00-\x1f]/g, '_');    // FS-illegal -> _
  base = base.replace(/\s+/g, ' ').trim().slice(0, 200);
  return (base || 'sound') + '.mp4';
}

// Milliseconds per second — the video track timescale used for stills. The single
// frame's duration IS the video track's duration, so the timescale has to be fine
// enough to express the audio length; a whole-second tick would round the file's
// duration to the nearest second.
const MS_TIMESCALE = 1000;

// Frame rate that yields exactly ONE video frame for a track of `dur` seconds.
// The period is ceil'd to the next millisecond so the second frame lands at or
// after the end and is never encoded, leaving the frame's duration (and therefore
// the video track's) within 1ms of the audio.
//
// Expressed as ms/ms rather than 1/seconds on purpose: with a rate of 1/240 the
// track's tick becomes 240 SECONDS, so its duration can only be whole seconds and
// the container rounds. At 1000/240000 the tick is a millisecond.
function singleFrameRate(dur) {
  return `${MS_TIMESCALE}/${Math.max(1, Math.ceil(dur * MS_TIMESCALE) || 1)}`;
}

// Still image + audio -> mp4 of exactly `dur` seconds, in ONE pass.
//
// The picture never changes, so the frame rate is what drives the cost — and it
// only has to be high enough for players to behave. At one frame every several
// seconds the whole track is a couple of dozen frames however long the sound is,
// and a single keyframe covers all of them, which is also the smallest possible
// file. `fps` is a fraction string like '1/10' so it stays exact.
//
// The rate is set on the INPUT too, so the image demuxer generates only the frames
// we keep instead of its default 25fps that would immediately be dropped.
function stillArgs({ image, audio, out, dur, fps, audioBitrate, preset }) {
  return [
    '-framerate', String(fps), '-loop', '1', '-i', image,
    '-i', audio,
    '-t', String(dur),
    '-c:v', 'libx264', '-preset', preset || 'veryfast', '-tune', 'stillimage', '-pix_fmt', 'yuv420p',
    '-r', String(fps), '-vf', EVEN_SCALE,
    // Nothing ever changes, so one keyframe for the entire track.
    '-x264-params', 'keyint=100000:min-keyint=100000:scenecut=0',
    // Pin a millisecond timescale so the video track's duration can express the
    // audio length instead of being rounded to whole seconds.
    '-video_track_timescale', String(MS_TIMESCALE),
    '-c:a', 'aac', '-b:a', audioBitrate,
    '-movflags', '+faststart',
    out
  ];
}

// Encode exactly ONE loop of an animated visual to a closed-GOP, IDR-led mp4 so the
// repeats can be stream-looped with -c copy seamlessly. Audio is dropped here.
function loopEncodeArgs({ visual, out, isGif, preset }) {
  const args = [];
  if (isGif) {
    // ignore_loop=1 (the default) makes the demuxer read the gif exactly ONCE.
    // ignore_loop=0 would honor the gif's own loop count (usually infinite) and
    // this un-bounded encode would then run forever.
    args.push('-ignore_loop', '1');
  }
  args.push(
    '-i', visual,
    '-an',
    '-c:v', 'libx264', '-preset', preset || 'veryfast', '-crf', '20',
    '-pix_fmt', 'yuv420p', '-vf', EVEN_SCALE,
    '-fflags', '+genpts',
    '-x264-params', 'keyint=100000:min-keyint=100000:scenecut=0:open-gop=0',
    // No -movflags +faststart here: this is an intermediate only ffmpeg re-reads.
    out
  );
  return args;
}

// Loop the single-loop file, mux in the audio, and cut to exactly `dur` — in ONE pass.
// Video is copied (repeats never re-encoded); audio is encoded to AAC.
function loopMuxArgs({ loop, audio, out, dur, audioBitrate }) {
  return [
    '-stream_loop', '-1', '-i', loop,
    '-i', audio,
    '-map', '0:v:0', '-map', '1:a:0',
    '-c:v', 'copy', '-c:a', 'aac', '-b:a', audioBitrate,
    '-t', String(dur),
    '-movflags', '+faststart',
    out
  ];
}

module.exports = {
  EVEN_SCALE,
  classifyVisual,
  muxFileName,
  singleFrameRate,
  stillArgs,
  loopEncodeArgs,
  loopMuxArgs
};


/***/ },

/***/ "./src/components/tools/video.js"
/*!***************************************!*\
  !*** ./src/components/tools/video.js ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const cfg = __webpack_require__(/*! ./ffmpeg-config */ "./src/components/tools/ffmpeg-config.js");
const util = __webpack_require__(/*! ./video-util */ "./src/components/tools/video-util.js");

// The main-thread core loader eval()s the ffmpeg glue, which needs 'unsafe-eval'.
// Some archives (e.g. desuarchive) ship a CSP without it, so the feature can't run there.
const ENCODER_CSP_MSG = 'Combined video download isn\'t available on this site — its security policy (CSP) blocks the video encoder.';

// One shared AudioContext reused for all duration probes (browsers cap the count).
let _audioCtx = null;

// Give the browser a chance to paint before a synchronous exec blocks the main
// thread, so the status set just beforehand is actually visible during the freeze.
// rAF doesn't fire in background tabs, hence the timeout fallback.
function paint() {
  return new Promise(resolve => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    typeof requestAnimationFrame === 'function'
      && requestAnimationFrame(() => requestAnimationFrame(finish));
    setTimeout(finish, 50);
  });
}

// GM.xmlHttpRequest calls onload for HTTP errors too. Reject those so a dead link is
// reported as a failed fetch rather than an error page being decoded as media.
const httpError = r => Object.assign(new Error(`Request failed with status ${r.status}.`), { status: r.status });

// Fetch a URL as raw bytes. Remote -> GM.xmlHttpRequest (avoids CORS); local blob: -> fetch.
// Always resolves a Uint8Array (never a GM Blob — cross-realm .arrayBuffer() can be undefined).
// onProgress (if given) receives a 0-1 ratio while downloading.
function fetchBytes(url, onProgress) {
  if (/^blob:/.test(url)) {
    return fetch(url).then(r => r.arrayBuffer()).then(b => new Uint8Array(b));
  }
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest({
      method: 'GET',
      url,
      responseType: 'arraybuffer',
      onprogress: onProgress && (r => r.total > 0 && onProgress(r.loaded / r.total)),
      onload: r => r.status >= 400 ? reject(httpError(r)) : resolve(new Uint8Array(r.response)),
      onerror: reject,
      onabort: () => reject(Object.assign(new Error('aborted'), { aborted: true }))
    });
  });
}

// Refuse a download that isn't byte-for-byte the pinned file: it's about to be run.
async function verifySha256(bytes, expected) {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  const hex = Array.from(digest, b => b.toString(16).padStart(2, '0')).join('');
  if (hex !== expected) {
    throw new PlayerError('The video encoder download failed its integrity check.', 'error');
  }
}

// Above this, measure the audio with the ffmpeg probe rather than a full WebAudio decode.
// (Decoded PCM is ~10x the compressed size, so this caps it around 100MB.)
const MAX_DECODE_BYTES = 8 * 1024 * 1024;

const videoTool = module.exports = {
  _ffmpeg: null,
  _loaded: false,
  _loadingPromise: null,
  _muxChain: null,
  // Cached across a terminate()/reload so a reset doesn't re-download the core.
  _createCore: null,
  _wasmBinary: null,
  _wasmURL: null,
  _progressCb: null,
  _processingCount: 0,
  _evalOk: false,
  _evalBlocked: false,

  // Expose for other tools-module code / tests.
  _fetchBytes: fetchBytes,

  // Whether this site's CSP allows the eval the main-thread core loader needs.
  // Probed once, cheaply, and cached (never throws) — used to hide the button up
  // front on sites (e.g. desuarchive) that lack 'unsafe-eval', where its @click
  // handler couldn't even compile via `new Function`.
  _encoderAvailable() {
    if (videoTool._evalBlocked) {
      return false;
    }
    if (videoTool._evalOk) {
      return true;
    }
    try {
      (0, eval)('1');
      videoTool._evalOk = true;
      return true;
    } catch (e) {
      videoTool._evalBlocked = true;
      return false;
    }
  },

  // Throw a clear PlayerError when the encoder can't run here — so a mux attempt
  // fails fast with a visible message instead of downloading ~31MB then dying.
  _assertEncoderAvailable() {
    if (!videoTool._encoderAvailable()) {
      throw new PlayerError(ENCODER_CSP_MSG, 'warning');
    }
  },

  // Toggle the busy state on the download button. Ref-counted so a batch of
  // serialized jobs keeps it lit without flicker.
  _setProcessing(on) {
    videoTool._processingCount = Math.max(0, videoTool._processingCount + (on ? 1 : -1));
    const btn = Player.$(`.${ns}-download-video-button`);
    if (!btn) {
      return;
    }
    const busy = videoTool._processingCount > 0;
    btn.classList[busy ? 'add' : 'remove'](`${ns}-processing`);
    if (!busy) {
      btn.removeAttribute('data-progress');
      btn.style.removeProperty('--fcsp-vid-progress');
      btn.removeAttribute('title');
    }
  },

  // Report what the encoder is doing. `ratio` (0-1) draws a determinate ring;
  // omit it for the indeterminate spinner. The label lands in the button's tooltip
  // and is echoed to the console, so a step that stalls is identifiable.
  //
  // NOTE: core.exec() is synchronous and the core has no ASYNCIFY, so nothing can
  // repaint *during* an encode. Real byte-level progress is therefore only possible
  // for the async phases (encoder download, media fetches); for the encode itself we
  // set the label and await paint() BEFORE blocking, so the freeze is attributable.
  _setStatus(label, ratio) {
    if (label && label !== videoTool._statusLabel) {
      videoTool._statusLabel = label;
       true && console.log('[4chan sounds player] video:', label);
    }
    const btn = Player.$(`.${ns}-download-video-button`);
    if (!btn) {
      return;
    }
    if (ratio == null || !isFinite(ratio)) {
      btn.removeAttribute('data-progress');
      btn.style.removeProperty('--fcsp-vid-progress');
      btn.title = label || '';
      return;
    }
    const pct = Math.max(0, Math.min(100, Math.round(ratio * 100)));
    btn.setAttribute('data-progress', '');
    btn.style.setProperty('--fcsp-vid-progress', pct);
    btn.title = `${label} ${pct}%`;
  },

  // Load the single-threaded ffmpeg core ON THE MAIN THREAD (no Web Worker).
  // 4chan's CSP blocks blob:/cross-origin workers (worker-src falls back to
  // script-src, which lacks blob:), but allows 'unsafe-eval' — so we eval the core
  // glue and run the wasm inline. The single-thread core spawns no workers itself.
  async loadFFmpeg(onProgress) {
    // Bail before the ~31MB download if this site's CSP won't let us run the core.
    videoTool._assertEncoderAvailable();
    if (videoTool._loaded) {
      return;
    }
    if (videoTool._loadingPromise) {
      return videoTool._loadingPromise;
    }
    videoTool._loadingPromise = (async () => {
      if (!videoTool._createCore) {
        // The wasm is ~31MB and dominates the wait, so it drives the progress ratio.
        const [ coreBytes, wasmBytes ] = await Promise.all([
          fetchBytes(`${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.js`),
          fetchBytes(`${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.wasm`, onProgress)
        ]);
        await verifySha256(coreBytes, cfg.FFMPEG_CORE_JS_SHA256);
        await verifySha256(wasmBytes, cfg.FFMPEG_CORE_WASM_SHA256);
        const coreText = new TextDecoder().decode(coreBytes);
        // Load the core glue and capture the factory. The UMD is `var createFFmpegCore = …`;
        // read it back as the eval COMPLETION VALUE (resolved by binding) rather than via
        // `self`, because the Firefox userscript sandbox doesn't mirror an eval'd global var
        // onto the `self` object. `new Function` (explicit return) is the fallback.
        let create;
        try {
          create = (0, eval)(coreText + '\n;typeof createFFmpegCore!=="undefined"?createFFmpegCore:void 0;');
        } catch (e) { /* fall back to new Function below */ }
        if (typeof create !== 'function') {
          create = new Function(coreText + '\nreturn typeof createFFmpegCore!=="undefined"?createFFmpegCore:void 0;')();
        }
        if (typeof create !== 'function') {
          throw new PlayerError('Video encoder failed to initialize (createFFmpegCore missing).', 'error');
        }
        videoTool._createCore = create;
        videoTool._wasmBinary = wasmBytes.buffer;
        // A fallback wasm URL for the core's own loader; wasmBinary above means it
        // usually never needs to fetch this.
        videoTool._wasmURL = URL.createObjectURL(new Blob([ wasmBytes ], { type: 'application/wasm' }));
      }
      const core = await videoTool._createCore({
        wasmBinary: videoTool._wasmBinary,
        mainScriptUrlOrBlob: `${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.js#${btoa(JSON.stringify({ wasmURL: videoTool._wasmURL, workerURL: '' }))}`
      });
      core.setLogger(e => {
        const msg = e && e.message;
        videoTool._lastLog = msg;
        if (videoTool._capturingLog && msg != null) {
          videoTool._captured.push(msg);
        }
      });
      core.setProgress(e => videoTool._progressCb && videoTool._progressCb(e));
      videoTool._ffmpeg = core;
      videoTool._loaded = true;
    })();
    try {
      await videoTool._loadingPromise;
    } catch (err) {
      // Allow a later retry after a transient failure.
      videoTool._loadingPromise = null;
      // Mark it as the encoder not loading, so a batch stops instead of retrying the
      // download for every sound.
      const error = err instanceof PlayerError ? err
        : new PlayerError(`Couldn't download the video encoder${err && err.status ? ` (the server answered ${err.status})` : ''}.`, 'error', err);
      error.encoderLoad = true;
      throw error;
    }
  },

  // Drop the core instance so the next load starts from a fresh heap. The cached
  // factory + wasm are kept, so this reset doesn't re-download the ~31MB core.
  terminate() {
    videoTool._ffmpeg = null;
    videoTool._loaded = false;
    videoTool._loadingPromise = null;
    videoTool._progressCb = null;
  },

  // Sample-accurate audio duration via WebAudio. decodeAudioData detaches its input,
  // so pass a copy. One shared context is reused across a batch (browsers cap the
  // number of AudioContexts). Callers fall back to _probeDurationFFmpeg if this rejects.
  async audioDuration(bytes) {
    // An offline context only decodes; it doesn't hold an audio output open for the rest
    // of the session.
    const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    const AC = window.AudioContext || window.webkitAudioContext;
    _audioCtx = _audioCtx || (OAC ? new OAC(1, 1, 44100) : new AC());
    const decoded = await _audioCtx.decodeAudioData(bytes.slice().buffer);
    return decoded.duration;
  },

  // Fallback: read the duration ffmpeg reports for the already-written 'audio' file —
  // handles formats WebAudio can't decode (e.g. Ogg/Vorbis on Safari).
  _probeDurationFFmpeg(core) {
    videoTool._captured = [];
    videoTool._capturingLog = true;
    try {
      core.exec('-i', 'audio');
    } catch (e) { /* `-i` with no output errors; we only want the logged Duration */ }
    core.reset && core.reset();
    videoTool._capturingLog = false;
    for (const line of videoTool._captured) {
      const m = line.match(/Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)/);
      if (m) {
        return (+m[1]) * 3600 + (+m[2]) * 60 + parseFloat(m[3]);
      }
    }
    return 0;
  },

  // Serialize mux jobs — there is a single core instance, so overlapping jobs
  // (e.g. two download surfaces clicked in quick succession) would clash in MEMFS.
  mux(sound, opts) {
    const run = () => videoTool._muxJob(sound, opts);
    videoTool._muxChain = (videoTool._muxChain || Promise.resolve()).then(run, run);
    return videoTool._muxChain;
  },

  // Wrap a job with the busy-spinner state (set before the async work so it paints
  // and is compositor-animating before any blocking exec).
  async _muxJob(sound, opts) {
    videoTool._setProcessing(true);
    try {
      return await videoTool._runMux(sound, opts);
    } finally {
      videoTool._setProcessing(false);
    }
  },

  // Produce a single mp4 Blob: visual looped to the audio length, H.264 + AAC.
  // NOTE: core.exec() runs synchronously on the main thread, so the tab is briefly
  // unresponsive during encoding (bounded by the encode-once loop strategy).
  async _runMux(sound, opts) {
    opts = opts || {};

    // Weight the phases so the ring advances sensibly. The encoder download only
    // happens once per session, so it only takes a slice when it's actually needed.
    const needsLoad = !videoTool._loaded;
    const W = needsLoad
      ? { load: 0.6, fetch: 0.15 }
      : { load: 0, fetch: 0.4 };
    // Report both to the button and to any caller-supplied bar (e.g. Download All).
    const report = (label, ratio) => {
      videoTool._setStatus(label, ratio);
      opts.onProgress && ratio != null && opts.onProgress(Math.max(0, Math.min(1, ratio)));
    };

    // Let the caller (Download All's cancel) stop the job between steps; a running exec
    // can't be interrupted.
    const checkCanceled = () => {
      if (opts.isCanceled && opts.isCanceled()) {
        throw Object.assign(new PlayerError('Canceled.', 'info'), { canceled: true });
      }
    };

    report('Loading the video encoder', needsLoad ? 0 : W.load);
    await videoTool.loadFFmpeg(r => report('Loading the video encoder', r * W.load));
    checkCanceled();
    const core = videoTool._ffmpeg;
    const kind = util.classifyVisual(sound.image, sound.type);

    // Fetch both streams (remote via GM.xhr, local blob: via fetch).
    let audioBytes;
    try {
      audioBytes = await fetchBytes(sound.src, r => report('Downloading the sound', W.load + r * W.fetch * 0.5));
    } catch (err) {
      let host = '';
      try {
        host = ' from ' + new URL(sound.src).host;
      } catch (e) { /* non-URL src */ }
      throw new PlayerError(`Couldn't fetch the sound${host}.`, 'warning', err);
    }
    checkCanceled();
    const visualBytes = await fetchBytes(sound.image, r => report('Downloading the image', W.load + W.fetch * 0.5 + r * W.fetch * 0.5));
    checkCanceled();
    const encBase = W.load + W.fetch;

    // The core reports progress during exec, but nothing can repaint while exec
    // blocks — so keep the last value for diagnostics on failure rather than for UI.
    videoTool._progressCb = e => {
      videoTool._lastExecProgress = e && e.progress;
    };

    const visIn = kind === 'video' ? 'visual.mp4'
      : kind === 'gif' ? 'visual.gif'
        : 'visual.img';
    const written = [];
    const exec = args => {
      checkCanceled();
      core.setTimeout(cfg.EXEC_TIMEOUT_MS);
      // exec swallows ffmpeg aborts and returns the exit code: a failed step must not hand
      // a broken file on as the result. reset() clears the code for the next run.
      const ret = core.exec(...args);
      core.reset && core.reset();
      if (ret !== 0) {
        throw new PlayerError(`The video encoder failed (exit code ${ret}).`, 'error');
      }
    };
    const cleanup = () => {
      videoTool._progressCb = null;
      for (const f of written) {
        try {
          core.FS.unlink(f);
        } catch (err) { /* gone */ }
      }
    };

    try {
      core.FS.writeFile(visIn, visualBytes); written.push(visIn);
      core.FS.writeFile('audio', audioBytes); written.push('audio');

      // Duration: WebAudio primary, ffmpeg probe fallback (needs 'audio' in MEMFS).
      // WebAudio decodes the whole track to measure it (hundreds of MB for a long mix),
      // so leave very large files to the probe, which only reads the headers.
      let dur = 0;
      if (audioBytes.length <= MAX_DECODE_BYTES) {
        try {
          dur = await videoTool.audioDuration(audioBytes);
        } catch (e) { /* fall back to the ffmpeg probe below */ }
      }
      if (!(dur > 0)) {
        dur = videoTool._probeDurationFFmpeg(core);
      }
      if (!(dur > 0)) {
        throw new PlayerError('Could not read the audio duration.', 'warning');
      }

      const preset = Player.config.videoUltrafast ? 'ultrafast' : 'veryfast';
      // Each exec blocks the main thread, so publish the step and let it paint first.
      if (kind === 'still') {
        // One pass, and by default a single frame spanning the whole track — the
        // picture never changes, so there's nothing else to encode.
        report('Encoding the video (the tab will freeze briefly)', encBase);
        await paint();
        exec(util.stillArgs({
          image: visIn, audio: 'audio', out: 'out.mp4',
          dur,
          fps: cfg.STILL_SINGLE_FRAME ? util.singleFrameRate(dur) : cfg.STILL_FPS,
          audioBitrate: cfg.AUDIO_BITRATE, preset
        }));
      } else {
        // Animated: encode one loop, then copy it over the audio so the repeats
        // cost nothing to encode.
        report('Encoding the loop (the tab will freeze briefly)', encBase);
        await paint();
        exec(util.loopEncodeArgs({ visual: visIn, out: 'loop.mp4', isGif: kind === 'gif', preset }));
        written.push('loop.mp4');

        report('Looping it over the sound', encBase + (1 - encBase) * 0.6);
        await paint();
        exec(util.loopMuxArgs({ loop: 'loop.mp4', audio: 'audio', out: 'out.mp4', dur, audioBitrate: cfg.AUDIO_BITRATE }));
      }
      report('Saving', 1);
      written.push('out.mp4');
      const data = core.FS.readFile('out.mp4', { encoding: 'binary' }); // Uint8Array
      if (!data || !data.length) {
        throw new PlayerError('The video encoder produced no output.', 'error');
      }
      return new Blob([ data ], { type: 'video/mp4' });
    } finally {
      cleanup();
    }
  },

  // Public entry point for all three UI surfaces.
  async downloadVideo(soundOrId) {
    const sound = typeof soundOrId === 'object'
      ? soundOrId
      : Player.sounds.find(s => s.id === soundOrId);
    if (!sound) {
      return;
    }

    // Standalone videos ARE the sound — nothing to mux, just download the file.
    if (sound.standaloneVideo) {
      return Player.tools.download(sound.image, sound.filename);
    }

    try {
      const blob = await videoTool.mux(sound);
      // Free the encoder's memory (it only grows); the next video re-creates it from the
      // cached core without downloading it again.
      videoTool.terminate();
      const url = URL.createObjectURL(blob);
      const a = _.element(`<a href="${url}" download="${_.escAttr(util.muxFileName(sound.title, sound.filename))}" rel="noopener" target="_blank"></a>`);
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      // Name the step that failed — otherwise a mid-encode failure is opaque.
      const at = videoTool._statusLabel ? ` (during: ${videoTool._statusLabel.replace(/ \(.*\)$/, '')})` : '';
      videoTool._lastLog && console.error('[4chan sounds player] last encoder log:', videoTool._lastLog);
      // logError pulls the level from a PlayerError's .type; 'error' is the default otherwise.
      Player.logError(`Failed to create the video${at}.`, err, 'error');
      if (videoTool._evalBlocked) {
        // The feature can't run on this site — drop the now-useless button.
        Player.footer && Player.footer.render();
      } else {
        // A failed job can leave the wasm heap dirty; reset so the next attempt is clean.
        videoTool.terminate();
      }
    }
  }
};


/***/ },

/***/ "./src/components/user-template/buttons.js"
/*!*************************************************!*\
  !*** ./src/components/user-template/buttons.js ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const { postIdPrefix } = __webpack_require__(/*! ../../selectors */ "./src/selectors.js");

module.exports = [
  {
    property: 'repeat',
    tplName: 'repeat',
    action: 'playlist.toggleRepeat',
    actionMods: '.prevent',
    values: {
      all: { attrs: [ 'title="Repeat All"' ], icon: Icons.arrowRepeat },
      one: { attrs: [ 'title="Repeat One"' ], icon: Icons.arrowClockwise },
      none: { attrs: [ 'title="No Repeat"' ], class: 'muted', icon: Icons.arrowRepeat }
    }
  },
  {
    property: 'shuffle',
    tplName: 'shuffle',
    action: 'playlist.toggleShuffle',
    actionMods: '.prevent',
    values: {
      true: { attrs: [ 'title="Shuffled"' ], icon: Icons.shuffle },
      false: { attrs: [ 'title="Ordered"' ], class: 'muted', icon: Icons.shuffle }
    }
  },
  {
    property: 'viewStyle',
    tplName: 'playlist',
    action: 'playlist.toggleView',
    values: {
      default: { attrs: [ 'title="Player"' ], class: 'muted', icon: () => (Player.playlist._lastView === 'playlist' ? Icons.arrowsExpand : Icons.arrowsCollapse) },
      playlist: { attrs: [ 'title="Hide Playlist"' ], icon: Icons.arrowsExpand },
      image: { attrs: [ 'title="Show Playlist"' ], icon: Icons.arrowsCollapse }
    }
  },
  {
    property: 'hoverImages',
    tplName: 'hover-images',
    action: 'playlist.toggleHoverImages',
    values: {
      true: { attrs: [ 'title="Hover Images Enabled"' ], icon: Icons.image },
      false: { attrs: [ 'title="Hover Images Disabled"' ], class: 'muted', icon: Icons.image }
    }
  },
  {
    tplName: 'add',
    action: 'playlist.selectLocalFiles',
    actionMods: '.prevent',
    icon: Icons.plus,
    attrs: [ 'title="Add local files"' ]
  },
  {
    tplName: 'reload',
    action: 'posts.refresh',
    actionMods: '.prevent',
    icon: Icons.reboot,
    attrs: [ 'title="Reload the playlist"' ]
  },
  {
    property: 'viewStyle',
    tplName: 'settings',
    action: 'settings.toggle()',
    actionMods: '.prevent',
    icon: Icons.gear,
    attrs: [ 'title="Settings"' ],
    values: {
      default: { class: 'muted' },
      settings: { }
    }
  },
  {
    property: 'viewStyle',
    tplName: 'threads',
    action: 'threads.toggle',
    actionMods: '.prevent',
    icon: Icons.search,
    attrs: [ 'title="Threads"' ],
    values: {
      default: { class: 'muted' },
      threads: { }
    }
  },
  {
    property: 'viewStyle',
    tplName: 'tools',
    action: 'tools.toggle',
    actionMods: '.prevent',
    icon: Icons.tools,
    attrs: [ 'title="Tools"' ],
    values: {
      default: { class: 'muted' },
      tools: { }
    }
  },
  {
    tplName: 'close',
    action: 'hide',
    actionMods: '.prevent',
    icon: Icons.close,
    attrs: [ 'title="Hide the player"' ]
  },
  {
    tplName: 'playing',
    requireSound: true,
    action: 'playlist.scrollToPlaying("center")',
    actionMods: '.prevent',
    icon: Icons.musicNoteList,
    attrs: [ 'title="Scroll the playlist to the currently playing sound."' ]
  },
  {
    tplName: 'post',
    requireSound: true,
    icon: Icons.chatRightQuote,
    showIf: data => data.sound.post,
    attrs: data => [
      `href="${_.escAttr('#' + postIdPrefix + data.sound.post)}"`,
      'title="Jump to the post for the current sound"'
    ]
  },
  {
    tplName: 'image',
    requireSound: true,
    icon: Icons.image,
    attrs: data => [
      `href="${_.escAttr(data.sound.image)}"`,
      'title="Open the image in a new tab"',
      'target="_blank"'
    ]
  },
  {
    tplName: 'sound',
    requireSound: true,
    icon: Icons.soundwave,
    attrs: data => [
      `href="${_.escAttr(data.sound.src)}"`,
      'title="Open the sound in a new tab"',
      'target="_blank"'
    ]
  },
  {
    tplName: /dl-(image|sound)/,
    requireSound: true,
    action: data => {
      const src = data.sound[data.tplNameMatch[1] === 'image' ? 'image' : 'src'];
      const name = data.tplNameMatch[1] === 'image' ? data.sound.filename || '' : data.sound.name || data.sound.title || '';
      return `tools.download("${_.escAttr(src, true)}", "${_.escAttr(name, true)}")`;
    },
    actionMods: '.prevent',
    icon: data => data.tplNameMatch[1] === 'image'
      ? Icons.fileEarmarkImage
      : Icons.fileEarmarkMusic,
    attrs: data => [
      `title="${data.tplNameMatch[1] === 'image' ? 'Download the image with the original filename' : 'Download the sound'}"`
    ]
  },
  {
    tplName: 'dl-video',
    requireSound: true,
    class: `${ns}-download-video-button`,
    action: data => `tools.downloadVideo("${_.escAttr(data.sound.id, true)}")`,
    actionMods: '.prevent',
    showIf: data => !data.sound.standaloneVideo && Player.tools._encoderAvailable(),
    icon: Icons.fileEarmarkPlay,
    attrs: [ 'title="Download the image/video combined with the sound as an mp4"' ]
  },
  {
    tplName: /filter-(image|sound)/,
    requireSound: true,
    // Filter against _origSrc so the filter stays matched after the rerouter is toggled
    // (sound.src would otherwise persist the rerouted host into the user's filter list).
    // _.escAttr(..., true) — value lands inside a JS string literal that itself
    // lives inside an @click='...' attribute. The sound URL is parsed from
    // user-controlled post filenames and CAN contain quote / angle-bracket chars
    // (especially after decodeURIComponent in getSounds unwraps %27 / %3C); plain
    // interpolation would break out of the attribute and inject markup.
    action: data => {
      const filterVal = data.tplNameMatch[1] === 'image'
        ? data.sound.imageMD5
        : (data.sound._origSrc || data.sound.src).replace(/^(https?:)?\/\//, '');
      return `playlist.addFilter("${_.escAttr(filterVal, true)}")`;
    },
    actionMods: '.prevent',
    icon: Icons.filter,
    showIf: data => data.tplNameMatch[1] === 'sound' || data.sound.imageMD5,
    attrs: data => [
      `title="Add the ${data.tplNameMatch[1] === 'image' ? 'image MD5' : 'sound URL'} to the filters."`,
    ]
  },
  {
    tplName: 'remove',
    requireSound: true,
    action: data => `remove("${_.escAttr(data.sound.id, true)}")`,
    icon: Icons.trash,
    attrs: data => [
      'title="Remove from the playlist."',
      `data-id="${_.escAttr(data.sound.id)}"`
    ]
  },
  {
    tplName: 'restore',
    action: 'playlist.restoreRemoved()',
    actionMods: '.prevent',
    showIf: () => Player.playlist.removedCount() > 0,
    icon: Icons.arrowCounterclockwise,
    attrs: [ 'title="Add the sounds you removed back to the playlist."' ]
  },
  {
    tplName: 'menu',
    requireSound: true,
    class: `${ns}-item-menu-button`,
    action: data => `playlist.handleItemMenu($event, "${_.escAttr(data.sound.id, true)}")`,
    actionMods: '.prevent.stop',
    icon: Icons.chevronDown
  },
  {
    tplName: 'view-menu',
    action: 'display.showMenu($event.currentTarget, "views")',
    actionMods: '.prevent.stop',
    icon: Icons.chevronDown,
    attrs: [ 'title="Switch View"' ]
  },
  {
    tplName: 'theme-menu',
    action: 'display.showMenu($event.currentTarget, "themes")',
    actionMods: '.prevent.stop',
    icon: Icons.layoutTextWindow,
    attrs: [ 'title="Switch Theme"' ]
  },
  {
    tplName: 'untz',
    action: 'display.untz',
    icon: Icons.speaker,
    attrs: [ 'title="UNTZ"' ]
  }
];


/***/ },

/***/ "./src/components/user-template/index.js"
/*!***********************************************!*\
  !*** ./src/components/user-template/index.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const buttons = __webpack_require__(/*! ./buttons */ "./src/components/user-template/buttons.js");

// Regex for replacements. Each /g regex below is used for both .replace() (which
// needs /g for global) AND for .test() in findDependencies. Calling .test() on a
// /g regex advances lastIndex, leaking state across calls — when the same regex
// is .test()'d on different inputs it can return false (and `.exec` can skip
// matches) because it resumes from a stale offset. To keep both call shapes
// safe, every .test()/.exec() site below resets lastIndex to 0 explicitly.
const playingRE = /p: ?{([^}]*)}/g;
// Render the inner content only when at least one sound is dead (failed to load).
const deadRE = /d: ?{([^}]*)}/g;
// Render the inner content only when the user has removed sounds from the playlist.
const removedRE = /\br: ?{([^}]*)}/g;
// Any block whose content holds no other block: applied innermost first, so blocks can nest.
// (r:{ has to start a word; the others never did, so "sound-titleh:{…}" keeps working.)
const innermostBlockRE = /(?:\b(r)|([pdh])): ?{([^{}]*)}/g;
// Create a regex to find buttons/links, ignore matches if the button/link name is itself a regex.
const tplNames = buttons.map(conf => `${conf.tplName.source && conf.tplName.source.replace(/\(/g, '(?:') || conf.tplName}`);
const buttonRE = new RegExp(`(${tplNames.join('|')})-(?:button|link)(?:\\:"([^"]+?)")?`, 'g');
const soundTitleRE = /sound-title/g;
const soundTitleMarqueeRE = /sound-title-marquee/g;
const soundIndexRE = /sound-index/g;
const soundCountRE = /sound-count/g;
// Alternation takes the first branch that matches, so names that extend another
// name (imageOrThumb, imageMD5) must come before it (image), or `sound-imageMD5`
// matches as `sound-image` followed by the literal text "MD5".
const soundPropRE = /sound-(src|id|name|post|imageOrThumb|imageMD5|image|thumb|filename)(-esc)?/g;
const soundFilterCountRE = /filtered-count/g;
const deadCountRE = /dead-count/g;
const removedCountRE = /removed-count/g;
const restoreButtonRE = /restore-(?:button|link)/g;
const configRE = /\$config\[([^\]]+)\]/g;

// Hold information on which config values components templates depend on.
const componentDeps = [ ];

module.exports = {
  buttons,

  initialize() {
    Player.on('config', Player.userTemplate._handleConfig);
    Player.on('playsound', () => Player.userTemplate._handleEvent('playsound'));
    // 'filters-applied' fires once at the end of playlist.applyFilters and is
    // the one event hasCount/hasSoundProp/hasIndex/hasPlaying templates rely on
    // to refresh after a bulk apply (the per-sound 'add'/'remove'/'playsound'
    // cascade is suppressed by _handleEvent while _applyingFilters is set). It
    // MUST be subscribed here or the corresponding events.push('filters-applied')
    // entries in findDependencies become dead code.
    // 'dead-change' fires when a sound is marked dead (failed to load) or recovers, so
    // sound-count templates refresh their playable total / "(+ N dead)" suffix.
    [ 'add', 'remove', 'order', 'show', 'hide', 'stop', 'filters-applied', 'dead-change' ].forEach(evt => {
      Player.on(evt, Player.userTemplate._handleEvent.bind(null, evt));
    });
  },

  /**
	 * Build a user template.
	 */
  build(data) {
    const outerClass = data.outerClass || '';
    const name = data.sound && data.sound.title || data.defaultName;
    let _data = { ...data };

    // Values from the sound (its title and properties, and the buttons whose handlers embed
    // them) go in through placeholders filled last, so the later token passes can't rewrite
    // text inside them (a title containing "sound-src" or "%v" was rendered as the URL /
    // version, and a name containing "sound-title" broke the download button's handler).
    const inserts = [];
    const insert = value => `\u0000${inserts.push(String(value)) - 1}\u0000`;

    const _confFuncOrText = v => (typeof v === 'function' ? v(_data) : v);

    // Apply common template replacements, unless they are opted out.
    let html = data.template.replace(configRE, (...args) => _.get(Player.config, args[1]));
    if (!data.ignoreDisplayBlocks) {
      // Conditions are only worked out for blocks the template has: the dead and removed
      // scans would otherwise run for every row the row template builds.
      const shows = {
        p: () => !!Player.playing && Player.playing === data.sound,
        d: () => Player.sounds.some(s => s.error),
        r: () => Player.playlist.removedCount() > 0
      };
      // Innermost first, so "p:{ h:{menu-button} }" works: an outer block used to end at
      // the inner one's "}", leaving a stray "}" on the page.
      let before;
      do {
        before = html;
        html = html.replace(innermostBlockRE, (m, r, other, inner) => {
          const kind = r || other;
          return kind === 'h'
            ? `<span class="${ns}-hover-display ${outerClass}">${inner}</span>`
            : shows[kind]() ? inner : '';
        });
      } while (html !== before);
    }
    !data.ignoreButtons && (html = html.replace(buttonRE, function (full, type, text) {
      let buttonConf = Player.userTemplate._findButtonConf(type);
      _data.tplNameMatch = buttonConf.tplNameMatch;
      if (buttonConf.requireSound && !data.sound || buttonConf.showIf && !buttonConf.showIf(_data)) {
        return '';
      }
      // If the button config has sub values then extend the base config with the selected sub value.
      // Which value to use is taken from the `property` in the base config of the player config.
      // This gives us different state displays.
      if (buttonConf.values) {
        let topConf = buttonConf;
        const valConf = buttonConf.values[_.get(Player.config, buttonConf.property)] || buttonConf.values[Object.keys(buttonConf.values)[0]];
        buttonConf = { ...topConf, ...valConf };
      }
      const attrs = [ ...(_confFuncOrText(buttonConf.attrs) || []) ];
      attrs.some(attr => attr.startsWith('href')) || attrs.push('href="javascript:;"');
      (buttonConf.class || outerClass) && attrs.push(`class="${buttonConf.class || ''} ${outerClass || ''}"`);
      buttonConf.action && attrs.push(`@click${buttonConf.actionMods || ''}='${_confFuncOrText(buttonConf.action)}'`);

      // Replace spaces with non breaking spaces in user text to prevent collapsing.
      // Only the attributes (handlers and links embedding sound values) are protected; the
      // text still goes through the token passes, since templates put tokens in button
      // text on purpose (the default footer's playing-button:"sound-index /").
      return `<a ${insert(attrs.join(' '))}>${text && text.replace(/ /g, ' ') || _confFuncOrText(buttonConf.icon) || _confFuncOrText(buttonConf.text)}</a>`;
    }));
    // Escape the sound name — it comes from the filename regex in posts.getSounds
    // (and the [futari no christmas] hardcoded match) and can contain arbitrary
    // characters from archived posts. Compute lazily: most playlist templates
    // don't include sound-title at all, so the per-row escAttr cost is wasted.
    let escName, escLocation;
    const getEscName = () => escName !== undefined ? escName : (escName = name ? _.escAttr(name) : '');
    const getEscLocation = () => escLocation !== undefined ? escLocation : (escLocation = _.escAttr(data.location || ''));
    !data.ignoreSoundName && (html = html
      .replace(soundTitleMarqueeRE, () => name
        ? insert(`<div class="${ns}-col ${ns}-truncate-text" style="margin: 0 .5rem; text-overflow: clip;"><span title="${getEscName()}" class="${ns}-title-marquee" data-location="${getEscLocation()}">${getEscName()}</span></div>`)
        : '')
      .replace(soundTitleRE, () => name
        ? insert(`<div class="${ns}-col ${ns}-truncate-text" style="margin: 0 .5rem"><span title="${getEscName()}">${getEscName()}</span></div>`)
        : ''));
    !data.ignoreSoundProperties && (html = html
      // Always escape sound props when interpolated into the rendered HTML. The
      // `-esc` suffix is the OPT-IN for JS-string-safe escaping (used inside
      // event-handler attributes that wrap the value in a JS string literal);
      // plain tokens get HTML-attr escaping which is correct for href/value/etc.
      .replace(soundPropRE, (...args) => data.sound ? insert(_.escAttr(data.sound[args[1]], !!args[2])) : '')
      // Position among PLAYABLE sounds. Dead sounds are excluded from sound-count, so
      // exclude them from the index too — otherwise "sound-index / sound-count" can read
      // e.g. 3 / 2 when the playing sound sits after a dead one. Lazy function so builds
      // without the token skip the O(n) walk (the old eager indexOf ran on every build).
      .replace(soundIndexRE, () => {
        if (!data.sound) return 0;
        let idx = 0;
        for (const s of Player.sounds) {
          !s.error && idx++;
          if (s === data.sound) return idx;
        }
        return 0;
      })
      // sound-count reports the PLAYABLE total — dead (failed-to-load) sounds are
      // excluded. The dead total is exposed separately via the `dead-count` token and
      // the `d:{ }` block (shown only when something is dead). Computed lazily so
      // templates without the token (e.g. the per-sound row template) skip the scan.
      .replace(soundCountRE, () => Player.sounds.reduce((n, s) => s.error ? n : n + 1, 0))
      .replace(deadCountRE, () => Player.sounds.reduce((n, s) => s.error ? n + 1 : n, 0))
      .replace(removedCountRE, () => Player.playlist.removedCount())
      .replace(soundFilterCountRE, Player.filteredSounds.length));
    !data.ignoreVersion && (html = html.replace(/%v/g, "3.7.2.610"));

    // Apply any specific replacements
    if (data.replacements) {
      for (let k of Object.keys(data.replacements)) {
        html = html.replace(new RegExp(k, 'g'), data.replacements[k]);
      }
    }

    // eslint-disable-next-line no-control-regex
    return inserts.length ? html.replace(/\u0000(\d+)\u0000/g, (m, i) => inserts[i]) : html;
  },

  /**
	 * Sets up a components to render when the template or values within it are changed.
	 */
  maintain(component, property, alwaysRenderConfigs = [], alwaysRenderEvents = []) {
    componentDeps.push({
      component,
      property,
      ...Player.userTemplate.findDependencies(property, null),
      alwaysRenderConfigs,
      alwaysRenderEvents
    });
  },

  /**
	 * Find all the config dependent values in a template.
	 */
  findDependencies(property, template) {
    template || (template = _.get(Player.config, property));
    // Figure out what events should trigger a render.
    const events = [];

    // /g regexes carry lastIndex across calls — reset before each .test()/.exec()
    // so a prior call (or another module sharing the regex) can't make us skip
    // the prefix of `template` or miss a match entirely.
    soundCountRE.lastIndex = 0;
    soundTitleRE.lastIndex = 0;
    soundPropRE.lastIndex = 0;
    soundIndexRE.lastIndex = 0;
    playingRE.lastIndex = 0;
    soundFilterCountRE.lastIndex = 0;
    deadCountRE.lastIndex = 0;
    deadRE.lastIndex = 0;
    removedCountRE.lastIndex = 0;
    removedRE.lastIndex = 0;
    restoreButtonRE.lastIndex = 0;
    buttonRE.lastIndex = 0;
    configRE.lastIndex = 0;

    // add/remove should render templates showing the count.
    // playsound/stop should render templates either showing properties of the playing sound or dependent on something playing.
    // order should render templates showing a sounds index.
    const hasCount = soundCountRE.test(template);
    const hasSoundProp = soundTitleRE.test(template) || soundPropRE.test(template);
    const hasIndex = soundIndexRE.test(template);
    const hasPlaying = playingRE.test(template);
    const hasFilterCount = soundFilterCountRE.test(template);
    // dead-count token / d:{ } block depend on the dead total, which changes when a
    // sound is marked dead/recovers ('dead-change') or is added/removed/refiltered.
    const hasDead = deadCountRE.test(template) || deadRE.test(template);
    // hasCount templates re-render on add/remove for the live count, AND on
    // 'filters-applied' so bulk applyFilters operations (where _handleEvent
    // suppresses the per-sound 'add'/'remove' cascade) still refresh the count
    // exactly once at the end.
    hasCount && events.push('add', 'remove', 'filters-applied', 'dead-change');
    // The row template handles this itself to avoid a full playlist render.
    // hasSoundProp/hasIndex/hasPlaying also subscribe to 'filters-applied' so
    // bulk applyFilters refreshes the dependent template even when its
    // 'playsound' cascade is suppressed (see _handleEvent below).
    property !== 'rowTemplate' && (hasSoundProp || hasIndex || hasPlaying)
      && events.push('playsound', 'stop', 'filters-applied');
    // sound-index now also depends on the dead total (dead sounds before the playing
    // one shift the playable position), so refresh on 'dead-change' as well as 'order'.
    hasIndex && events.push('order', 'dead-change');
    hasFilterCount && events.push('filters-applied');
    hasDead && events.push('add', 'remove', 'filters-applied', 'dead-change');
    // removed-count, r:{ } and the restore button change when a sound is removed or restored.
    const hasRemoved = removedCountRE.test(template) || removedRE.test(template) || restoreButtonRE.test(template);
    hasRemoved && events.push('add', 'remove', 'filters-applied');

    // Find which buttons the template includes that are dependent on config values.
    const config = [];
    let match;
    while ((match = buttonRE.exec(template)) !== null) {
      let buttonConf = Player.userTemplate._findButtonConf(match[1]);
      // Buttons for the selected sound appear, disappear and act on it, so follow it.
      // (The row template's rows are rebuilt by the playlist itself.)
      buttonConf.requireSound && property !== 'rowTemplate' && events.push('playsound', 'stop', 'filters-applied');
      // If user text is given then the display doesn't change.
      if (!match[2] && buttonConf.property) {
        config.push(buttonConf.property);
      }
    }
    // Find config references.
    while ((match = configRE.exec(template)) !== null) {
      config.push(match[1]);
    }

    return { events, config };
  },

  /**
	 * When a config value is changed check if any component dependencies are affected.
	 */
  _handleConfig(property, value) {
    // Check if a template for a components was updated.
    componentDeps.forEach(depInfo => {
      if (depInfo.property === property) {
        Object.assign(depInfo, Player.userTemplate.findDependencies(property, value));
        depInfo.component.render();
      }
    });
    // Check if any components are dependent on the updated property.
    componentDeps.forEach(depInfo => {
      if (depInfo.alwaysRenderConfigs.includes(property) || depInfo.config.includes(property)) {
        depInfo.component.render();
      }
    });
  },

  /**
	 * When a player event is triggered check if any component dependencies are affected.
	 */
  _handleEvent(type) {
    // Suppress per-sound 'add'/'remove'/'playsound' renders during a bulk
    // applyFilters operation: Phase A removal of the playing sound cascades into
    // Player.next → Player.play → 'playsound' against intermediate state (sounds
    // is mid-mutation, filteredSounds awaiting rebuild). The 'filters-applied'
    // event at the end of applyFilters drives one consistent re-render instead.
    if (Player._applyingFilters && (type === 'add' || type === 'remove' || type === 'playsound')) {
      return;
    }
    // The initial parse of the thread triggers one 'filters-applied' when it's done.
    if (Player._bulkAdding && (type === 'add' || type === 'filters-applied')) {
      return;
    }
    // Check if any components are dependent on the updated property.
    componentDeps.forEach(depInfo => {
      if (depInfo.alwaysRenderEvents.includes(type) || depInfo.events.includes(type)) {
        depInfo.component.render();
      }
    });
  },

  _findButtonConf: type => {
    let tplNameMatch;
    let buttonConf = buttons.find(conf => {
      if (conf.tplName === type) {
        return tplNameMatch = [ type ];
      }
      return tplNameMatch = conf.tplName.test && type.match(conf.tplName);
    });
    return buttonConf && { ...buttonConf, tplNameMatch };
  }
};


/***/ },

/***/ "./src/config/display.js"
/*!*******************************!*\
  !*** ./src/config/display.js ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = [
  {
    property: 'autoshow',
    default: true,
    title: 'Autoshow',
    description: 'Automatically show the player when the thread contains sounds.',
    displayGroup: 'Display'
  },
  {
    property: 'pauseOnHide',
    default: true,
    title: 'Pause On Hide',
    description: 'Pause the player when it\'s hidden.',
    displayGroup: 'Display',
    allowInTheme: true
  },
  {
    property: 'showUpdatedNotification',
    default: true,
    title: 'Show Update Notifications',
    description: 'Show notifications when the player is successfully updated.',
    displayGroup: 'Display'
  },
  {
    property: 'rowLoadingBars',
    default: true,
    title: 'Playlist Loading Bars',
    description: 'Show how much of the playing sound has loaded with thin lines on its playlist row: the video along the top edge and the audio along the bottom edge. Files that load straight away (cached) don\'t get a line, and the lines fade out once everything has loaded.',
    displayGroup: 'Display',
    allowInTheme: true
  },
  {
    property: 'hoverImages',
    title: 'Hover Images',
    default: false,
    allowInTheme: true
  },
  {
    title: 'Controls',
    displayGroup: 'Display',
    allowInTheme: true,
    settings: [
      {
        property: 'preventControlWrapping',
        title: 'Prevent Wrapping',
        description: 'Hide controls to prevent wrapping when the player is too small',
        default: true
      },
      {
        property: 'controlsHideOrder',
        title: 'Hide Order',
        description: 'Order controls are hidden in to prevent wrapping. '
					+ 'Available controls are '
					+ '<pre class="option">previous</pre> '
					+ '<pre class="option">next</pre> '
					+ '<pre class="option">seek-bar</pre> '
					+ '<pre class="option">time</pre> '
					+ '<pre class="option">duration</pre> '
					+ '<pre class="option">volume</pre> '
					+ '<pre class="option">volume-button</pre> '
					+ '<pre class="option">volume-bar</pre> '
					+ 'and <pre class="option">fullscreen</pre>.',
        default: [ 'fullscreen', 'duration', 'volume-bar', 'seek-bar', 'time', 'previous' ],
        displayMethod: 'textarea',
        inlineTextarea: true,
        format: v => v.join('\n'),
        parse: v => v.split(/\s+/)
      }
    ]
  },
  {
    title: 'Minimised Display',
    description: 'Optional displays for when the player is minimised.',
    displayGroup: 'Display',
    allowInTheme: true,
    settings: [
      {
        property: 'pip',
        title: 'Thumbnail',
        description: 'Display a fixed thumbnail of the playing sound in the bottom right of the thread.',
        default: true
      },
      {
        property: 'maxPIPWidth',
        title: 'Max Width',
        description: 'Maximum width for the thumbnail.',
        default: '150px',
        updateCSSVars: true
      },
      {
        property: 'chanXControls',
        title: '4chan X Header Controls',
        description: 'Show playback controls in the 4chan X header. The display can be customised in Settings>Theme.',
        displayMethod: isChanX || null,
        default: 'closed',
        options: {
          always: 'Always',
          closed: 'Only with the player closed',
          never: 'Never'
        }
      }
    ]
  },
  {
    title: 'Thread',
    displayGroup: 'Display',
    allowInTheme: true,
    settings: [
      {
        property: 'autoScrollThread',
        description: 'Automatically scroll the thread to posts as sounds play.',
        title: 'Auto Scroll',
        default: false
      },
      {
        property: 'limitPostWidths',
        description: 'Limit the width of posts so they aren\'t hidden under the player.',
        title: 'Limit Post Widths',
        default: true
      },
      {
        property: 'minPostWidth',
        title: 'Minimum Width',
        default: '50%'
      }
    ]
  },
  {
    property: 'threadsViewStyle',
    title: 'Threads View',
    description: 'How threads in the threads view are listed.',
    settings: [ {
      title: 'Display',
      default: 'table',
      options: {
        table: 'Table',
        board: 'Board'
      }
    } ]
  },
  {
    title: 'Colors',
    displayGroup: 'Display',
    property: 'colors',
    updateCSSVars: true,
    allowInTheme: true,
    class: `${ns}-colorpicker-input`,
    // .stop: otherwise the same click reaches the body's close-dialogs handler, which
    // removed the picker as soon as it opened.
    attrs: '@focusout.stop.prevent="colorpicker._updatePreview" @click.stop="colorpicker.create"',
    // Escape the value: it comes from settings, which can be imported or shared as a theme.
    displayMethod: ({ value, attrs }) => `<div class="${ns}-col">
				<input type="text" ${attrs} value="${_.escAttr(value)}">
				<div class="${ns}-cp-preview" style="background: ${_.escAttr(value)}" @click.stop.prevent="colorpicker.create"></div>
			</div>`,
    actions: [
      { title: 'Match Theme', handler: 'theme.forceBoardTheme', mods: '.prevent' }
    ],
    // These colors will be overriden with the theme defaults at initialization. They're set to yotsuba b here.
    settings: [
      {
        property: 'colors.text',
        default: '#000000',
        title: 'Text'
      },
      {
        property: 'colors.background',
        default: '#d6daf0',
        title: 'Background'
      },
      {
        property: 'colors.border',
        default: '#b7c5d9',
        title: 'Border'
      },
      {
        property: 'colors.odd_row',
        default: '#d6daf0',
        title: 'Odd Row',
      },
      {
        property: 'colors.even_row',
        default: '#b7c5d9',
        title: 'Even Row'
      },
      {
        property: 'colors.playing',
        default: '#98bff7',
        title: 'Playing Row'
      },
      {
        property: 'colors.dragging',
        default: '#c396c8',
        title: 'Dragging Row'
      },
      {
        property: 'colors.controls_background',
        default: '#3f3f44',
        title: 'Controls Background',
        description: 'The controls container element background.',
        actions: [ { title: 'Reset', handler: 'settings.reset("colors.controls_background")', mods: '.prevent' } ],
      },
      {
        property: 'colors.controls_inactive',
        default: '#FFFFFF',
        title: 'Control Items',
        description: 'The playback controls and played bar.',
        actions: [ { title: 'Reset', handler: 'settings.reset("colors.controls_inactive")', mods: '.prevent' } ],
      },
      {
        property: 'colors.controls_active',
        default: '#00b6f0',
        title: 'Focused Control Items',
        description: 'The control items when hovered.',
        actions: [ { title: 'Reset', handler: 'settings.reset("colors.controls_active")', mods: '.prevent' } ],
      },
      {
        property: 'colors.controls_empty_bar',
        default: '#131314',
        title: 'Volume/Seek Bar Background',
        description: 'The background of the volume and seek bars.',
        actions: [ { title: 'Reset', handler: 'settings.reset("colors.controls_empty_bar")', mods: '.prevent' } ],
      },
      {
        property: 'colors.controls_loaded_bar',
        default: '#5a5a5b',
        title: 'Loaded Bar Background',
        description: 'The loaded bar within the seek bar.',
        actions: [ { title: 'Reset', handler: 'settings.reset("colors.controls_loaded_bar")', mods: '.prevent' } ],
      },
      {
        property: 'colors.loading_video',
        default: '#107c10',
        title: 'Row Video Loading',
        description: 'The line along the top of the playing row while the video loads.',
        actions: [ { title: 'Reset', handler: 'settings.reset("colors.loading_video")', mods: '.prevent' } ],
      },
      {
        property: 'colors.loading_audio',
        default: '#e81123',
        title: 'Row Audio Loading',
        description: 'The line along the bottom of the playing row while the audio loads.',
        actions: [ { title: 'Reset', handler: 'settings.reset("colors.loading_audio")', mods: '.prevent' } ],
      },
      // Not configurable but here for access in templates.
      {
        property: 'colors.page_background',
        default: 'rgb(238, 242, 255)',
        displayMethod: null,
        allowInTheme: false
      }
    ]
  }
];


/***/ },

/***/ "./src/config/filter.js"
/*!******************************!*\
  !*** ./src/config/filter.js ***!
  \******************************/
(module) {

module.exports = [
  {
    property: 'addWebm',
    title: 'Include Video',
    description: 'Whether to add all video files regardless of a sound filename.',
    default: 'soundBoards',
    displayGroup: 'Filter',
    options: {
      always: 'Always',
      soundBoards: 'Boards with sound',
      never: 'Never'
    }
  },
  {
    property: 'fatboxRerouter',
    title: 'Fatbox Rerouter',
    description: 'Reroute all catbox.moe sounds through the fatbox.moe mirror.',
    default: false,
    displayGroup: 'Filter'
  },
  {
    property: 'allow',
    title: 'Allowed Hosts',
    description: 'Which domains sounds are allowed to be loaded from.',
    default: [
      '4cdn.org',
      'catbox.moe',
      'fatbox.moe',
      'dmca.gripe',
      'lewd.se',
      'pomf.cat',
      'zz.ht',
      'zz.fo'
    ],
    actions: [{ title: 'Reset', handler: 'settings.reset("allow")', mods: '.prevent' }],
    displayGroup: 'Filter',
    displayMethod: 'textarea',
    attrs: 'rows=10',
    format: v => v.join('\n'),
    // Accept CRLF and trim whitespace so Windows/import paths don't leave a
    // trailing \r on every entry (which would silently never match).
    parse: v => v.split(/\r?\n/).map(s => s.trim()).filter(Boolean)
  },
  {
    property: 'filters',
    default: ['# Image MD5 or sound URL'],
    title: 'Filters',
    description: 'List of URLs or image MD5s to filter, one per line.\nLines starting with a # will be ignored.',
    actions: [{ title: 'Reset', handler: 'settings.reset("filters")', mods: '.prevent' }],
    displayGroup: 'Filter',
    displayMethod: 'textarea',
    attrs: 'rows=10',
    format: v => v.join('\n'),
    // Accept CRLF and drop empty lines, but preserve comment lines (#-prefixed)
    // verbatim since the textarea documents that as the comment syntax.
    parse: v => v.split(/\r?\n/).map(s => s.replace(/\r$/, '')).filter(s => s.length > 0)
  }
];


/***/ },

/***/ "./src/config/hosts.js"
/*!*****************************!*\
  !*** ./src/config/hosts.js ***!
  \*****************************/
(module) {

module.exports = [
  {
    property: 'defaultUploadHost',
    default: 'catbox',
    parse: 'settings.hosts.setDefault'
  },
  {
    property: 'uploadHosts',
    title: 'Hosts',
    actions: [
      { title: 'Add', handler: 'settings.hosts.add', mods: '.prevent' },
      { title: 'Restore Defaults', handler: 'settings.hosts.restoreDefaults', mods: '.prevent' }
    ],
    displayGroup: 'Hosts',
    displayMethod: 'settings.hosts.template',
    parse: 'settings.hosts.parse',
    looseCompare: true,
    wideDesc: true,
    description: 'Each host needs a unique name and URL that points to an upload endpoint. '
			+ '<br><br>The form data is a JSON representation of the data sent with the upload, with the file being indicated as "$file". '
			+ 'The form data and headers allow for any other information to be sent, such as a user token.'
			+ '<br><br>A response path or match can optionally be provided to get a link to the uploaded file from the response. '
			+ 'Use "Response Path" for JSON responses to set where a link or filename can be found in the response. '
			+ 'For all other responses "Response Match" takes a regular expression (without slashes) that is applied to the result, with the first capture group being the link or filename. '
			+ 'File URL format can be set if you only have part of the link, such as the filename. The response, or response path/match result, will be inserted in place of %s.',
    mix: true,
    default: {
      catbox: {
        default: true,
        url: 'https://catbox.moe/user/api.php',
        data: { reqtype: 'fileupload', fileToUpload: '$file', userhash: null },
        filenameLength: 29
      },
      pomf: {
        url: 'https://pomf.cat/upload.php',
        data: { 'files[]': '$file' },
        responsePath: 'files.0.url',
        soundUrl: 'a.pomf.cat/%s',
        filenameLength: 23
      },
      zz: {
        url: 'https://zz.ht/api/upload',
        responsePath: 'files.0.url',
        data: {
          'files[]': '$file'
        },
        headers: {
          token: null
        },
        filenameLength: 19
      },
      lewd: {
        url: 'https://lewd.se/upload',
        data: { file: '$file' },
        headers: { token: null, shortUrl: true },
        responsePath: 'data.link',
        filenameLength: 30
      }
    }
  }
];


/***/ },

/***/ "./src/config/index.js"
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = [
  // Order the groups appear in.
  ...__webpack_require__(/*! ./display */ "./src/config/display.js"),
  ...__webpack_require__(/*! ./playback */ "./src/config/playback.js"),
  ...__webpack_require__(/*! ./filter */ "./src/config/filter.js"),
  ...__webpack_require__(/*! ./keybinds */ "./src/config/keybinds.js"),
  ...__webpack_require__(/*! ./theme */ "./src/config/theme.js"),
  ...__webpack_require__(/*! ./hosts */ "./src/config/hosts.js"),

  {
    property: 'viewStyle',
    default: 'playlist'
  },
  {
    property: 'showPlaylistSearch',
    default: true
  },
  {
    property: 'imageHeight',
    default: 125
  },

  // These are for availability in templates. Measured on each page, so never saved or
  // loaded (runtime).
  {
    property: 'offsetTop',
    default: '0',
    runtime: true
  },
  {
    property: 'offsetBottom',
    default: '0',
    runtime: true
  }
];


/***/ },

/***/ "./src/config/keybinds.js"
/*!********************************!*\
  !*** ./src/config/keybinds.js ***!
  \********************************/
(module) {

const hasMediaSession = 'mediaSession' in navigator;
const keybindOpts = {
  displayGroup: 'Keybinds',
  format: 'hotkeys.stringifyKey',
  parse: 'hotkeys.parseKey',
  attrs: '@keydown="settings.handleKeyChange"',
  property: 'hotkey_bindings',
  allowInTheme: true
};

module.exports = [
  {
    title: 'Keybinds',
    displayGroup: 'Keybinds',
    settings: [
      {
        property: 'hotkeys',
        default: 'open',
        title: 'Enabled',
        options: {
          always: 'Always',
          open: 'Only with the player open',
          never: 'Never'
        }
      },
      {
        property: 'hardwareMediaKeys',
        title: 'Hardware Media Keys',
        displayGroup: 'Keybinds',
        description: 'Enable playback control via hardware media keys.'
					+ (!hasMediaSession ? ' Your browser does not support this feature.' : ''),
        default: hasMediaSession,
        attrs: !hasMediaSession && 'disabled'
      }
    ]
  },
  {
    title: 'Playback',
    themeFieldTitle: 'Playback Keybinds',
    ...keybindOpts,
    settings: [
      {
        property: 'hotkey_bindings.playPause',
        title: 'Play/Pause',
        keyHandler: 'togglePlay',
        ignoreRepeat: true,
        default: { key: ' ' }
      },
      {
        property: 'hotkey_bindings.previous',
        title: 'Previous',
        keyHandler: () => Player.previous({ force: true }),
        ignoreRepeat: true,
        default: { key: 'arrowleft' }
      },
      {
        property: 'hotkey_bindings.next',
        title: 'Next',
        keyHandler: () => Player.next({ force: true }),
        ignoreRepeat: true,
        default: { key: 'arrowright' }
      },
      {
        property: 'hotkey_bindings.previousGroup',
        title: 'Previous Group',
        keyHandler: () => Player.previous({ force: true, group: true }),
        ignoreRepeat: true,
        default: { shiftKey: true, key: 'arrowleft' }
      },
      {
        property: 'hotkey_bindings.nextGroup',
        title: 'Next Group',
        keyHandler: () => Player.next({ force: true, group: true }),
        ignoreRepeat: true,
        default: { shiftKey: true, key: 'arrowright' }
      },
      {
        property: 'hotkey_bindings.volumeUp',
        title: 'Volume Up',
        keyHandler: 'actions.volumeUp',
        default: { shiftKey: true, key: 'arrowup' }
      },
      {
        property: 'hotkey_bindings.volumeDown',
        title: 'Volume Down',
        keyHandler: 'actions.volumeDown',
        default: { shiftKey: true, key: 'arrowdown' }
      },
      {
        property: 'hotkey_bindings.shuffle',
        title: 'Shuffle',
        keyHandler: 'playlist.toggleShuffle',
        default: { key: '' }
      },
      {
        property: 'hotkey_bindings.repeat',
        title: 'Toggle Repeat',
        keyHandler: 'playlist.toggleRepeat',
        default: { key: '' }
      }
    ]
  },
  {
    title: 'Display',
    themeFieldTitle: 'Display Keybinds',
    ...keybindOpts,
    settings: [
      {
        property: 'hotkey_bindings.closePlayer',
        title: 'Close',
        keyHandler: 'display.close',
        default: { key: '' }
      },
      {
        property: 'hotkey_bindings.togglePlayer',
        title: 'Show/Hide',
        keyHandler: 'display.toggle',
        default: { key: 'h' }
      },
      {
        property: 'hotkey_bindings.toggleFullscreen',
        title: 'Toggle Fullscreen',
        keyHandler: 'display.toggleFullScreen',
        default: { key: '' },
        allowFocusedInput: true
      },
      {
        property: 'hotkey_bindings.togglePlaylist',
        title: 'Toggle Playlist',
        keyHandler: 'playlist.toggleView',
        default: { key: '' }
      },
      {
        property: 'hotkey_bindings.toggleSearch',
        title: 'Toggle Playlist Search',
        keyHandler: () => Player.set('showPlaylistSearch', !Player.config.showPlaylistSearch),
        default: { key: '' },
        allowFocusedInput: true
      },
      {
        property: 'hotkey_bindings.scrollToPlaying',
        title: 'Jump To Playing',
        keyHandler: () => Player.playlist.scrollToPlaying(),
        default: { key: '' }
      },
      {
        property: 'hotkey_bindings.toggleHoverImages',
        title: 'Toggle Hover Images',
        keyHandler: 'playlist.toggleHoverImages',
        default: { key: '' }
      },
      {
        property: 'hotkey_bindings.toggleAutoScroll',
        title: 'Toggle Thread Scroll',
        keyHandler: () => Player.set('autoScrollThread', !Player.config.autoScrollThread),
        default: { key: '' }
      }
    ]
  },
  {
    title: 'Theme',
    themeFieldTitle: 'Theme Keybinds',
    ...keybindOpts,
    settings: [
      {
        property: 'hotkey_bindings.nextTheme',
        title: 'Next Theme',
        keyHandler: 'theme.next',
        default: { key: '' }
      },
      {
        property: 'hotkey_bindings.previousTheme',
        title: 'Previous Theme',
        keyHandler: 'theme.previous',
        default: { key: '' }
      },
      {
        property: 'hotkey_bindings.switchTheme',
        title: 'Select Theme',
        keyHandler: 'theme.handleSwitch',
        default: [ ],
        displayMethod: 'theme.themeKeybindsTemplate',
        parse: 'theme.parseSwitch',
        format: null
      }
    ]
  }
];


/***/ },

/***/ "./src/config/playback.js"
/*!********************************!*\
  !*** ./src/config/playback.js ***!
  \********************************/
(module) {

module.exports = [
  {
    property: 'shuffle',
    title: 'Shuffle',
    displayGroup: 'Playback',
    default: false
  },
  {
    property: 'repeat',
    title: 'Repeat',
    displayGroup: 'Playback',
    default: 'all',
    options: {
      all: 'All',
      one: 'One',
      none: 'None'
    }
  },
  {
    property: 'preventSleep',
    title: 'Prevent Sleep',
    displayGroup: 'Playback',
    description: 'Prevent sleeping while audio is playing. This only works when the browser and tab are in the foreground.',
    default: true
  },
  {
    property: 'autoplayNext',
    title: 'Autoplay Next',
    displayGroup: 'Playback',
    description: 'Automatically play the next sound when the current one finishes.',
    default: true
  },
  {
    property: 'restartSeconds',
    title: 'Restart After',
    displayGroup: 'Playback',
    description: 'How long into a track until selecting previous restarts the track instead. Set to 0 to disable.',
    default: 3,
    parse: v => +v >= 0 && +v < Infinity ? +v : 0
  },
  {
    property: 'videoUltrafast',
    title: 'Fast Video Encoding',
    displayGroup: 'Playback',
    description: 'Use the ffmpeg "ultrafast" preset when downloading combined videos. '
			+ 'Roughly 2x faster to encode (shorter freeze) but around 3x the file size, and slightly lower quality.',
    default: false
  },
  {
    title: 'Inline Player',
    displayGroup: 'Playback',
    settings: [
      {
        property: 'playExpandedImages',
        title: 'Expanded Image',
        description: 'Play audio when sound images are expanded.',
        default: true,
        dependentRender: [ 'expandedControls' ]
      },
      {
        property: 'expandedControls',
        title: 'Expanded Controls',
        description: 'Show playback controls for expanded images.',
        default: true,
        attrs: () => !Player.config.playExpandedImages ? 'disabled' : ''
      },
      {
        property: 'expandedLoopMaster',
        title: 'Master Source',
        default: 'sound',
        description: 'Which media source to play in full for audio and video of different durations.',
        options: {
          sound: 'Audio',
          video: 'Video',
          // longest: 'Longest'
        }
      },
      {
        property: 'expandedAllowFiltered',
        title: 'Allow Filtered',
        default: true,
        description: 'Allow sounds that have been filtered to be played inline. '
					+ 'Sounds from unknown hosts will not be played regardless of this setting.',
      },
      {
        property: 'expandedRepeat',
        title: 'Repeat',
        default: 'all',
        description: 'How to repeat expanded images with multiple sounds.',
        options: {
          all: 'All',
          one: 'One',
          none: 'None'
        }
      },
      {
        property: 'playHoveredImages',
        title: 'Hover Image',
        description: 'Play audio when sound hover images are shown. This applies to hover images displayed by the native extention or 4chan X.',
        default: true
      }
    ]
  }
];


/***/ },

/***/ "./src/config/theme.js"
/*!*****************************!*\
  !*** ./src/config/theme.js ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = [
  {
    property: 'savedThemes',
    title: 'Saved Themes',
    actions: [
      { title: 'Restore Defaults', handler: 'theme.restoreDefaults', mods: '.prevent' },
      { title: 'Save Current', handler: 'theme.showSaveOptions', mods: '.prevent.stop' }
    ],
    displayGroup: 'Theme',
    displayMethod: 'theme.savedThemesTemplate',
    // The theme keybind list shows one row per saved theme.
    dependentRender: [ 'hotkey_bindings.switchTheme' ],
    mix: true,
    default: __webpack_require__(/*! ../components/theme/themes.js */ "./src/components/theme/themes.js")
  },
  {
    property: 'savedThemesOrder',
    default: [ ],
  },
  {
    property: 'selectedTheme',
    default: 'Default'
  },
  {
    property: 'headerTemplate',
    title: 'Header',
    actions: [ { title: 'Reset', handler: 'settings.reset("headerTemplate")', mods: '.prevent' } ],
    default: 'repeat-button shuffle-button hover-images-button playlist-button\nsound-title-marquee\nview-menu-button add-button theme-menu-button close-button',
    displayGroup: 'Theme',
    displayMethod: 'textarea',
    themeField: true
  },
  {
    property: 'rowTemplate',
    title: 'Row',
    actions: [ { title: 'Reset', handler: 'settings.reset("rowTemplate")', mods: '.prevent' } ],
    default: 'sound-title h:{menu-button}',
    displayGroup: 'Theme',
    displayMethod: 'textarea',
    themeField: true
  },
  {
    property: 'footerTemplate',
    title: 'Footer',
    actions: [ { title: 'Reset', handler: 'settings.reset("footerTemplate")', mods: '.prevent' } ],
    default: 'playing-button:"sound-index /&nbsp;" sound-count sounds d:{ (+ dead-count dead)} r:{ restore-link:"&nbsp;(removed-count removed)"}\n'
			+ '<div class="fcsp-col"></div>\n'
			+ 'p:{\n'
			+ '		post-link\n'
			+ '		Open [ image-link sound-link ]\n'
			+ '		Download [ dl-image-button dl-sound-button dl-video-button ]\n'
			+ '}\n',
    displayGroup: 'Theme',
    displayMethod: 'textarea',
    attrs: 'rows="10"',
    themeField: true
  },
  {
    property: 'chanXTemplate',
    title: '4chan X Header',
    default: 'p:{\n\tpost-link:"sound-title"\n\tprev-button\n\tplay-button\n\tnext-button\n\tsound-current-time / sound-duration\n}',
    actions: [ { title: 'Reset', handler: 'settings.reset("chanXTemplate")', mods: '.prevent' } ],
    displayGroup: 'Theme',
    displayMethod: 'textarea',
    attrs: 'rows="10"',
    themeField: true
  },
  {
    property: 'customCSS',
    title: 'Custom CSS',
    default: '',
    displayGroup: 'Theme',
    displayMethod: 'textarea',
    attrs: 'rows="10"',
    themeField: true
  }
];


/***/ },

/***/ "./src/globals.js"
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
() {

/**
 * Global variables and helpers.
 */

window.ns = 'fcsp';

window.is4chan = location.hostname.includes('4chan.org') || location.hostname.includes('4channel.org');
window.isChanX = document.documentElement && document.documentElement.classList.contains('fourchan-x');
window.isChanXT = document.documentElement && document.documentElement.classList.contains('fourchan-xt');
window.Board = location.pathname.split('/')[1];
window.Thread = (location.href.match(/\/thread\/(\d+)/) || [])[1];

// Determine what type of site this is. Default to FoolFuuka as the most common archiver.
window.Site = is4chan ? '4chan'
  : ((document.head.querySelector('meta[name="generator"]') || {}).content || '').includes('FoolFuuka') ? 'FoolFuuka'
    : location.hostname.includes('warosu.org') ? 'Fuuka'
      : 'FoolFuuka';

class PlayerError extends Error {
  constructor(msg, type, err) {
    super(msg);
    this.reason = msg;
    this.type = type;
    this.error = err;
  }
}
window.PlayerError = PlayerError;


/***/ },

/***/ "./src/hosts.js"
/*!**********************!*\
  !*** ./src/hosts.js ***!
  \**********************/
(module) {

module.exports = {
  'catbox': {
    filepath: '//files.catbox.moe/',
    decode: false
  },
  'fatbox': {
    filepath: '//files.fatbox.moe/',
    decode: false
  },
  'audio': {
    decode: true
  },
  'sound': {
    decode: true
  },
};

/***/ },

/***/ "./src/icons.js"
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  fcSounds: '<svg width="452" height="257" xmlns="http://www.w3.org/2000/svg"><g><text font-weight="bold" font-style="italic" font-family="Helvetica, Arial, sans-serif" font-size="250" y="197" fill-opacity="0.05" fill="#000000">4sp</text></g></svg>',
  arrowClockwise: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/arrow-clockwise.svg */ "./node_modules/bootstrap-icons/icons/arrow-clockwise.svg")["default"]),
  arrowCounterclockwise: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/arrow-counterclockwise.svg */ "./node_modules/bootstrap-icons/icons/arrow-counterclockwise.svg")["default"]),
  arrowsCollapse: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/arrows-collapse.svg */ "./node_modules/bootstrap-icons/icons/arrows-collapse.svg")["default"]),
  arrowDown: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/arrow-down.svg */ "./node_modules/bootstrap-icons/icons/arrow-down.svg")["default"]),
  arrowsExpand: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/arrows-expand.svg */ "./node_modules/bootstrap-icons/icons/arrows-expand.svg")["default"]),
  arrowRepeat: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/arrow-repeat.svg */ "./node_modules/bootstrap-icons/icons/arrow-repeat.svg")["default"]),
  arrowUp: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/arrow-up.svg */ "./node_modules/bootstrap-icons/icons/arrow-up.svg")["default"]),
  boxArrowInLeft: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/box-arrow-in-left.svg */ "./node_modules/bootstrap-icons/icons/box-arrow-in-left.svg")["default"]),
  boxArrowRight: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/box-arrow-right.svg */ "./node_modules/bootstrap-icons/icons/box-arrow-right.svg")["default"]),
  chatRightQuote: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/chat-right-quote.svg */ "./node_modules/bootstrap-icons/icons/chat-right-quote.svg")["default"]),
  checkSquare: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/check-square.svg */ "./node_modules/bootstrap-icons/icons/check-square.svg")["default"]),
  chevronDown: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/chevron-down.svg */ "./node_modules/bootstrap-icons/icons/chevron-down.svg")["default"]),
  chevronUp: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/chevron-up.svg */ "./node_modules/bootstrap-icons/icons/chevron-up.svg")["default"]),
  close: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/x.svg */ "./node_modules/bootstrap-icons/icons/x.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="2 2 12 12"'),
  gear: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/gear.svg */ "./node_modules/bootstrap-icons/icons/gear.svg")["default"]),
  fileEarmarkImage: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/file-earmark-image.svg */ "./node_modules/bootstrap-icons/icons/file-earmark-image.svg")["default"]),
  fileEarmarkMusic: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/file-earmark-music.svg */ "./node_modules/bootstrap-icons/icons/file-earmark-music.svg")["default"]),
  fileEarmarkPlay: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/file-earmark-play.svg */ "./node_modules/bootstrap-icons/icons/file-earmark-play.svg")["default"]),
  filter: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/filter.svg */ "./node_modules/bootstrap-icons/icons/filter.svg")["default"]),
  fullscreen: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/fullscreen.svg */ "./node_modules/bootstrap-icons/icons/fullscreen.svg")["default"]),
  fullscreenExit: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/fullscreen-exit.svg */ "./node_modules/bootstrap-icons/icons/fullscreen-exit.svg")["default"]),
  github: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/github.svg */ "./node_modules/bootstrap-icons/icons/github.svg")["default"]),
  image: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/image.svg */ "./node_modules/bootstrap-icons/icons/image.svg")["default"]),
  infoCircle: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/info-circle.svg */ "./node_modules/bootstrap-icons/icons/info-circle.svg")["default"]),
  layoutTextWindow: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/layout-text-window.svg */ "./node_modules/bootstrap-icons/icons/layout-text-window.svg")["default"]),
  link: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/link-45deg.svg */ "./node_modules/bootstrap-icons/icons/link-45deg.svg")["default"]),
  musicNoteList: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/music-note-list.svg */ "./node_modules/bootstrap-icons/icons/music-note-list.svg")["default"]),
  play: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/play.svg */ "./node_modules/bootstrap-icons/icons/play.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="2 2 12 12"'),
  playFill: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/play-fill.svg */ "./node_modules/bootstrap-icons/icons/play-fill.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="2 2 12 12"'),
  pause: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/pause.svg */ "./node_modules/bootstrap-icons/icons/pause.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="2 2 12 12"'),
  pauseFill: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/pause-fill.svg */ "./node_modules/bootstrap-icons/icons/pause-fill.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="2 2 12 12"'),
  plus: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/plus-circle.svg */ "./node_modules/bootstrap-icons/icons/plus-circle.svg")["default"]),
  reboot: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/bootstrap-reboot.svg */ "./node_modules/bootstrap-icons/icons/bootstrap-reboot.svg")["default"]),
  search: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/search.svg */ "./node_modules/bootstrap-icons/icons/search.svg")["default"]),
  shuffle: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/shuffle.svg */ "./node_modules/bootstrap-icons/icons/shuffle.svg")["default"]),
  skipEnd: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/skip-end.svg */ "./node_modules/bootstrap-icons/icons/skip-end.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="2 2 12 12"'),
  skipEndFill: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/skip-end-fill.svg */ "./node_modules/bootstrap-icons/icons/skip-end-fill.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="2 2 12 12"'),
  skipStart: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/skip-start.svg */ "./node_modules/bootstrap-icons/icons/skip-start.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="2 2 12 12"'),
  skipStartFill: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/skip-start-fill.svg */ "./node_modules/bootstrap-icons/icons/skip-start-fill.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="2 2 12 12"'),
  soundwave: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/soundwave.svg */ "./node_modules/bootstrap-icons/icons/soundwave.svg")["default"]),
  speaker: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/speaker.svg */ "./node_modules/bootstrap-icons/icons/speaker.svg")["default"]),
  square: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/square.svg */ "./node_modules/bootstrap-icons/icons/square.svg")["default"]),
  tools: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/tools.svg */ "./node_modules/bootstrap-icons/icons/tools.svg")["default"]),
  trash: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/trash.svg */ "./node_modules/bootstrap-icons/icons/trash.svg")["default"]),
  volumeMute: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/volume-mute.svg */ "./node_modules/bootstrap-icons/icons/volume-mute.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="1 1 14 14"'),
  volumeMuteFill: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/volume-mute-fill.svg */ "./node_modules/bootstrap-icons/icons/volume-mute-fill.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="1 1 14 14"'),
  volumeUp: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/volume-up.svg */ "./node_modules/bootstrap-icons/icons/volume-up.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="1 1 14 14"'),
  volumeUpFill: (__webpack_require__(/*! ../node_modules/bootstrap-icons/icons/volume-up-fill.svg */ "./node_modules/bootstrap-icons/icons/volume-up-fill.svg")["default"]).replace(/viewBox="[^"]+"/, 'viewBox="1 1 14 14"')
};


/***/ },

/***/ "./src/migrations.js"
/*!***************************!*\
  !*** ./src/migrations.js ***!
  \***************************/
(module) {

// Migrations must return { [prop]: [ previous, updated ], ... }
module.exports = [
  {
    version: '3.0.0',
    name: 'hosts-filename-length',
    async run() {
      const defaultHosts = Player.settings.findDefault('uploadHosts').default;
      Object.keys(defaultHosts).forEach(host => {
        // A removed built-in host is stored as null.
        Player.config.uploadHosts[host] && (Player.config.uploadHosts[host].filenameLength = defaultHosts[host].filenameLength);
      });
      return {};
    }
  },
  {
    version: '3.3.0',
    name: 'sound-name-title-swap',
    async run() {
      const config = Player.config;
      const changes = {};
      const templates = [ 'headerTemplate', 'rowTemplate', 'footerTemplate', 'chanXTemplate', 'customCSS' ];
      templates.forEach(prop => {
        /sound-name/.test(config[prop]) && (changes[prop] = [
          config[prop],
          config[prop] = config[prop].replace(/sound-name/g, 'sound-title')
        ]);
      });
      return changes;
    }
  },
  {
    version: '3.4.0',
    name: 'disable-inline-player-for-existing-users',
    async run() {
      Player.config.playExpandedImages = false;
      Player.config.playHoveredImages = false;
      return {
        playExpandedImages: [ true, false ],
        playHoveredImages: [ true, false ]
      };
    }
  },
  {
    version: '3.4.7',
    name: 'zz-ht-to-zz-fo',
    async run() {
      // Idempotency check: under the new compareVersions semantics a user
      // stored at '3.4.7-prerelease' would now satisfy `< '3.4.7'` and re-run
      // this migration on every release after the prerelease, duplicating
      // 'zz.fo' each time. Skip if already present.
      if (Array.isArray(Player.config.allow)
          && Player.config.allow.some(h => typeof h === 'string' && h.toLowerCase() === 'zz.fo')) {
        return {};
      }
      const original = [ ...Player.config.allow ];
      Player.config.allow.push('zz.fo');
      return {
        allow: [ original, Player.config.allow ]
      };
    }
  },
  {
    version: '3.6.3',
    name: 'add-fatbox-to-allow',
    async run() {
      // Defend against stored allow being corrupted (e.g. malformed import).
      // Preserve any salvageable entries rather than reset wholesale.
      let preSalvageOriginal = null;
      if (!Array.isArray(Player.config.allow)) {
        preSalvageOriginal = Player.config.allow;
        const salvaged = [];
        const raw = Player.config.allow;
        if (typeof raw === 'string') {
          // Textarea-serialized form: newline-separated hosts.
          raw.split('\n').map(s => s.trim()).filter(Boolean).forEach(h => salvaged.push(h));
        } else if (raw && typeof raw === 'object') {
          // Object/array-like: pull out any string values.
          Object.values(raw).filter(v => typeof v === 'string' && v).forEach(h => salvaged.push(h));
        }
        // Merge with defaults so previously-default hosts are restored if missing.
        // Dedup case-insensitively since disallowedSound lowercases the hostname anyway.
        // Hard-coded fallback prevents a future settings-config rename / load-order
        // regression from silently collapsing the user's allow list to just
        // ['fatbox.moe'] (which would happen if findDefault returned the empty
        // {property} stub and salvage produced []).
        const defaultSetting = Player.settings.findDefault('allow');
        const defaults = (defaultSetting && Array.isArray(defaultSetting.default))
          ? defaultSetting.default
          : [ '4cdn.org', 'catbox.moe', 'fatbox.moe', 'dmca.gripe', 'lewd.se', 'pomf.cat', 'zz.ht', 'zz.fo' ];
        const seen = new Set();
        const merged = [];
        [ ...defaults, ...salvaged ].forEach(h => {
          // typeof guard — defaults comes from settings config (which today is
          // strings only) but a future regression that lets a non-string slip
          // in would otherwise throw h.toLowerCase(), get swallowed by the
          // migrate catch, and leave fatbox.moe missing from allow.
          if (typeof h !== 'string') return;
          const key = h.toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            merged.push(h);
          }
        });
        Player.config.allow = merged;
      }
      // Case-insensitive check since disallowedSound lowercases hostnames anyway.
      // typeof guard matches the 3.4.7 zz-ht-to-zz-fo dedup — a non-string entry
      // (null/number from a malformed import) would otherwise throw and the
      // settings.migrate catch swallows the error, leaving fatbox.moe missing.
      const alreadyHadFatbox = Player.config.allow.some(h => typeof h === 'string' && h.toLowerCase() === 'fatbox.moe');
      if (!alreadyHadFatbox) {
        Player.config.allow.push('fatbox.moe');
      }
      // Report the change if EITHER we salvaged a corrupted value OR we appended
      // 'fatbox.moe'. The reporting drives 'config:allow' event emission downstream.
      if (preSalvageOriginal !== null) {
        return { allow: [ preSalvageOriginal, Player.config.allow ] };
      }
      if (!alreadyHadFatbox) {
        const original = Player.config.allow.slice(0, -1);
        return { allow: [ original, Player.config.allow ] };
      }
      return {};
    }
  },
  {
    version: '3.7.0',
    name: 'add-download-video-to-footer',
    async run() {
      // Insert the combined-video download button into the existing image+sound
      // download group of the user's footer, wherever that group appears.
      const tpl = Player.config.footerTemplate;
      if (typeof tpl !== 'string'
          || tpl.includes('dl-video-button')
          || !tpl.includes('dl-image-button dl-sound-button')) {
        return {};
      }
      const updated = tpl.replace('dl-image-button dl-sound-button', 'dl-image-button dl-sound-button dl-video-button');
      Player.config.footerTemplate = updated;
      return { footerTemplate: [ tpl, updated ] };
    }
  }
];


/***/ },

/***/ "./src/player.js"
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
const components = {
  // Settings must be first.
  settings: __webpack_require__(/*! ./components/settings */ "./src/components/settings/index.js"),
  events: __webpack_require__(/*! ./components/events */ "./src/components/events/index.js"),
  actions: __webpack_require__(/*! ./components/actions */ "./src/components/actions/index.js"),
  colorpicker: __webpack_require__(/*! ./components/settings/colorpicker */ "./src/components/settings/colorpicker.js"),
  controls: __webpack_require__(/*! ./components/controls */ "./src/components/controls/index.js"),
  display: __webpack_require__(/*! ./components/display */ "./src/components/display/index.js"),
  footer: __webpack_require__(/*! ./components/footer */ "./src/components/footer/index.js"),
  header: __webpack_require__(/*! ./components/header */ "./src/components/header/index.js"),
  hotkeys: __webpack_require__(/*! ./components/hotkeys */ "./src/components/hotkeys/index.js"),
  inline: __webpack_require__(/*! ./components/inline */ "./src/components/inline/index.js"),
  minimised: __webpack_require__(/*! ./components/minimised */ "./src/components/minimised/index.js"),
  playlist: __webpack_require__(/*! ./components/playlist */ "./src/components/playlist/index.js"),
  position: __webpack_require__(/*! ./components/position */ "./src/components/position/index.js"),
  posts: __webpack_require__(/*! ./components/posts */ "./src/components/posts/index.js"),
  theme: __webpack_require__(/*! ./components/theme */ "./src/components/theme/index.js"),
  threads: __webpack_require__(/*! ./components/threads */ "./src/components/threads/index.js"),
  tools: __webpack_require__(/*! ./components/tools */ "./src/components/tools/index.js"),
  userTemplate: __webpack_require__(/*! ./components/user-template */ "./src/components/user-template/index.js"),
};

// Create a global ref to the player.
const Player =
  (window.Player =
  module.exports =
    {
      ns,

      // Store a ref to the components so they can be iterated.
      components,

      audio: new Audio(),
      sounds: [],
      filteredSounds: [],
      isHidden: true,
      container: null,
      ui: {},
      _public: [],

      // Build the config from the default
      config: {},

      // Helper function to query elements in the player.
      $: (...args) =>
        Player.container && Player.container.querySelector(...args),
      $all: (...args) =>
        Player.container && Player.container.querySelectorAll(...args),

      /**
       * Set up the player.
       */
      async initialize() {
        if (Player.initialized) {
          return;
        }
        Player.initialized = true;
        try {
          Player.audio.dataset.id = 'main';
          Player.sounds = [];
          // Run the initialisation for each component.
          // Settings must be first.
          if (components.settings.initialize) {
            await components.settings.initialize();
          }
          const initPromises = Object.keys(components)
            .filter(
              (name) => name !== 'settings' && components[name].initialize,
            )
            .map((name) => components[name].initialize());
          await Promise.all(initPromises);

          // Show a button to open the player.
          await Player.display.createPlayerButton();

          // Render the player, but not neccessarily show it.
          await Player.display.render();

          // Expose some functionality via PlayerEvent custom events. Any script on the page
          // can send these, so only the public actions (in every build: the development
          // bypass exposed every function), and settings changes go through the restricted
          // versions: a template set this way runs its handlers with the userscript's
          // privileges (cross-site requests with the user's cookies).
          const restricted = {
            set: Player.settings.setPublic,
            'settings.load': Player.settings.loadPublic,
            'settings.reset': Player.settings.resetPublic
          };
          document.addEventListener('PlayerEvent', (e) => {
            const action = e.detail && e.detail.action;
            if (action && Player._public.includes(action)) {
              return (restricted[action] || _.get(Player, action)).apply(
                window,
                [].concat(e.detail.arguments || []),
              );
            }
          });
        } catch (err) {
          Player.logError(
            'There was an error initializing the sound player. Please check the console for details.',
            err,
          );
          // Can't recover so throw this error.
          throw err;
        }
      },

      /**
       * Returns the function of Player referenced by name or a given handler function.
       * @param {String|Function} handler Name to function on Player or a handler function.
       */
      getHandler(handler) {
        return typeof handler === 'string' ? _.get(Player, handler) : handler;
      },

      /**
       * Compare two ids for sorting.
       */
      compareIds(a, b) {
        const [aPID, aSID] = a.split(':');
        const [bPID, bSID] = b.split(':');
        // Local files ("local3") have no post number: sort them after the thread's posts,
        // in the order they were added. Subtracting them gave NaN, which made the sort
        // inconsistent and left a shuffled order in place.
        const aLocal = /^local/.test(aPID);
        const bLocal = /^local/.test(bPID);
        if (aLocal !== bLocal) {
          return aLocal ? 1 : -1;
        }
        const postDiff = aLocal
          ? aPID.localeCompare(bPID, undefined, { numeric: true })
          : (parseFloat(aPID) - parseFloat(bPID)) || aPID.localeCompare(bPID, undefined, { numeric: true });
        return postDiff !== 0 ? postDiff : aSID - bSID;
      },

      /**
       * Invoke a callback for every sound in both Player.sounds and Player.filteredSounds.
       * Takes a JOINT snapshot before iterating either array — so a callback that moves
       * a sound from sounds → filteredSounds (or vice versa) doesn't see it twice.
       */
      allSounds(fn) {
        const snapshot = Player.sounds.concat(Player.filteredSounds);
        snapshot.forEach(fn);
      },

      /**
       * Check whether a sound src and image are allowed and not filtered.
       * Filters are matched against BOTH the live src and the original pre-reroute src
       * (_origSrc), so a filter added while the rerouter was on stays effective when it's
       * off, and vice versa.
       */
      disallowedSound({ src, imageMD5, _origSrc }) {
        try {
          const link = new URL(src);
          const stripped = src.replace(/^(https?:)?\/\//, '');
          const origStripped = (typeof _origSrc === 'string' && _origSrc !== src)
            ? _origSrc.replace(/^(https?:)?\/\//, '')
            : null;
          const host = link.hostname.toLowerCase();
          // No hostname (blob:, data:, about:) can't be checked against the allow list;
          // only local files have those, and they skip this check.
          if (!host) {
            return { invalid: true };
          }
          const result = {};
          result.host =
            !Player.config.allow.find(
              // Hostnames are case-insensitive; `host` is already lowercased, so
              // lowercase the allow entry too or a user-typed `Catbox.moe` never matches.
              // Skip non-string entries (a corrupt config / cross-tab write) rather than
              // throwing inside .find and invalidating the sound on the first bad entry.
              (h) => {
                if (typeof h !== 'string') return false;
                const hl = h.toLowerCase();
                return host === hl || host.endsWith('.' + hl);
              },
            ) && host;
          for (let filter of Player.config.filters) {
            // Parity with the allow loop above: skip a non-string entry (corrupt config
            // / cross-tab write) rather than throwing on filter.replace and invalidating
            // the sound.
            if (typeof filter !== 'string') continue;
            result.image = result.image || (filter === imageMD5 && imageMD5);
            const filterStripped = filter.replace(/^(https?:)?\/\//, '');
            result.sound = result.sound
              || (filterStripped === stripped && stripped)
              || (origStripped && filterStripped === origStripped && origStripped);
            if (result.image && result.sound) {
              break;
            }
          }
          return result.host || result.image || result.sound ? result : false;
        } catch (err) {
          return { invalid: true };
        }
      },

      /**
       * Listen for changes
       */
      syncTab: (property, callback) =>
        typeof GM_addValueChangeListener !== 'undefined' &&
        GM_addValueChangeListener(
          property,
          (_prop, oldValue, newValue, remote) => {
            remote && callback(newValue, oldValue);
          },
        ),

      /**
       * Log errors and show an error notification.
       */
      logError(message, error, type) {
        console.error('[4chan sounds player]', message, error);
        if (error instanceof PlayerError) {
          error.error && console.error('[4chan sound player]', error.error);
          // Reasons are plain text that can include file or sound names; alerts are HTML.
          message = _.escHTML(error.reason);
          type = error.type || type;
        }
        Player.alert(message, type || 'error', 5);
      },

      /**
       * Show a notification using 4chan X or the native extention.
       */
      alert(content, type = 'info', lifetime = 5) {
        if (isChanX) {
          // Send plain text: an Element in the detail doesn't survive the trip between
          // separate script sandboxes (or 4chan X's extension build), so the notice never
          // appeared there. 4chan X renders string content as text.
          // Parsed in a <template>, which is inert: _.element would also wire up @event
          // attributes and let images load.
          const parsed = document.createElement('template');
          parsed.innerHTML = content;
          const detail = { content: parsed.content.textContent, type, lifetime };
          document.dispatchEvent(
            new CustomEvent('CreateNotification', {
              bubbles: true,
              detail: typeof cloneInto === 'function' ? cloneInto(detail, document.defaultView) : detail,
            }),
          );
        } else if (typeof Feedback !== 'undefined') {
          Feedback.showMessage(
            content,
            type === 'info' ? 'notify' : 'error',
            lifetime * 1000,
          );
        } else {
          // The archives have neither: show a notice of our own (as text, like 4chan X).
          const parsed = document.createElement('template');
          parsed.innerHTML = content;
          // In a column, so several at once don't cover each other.
          const column = document.querySelector(`.${ns}-notices`) || _.element(`<div class="${ns}-notices"></div>`, document.body);
          const notice = _.element(`<div class="${ns}-notice ${ns}-notice-${_.escAttr(type)}" role="status"></div>`, column);
          notice.textContent = parsed.content.textContent;
          const close = () => notice.remove();
          notice.addEventListener('click', close);
          setTimeout(close, lifetime * 1000);
        }
      },
    });

// Add each of the components to the player.
for (let name in components) {
  Player[name] = components[name];
  (Player[name].atRoot || []).forEach((k) => (Player[k] = Player[name][k]));
  (Player[name].public || []).forEach((k) => {
    Player._public.push(
      (Player[name].atRoot || []).includes(k) ? k : `${name}.${k}`,
    );
  });
}


/***/ },

/***/ "./src/scss/4chan-x-polyfill.scss"
/*!****************************************!*\
  !*** ./src/scss/4chan-x-polyfill.scss ***!
  \****************************************/
(module) {

module.exports = (data = {}) => `.dialog {
  background: var(--fcsp-background);
  background: var(--fcsp-background);
  border-color: var(--fcsp-border);
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding-top: 1px;
  padding-bottom: 3px;
}

.entry {
  position: relative;
  display: block;
  padding: 0.125rem 0.5rem;
  min-width: 70px;
  white-space: nowrap;
}
.entry.has-submenu::after {
  content: "";
  border-left: 0.5em solid;
  border-top: 0.3em solid transparent;
  border-bottom: 0.3em solid transparent;
  display: inline-block;
  margin: 0.35em;
  position: absolute;
  right: 3px;
}
.entry.focused {
  background: rgba(255, 255, 255, 0.33);
}
.entry.focused > .submenu {
  display: block;
}

.submenu {
  position: absolute;
  display: none;
}`

/***/ },

/***/ "./src/scss/root.scss"
/*!****************************!*\
  !*** ./src/scss/root.scss ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var _ = __webpack_require__(/*! ./src/_ */ "./src/_.js");
module.exports = (data = {}) => `:root {
  --fcsp-text: ${Player.config.colors.text};
  --fcsp-background: ${Player.config.colors.background};
  --fcsp-border: ${Player.config.colors.border};
  --fcsp-odd-row: ${Player.config.colors.odd_row};
  --fcsp-even-row: ${Player.config.colors.even_row};
  --fcsp-playing: ${Player.config.colors.playing};
  --fcsp-dragging: ${Player.config.colors.dragging};
  --fcsp-controls-background: ${Player.config.colors.controls_background};
  --fcsp-controls-active: ${Player.config.colors.controls_active};
  --fcsp-controls-inactive: ${Player.config.colors.controls_inactive};
  --fcsp-controls-empty-bar: ${Player.config.colors.controls_empty_bar};
  --fcsp-controls-loaded-bar: ${Player.config.colors.controls_loaded_bar};
  --fcsp-loading-video: ${Player.config.colors.loading_video};
  --fcsp-loading-audio: ${Player.config.colors.loading_audio};
  --fcsp-muted: #909090;
  --fcsp-max-pip-size: ${_.cssLength(Player.config.maxPIPWidth)};
}`

/***/ },

/***/ "./src/scss/style.scss"
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
(module) {

module.exports = (data = {}) => `.${ns}-colorpicker {
  position: fixed;
  padding: 0.25rem;
  white-space: nowrap;
  z-index: 999;
  max-width: calc(100vw - .5rem);
  box-sizing: border-box;
  overflow-x: auto;
}
.${ns}-colorpicker input.${ns}-rgb-input {
  width: 2.5rem !important;
  min-width: 0 !important;
  box-sizing: border-box;
}
.${ns}-colorpicker .${ns}-cp-saturation {
  display: inline-block;
  position: relative;
}
.${ns}-colorpicker .${ns}-cp-saturation .position {
  width: 5px;
}
.${ns}-colorpicker .${ns}-cp-saturation::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  background: black;
  -webkit-mask-image: linear-gradient(#0000, #000);
  mask-image: linear-gradient(#0000, #000);
}
.${ns}-colorpicker .${ns}-cp-hue {
  margin-left: 0.5rem;
  display: inline-block;
  position: relative;
  width: 30px;
  background: linear-gradient(to bottom, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00);
}
.${ns}-colorpicker .${ns}-cp-hue .position {
  top: -3px;
  left: -1px;
  right: -1px;
}
.${ns}-colorpicker .${ns}-cp-saturation .position, .${ns}-colorpicker .${ns}-cp-hue .position {
  position: absolute;
  height: 5px;
  border-radius: 1rem;
}
.${ns}-colorpicker .${ns}-output {
  vertical-align: top;
  margin-left: 1rem;
  display: inline-block;
}
.${ns}-colorpicker .${ns}-output .${ns}-rgb-input {
  width: 2rem;
}
.${ns}-colorpicker .${ns}-output .output-color {
  height: 40px;
  margin: 0.25rem 0;
}

.${ns}-cp-preview, .${ns}-cp-saturation .position, .${ns}-cp-hue .position, .${ns}-output .output-color {
  border: solid 1px black;
  box-shadow: inset 0 0 0 1px #EEE;
}

.${ns}-cp-preview {
  height: 1em;
  width: 1em;
  margin-left: 0.125rem;
}

.${ns}-text-muted {
  color: var(--fcsp-muted);
}

.${ns}-controls {
  align-items: center;
  padding: 0.5rem 0;
  position: relative;
  background: var(--fcsp-controls-background);
  justify-content: space-between;
}
.${ns}-controls > div {
  margin: 0 0.5rem;
}
.${ns}-controls .${ns}-current-time {
  color: var(--fcsp-controls-inactive);
}
.${ns}-controls .${ns}-media-control {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  color: var(--fcsp-controls-inactive);
}
.${ns}-controls .${ns}-media-control.disabled {
  cursor: inherit;
  filter: brightness(0.5) grayscale(1);
}
.${ns}-controls .${ns}-media-control:hover:not(.disabled) {
  color: var(--fcsp-controls-active);
}

.${ns}-media-control {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.${ns}-media-control.${ns}-hover-fill svg[class$=-fill], .${ns}-media-control.${ns}-hover-fill svg[class*="-fill "] {
  display: none;
}
.${ns}-media-control.${ns}-hover-fill:hover:not(.disabled) svg {
  display: none;
}
.${ns}-media-control.${ns}-hover-fill:hover:not(.disabled) svg[class$=-fill], .${ns}-media-control.${ns}-hover-fill:hover:not(.disabled) svg[class*="-fill "] {
  display: block;
}
.${ns}-media-control.${ns}-play-button:not(.${ns}-play) svg.bi-play-fill, .${ns}-media-control.${ns}-play-button:not(.${ns}-play) svg.bi-play {
  display: none !important;
}
.${ns}-media-control.${ns}-play-button.${ns}-play svg.bi-pause-fill, .${ns}-media-control.${ns}-play-button.${ns}-play svg.bi-pause {
  display: none !important;
}
.${ns}-media-control.${ns}-fullscreen-button svg.bi-fullscreen-exit {
  display: none;
}
#${ns}-container[data-view-style=fullscreen] .${ns}-media-control.${ns}-fullscreen-button svg.bi-fullscreen-exit {
  display: block;
}
#${ns}-container[data-view-style=fullscreen] .${ns}-media-control.${ns}-fullscreen-button svg.bi-fullscreen {
  display: none;
}
.${ns}-media-control.${ns}-volume-button.mute .bi:not(.bi-volume-mute):not(.bi-volume-mute-fill) {
  display: none;
}
.${ns}-media-control.${ns}-volume-button.up .bi:not(.bi-volume-up):not(.bi-volume-up-fill) {
  display: none;
}

.${ns}-progress-bar {
  min-width: 3.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
}
.${ns}-progress-bar:hover .${ns}-current-bar:after {
  background: var(--fcsp-controls-active);
}

.${ns}-full-bar {
  height: 0.3rem;
  width: 100%;
  background: var(--fcsp-controls-empty-bar);
  border-radius: 1rem;
  position: relative;
}
.${ns}-full-bar > div {
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 1rem;
}
.${ns}-full-bar .${ns}-loaded-bar {
  background: var(--fcsp-controls-loaded-bar);
}
.${ns}-full-bar .${ns}-current-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.${ns}-full-bar .${ns}-current-bar:after {
  content: "";
  background: var(--fcsp-controls-inactive);
  height: 0.8rem;
  min-width: 0.8rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.76) 0 0 3px 0;
  margin-right: -0.4rem;
}

.${ns}-seek-bar .${ns}-current-bar {
  background: var(--fcsp-controls-active);
}

.${ns}-volume-bar .${ns}-current-bar {
  background: var(--fcsp-controls-inactive);
}

.${ns}-chan-x-controls .${ns}-current-time, .${ns}-chan-x-controls .${ns}-duration {
  margin: 0 0.25rem;
}

.${ns}-download-video-button.${ns}-processing {
  pointer-events: none;
  position: relative;
}
.${ns}-download-video-button.${ns}-processing svg {
  visibility: hidden;
}
.${ns}-download-video-button.${ns}-processing::after {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  border: 0.125rem solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${ns}-spin 0.7s linear infinite;
}
.${ns}-download-video-button.${ns}-processing[data-progress]::after {
  border: 0;
  animation: none;
  background: conic-gradient(currentColor calc(var(--fcsp-vid-progress, 0) * 1%), transparent 0);
  -webkit-mask: radial-gradient(circle, transparent 54%, #000 56%);
  mask: radial-gradient(circle, transparent 54%, #000 56%);
}

@keyframes ${ns}-spin {
  to {
    transform: rotate(360deg);
  }
}
.${ns}-header, .${ns}-footer {
  text-align: center;
  padding: 0.125rem;
  max-width: 100%;
  line-height: 1rem;
}
.${ns}-header .${ns}-expander, .${ns}-footer .${ns}-expander {
  opacity: 0;
  position: absolute;
  bottom: -0.25rem;
  right: -0.25rem;
  height: 0.75rem;
  width: 0.75rem;
  cursor: se-resize;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, var(--fcsp-border) 55%, var(--fcsp-border) 100%);
}
.${ns}-header .${ns}-expander[data-direction=sw], .${ns}-footer .${ns}-expander[data-direction=sw] {
  left: -0.25rem;
  right: auto;
  transform: rotate(90deg);
  cursor: sw-resize;
}
.${ns}-header .${ns}-expander[data-direction=nw], .${ns}-footer .${ns}-expander[data-direction=nw] {
  left: -0.25rem;
  top: -0.25rem;
  right: auto;
  bottom: auto;
  transform: rotate(180deg);
  cursor: nw-resize;
}
.${ns}-header .${ns}-expander[data-direction=ne], .${ns}-footer .${ns}-expander[data-direction=ne] {
  right: -0.25rem;
  top: -0.25rem;
  bottom: auto;
  transform: rotate(270deg);
  cursor: ne-resize;
}

.${ns}-header {
  cursor: grab;
  border-bottom: solid 1px var(--fcsp-border);
}

.${ns}-footer {
  cursor: grab;
  border-top: solid 1px var(--fcsp-border);
}

.${ns}-title-marquee {
  transition: margin-left 1s linear;
}

.${ns}-menu svg.bi {
  margin: 0 -0.25rem 0 0.25rem;
}

.${ns}-header svg.bi, .${ns}-footer svg.bi {
  margin: 0 0.125rem;
}

.muted svg.bi {
  opacity: 0.45;
}

svg.bi {
  overflow: visible;
  height: 1em;
  width: 1em;
}

.fileText svg.bi {
  vertical-align: text-bottom;
}

.${ns}-image-link {
  text-align: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.${ns}-image-link.${ns}-show-video .${ns}-video {
  display: block;
}
.${ns}-image-link.${ns}-show-video .${ns}-image {
  display: none;
}
.${ns}-image-link.${ns}-pip {
  position: fixed;
  right: 10px;
  align-items: end;
}
.${ns}-image-link.${ns}-pip .${ns}-image, .${ns}-image-link.${ns}-pip .${ns}-video {
  width: auto;
  height: auto;
  max-height: var(--fcsp-max-pip-size);
  max-width: var(--fcsp-max-pip-size);
  object-fit: contain;
}
.${ns}-image-link.${ns}-pip .${ns}-image-transparent-bg, .${ns}-image-link.${ns}-pip .${ns}-background-image {
  display: none;
}
.${ns}-image-link .${ns}-video {
  display: none;
}
.${ns}-image-link .${ns}-image, .${ns}-image-link .${ns}-video {
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: 1;
}
.${ns}-image-link .${ns}-background-image {
  position: absolute;
  top: -20px;
  bottom: -20px;
  left: -20px;
  right: -20px;
  object-fit: cover;
  object-position: center;
  height: calc(100% + 40px);
  width: calc(100% + 40px);
  filter: blur(10px) brightness(0.7) saturate(0.5) contrast(0.7);
  z-index: -1;
}
.${ns}-image-link .${ns}-background-image:not([src]) {
  display: none;
}
.${ns}-image-link .${ns}-image-transparent-bg {
  background-color: var(--fcsp-background);
  position: absolute;
}
.untz .${ns}-image-link {
  transition: all 0.1s linear;
}

#${ns}-container[data-view-style=fullscreen].playing-video .${ns}-background-image {
  display: none;
}
#${ns}-container[data-view-style=fullscreen].playing-video .${ns}-image-link, #${ns}-container[data-view-style=fullscreen] .${ns}-image-transparent-bg {
  background: black;
}

#${ns}-container.playing-video .${ns}-image-transparent-bg {
  display: none;
}

.image-color-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 255, 0, 0.5);
  transition: all 0.5s linear;
  display: none;
}
.untz .image-color-overlay {
  display: block;
}

.${ns}-has-controls {
  position: relative;
}
.${ns}-has-controls .${ns}-controls {
  cursor: auto;
  flex-wrap: nowrap;
  overflow: hidden;
  min-width: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.${ns}-has-controls:not(:hover) .${ns}-controls {
  display: none;
}
html:not(.fourchan-x) .${ns}-has-controls > video + .${ns}-controls {
  left: 20px;
  right: 20px;
}

#${ns}-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  background: var(--fcsp-background);
  color: var(--fcsp-text);
  border: 1px solid var(--fcsp-border);
  box-sizing: border-box;
  min-width: 7rem;
  line-height: 1rem;
}
#${ns}-container .w-100 {
  width: 100%;
  min-width: 100%;
}
#${ns}-container input[type=text], #${ns}-container input[type=number], #${ns}-container select, #${ns}-container .${ns}-file-overlay {
  background: white !important;
  color: black !important;
  height: 1.5rem !important;
  padding: 2px 4px 3px;
  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  border: solid 1px var(--fcsp-border);
  padding: 0 0.25rem;
}
#${ns}-container .m-0 {
  margin: 0;
}
#${ns}-container .mx-0 {
  margin-right: 0;
  margin-left: 0;
}
#${ns}-container .my-0 {
  margin-top: 0;
  margin-bottom: 0;
}
#${ns}-container .mr-0 {
  margin-right: 0;
}
#${ns}-container .ml-0 {
  margin-left: 0;
}
#${ns}-container .mt-0 {
  margin-top: 0;
}
#${ns}-container .mb-0 {
  margin-bottom: 0;
}
#${ns}-container .m-1 {
  margin: 0.125rem;
}
#${ns}-container .mx-1 {
  margin-right: 0.125rem;
  margin-left: 0.125rem;
}
#${ns}-container .my-1 {
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}
#${ns}-container .mr-1 {
  margin-right: 0.125rem;
}
#${ns}-container .ml-1 {
  margin-left: 0.125rem;
}
#${ns}-container .mt-1 {
  margin-top: 0.125rem;
}
#${ns}-container .mb-1 {
  margin-bottom: 0.125rem;
}
#${ns}-container .m-2 {
  margin: 0.25rem;
}
#${ns}-container .mx-2 {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}
#${ns}-container .my-2 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
#${ns}-container .mr-2 {
  margin-right: 0.25rem;
}
#${ns}-container .ml-2 {
  margin-left: 0.25rem;
}
#${ns}-container .mt-2 {
  margin-top: 0.25rem;
}
#${ns}-container .mb-2 {
  margin-bottom: 0.25rem;
}
#${ns}-container .m-3 {
  margin: 0.375rem;
}
#${ns}-container .mx-3 {
  margin-right: 0.375rem;
  margin-left: 0.375rem;
}
#${ns}-container .my-3 {
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
}
#${ns}-container .mr-3 {
  margin-right: 0.375rem;
}
#${ns}-container .ml-3 {
  margin-left: 0.375rem;
}
#${ns}-container .mt-3 {
  margin-top: 0.375rem;
}
#${ns}-container .mb-3 {
  margin-bottom: 0.375rem;
}
#${ns}-container .m-4 {
  margin: 0.5rem;
}
#${ns}-container .mx-4 {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
#${ns}-container .my-4 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
#${ns}-container .mr-4 {
  margin-right: 0.5rem;
}
#${ns}-container .ml-4 {
  margin-left: 0.5rem;
}
#${ns}-container .mt-4 {
  margin-top: 0.5rem;
}
#${ns}-container .mb-4 {
  margin-bottom: 0.5rem;
}
#${ns}-container .m-5 {
  margin: 1rem;
}
#${ns}-container .mx-5 {
  margin-right: 1rem;
  margin-left: 1rem;
}
#${ns}-container .my-5 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
#${ns}-container .mr-5 {
  margin-right: 1rem;
}
#${ns}-container .ml-5 {
  margin-left: 1rem;
}
#${ns}-container .mt-5 {
  margin-top: 1rem;
}
#${ns}-container .mb-5 {
  margin-bottom: 1rem;
}
#${ns}-container .pointer {
  cursor: pointer;
}

.${ns}-panel {
  padding: 0 0.25rem;
  height: 100%;
  width: calc(100% - .5rem);
  overflow: auto;
}

.${ns}-heading {
  font-weight: 600;
  margin: 0.5rem 0;
}
.${ns}-heading.lined {
  border-bottom: solid 1px var(--fcsp-border);
}
.${ns}-heading.lined .${ns}-heading-action {
  text-decoration: none;
}

.${ns}-heading-action {
  font-weight: normal;
  text-decoration: underline;
  display: inline-flex;
}

.${ns}-row {
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  box-sizing: border-box;
}
.${ns}-row.nowrap {
  flex-wrap: nowrap;
}

.${ns}-col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
  display: inline-flex;
}

.${ns}-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  position: relative;
}

.${ns}-hover-display {
  display: none;
}

.${ns}-hover-trigger:hover .${ns}-hover-display {
  display: flex;
}

.no-touch-action {
  touch-action: none;
}

.${ns}-truncate-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.${ns}-align-center {
  align-items: center;
  align-content: center;
  align-self: center;
}

.${ns}-align-start {
  align-items: start;
  align-content: start;
  align-self: start;
}

.${ns}-space-between {
  justify-content: space-between;
}

.${ns}-menu {
  z-index: 15;
}

.${ns}-launcher {
  position: fixed;
  left: 10px;
  bottom: 10px;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--fcsp-background);
  color: var(--fcsp-text);
  border: 1px solid var(--fcsp-border);
  opacity: 0.6;
}
.${ns}-launcher:hover {
  opacity: 1;
}

.${ns}-notices {
  position: fixed;
  left: 3.5rem;
  bottom: 10px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 25rem;
}

.${ns}-notice {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--fcsp-border);
  border-left-width: 0.25rem;
  border-radius: 0.25rem;
  background: var(--fcsp-background);
  color: var(--fcsp-text);
  cursor: pointer;
}
.${ns}-notice.${ns}-notice-warning {
  border-left-color: #e0a800;
}
.${ns}-notice.${ns}-notice-error {
  border-left-color: #d9534f;
}

.${ns}-player {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
}
.${ns}-player .${ns}-hover-image {
  position: fixed;
  max-height: 125px;
  max-width: 125px;
  z-index: 2;
}
.${ns}-player.${ns}-hide-hover-image .${ns}-hover-image {
  display: none !important;
}

.${ns}-under-image {
  flex-grow: 1;
  overflow: auto;
}

.${ns}-list-item {
  list-style-type: none;
  padding: 0.15rem 0.25rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  background: var(--fcsp-odd-row);
  overflow: hidden;
  height: 1.3rem;
  position: relative;
  isolation: isolate;
}
.${ns}-list-item:nth-child(2n) {
  background: var(--fcsp-even-row);
}
.${ns}-list-item:nth-child(n).playing {
  background: var(--fcsp-playing);
}
.${ns}-list-item .${ns}-item-menu-button {
  right: 0.25rem;
}
.${ns}-list-item.${ns}-dragging {
  background: var(--fcsp-dragging);
}
.${ns}-list-item.${ns}-dead {
  opacity: 0.5;
  text-decoration: line-through;
}
.${ns}-list-item.${ns}-dead .${ns}-row-loading {
  display: none;
}

.${ns}-row-loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
  transition: opacity 0.6s ease 0.8s;
}
.${ns}-row-loading > div {
  position: absolute;
  left: 0;
  height: 2px;
  max-width: 100%;
  transition: width 0.3s linear;
}
.${ns}-row-loading .${ns}-row-loading-video {
  top: 0;
  background: var(--fcsp-loading-video);
}
.${ns}-row-loading .${ns}-row-loading-audio {
  bottom: 0;
  background: var(--fcsp-loading-audio);
}
.${ns}-row-loading .${ns}-row-loading-hidden {
  display: none;
}
.${ns}-row-loading.${ns}-row-loaded {
  opacity: 0;
}

.dialog .tags-dialog .entry {
  cursor: initial;
}

.${ns}-settings textarea {
  border: solid 1px var(--fcsp-border);
  min-width: 100%;
  min-height: 4rem;
  box-sizing: border-box;
  white-space: pre;
}
.${ns}-settings .${ns}-sub-settings .${ns}-heading {
  font-weight: normal;
  margin: 0;
  justify-content: space-between;
}
.${ns}-settings .${ns}-sub-settings .${ns}-col {
  min-height: 1.55rem;
  display: flex;
  align-items: center;
  align-content: center;
  white-space: nowrap;
}
.${ns}-settings .${ns}-settings-tabs {
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 0 -0.25rem;
}
.${ns}-settings .${ns}-settings-tab-group {
  text-align: center;
  white-space: nowrap;
  align-items: center;
}
.${ns}-settings .${ns}-settings-tab {
  display: flex;
  margin: 0.25rem;
  text-decoration: underline;
  text-align: center;
}
.${ns}-settings .${ns}-settings-tab.active {
  font-weight: bold;
}
.${ns}-settings .${ns}-settings-tab svg.bi {
  margin: 0 -0.125rem;
}
.${ns}-settings .${ns}-settings-group {
  display: none;
}
.${ns}-settings .${ns}-settings-group.active {
  display: block;
}
.${ns}-settings .${ns}-host-input {
  margin: 0.5rem 0;
  border-top: solid 1px var(--fcsp-border);
}
.${ns}-settings .${ns}-host-input.invalid {
  border: solid 1px red;
}
.${ns}-settings .${ns}-host-input .${ns}-host-controls {
  align-items: center;
  justify-content: space-between;
  margin: 0.125rem 0;
}
.${ns}-settings .${ns}-host-input input[type=text] {
  min-width: 100%;
  box-sizing: border-box;
}

.${ns}-theme-save-options {
  position: fixed;
  max-height: 20rem;
  overflow: auto;
  padding: 0.25rem;
}
.${ns}-theme-save-options:not(.fields-collapsed) .bi-chevron-down, .${ns}-theme-save-options.fields-collapsed .bi-chevron-up, .${ns}-theme-save-options.fields-collapsed input[type=checkbox]:not(:checked), .${ns}-theme-save-options.fields-collapsed input[type=checkbox]:not(:checked) + label {
  display: none;
}

.${ns}-info-circle {
  cursor: pointer;
}
.${ns}-info-circle svg {
  height: 0.8em;
  width: 0.8em;
}

.${ns}-popover-body {
  position: fixed;
  padding: 0.25rem;
  max-width: 12rem;
  text-align: center;
  border-radius: 0.3rem;
}
.${ns}-popover-body.wide {
  max-width: 20rem;
}

pre.option {
  display: inline;
  background: #f5f5f5;
  border: 1px solid #b7c5d9;
  border-radius: 4px;
  padding: 0 0.3em;
  font-size: 0.9em;
  white-space: nowrap;
}

.${ns}-threads .${ns}-thread-board-list label {
  display: inline-block;
  width: 4rem;
}
.${ns}-threads .${ns}-thread-list {
  margin: 0.5rem -0.25rem 0;
  padding: 0.5rem 1rem;
  border-top: solid 1px var(--fcsp-border);
}
.${ns}-threads .${ns}-thread-list .boardBanner {
  margin: 1rem 0;
}
.${ns}-threads table {
  border-top: solid 1px var(--fcsp-border);
  width: 100%;
  margin-top: 0.5rem;
  border-collapse: collapse;
}
.${ns}-threads table th {
  border-bottom: solid 1px var(--fcsp-border);
}
.${ns}-threads table th, .${ns}-threads table td {
  text-align: left;
  padding: 0.25rem;
}
.${ns}-threads table tr {
  padding: 0.25rem 0;
}
.${ns}-threads table .${ns}-threads-body tr {
  background: var(--fcsp-even-row);
}
.${ns}-threads table .${ns}-threads-body tr:nth-child(2n) {
  background: var(--fcsp-odd-row);
}

.${ns}-download-all-status, .${ns}-create-sound-status {
  margin-top: 0.5rem;
  border: solid 1px var(--fcsp-border);
  border-radius: 5px;
  padding: 0.25rem;
}

.${ns}-file-overlay, .${ns}-tools input[type=text] {
  display: flex;
  align-items: center;
}

.${ns}-file-input.placeholder span, .${ns}-create-sound-form input[type=text]::placeholder {
  color: #AAA;
  opacity: 1;
}

.${ns}-file-input .${ns}-file-overlay {
  position: relative;
  background: white;
}
.${ns}-file-input .placeholder-text {
  display: none;
}
.${ns}-file-input.placeholder .placeholder-text {
  display: inherit;
}
.${ns}-file-input span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.${ns}-file-input input[type=file] {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
}
.${ns}-file-input .overfile {
  z-index: 9999;
}
.${ns}-file-input .${ns}-file-list {
  padding: 0 0.25rem;
}
.${ns}-file-input .${ns}-file-list:empty {
  display: none;
}

.${ns}-input-append {
  position: absolute;
  display: flex;
  align-items: center;
  background: white;
  padding-left: 0.25rem;
  right: 0.125rem;
}

.${ns}-tools .${ns}-full-bar {
  background: none;
  height: 5px;
}
.${ns}-tools .${ns}-full-bar > div {
  background: var(--fcsp-border);
}

.${ns}-threads, .${ns}-settings, .${ns}-tools, .${ns}-player, .fullscreen-details {
  display: none;
}

#${ns}-container[data-view-style=settings] .${ns}-settings {
  display: block;
}

#${ns}-container[data-view-style=threads] .${ns}-threads {
  display: block;
}

#${ns}-container[data-view-style=tools] .${ns}-tools {
  display: block;
}

#${ns}-container[data-view-style=image] .${ns}-player,
#${ns}-container[data-view-style=playlist] .${ns}-player,
#${ns}-container[data-view-style=fullscreen] .${ns}-player {
  display: flex;
}

#${ns}-container[data-view-style=image] .${ns}-under-image {
  display: none;
}
#${ns}-container[data-view-style=image] .${ns}-image-link {
  height: auto;
}

#${ns}-container[data-view-style=playlist] .${ns}-image-link {
  flex-shrink: 0;
  flex-grow: 0;
}

#${ns}-container[data-view-style=fullscreen] .${ns}-player {
  scrollbar-width: none;
}
#${ns}-container[data-view-style=fullscreen] .${ns}-player::-webkit-scrollbar {
  display: none;
}
#${ns}-container[data-view-style=fullscreen].cursor-inactive .${ns}-player {
  cursor: none;
}
#${ns}-container[data-view-style=fullscreen].cursor-inactive .${ns}-controls, #${ns}-container[data-view-style=fullscreen].cursor-inactive .fullscreen-details {
  opacity: 0;
}
#${ns}-container[data-view-style=fullscreen] .${ns}-image-link {
  height: calc(100% - .4rem) !important;
}
#${ns}-container[data-view-style=fullscreen] .${ns}-controls {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 2;
}
#${ns}-container[data-view-style=fullscreen] .${ns}-under-image {
  position: absolute;
  top: 100%;
  width: 100%;
}
#${ns}-container[data-view-style=fullscreen] .fullscreen-details {
  display: block;
  opacity: 0.7;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  text-align: left;
  background: var(--fcsp-controls-background);
  color: var(--fcsp-controls-inactive);
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  border-radius: 0.375rem;
  z-index: 2;
}`

/***/ },

/***/ "./src/selectors.js"
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Icons = __webpack_require__(/*! ./src/icons */ "./src/icons.js");
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
      relative: [ '.fileText .file-info', '.fileText a', 'a.fileThumb' ],
      position: 'afterend',
      prependText: ' ',
      unfilterText: Icons.filter,
      // For a post whose sounds were removed rather than filtered.
      restoreText: Icons.arrowCounterclockwise
    },
    // Deliberately missing dots because this is used to set the class
    styleFetcher: 'post reply style-fetcher',
    // Replies anywhere in the thread (4chan X's quote threading nests them), but not
    // inline quotes.
    limitWidthOf: '.thread .postContainer:not(.inline .postContainer)'
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


/***/ },

/***/ "./src/xhr-replace.js"
/*!****************************!*\
  !*** ./src/xhr-replace.js ***!
  \****************************/
(module) {

/* eslint-disable no-global-assign */
function toGM() {
  XMLHttpRequest = xhrGM;
};
function toNative() {
  XMLHttpRequest = xhrNative;
};

const xhrNative = XMLHttpRequest;
const xhrGM = function() {
  let method, url, headers = {}, mime;
  this.open = (m, u) => {
    method = m;
    url = u;
  };
  this.setRequestHeader = (name, value) => headers[name] = value;
  this.getAllResponseHeaders = () => this.responseHeaders;
  this.getResponseHeader = name => this._responseHeaders[name.toLowerCase()];
  this.overrideMimeType = m => mime = m;
  this.send = data => {
    GM.xmlHttpRequest({
      method,
      url,
      headers,
      data,
      responseType: this.responseType,
      onload: data => {
        Object.assign(this, data);
        this._responseHeaders = (data.responseHeaders || '').split('\n').reduce((headers, h) => {
          let [ name, ...val ] = h.split(': ');
          headers[name.toLowerCase()] = val.join(': ');
          return headers;
        }, {});
        this.responseText = data.responseText;
        this.onload(this);
      },
      onerror: this.onerror,
      onreadystatechange: this.onreadystatechange,
      ontimeout: this.ontimeout,
      timeout: this.timeout,
      overrideMimeType: mime
    });
  };
  this.onload = null;
  return this;
};

module.exports.GM = xhrGM;
module.exports.native = xhrNative;
module.exports.toGM = toGM;
module.exports.toNative = toNative;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/


let initialized = false;
let initializing = false;

async function doInit() {
  // Both 4chanXInitFinished and the fallback timeout call this. Player.initialize can
  // take longer than the gap between them (it waits for the 4chan X header), so guard
  // on initialization having started, not finished, or a second call would add a
  // duplicate MutationObserver.
  if (initialized || initializing) {
    return;
  }

  // We cannot require globals yet because it accesses document.head immediately.
  // Check for head availability to avoid crashes on some archives.
  if (!document.head) {
    setTimeout(doInit, 10);
    return;
  }
  initializing = true;

  // Require globals now that we know it's safe.
  __webpack_require__(/*! ./globals */ "./src/globals.js");
  const _ = __webpack_require__(/*! ./_ */ "./src/_.js");

  // Require these here so every other require is sure of the 4chan X state.
  const Player = __webpack_require__(/*! ./player */ "./src/player.js");

  await Player.initialize();

  Player.posts.addPosts(document.body, true);

  let pendingNodes = [];
  const processNodes = _.debounce(() => {
    pendingNodes.forEach((node) => Player.posts.addPosts(node));
    pendingNodes = [];
  }, 100);

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            pendingNodes.push(node);
          }
        });
      }
    });
    if (pendingNodes.length) {
      processNodes();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  initialized = true;
}

document.addEventListener('4chanXInitFinished', doInit);

// Fallback for pages without 4chan X. The timeout makes sure 4chan X will have added
// its classes and be identified.
let waitedForChanX = false;
function fallbackInit() {
  if (initialized || initializing) {
    return;
  }
  if (document.readyState === 'loading') {
    return document.addEventListener('DOMContentLoaded', fallbackInit, { once: true });
  }
  // 4chan X and its forks (XT, neXT) mark <html> as soon as they start, but on big
  // threads their post processing runs well past a second. Starting mid-way puts play
  // links next to file links they then move into hidden markup, so wait for their init
  // event, with a safety net in case it never fires.
  if (!waitedForChanX && document.documentElement.classList.contains('fourchan-x')) {
    waitedForChanX = true;
    return setTimeout(fallbackInit, 15000);
  }
  doInit();
}
setTimeout(fallbackInit, 1000);

})();

/******/ })()
;