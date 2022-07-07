import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { getAllStarships } from '../../services/sw-api';

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
      console.log(starshipData.results)
    }
    fetchStarships()
  },[])
  return (
    <div>
      <div>
        {starships.map((starship, idx) => 
        <Link key={idx} to='/starship' state={{starship}}>
        <div className='icon-container'>
        {starship.name}
        </div>
      </Link>
      )}
    </div>
  </div>
  )
}

export default StarshipList;