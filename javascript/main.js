// simple hellow world javascript demo that replaces the content of the div with id "javascript" with "Hello World!"
setTimeout(function(){
    document.getElementById("javascript").innerHTML = "Hello World!";
    console.log("javascript.js said hello");
}, 100);

console.log("javascript.js loaded");

