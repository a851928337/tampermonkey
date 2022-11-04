// ==UserScript==
// @name         CSDN去除选取限制
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const pre = $('pre');
  const code = $('code');
  pre.css('user-select', 'initial');
  code.css('user-select', 'initial');
  // Your code here...
})();
