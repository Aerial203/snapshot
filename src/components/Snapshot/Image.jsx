import classes from "./Image.module.css"

const Image = () => {
    return <div className={classes["img-div"]}>
        <img src="https://www.w3schools.com/css/img_lights.jpg" alt="prof-img" className={classes.img}/>
    </div>
}

export default Image