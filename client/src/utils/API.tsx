import axios from 'axios'

const BASE_URL = `http://localhost:8080`

const API = {
    getAllNotes: () => axios.get(`${BASE_URL}/api/notes`),
    getPinnedNotes: () => axios.get(`${BASE_URL}/api/notes/pinned`),
    createNewNote: (title:String,category:String,pinned:Boolean,content:String) =>
        axios.post(`${BASE_URL}/api/notes`, {
            title: title,
            category: category,
            pinned: pinned,
            content: content}),
    updateNote: (_id:String,title:String,category:String,pinned:Boolean,content:String) =>
        axios.put(`${BASE_URL}/api/notes`, {
            _id: _id,
            title: title,
            category: category,
            pinned: pinned,
            content: content,
        }),
    deleteNote: (_id:String) => axios.delete(`${BASE_URL}/api/notes`,{
        headers: {'Content-Type': 'application/json'},
        data: {_id: _id}
    }),
    deleteAllNotes: (category:String) => axios.delete(`${BASE_URL}/api/notes`, {
        headers: {'Content-Type': 'application/json'},
        data: {category: category}
    }),
    getAllCategories: () => axios.get(`${BASE_URL}/api/categories`),
    createNewCategory: (name:String) => axios.post(`${BASE_URL}/api/categories`, {name: name}),
    updateCategory: (name:String) => axios.put(`${BASE_URL}/api/categories`, {name: name}),
    deleteCategory: (_id:String) => axios.delete(`${BASE_URL}/api/categories`, {
        headers: {'Content-Type': 'application/json'},
        data: {_id: _id}
    })
}

export default API