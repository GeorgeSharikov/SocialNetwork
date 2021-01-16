import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dailogs/DialogsContainer";
import NavBarContainer from "./Components/Navbar/NavbarContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import UrlDataComponent from "./Components/Profile/ProfileContainer";
import { HeaderContainerConnect} from "./Components/Header/HeaderContainer";
import Login from "./Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainerConnect/>
                <NavBarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/login'} render={() => <Login />}/>
                    <Route  path = "/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />}/>
                    <Route path = "/profile/:userId?" render={() => <UrlDataComponent/>}/>
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


