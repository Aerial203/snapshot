import Image from "./Image"
import classes from "./Gallery.module.css"

const Gallery = () => {
    return <div className={classes.gallery}>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        
    </div>
}

export default Gallery