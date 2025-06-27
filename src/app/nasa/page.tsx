'use client';

import React, { useEffect, useState } from 'react'

export default function nasa() {

  const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

  const [picOfDay, setPicOfDay] = useState("")
  const [desc, setDesc] = useState("")



  useEffect(()=> {
    const fetchNasaPod = async ()=>{
      try{
        let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        if(response.ok){
          let data = await response.json();
          console.log("data: ", data)
          setPicOfDay(data.hdurl)
        } 
      } catch(e) {
        console.error("Error calling NASA API: ", e)
      }
    }

    fetchNasaPod();
  }, [])


  return (
    <div>

      <h1>
      NASA Pic of the Day
      </h1>


      { 

        picOfDay ?
        (<img src={picOfDay} alt='Nasa Picture of the Day' width="250px" height="auto"/>):
        (<h4>fetching image...</h4>)

      }


    
    </div>
  )
}
