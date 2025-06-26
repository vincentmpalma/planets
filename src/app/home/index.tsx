'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import planets from 'npm-solarsystem';
import Image from "next/image";
import { OrbitProgress } from "react-loading-indicators";



export default function Index() {

    const router = useRouter();
    const [planet, setPlanet] = useState("");
    const [allPlanets, setAllPlanets] = useState([]);
    const [imageUrl, setImageUrl] = useState("")

    useEffect(()=> {
        setAllPlanets(planets.getPlanets())

        const fetchRandomImage = async () => {
            try{

                const response = await fetch(`https://picsum.photos/600/400`)

                if(response.ok){
                    const imageUrl = response.url;
                    console.log(imageUrl)
                    setImageUrl(imageUrl)
                } else {
                    throw Error;
                }
                

            }catch(e){
                console.error("Error with image API repsonse: ", e)
            }

        }
        fetchRandomImage();
    }, [])    



    return (
      <div>
       
        { imageUrl ? (
            <img src={imageUrl} />
        ) : (
            <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
        )
        }

      </div>
    )
  }