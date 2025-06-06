import { redirect } from 'next/navigation';
import planets from 'npm-solarsystem';
import Image from 'next/image'


export default async function Planet({params}:{
  params: Promise<{planet:string}>
}) {

  const planet = (await params).planet
  const validPlanets = planets.getPlanets()

  if (!validPlanets.includes(planet)) {
    redirect('/'); 
  }

  const planetInfo = planets[`get${planet}`]();
  console.log(planetInfo);

  const {image, distanceFromSun, yearLength, description, radius, websiteLink, oneEarthDay, moons} = planetInfo;

  

  return (
    <>
      <div>Planet: {planet}</div>
      <div>Info: {description}</div>
      <Image src={image} width={500} height={500} alt={planet}/>
    </>
  )
}