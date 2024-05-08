import axios from "axios";

const apiBlog = axios.create({
    baseURL: 'http://127.0.0.1:3000/blog/v1',
    timeout: 5000
})

export const getComent = async (data) => {
    try{
        return await apiBlog.get('/api/coment', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const postComent = async (data) => {
    try{
        return await apiBlog.post('/api/coment', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const deleteComent = async (data) => {
    try{
        return await apiBlog.delete('/api/coment', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

