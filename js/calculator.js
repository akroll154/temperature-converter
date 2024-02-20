function Converter() {

    var valorElemento = document.getElementById("ivalor")
    var valor = valorElemento.value
    var valorCelsius = parseFloat(valor)

    //conversao

    var valorFahrenheit = valorCelsius * 1.8 + 32
    console.log(valorFahrenheit)

    //

    var elementoValorConvertido = document.getElementById("ivalorConvertido")
    var valorConvertido = valorFahrenheit + " F"

    elementoValorConvertido.innerHTML = valorConvertido

}

//segunda funçao

function Converter2() {
    var valorElemento2 = document.getElementById("ivalor2")

    var valor2 = valorElemento2.value
    var valorFahrenheit = parseFloat(valor2)

    //conversao

    var valorCelsius = valorFahrenheit
    console.log(valorFahrenheit)

    //

    var elementoValorConvertido2 = document.getElementById("ivalorConvertido2")
    var valorConvertido2 = (5 * valorFahrenheit - 160) / 9 + " °C"

    elementoValorConvertido2.innerHTML = valorConvertido2

}


// impedir que o botao seja clicado quando o conteudo da input estiver vazio
// mostrar mensagem "digite uma temperatura para fazer a conversao"
// impedir que o usuario digite coisas != de numeros nas inputs
// mostrar mensagem "digite apenas caracteres numericos"
// deixar numeros com apenas 3 casas decimais


// usar select para alternar entre f>c e c>f










