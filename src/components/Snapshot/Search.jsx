import classes from "./Search.module.css"
import Button from "../UI/Button"

const Search = () => {
    return <div className={classes["snapshot-search"]}>
        <input type="text" placeholder="Search"/>
        <Button className={classes["search-btn"]}>&#x1F50D;</Button>
    </div>
}

export default Search