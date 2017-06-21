// факторіал числа через рекурсію
var n = prompt('Введіть число щоб порахувати факторіал', '1');
function factorial(n) {
if(n ==null) alert("error '404'");
if(n == 0) return 0; if(n == 1) return 1;
else return (n*factorial(n-1))
} alert(factorial(n));
