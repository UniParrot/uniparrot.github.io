const html = document.querySelector('html');

const button = document.createElement('button');
button.setAttribute('class', 'mainButton');
button.innerText = "CLICKME";
html.appendChild(button);

button.onclick = function () {
  alert("hi");
}
