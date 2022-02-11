import React, {useEffect} from "react";
import {HomePage} from "./components/HomePage/HomePage";
import {LoginPage} from "./components/LoginPage/LoginPage";
import {ProfilePage} from "./components/ProfilePage/ProfilePage";
import classes from './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "./services/firebase";
import {useDispatch, useSelector} from "react-redux"
import {login, logout} from "./redux/slice";



export const App = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email
                    })
                )
            } else {
                dispatch(logout())
            }
        })

        return unsubscribe
    }, [dispatch])

    return (
      <div className={classes.App}>
          <BrowserRouter>
              {!user ? (
                  <LoginPage />
              ) : (
                  <Routes>
                      <Route path={"/profile"} element={<ProfilePage />} />
                      <Route path={"/"} element={<HomePage />} />
                  </Routes>
              )}
          </BrowserRouter>
      </div>
  )
}