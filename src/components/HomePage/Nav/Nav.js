import React, {useEffect, useState} from "react";
import classes from './Nav.module.css';
import { useNavigate } from "react-router-dom";

export const Nav = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const transitionNavBar = () => {
        if( window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`${classes.Nav} ${show && classes.NavBlack}`}>
            <div className={classes.NavContent}>
                <img onClick={() => navigate("/")}
                    className={classes.NavLogo} src={"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"}/>
                <img onClick={() => navigate("/profile")}
                    className={classes.NavAvatar} src={"https://i.pinimg.com/474x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"}/>
            </div>
        </div>
    )
}