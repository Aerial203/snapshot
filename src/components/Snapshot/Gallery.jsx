import Image from "./Image"
import classes from "./Gallery.module.css"

const Gallery = (props) => {
    let images
    if (props.photoData) {
      images = props.photoData.map(photo => {
        const url = photo.cover_photo.urls.raw
        const id = photo.id
        const title = photo.title
        return <Image url={url} key={id} alt={title} />
      })
    }
    
    return <div className={classes.gallery}>
        {images}
    </div>
}

export default Gallery