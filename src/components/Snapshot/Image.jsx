import classes from "./Image.module.css"

const Image = (props) => {
    return <div className={classes["img-div"]}>
        <img src={props.url} alt={props.alt} className={classes.img} />
    </div>
}

export default Image