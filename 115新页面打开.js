// ==UserScript==
// @name         115新页面打开
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://115.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=115.com
// @grant        none
// ==/UserScript==
function init() {
  const l = document.querySelectorAll('.file-name .name');
  for (let i of l) {
    const jq = $(i);
    const a = document.createElement('a');
    const cid = i.getAttribute('cid');
    const menu = i.getAttribute('menu');
    if (menu != 'view_file_one') {
      a.href = `https://115.com/?cid=${cid}&offset=0&tab=&mode=wangpan`;
      a.target = '_blank';
      a.innerHTML = i.innerHTML;
      jq.replaceWith(a);
    }
  }
}
(function () {
  'use strict';
  setInterval(() => {
    init();
  }, 500);
})();
