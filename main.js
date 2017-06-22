function Fact(){ // факторіал числа через рекурсію
var n = +prompt('Введіть число щоб порахувати факторіал', '1');
function factorial(n) {
if(n ==null) alert("error '404'");
if(n < 1) return 0;
if(n == 0) return 0; if(n == 1) return 1;
else return (n*factorial(n-1))
} alert(factorial(n));}

// function Fact_2() {//факторіал через фор
// var n = +prompt('Введіть число щоб порахувати факторіал', '1');
// var fact = 1, sum = 0;
// for (var i = 1; i <= n; i++) {
// sum = sum + fact;
// 	alert(fact*=i);
// }}

function Gag() {//Рік польоту Гагаріна через case
var a = +prompt('Коли Юра в космос літав?','1961');
switch(a){
	case 1959: case 1960: alert('Трішки замало');break;
	case 1961: alert('Все вірно');break;
	case 1962: case 1963: alert('Трішки забагато');break;
	default: alert('Підівчи історію, братан!');
}}

function Krat(){//Сума чисел кратних 2
var fin = +prompt('До скільки потрібно порахувати?','2'), sum = 0;
for(var i = 0; i<=fin; i+=2)
if(i%2==0) sum+=i;
alert(sum);
}