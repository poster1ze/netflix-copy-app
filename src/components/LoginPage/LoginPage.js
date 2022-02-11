import React, {useState} from "react";
import classes from './LoginPage.module.css'
import {SignInPage} from "../SignInPage/SignInPage";

export const LoginPage = () => {
    const [signIn, setSignIn] = useState(false)

    return (
        <div className={classes.LoginPage}>

            <div className={classes.LoginPageBackground}>
                <img className={classes.LoginPageLogo} src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"}/>
                <button onClick={() => setSignIn(true)}
                    className={classes.LoginPageButton}>
                    Sign In
                </button>
                <div className={classes.LoginPageGradient}/>
            </div>

            <div className={classes.LoginPageBody}>
                {signIn ? (
                    <SignInPage />
                ) : (
                    <>
                        <h1>Unlimited Films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to Watch? Enter you email to create or restart your membership.</h3>

                        <div className={classes.LoginPageInput}>
                            <form>
                                <input type={"email"} placeholder={"Email Address"}/>
                                <button onClick={() => setSignIn(true)}
                                        className={classes.LoginPageInputButton}>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}