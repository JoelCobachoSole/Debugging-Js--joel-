function calcularSuma() {
    const num1 = parsentFloat(document.getElementById('num1').value);
    const num2 = parsentFloat(document.getElementById('num2').value);
    const suma = num1 + num2; 
    document.getElementById('resultado').innerText = `La suma es: ${suma}`;
}
