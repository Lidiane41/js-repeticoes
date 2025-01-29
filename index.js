let diasDosMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function adicionarDias(){
    dia.innerHTML = "";
    if(mes.value == 1){
        if((ano.value % 4 == 0 && ano.value % 100 !== 0) || (ano.value % 400 === 0)){
            diasDosMeses[1] = 29;
        } else {
            diasDosMeses[1] = 28;
        }
    }
    for(let i = 1; i <= diasDosMeses[Number(mes.value)]; i++ ){
        dia.innerHTML += `<option>${i}</option>`;
    }
}

adicionarDias();

let nomeDosMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

for(let i = 0; i < 12; i++ ){
    mes.innerHTML += `<option value="${i}">${nomeDosMeses[i]}</option>`;
}

for(let i = new Date().getFullYear(); i >= new Date().getFullYear() - 50; i-- ){
    ano.innerHTML += `<option>${i}</option>`;
}

function verificar(){

    if(Number(ano.value) % 4 == 0){
        alert(`Quem nasceu em ${dia.value}/${mes.value}/${ano.value}, nasceu em ano bissexto`)
    }
}

