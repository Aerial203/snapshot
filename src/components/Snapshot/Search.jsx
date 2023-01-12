import { useState } from "react"
import classes from "./Search.module.css"
import axios from "axios"
import Gallery from "./Gallery"

const Search = (props) => {
    const [inputVal, setInputVal] = useState("")
    const [photoData, setData] = useState([])
    
    const handleClick = async () => {
      const unsplashApiKey = "kD6bg6ODy5afg3l2Z98gw9K9eeku8qv8MUR8F1a3u6Y"
      const tags = inputVal
      const url = `https://api.unsplash.com/search/collections?page=1&query=${tags}&client_id=${unsplashApiKey}`
      const response = await axios.get(url)
      const data = await response.data
      setData(data.results)
      setInputVal("")
    }

  const handleInput = (e) => {
    setInputVal(e.target.value)
  }


    return <>
    <div className={classes["snapshot-search"]}>
        <input type="text" placeholder="Search" onChange={handleInput} value={inputVal}/>
        <button className={classes["search-btn"]} onClick={handleClick}>&#x1F50D;</button>
    </div>
    <Gallery photoData={photoData}/>
    </>
}

export default Search