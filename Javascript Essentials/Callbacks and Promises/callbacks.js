const countries=['France','Brazil','Italy','Spain','Germany'];


function newCountry(country,callback){
	setTimeout(function(){
		//Add a country
		countries.push(country);
		callback();
	},2000);
}
function displayCountries() {
	setTimeout(function(){
		let html='';
		countries.forEach(function(country){
			html+=`<li>${country}</li>`;
		});
		document.body.innerHTML=html;
	},1000);
}

newCountry('Germany',displayCountries);
displayCountries();