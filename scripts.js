const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToconvert = document.querySelector(".currency-value-to-convert") // valor em real

    const currencyValueToconverted = document.querySelector(".currency-value") // Outras moedas


    const dolarToday = 5.2
    const euroToday = 6.2

    const convertedValue = inputCurrencyValue / dolarToday

    if (currencySelect.value == "dolar") {
        currencyValueToconverted.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {

        currencyValueToconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }
     
    
    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)


