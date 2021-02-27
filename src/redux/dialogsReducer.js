const ADD_MESSAGE = 'ADD-MESSAGE'

const addMessage = (stateCopy, message) => {
    let newMessage = {
        id: 5,
        message: message
    }
    stateCopy.MessageData.push(newMessage)
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
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let stateCopy = {
                ...state,
                MessageData: [...state.MessageData]
            }
            addMessage(stateCopy, action.message)
            return stateCopy
        }
        default : {
            return state
        }
    }
}

export const addMessageCreator = (message) => ({type: ADD_MESSAGE, message})
