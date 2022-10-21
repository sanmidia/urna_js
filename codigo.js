function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}


function votar() {

    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidato = (valor1 * 10) + valor2;
    if (sessionStorage.getItem(candidato) !== null) {
        votos = parseInt(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votos);
    } else {
        sessionStorage.setItem(candidato, 1);
    }

        switch(candidato)
        {
            case 12:
            //    alert("Confirmado voto no candidato Ciro gomes")
               document.getElementById("fotoId").src = "ciro.jpg";
               document.getElementById("fotoVice").src = "vice12.jpg";
               document.getElementById("voteiNome").textContent = "Ciro Gomes";
               document.getElementById("fotoNome").textContent = "Presidente: Ciro Gomes";
               document.getElementById("voteiPartido").textContent = "PDT";
               document.getElementById("voteiVice").textContent = "Ana Paula";
               document.getElementById("nomeVice").textContent = "Vice: Ana Paula";
               document.getElementById("campo1").value = candidato - 11;
               document.getElementById("campo2").value = candidato - 10;

            break;
            case 13:
                document.getElementById("fotoId").src = "lula.jpg";
                document.getElementById("fotoVice").src = "vice13.jpg";
                document.getElementById("voteiNome").textContent = "Luiz Inácio Lula da Silva";
                document.getElementById("fotoNome").textContent = "Presidente: Luiz Inácio Lula da Silva";
               document.getElementById("voteiPartido").textContent = "PT";
               document.getElementById("voteiVice").textContent = "Geraldo Alckmin";
               document.getElementById("nomeVice").textContent = "Vice: Geraldo Alckmin";
               document.getElementById("campo1").value = candidato - 12;
               document.getElementById("campo2").value = candidato - 10;
            break;
            case 15:
               document.getElementById("fotoId").src = "tebet.jpg";
               document.getElementById("fotoVice").src = "vice15.jpg";
               document.getElementById("voteiNome").textContent = "Simone Tebet";
               document.getElementById("fotoNome").textContent = "Presidente: Simone Tebet";
               document.getElementById("voteiPartido").textContent = "MDB";
               document.getElementById("voteiVice").textContent = "Mara Gabrilli";
               document.getElementById("nomeVice").textContent = "Vice: Mara Gabrilli";
               document.getElementById("campo1").value = candidato - 14;
               document.getElementById("campo2").value = candidato - 10;
            break;
            case 22:
                document.getElementById("fotoId").src = "bolsonaro.jpg";
                document.getElementById("fotoVice").src = "vice22.jpg";
                document.getElementById("voteiNome").textContent = "Jair Messias Bolsonaro";
                document.getElementById("fotoNome").textContent = "Presidente: Jair Messias Bolsonaro";
                document.getElementById("voteiPartido").textContent = "PL";
                document.getElementById("voteiVice").textContent = "Walter Braga Netto";
                document.getElementById("nomeVice").textContent = "Vice: Gal Walter Braga Netto";
                document.getElementById("campo1").value = candidato - 20;
                document.getElementById("campo2").value = candidato - 20;
            break;
            default:
                document.getElementById("fotoId").src = "nulo.jpg";
                document.getElementById("fotoVice").src = "";
                document.getElementById("voteiNome").textContent = "NULO";
                document.getElementById("voteiPartido").textContent = "NULO";
                document.getElementById("voteiVice").textContent = "NULO";
                document.getElementById("campo1").value = "";
                document.getElementById("campo2").value = "";
        }

}

function resultado() {
    document.getElementById("resultado").innerHTML=""
    for(i=0;i<100;i++){
        if (sessionStorage.getItem(i) !== null) {
          //  alert(i);

            switch(i)
            {
                case 12:
                    document.getElementById("resultado").innerHTML += "Candidato Ciro Gomes teve: "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 13:
                    document.getElementById("resultado").innerHTML += "Candidato Luis Inacio Lula da Silva teve: "+sessionStorage.getItem(i)*2+" votos<br/>";
                break;
                case 15:
                    document.getElementById("resultado").innerHTML += "Candidato Simone Tebet teve: "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 22:
                    document.getElementById("resultado").innerHTML += " Candidato Jair Bolsonaro teve: "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                default:
                    document.getElementById("resultado").innerHTML += "Branco e nulos teve: "+sessionStorage.getItem(i)+" votos<br/>";
            }
    

          // document.getElementById("resultado").innerHTML += "C "+sessionStorage.getItem(i)+" votos<br/>";
        }

        

    }
}