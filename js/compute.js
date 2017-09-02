import{firstNum, secondNum} from './view';
import displayResult from	'./app';

function add(){
	displayResult(Number(firstNum.value) + Number(secondNum.value));
}
function sub(){
	displayResult(firstNum.value - secondNum.value);
}
function  mul(){
	displayResult(firstNum.value * secondNum.value);
}
function divide(){
	displayResult(firstNum.value / secondNum.value);
}

export default{
	add : add,
	sub : sub,
	mul : mul,
	divide : divide
}
