let n1 = document.getElementById('numero1');
let n2 = document.getElementById('numero2');
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

botao.addEventListener('click',function(){
   let valor1 = parseFloat(n1.value);
            let valor2 = parseFloat(n2.value);
            res.innerHTML = "Resultado: " + calcular(valor1, valor2);
});