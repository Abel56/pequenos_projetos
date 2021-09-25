function calculateIMC(event) {
    event.preventDefault();
    document.getElementById('info').style.display = "block";

    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let imc = peso / (altura ** 2)

    document.getElementById('resultado').innerHTML = imc.toFixed(2)

    if (imc < 18.5) {
        document.getElementById('img').src = "img/magro.jpg"
    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById('img').src = "img/normal.jpg"
    } else if (imc >= 25 && imc < 30) {
        document.getElementById('img').src = "img/sobrepeso.jpg"
    } else if(imc > 30) {
        document.getElementById('img').src = "img/obeso.jpg"
    }
}



document.getElementById('info').style.display = "none";
document.getElementById('form').addEventListener("submit", calculateIMC);