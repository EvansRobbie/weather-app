import axios from 'axios'
import React,{ useState } from 'react'
import { BsSearch} from 'react-icons/bs'
import Spinner from './Spinner'
import WeatherItem from './WeatherItem'


const Weather = () => {
    const [weather, setWeather] = useState([])
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_PUBLIC_API_KEY}`
    console.log(process.env.REACT_APP_PUBLIC_API_KEY)
    const handleSubmit =(e) =>{
        e.preventDefault()
        setLoading(true)
        try{
            axios.get(url)
        .then(res =>{setWeather(res.data)})
        
        }
        catch(e){
            console.log(e.message)
        }
        setCity('')
        setLoading(false)
    }
    // useEffect (() =>{
    //     handleSubmit()
    // }, [country])
    // console.log(weather)
    if (loading){
        return <Spinner/>
    } 
    else{

        return (
          <div className='relative '>
              
              <img className='w-full h-screen object-cover ' src="https://cdn.pixabay.com/photo/2018/03/01/16/38/nature-3191091__340.jpg" alt="" />
             
                 
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