﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function copyToClipboard() {
    const joke = document.getElementById("joke").textContent;
    const textArea = document.createElement("textarea");
    textArea.value = joke;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Joke copied to clipboard: " + joke);
}