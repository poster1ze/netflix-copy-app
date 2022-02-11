import React, {useRef} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../services/firebase';
import classes from './SignInPage.module.css';


export const SignInPage = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const register = (event) => {
        event.preventDefault()

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }


    const signIn = (event) => {
        event.preventDefault()

       signInWithEmailAndPassword(
           auth,
           emailRef.current.value,
           passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className={classes.SignInPage}>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder={"Email"} type={"email"}/>
                <input ref={passwordRef} placeholder={"Password"} type={"password"}/>
                <button type={"submit"} onClick={signIn}>
                    Sign In</button>

                <h4>
                    <span className={classes.SignInPageGray}>New to Netflix? </span>
                    <span className={classes.SignInPageLink} onClick={register}>
                        Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}