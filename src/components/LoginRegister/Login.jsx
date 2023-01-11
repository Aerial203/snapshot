import { useState } from "react"
import Button from "../UI/Button"
import classes from "./Styles.module.css"
import Card from "../UI/Card"

const Login = (props) => {
    const [userInput, setUserInput] = useState({
        username: "",
        password: "",
    })

    const handleEmail = (e) => {
        if (!e.target.value) return
        setUserInput((prevInput) => {
            return { ...prevInput, username: e.target.value }
          })
    }

    const handlePassword = (e) => {
        if (!e.target.value) return
        setUserInput(prevInp => {
            return {...prevInp, password: e.target.value}
        })
    }

    const handleForm = (e) => {
        e.preventDefault()

        if (!userInput.username && !userInput.password) return

        props.onGetData(userInput)
        setUserInput(prevInp => {
            return {...prevInp, username: "", password: ""}
        })
    }

    return <Card className={classes['form-div']}>
        <form 
        onSubmit={handleForm} 
        className={
            `${classes["form-control"]} 
            ${(!(props.isValid.username && props.isValid.password) && !props.isValid.isFirst) && classes["invalid"]
            }`
            }>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={userInput.username} 
            placeholder="email" 
            onChange={handleEmail} />

            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password"
            value={userInput.password} 
            placeholder="password" 
            onChange={handlePassword} /><br />

            <Button type="submit">Login</Button>
        </form>
    </Card>
}

export default Login