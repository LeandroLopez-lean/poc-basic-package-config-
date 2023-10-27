const rootElement = document.getElementById("root");

const newDiv = document.createElement("div");

const newH1 = document.createElement("h1");
newH1.textContent = "Hello world";

newDiv.appendChild(newH1);

rootElement.appendChild(newDiv);