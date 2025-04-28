const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=b5c8fb764090822959c200b43e6f5c8e&q="

        const searchBox= document.querySelector(".search input");
        const searchBtn= document.querySelector(".search  button");
        const weatherIcon=document.querySelector(".weather-icon");
        
             
        async function checkWeather(city){
            const response =await fetch(apiUrl + city );

            if(response.status == 404){
                document.querySelector(".error").style.display= "block";
                documnet.querySelector(".weather").style.display="none";
            }
            else{
              
            var data =await response.json();


         

          document.querySelector(".city").innerHTML=data.name;
         document.querySelector(".temp").innerHTML= data.main.temp +"°C";
         document.querySelector(".humidity").innerHTML=data.main.humidity +"%" ;
         document.querySelector(".wind").innerHTML=data.wind.speed +"km/h" ;


         if(data.weather[0].main=="Clouds"){
      weatherIcon.src="cl.png";
}
        else if(data.weather[0].main=="rain"){
  weatherIcon.src="rain.jpg";
}

else if(data.weather[0].main=="Clear"){
  weatherIcon.src="clear.jpg";
}

 document.querySelector(".weather").style.display ="block";
document.querySelector(".eeror").style.display= "none";
}

            }


        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })