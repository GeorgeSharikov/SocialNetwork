const url = 'https://design-plaza.ru/images/products/5811/kvadrat-alloy-004/alloy-f-466064-c0004-w24-_1.jpg'
let initialState = {
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
            img: url
        },
        {
            id: 2,
            name: 'Leha',
            img: url
        },
        {
            id: 3,
            name: 'Armen',
            img: url
        }
     ]
}

export const navBarReducer = (state = initialState, action) => {
    return state
}