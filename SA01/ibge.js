//regex
let mascaraCep = /^\d{5}-?\d{3}$/;
let mascaraBairro = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/;
let mascaraRua = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\.\-]{3,}$/;
let mascaraNumero = /^(\d+[A-Za-z]?|s\/n)$/i;
// cadastro
let cadastro = document.querySelector("#cadastro");
let msgCadastro = document.querySelector("#msgCadastro")
// Cep e msg
let cep = document.querySelector("#cep");
let msgCep = document.querySelector("#msgCep");
// Bairro e msg
let bairro = document.querySelector("#bairro");
let msgBairro = document.querySelector("#msgBairro");
// rua e msg
let rua = document.querySelector("#rua");
let msgRua = document.querySelector("#msgRua");
// nmr e msg
let numero = document.querySelector("#numero");
let msgNumero = document.querySelector("#msgNumero");
//---------------------------------//
cadastro.addEventListener("click", function () {

    let valido = true;

    // Estado
    if (!$("#uf").val()) {
        alert("Selecione um estado!");
        valido = false;
    }

    // Cidade
    if (!$("#city").val()) {
        alert("Selecione uma cidade!");
        valido = false;
    }

    // Bairro
    if (!mascaraBairro.test(bairro.value)) {
        msgBairro.textContent = "Bairro inválido!";
        msgBairro.style.color = "red";
        valido = false;
    }

    // Rua
    if (!mascaraRua.test(rua.value)) {
        msgRua.textContent = "Rua inválida!";
        msgRua.style.color = "red";
        valido = false;
    }

    // Número
    if (!mascaraNumero.test(numero.value)) {
        msgNumero.textContent = "Número inválido!";
        msgNumero.style.color = "red";
        valido = false;
    }

    // Resultado final
    if (valido) {
        alert("Cadastro realizado com sucesso! 🎉");
        
    }

});


/* 
    Consultar Estados e Municípios do Brasil - API IBGE 
    Preenchimento do select do ESTADOS diretamente pelos dados oferecidos pelo IBGE
    Popula de forma automática baseado no ESTADO selecionado, filtrando as cidades.

    @author Gabriel Araujo
    @date 02/09/2020
    @update 30/10/2020 
*/

$(function() {
    


    $.getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados/', function (uf) {
        var options = '<option value="" selected disabled>– Selecione seu estado –</option>'; 
        
        //Ordem alfabetica dos estados
        var features = uf.sort((a,b) => {
            return (
              (a.nome < b.nome && -1) ||
              (a.nome > b.nome && 1) ||
              0
            ); 
        });


        for (var i = 0; i < features.length; i++) { 
            options += '<option data-id="' + features[i].id + '" value="' + features[i].nome + '" >' + features[i].nome + '</option>'; 
        }

        $("select[name='uf']").html(options);

    });

    $("select[name='uf']").change(function () {
        if ($(this).val()) {
            const ufSelect = $(this).find("option:selected").attr('data-id');

            $.getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+ufSelect+'/municipios', {id: $(this).find("option:selected").attr('data-id')}, function (city) {            
                var options = '<option value="" disabled selected>– Selecione sua cidade –</option>';

                for (var i = 0; i < city.length; i++) {
                    options += '<option value="' + city[i].nome + '" >' + city[i].nome + '</option>';
                }

                $("select[name='city']").html(options);

            });

        } else {
            $("select[name='city']").html('<option value="" disabled selected>– Selecione sua cidade –</option>');
        }

    });

});


// botao.addEventListener("keyup", function () {
//    let valorNome = nome.value.trim();
// });
