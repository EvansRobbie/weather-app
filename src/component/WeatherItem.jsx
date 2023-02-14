import React from 'react'

const WeatherItem = ({weather}) => {
    // console.log(weather)
    const weatherElement = weather.weather.map((item)=>{
        const {id, main, icon} = item
        return(
            <div key={id}>
                <div className='flex items-center flex-col'>
                    <img
                    className='w-[80px] h-[80px]'
                     src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                     alt="weathericon " />
                     <p className='text-slate-200 text-base font-semibold'>{main}</p>
                </div>
                
            </div>
        )
    })
    return (
        <div className='relative max-w-[500px] mx-auto w-full h-[85vh] flex flex-col justify-between'>
            <div className='flex h-full w-full justify-between py-4'>
                {weatherElement}
                {/* convert kelvin to degree celcius -273.15 */}
                <p className='text-slate-200 text-6xl my-7 mx-2 '>{(weather.main.temp-273.25).toFixed(0)}&#176;</p>
            </div>
            <div className='bg-slate-900/70 rounded-sm flex flex-col h-auto w-full justify-between '>
                <p className='text-center text-slate-200 py-4 text-lg font-medium'>Weather in {weather.name} </p>
                <div className='flex items-center justify-between w-full px-4 py-8'>
                    <div className='text-slate-200'>
                    <p className='font-bold'>{weather.main.feels_like.toFixed(0)-273.25}&#176;</p>
                    <h1 className='font-medium'>Feels like</h1>
                    </div>
                    <div className='text-slate-200'>
                    <p className='font-bold'>{weather.main.humidity.toFixed(0)}%</p>
                    <h1 className='font-medium'>Humidity</h1>
                    </div>
                    <div className='text-slate-200'>
                    <p className='font-bold'>{weather.wind.speed.toFixed(0)} MPH</p>
                    <h1 className='font-medium'>Wind</h1>
                    </div>
                </div>
            </div>
            {/* {main.map((item, index)=>console.log(item))} */}
        </div>

    )
}
export default WeatherItem