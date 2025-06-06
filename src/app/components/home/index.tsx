'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import planets from 'npm-solarsystem';



export default function Index() {

    const router = useRouter();;
    const [planet, setPlanet] = useState("");
    const [allPlanets, setAllPlanets] = useState([]);

    useEffect(()=> {
        setAllPlanets(planets.getPlanets())
    }, [])    

    const handleSearch = (e: React.FormEvent) => { 
        e.preventDefault();

        console.log(planets.getPlanets())

        if(!planet || planet == ""){
            return;
        }

        // router.push(`/planet/${planet}`)
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
      </div>
    )
  }