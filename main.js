var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        // Add city name to header
		
		// Add weather description to main text

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=53190,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();