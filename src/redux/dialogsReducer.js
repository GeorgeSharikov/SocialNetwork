const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const addMessage = (stateCopy) => {
    let body = stateCopy.newTextMessage
    let newMessage = {
        id: 5,
        message: body
    }
    stateCopy.MessageData.push(newMessage)
    stateCopy.newTextMessage = ''
}
const updateNewMessage = (stateCopy, message) => {
    stateCopy.newTextMessage = message
}

let initialState = {
    DialogsData: [
        {
            id: 1,
            name: 'Dimych',
            img: 'https://design-plaza.ru/images/products/5811/kvadrat-alloy-004/alloy-f-466064-c0004-w24-_1.jpg'
        },
        {
            id: 2,
            name: 'Leha',
            img: 'https://design-plaza.ru/images/products/5811/kvadrat-alloy-004/alloy-f-466064-c0004-w24-_1.jpg'
        },
        {
            id: 3,
            name: 'Armen',
            img: 'https://design-plaza.ru/images/products/5811/kvadrat-alloy-004/alloy-f-466064-c0004-w24-_1.jpg'
        },
        {
            id: 4,
            name: 'Bogden',
            img: 'https://design-plaza.ru/images/products/5811/kvadrat-alloy-004/alloy-f-466064-c0004-w24-_1.jpg'
        },
        {
            id: 5,
            name: 'Antony',
            img: 'https://design-plaza.ru/images/products/5811/kvadrat-alloy-004/alloy-f-466064-c0004-w24-_1.jpg'
        },
        {
            id: 6,
            name: 'Alina',
            img: 'https://design-plaza.ru/images/products/5811/kvadrat-alloy-004/alloy-f-466064-c0004-w24-_1.jpg'
        },
        {
            id: 7,
            name: 'Senia',
            img: 'https://design-plaza.ru/images/products/5811/kvadrat-alloy-004/alloy-f-466064-c0004-w24-_1.jpg'
        }
    ],
    MessageData: [
        {id: 1, message: 'Hello, my name is George i lives in Russia i want be a programmer!!!'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'yo'}
    ],
    newTextMessage: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let stateCopy = {
                ...state,
                MessageData: [...state.MessageData]
            }
            addMessage(stateCopy)
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state}
            updateNewMessage(stateCopy, action.message);
            return stateCopy
        }
        default : {
            return state
        }
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE, message: message
})