'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import planets from 'npm-solarsystem';
import Image from "next/image";



export default function Index() {

    const router = useRouter();
    const [planet, setPlanet] = useState("");
    const [allPlanets, setAllPlanets] = useState([]);
    const [imageUrl, setImageUrl] = useState("")

    useEffect(()=> {
        setAllPlanets(planets.getPlanets())

        const fetchRandomImage = async () => {
            try{

                const response = await fetch(`https://picsum.photos/600/400`, {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                })

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

    const handleSearch = (e: React.FormEvent) => { 
        e.preventDefault();

        console.log(planets.getPlanets())

        if(!planet || planet == ""){
            return;
        }

        router.push(`/planet/${planet}`)
    }


    return (
      <div>
        <h1>Solar System</h1>
        <form onSubmit={handleSearch}>
        <select value={planet} onChange={(e) => setPlanet(e.target.value)}>
            <option>Select</option>
            {allPlanets.map((p)=>(
                <option key={p} value={p}>{p}</option>
            ))
            }
            
        </select>
        <button type="submit">Search</button>
        </form>
       
        { imageUrl && (
            <img src={imageUrl} />
        )
        }
      </div>
    )
  }