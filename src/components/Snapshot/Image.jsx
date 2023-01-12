import classes from "./Image.module.css"

const Image = (props) => {
    const handleClick = () => {
        console.log("clicked")
    }

    return <div className={classes["img-div"]}>
        <img src={props.url} alt={props.alt} className={classes.img} onClick={handleClick}/>
    </div>
}

export default Image