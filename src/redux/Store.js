import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navBarReducer} from "./navBarReducer";



export let store = {
    _state: {
        profilePage: {
            PostData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It\'s my first post!!', likesCount: 12},
            ],
            newTextPost: 'it-kamasutra'
        },
        dialogPage: {
            DialogsData: [
                {
                    id: 1,
                    name: 'Dimych',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                },
                {
                    id: 2,
                    name: 'Leha',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                },
                {
                    id: 3,
                    name: 'Armen',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                },
                {
                    id: 4,
                    name: 'Bogden',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                },
                {
                    id: 5,
                    name: 'Antony',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                },
                {
                    id: 6,
                    name: 'Alina',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                },
                {
                    id: 7,
                    name: 'Senia',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                }
            ],
            MessageData: [
                {id: 1, message: 'Hello, my name is George i lives in Russia i want be a programmer!!!'},
                {id: 2, message: 'yo'},
                {id: 3, message: 'yo'}
            ],
            newTextMessage: ''
        },
        navBar: {
            navBarItem: [
                {id: '1', path: '/profile', text: 'Profile'},
                {id: '2', path: '/dialogs', text: 'Messages'},
                {id: '3', path: '/news', text: 'News'},
                {id: '4', path: '/music', text: 'Music'},
                {id: '5', path: '/settings', text: 'Settings'}
            ],
            navBarFriends: [
                {
                    id: 1,
                    name: 'Dimych',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                },
                {
                    id: 2,
                    name: 'Leha',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                },
                {
                    id: 3,
                    name: 'Armen',
                    img: 'https://img.pngio.com/orange-background-png-101-images-in-co-599781-png-images-pngio-orange-png-background-1200_800.png'
                }
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(subscriber) {
        this._callSubscriber = subscriber
    },

    dispatch(action) {
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.navBar = navBarReducer(this._state.navBar, action)

        this._callSubscriber(this._state)
    }
}

export default store