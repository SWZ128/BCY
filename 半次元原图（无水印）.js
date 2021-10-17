// ==UserScript==
// @name         半次元原图（无水印）
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  获取半次元原图脚本
// @author       LinZi
// @match        https://bcy.net/item/detail/*
// @grant        unsafeWindow
// @run-at       document-end
// ==/UserScript==

/*
鸣谢：
    半次元获取原图
        插件地址： https://greasyfork.org/zh-CN/scripts/390830

    显示半次元（bcy.net）图片的大图url（下载辅助）
        插件地址： https://greasyfork.org/zh-CN/scripts/23336
*/

(function () {
    'use strict';

    const data = unsafeWindow.__ssr_data
    if (data) {
        let urlsArray = data.detail.post_data.multi
        var img_wrap = document.getElementsByClassName("img-wrap");
        for (var i = 0; i < urlsArray.length; i++) {
            img_wrap[i].insertAdjacentHTML(
                'beforeend',
                '<div style="height:15px;font-size:15px"><a href ="'
                    + urlsArray[i].original_path
                    + '" target="_blank">查看原图</a></div >');
        }
    }
})();