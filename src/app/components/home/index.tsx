'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Index() {

    const router = useRouter();
    const [planet, setPlanet] = useState("")

    const handleSearch = (e: React.FormEvent) => { 
        e.preventDefault();

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
            <option>Saturn</option>
            <option>Mars</option>
            <option>Earth</option>
            <option>Jupiter</option>
        </select>
        <button type="submit">Search</button>
        </form>
      </div>
    )
  }