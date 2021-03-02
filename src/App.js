import React, {useEffect} from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import Login from "./Login/Login";
import Dialogs from "./Components/Dailogs/Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./Components/Header/Header";
import {appInitialize} from "./redux/appReducer";
import Preloader from "./Components/common/preloader";
import {Users} from "./Components/Users/Users";
import {Profile} from "./Components/Profile/Profile";
import {Navbar} from "./Components/Navbar/Navbar";

function App() {
    const dispatch = useDispatch()
    const isInitialize = useSelector(state => state.app.isInitialization)

    useEffect(() => {
        dispatch(appInitialize())
    }, [dispatch])

    if(!isInitialize){
        return <Preloader />
    }
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/login'} render={() => <Login />}/>
                    <Route  path = "/dialogs" render={() => <Dialogs />}/>
                    <Route path="/users" render={() => <Users />}/>
                    <Route path = "/profile/:userId?" render={() => <Profile/>}/>
                    <Route path = "/music" render={() => <Music/>}/>
                    <Route path = "/news" render={() => <News/>}/>
                    <Route path = "/settings" render={() => <Settings/>}/>
                    <Route path = "/friends" render={() => <Friends/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;


