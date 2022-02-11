import React from "react";
import {useSelector} from "react-redux";
import classes from './ProfilePage.module.css';
import {Nav} from "../HomePage/Nav/Nav";
import {auth} from "../../services/firebase";

export const ProfilePage = () => {
    const user = useSelector(state => state.user.user)

    return (
        <div className={classes.ProfilePage}>
            <Nav />
            <div className={classes.ProfilePageBody}>
                <h1>Edit Profile</h1>
                <div className={classes.ProfilePageInfo}>
                    <img src={"https://i.pinimg.com/474x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"} />
                    <div className={classes.ProfilePageDetails}>
                        <h2>{user.email}</h2>
                        <div className={classes.ProfilePagePlans}>
                            <h3>Plans</h3>
                            <button
                                onClick={() => auth.signOut()}
                                className={classes.ProfilePageSignOut}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}