import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'eb5c9bee-b1cd-4d71-b3f7-42c2cc5a9c0b'
    }
})

export const apiUsers = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

}

export const apiProfile = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }
}

export const apiHeader = {
    getHeader(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    logIn(email, password, rememberMe){
        return instance.post('/auth/login', {email: email, password: password, rememberMe: rememberMe})
            .then(response => response.data)
    },
    logOut(){
        return instance.delete('/auth/login')
            .then(response => response.data)
    }
}

