import { useState, useEffect } from "react";
import { getDetails } from "../../services/sw-api";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()


useEffect(()=> {
  const fetchDetails = async () => {
    const starshipDetails = await getDetails(location.state.starship.url)
    setStarshipDetails(starshipDetails)
  }
  fetchDetails()
},[location.state.starship.url])
  return(
    <div class='icon-container'>
      {starshipDetails.name}
      <br />
      {starshipDetails.model}
      <Link to='/'>Return</Link>
    </div>

  )
}


export default StarshipDetails;