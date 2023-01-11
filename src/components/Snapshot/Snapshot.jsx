// import { useEffect } from "react"
import Search from "./Search"
import classes from "./Snapshot.module.css"
import Gallery from "./Gallery"
import { BrowserRouter } from "react-router-dom"
import ManageRoute from "./ManageRoute"

const Snapshot = () => {
    
    return <div className={classes.snapshot__img}>
        <Search />
        <BrowserRouter>
            <ManageRoute />
        </BrowserRouter>
        <Gallery />
    </div>
}

export default Snapshot