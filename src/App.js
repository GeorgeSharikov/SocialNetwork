import React from 'react'
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dailogs/DialogsContainer";
import NavBarContainer from "./Components/Navbar/NavbarContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route  path = "/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />}/>
                    <Route path = "/profile" render={() => <ProfileContainer/>}/>
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


