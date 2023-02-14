import axios from 'axios'
import React,{ useState } from 'react'
import { BsSearch} from 'react-icons/bs'
import Spinner from './Spinner'
import WeatherItem from './WeatherItem'


const Weather = () => {
    const [weather, setWeather] = useState([])
    const [cityImage, setCityImage] = useState([])
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_PUBLIC_API_KEY}`
    const urlCities =`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase()}/images/`
    // console.log(process.env.REACT_APP_PUBLIC_API_KEY)
    const handleSubmit =(e) =>{
        e.preventDefault()
        setLoading(true)
       
         axios.get(url)
        .then(res =>{setWeather(res.data)})
        axios.get(urlCities)
        .then(res =>{
             setCityImage(res.data.photos[0].image.mobile)
            
        })

        .catch(AxiosError => {
            if (AxiosError.response && AxiosError.response.status === 404) {
              console.log("City Image not found. Please check your city spelling and try again. NB: The City image might me missing from the API");
            } else {
              console.AxiosError(AxiosError);
            }
          });
        setCity('')
        setLoading(false)
    }
    // useEffect (() =>{
    //     handleSubmit()
    // }, [country])
    console.log(cityImage)
    if (loading){
        return <Spinner/>
    } 
    else{

        return (
          <div className='relative '>
              
              <img className='w-full h-screen object-cover ' src= {cityImage.length <= 0 ? 'https://cdn.pixabay.com/photo/2018/03/01/16/38/nature-3191091__340.jpg' : cityImage} alt="/" />
             
             
                  <div className='absolute top-0 left-0 bg-black/30 h-screen w-full z-10 opacity-100' />
                  <div className='absolute top-0 left-0 w-full h-screen my-8 opacity-100 z-20'>
                  {/* <div className='flex items-center justify-center py-16 '> */}
      
                  <form onSubmit={handleSubmit} className=' flex  justify-between items-center border-slate-200/70 border p-2 w-[full] mx-auto max-w-[500px] rounded-full '>
                      <input
                      className='outline-none bg-transparent text-xl  text-slate-200 w-full ' 
                      type="text" 
                      value={city}
                      onChange={(e)=> setCity(e.target.value)} 
                      placeholder= 'Search City'
                      required
                      />
                      <button onClick={handleSubmit}>
                          <BsSearch size={20} className='text-slate-200/50'/>
                      </button>
                  </form>
      
                  {weather.main && <WeatherItem weather = {weather}/>}
                  </div>
              
          </div>
        )
      }
    }

export default Weather