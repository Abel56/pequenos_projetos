
function calculateForm(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value
    let service = document.getElementById('service').value
    let group = document.getElementById('group').value


    if(bill <= 0 ){
        window.alert("Valor tem que ser acima de R$ 0 ");
        return;
    }
    if (service == " " || service == 0) {
        window.alert("Por favor, nós informe como foi atendido.")
    }
    if (group == "" || group <= 1) {
        group = 1
        document.getElementById('each').style.display = "none";
        document.getElementById('tip').style.display = "block";
    } else {
        document.getElementById('each').style.display = "block";
    }

    let total = bill * service
    let totalPessoa = total / group

    document.getElementById("totalPessoa").innerHTML = totalPessoa.toFixed(2)
    document.getElementById("totalGorjeta").innerHTML = total.toFixed(2)
}
document.getElementById('each').style.display = "none";
document.getElementById('tip').style.display = "none";





document.getElementById('form').addEventListener('submit', calculateForm);
