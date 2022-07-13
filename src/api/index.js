import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
            }        
          });

        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params: {
        lon: lng, lat: lat,},
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
      }
    });

    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getWebcamData = async (sw, ne) => {
  try {
    const { data } = await axios.get(`https://webcamstravel.p.rapidapi.com/webcams/map/${ne.lat},${ne.lng},${sw.lat},${sw.lng},14`, { 
    params: {show: 'webcams:image,location,player'},
    headers: {
      'x-rapidapi-host': 'webcamstravel.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
    }
    
  });

  const webCamsdata = [data.result.webcams];
  return webCamsdata
  
  } catch (error) {
    console.log(error)
  }
}