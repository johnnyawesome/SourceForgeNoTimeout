// ==UserScript==
// @name         SourceForgeNoTimeout
// @namespace    https://github.com/johnnyawesome
// @version      1.0
// @description  Instantly downloads files from SourceForge, without 5 seconds delay
// @author       JohnnyAwesome
// @match        https://sourceforge.net/projects/*
// @icon         https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull32.ico
// @icon64	 https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull64.ico
// @updateURL    https://github.com/johnnyawesome/SourceForgeNoTimeout/tree/master
// @downloadURL  https://github.com/johnnyawesome/SourceForgeNoTimeout/tree/master
// ==/UserScript==

'use strict';

if(window.location.toString().search("projects") != -1
  && window.location.toString().search("files") === -1 ){
  let downloadButton = document.getElementsByClassName("button download big-text green");
  if(downloadButton) downloadButton[0].click();
}

if(window.location.toString().search("projects") != -1
  && window.location.toString().search("files") != -1 ){
  window.location.replace(document.querySelector('noscript').firstChild.data.slice(48).slice(0, -3));
  setTimeout(() => window.location.replace("https://www.google.com"), 3000);
}