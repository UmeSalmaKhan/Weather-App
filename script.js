<script>

    const apiKey ="ce1955692db33892970e11162e96d5bd";
    const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric";

    const searchBox = document.querySelector(".search input");
    const searchBnt = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    let data = await response.json();
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";



    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main=="Humidity"){
        weatherIcon.src = "images/humidity.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main=="Wind"){
        weatherIcon.src = "images/wind.png";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src = "images/haze.png";
    }
}

searchBnt.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

</script>
