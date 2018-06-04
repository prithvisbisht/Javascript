class UI{
    constructor(){
        this.init();
    }
    init(){
        this.printCryptoCurrencies();
    }

    //Inserts the options in Crypto currencies select dropdown
    printCryptoCurrencies(){
        cryptoapi.getCryptoCurrenciesList()
        .then(data => {
            const cryptoCurrencies = data.Cryptocurrencies;
            
            //Buildidng the select fron REST API

            const select=document.getElementById('cryptocurrency');

            cryptoCurrencies.forEach(currency =>{
                //adding the option
                const option=document.createElement('option');
                option.value= currency.id;
                option.appendChild(document.createTextNode(currency.name));
                select.appendChild(option);
            })
        })
    }

    printMessage(message,className){
        const div=document.createElement('div');

        div.className=className;

        div.appendChild(document.createTextNode(message));
        
        const messageDiv=document.querySelector('.messages');

        messageDiv.appendChild(div);

        setTimeout(() => {
            document.querySelector('.messages div').remove();
        },3000);
    }

    displayResult(result){
        console.log(result);
        
    }
}