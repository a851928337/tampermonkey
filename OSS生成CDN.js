// ==UserScript==
// @name         OSS生成链接
// @namespace    http://tampermonkey.net/
// @version      2023-12-26
// @description  try to take over the world!
// @author       You
// @match        https://oss.console.aliyun.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aliyun.com
// @grant        none
// ==/UserScript==
async function select(selector) {
  let times = 0;
  function loop() {
    return new Promise((resolve, reject) => {
      if (times == 3) {
        console.log('Exceeding the frequency limit');
        reject();
        return;
      }
      const el = document.querySelector(selector);
      if (!el) {
        setTimeout(() => {
          times += 1;
          console.log('cant find this element');
          resolve(loop());
        }, 1000);
      } else {
        console.log('find this element');
        resolve(el);
      }
    });
  }
  return loop();
}
(function () {
  'use strict';
  select('.xcomponent-table-body').then((table) => {
    table.addEventListener('click', () => {
      select('.oss-op-file-preview').then((el) => {
        const form = document.querySelector('.xcomponent-form');
        const row = form.querySelector('.xcomponent-row');
        const newRow = row.cloneNode(true);
        const fileName = row.querySelector('.file-name').innerHTML;
        const url = `https://huiliu-production-resources.huiliu.net/${fileName}`;
        newRow.querySelector('.label-and-help').innerHTML = 'CDN链接';
        newRow.querySelector('.file-name').innerHTML = url;
        newRow.querySelector('.xcomponent-btn-helper').addEventListener('click', async () => {
          navigator.clipboard
            .writeText(url)
            .then(() => {
              alert('复制成功');
            })
            .catch((e) => {
              alert('复制失败');
              console.error(e);
            });
        });
        form.insertBefore(newRow, row);
      });
    });
  });
})();
