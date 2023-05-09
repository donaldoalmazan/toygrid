// simple hello world javascript demo that replaces the content of the div with id "javascript" with "Hello World!"
setTimeout(function(){
    document.getElementById("javascript").innerHTML = "Hello World!  This is a javascript app running in your browser.";
    console.log("javascript.js said hello");
}, 100);

console.log("javascript.js loaded");

