import classes from "./Navigation.module.css"

const Navigation = (props) => {
    const handleLogout = () => {
        props.onLogout()
    }
    return <nav className={classes["nav-bar"]}>
        <div className={classes["nav-bar__nav-brand"]}>Snapshot</div>
        {
            (props.isAddLogout.username && props.isAddLogout.password) &&  <div className={classes['nav-bar__link']}>
            <img src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg" alt="img-profile" className={classes.round}/>
            <a className={classes['nav-bar__nav-link']} onClick={handleLogout}><span>Logout</span></a>
        </div>
        }
</nav>
}

export default Navigation