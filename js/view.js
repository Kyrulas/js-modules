import compute from './compute';

//Inputs
var labelFirst = document.createElement("label");
labelFirst.setAttribute('for','firstNum');
labelFirst.innerHTML = "First Number";
document.body.appendChild(labelFirst);


export var firstNum = document.createElement("input");
firstNum.setAttribute('type', 'text');
firstNum.setAttribute('id', 'firstNum');
document.body.appendChild(firstNum);
firstNum.setAttribute("style", "padding:10px;font-size: 16px; margin:20px;");


var labelSecond = document.createElement("label");
labelSecond.setAttribute('for','secondNum')
labelSecond.innerHTML = "Second Number";
document.body.appendChild(labelSecond);

export var secondNum = document.createElement("input");
secondNum.setAttribute('type', 'text');
secondNum.setAttribute('id', 'fsecondNum');
document.body.appendChild(secondNum);
secondNum.setAttribute("style", "padding: 10px; font-size: 16px; margin:20px;");


//create div
var container = document.createElement("div");
container.setAttribute("style", "margin: 50px")
document.body.appendChild(container);

//Buttons
var addBtn = document.createElement("button");
addBtn.innerHTML = "+";
container.appendChild(addBtn);
addBtn.setAttribute("style", "background-color: red; width: 50px; height: 50px; font-size: 30px; margin:10px;");

var subBtn = document.createElement("button");
subBtn.innerHTML = "-";
container.appendChild(subBtn);
subBtn.setAttribute("style", "background-color: green; width: 50px; height: 50px; font-size: 30px; margin:10px;");

var mulBtn = document.createElement("button");
mulBtn.innerHTML = "*";
container.appendChild(mulBtn);
mulBtn.setAttribute("style", "background-color: blue; width: 50px; height: 50px; font-size: 30px; margin:10px;");

var divideBtn = document.createElement("button");
divideBtn.innerHTML = "/";
container.appendChild(divideBtn);
divideBtn.setAttribute("style", "background-color: purple; width: 50px; height: 50px; font-size: 30px; margin:10px;");

//Result
export var result = document.createElement("div");
document.body.appendChild(result);
result.setAttribute("style", "width: 100px; padding: 50px; font-size: 50px; height: 100px; background-color: yellow; margin: 0 auto;");


addBtn.onclick = compute.add;

subBtn.onclick = compute.sub;

mulBtn.onclick = compute.mul;

divideBtn.onclick = compute.divide;




