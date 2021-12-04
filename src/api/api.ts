import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const authApi = {
    login(data: any) {
        return instance.post('/auth/login', data)
    },
    me() {
        return instance.post('auth/me')
    },
    logout() {
        return instance.delete('/auth/me')
    },
    registration(data: any) {
        return instance.post('auth/register', data)
    },
    forgot(data: any) {
        return instance.post('auth/forgot', data)
    },
    newPassword(data: any) {
        return instance.post('auth/set-new-password', data)
    },
}

export const packsApi = {
    getPacks() {
        return instance.get(`/cards/pack`)
    },
    setPage(newPage: number) {
        return instance.get(`/cards/pack?page=${newPage}`)
    },
    addPack() {
        return instance.post(`/cards/pack`)
    },
    deletePack(packId: string) {
        return instance.delete(`/cards/pack?id=${packId}`)
    },
    updatePack() {
        return instance.put(`/cards/pack`)
    }
}

export const cardsApi = {
    getCards() {
        return instance.get(`/cards/card/`)
    },
    // getUserId(user_id: string) {
    //     return instance.get(`cards/card/?user_id=${user_id}`)
    // },
    async postCard() {
        return await instance.post(`cards/card`)
    },
    async deleteCard(_id: string) {
        return await instance.delete(`cards/card?id=${_id}`)
    },
    async putCard(_id: string, question: string, answer: string) {
        return await instance.put(`cards/card`, {card: {_id, question, answer}})
    },
}















