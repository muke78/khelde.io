window.addEventListener('load', () => {
  let lon
  let lat

  let temperaturaValor = document.getElementById('temperatura-valor')
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

  let ubicacion = document.getElementById('ubicacion')
  let iconoAnimado = document.getElementById('icono-animado')

  let vientoVelocidad = document.getElementById('viento-velocidad')


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicion => {
      //console.log(posicion.coords.latitude)
      lon = posicion.coords.longitude
      lat = posicion.coords.latitude
      //ubicación actual    
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a439b72605aa883d6051d85274ea8fc`

      //ubicación por ciudad
      //  const url = `https://api.openweathermap.org/data/2.5/weather?q=Ecatepec&lang=es&units=metric&appid=9a439b72605aa883d6051d85274ea8fc`

      console.log(url)

      fetch(url)
        .then(response => { return response.json() })
        .then(data => {
          //console.log(data)

          let temp = data.main.temp - 273.15;
          let temp2 = parseInt(temp);
          //console.log(temp)
          temperaturaValor.textContent = `${temp2} ° C`

          //console.log(data.weather[0].description)
          let desc = data.weather[0].description
          temperaturaDescripcion.textContent = desc.toUpperCase()
          ubicacion.textContent = data.name

          vientoVelocidad.textContent = `${data.wind.speed * 3600 / 1000} km/h`
    

          //para iconos estáticos
          //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
          //icono.src = urlIcon
          //console.log(data.weather[0].icon)

          //para iconos dinámicos
          console.log(data.weather[0].main)
          switch (data.weather[0].main) {
            case 'Thunderstorm':
              iconoAnimado.src = 'animated/thunder.svg'
              console.log('TORMENTA');
              break;
            case 'Drizzle':
              iconoAnimado.src = 'animated/rainy-2.svg'
              console.log('LLOVIZNA');
              break;
            case 'Rain':
              iconoAnimado.src = 'animated/rainy-7.svg'
              console.log('LLUVIA');
              break;
            case 'Snow':
              iconoAnimado.src = 'animated/snowy-6.svg'
              console.log('NIEVE');
              break;
            case 'Clear':
              iconoAnimado.src = 'animated/day.svg'
              console.log('LIMPIO');
              break;
            case 'Atmosphere':
              iconoAnimado.src = 'animated/weather.svg'
              console.log('ATMOSFERA');
              break;
            case 'Clouds':
              iconoAnimado.src = 'animated/cloudy-day-1.svg'
              console.log('NUBES');
              break;
            default:
              iconoAnimado.src = 'animated/cloudy-day-1.svg'
              console.log('por defecto');
          }

        })
        .catch(error => {
          console.log(error)
        })
    })

  }
})