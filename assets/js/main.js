"use strict";

//# 1_2

document.getElementById("info").innerHTML = "<h1>Hello World</h1>";

document.getElementById("info").innerHTML += "<h2>How are you?</h2>";

console.log(document);

document.querySelector("#container").innerHTML = "<p>start of the element</p>";

document.write("end of the element");

//# 1_3

let gallery = document.querySelector("#gallery");

gallery.innerHTML = "<figure><img src='https://images.unsplash.com/photo-1687368438644-3ba4c870a26c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'><figcaption>Fig. 1</figcaption></figure>";

gallery.innerHTML += "<figure><img src='https://images.unsplash.com/photo-1687368438644-3ba4c870a26c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'><figcaption>Fig. 2</figcaption></figure>";

gallery.innerHTML += "<figure><img src='https://images.unsplash.com/photo-1687368438644-3ba4c870a26c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'><figcaption>Fig. 3</figcaption></figure>";

gallery.style.display = "grid";

gallery.style.gridTemplateColumns = "repeat(3, 1fr)";

gallery.style.columnGap = "20px";

document.querySelector("#gallery figure:nth-of-type(1) img").style.width = "100%";

document.querySelector("#gallery figure:nth-of-type(2) img").style.width = "100%";

document.querySelector("#gallery figure:nth-of-type(3) img").style.width = "100%";