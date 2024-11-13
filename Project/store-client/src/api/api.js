
import axios from 'axios'


const API = 'http://localhost:3000'


const getProducts = () => axios.get(`${API}/products/all`)
const getOrders = () => axios.get(`${API}/orders/all`)
const getUsers = () => axios.get(`${API}/users/all`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const addUser = (user) => axios.post(`${API}/users/add`, user)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const addOrder = (order) => axios.post(`${API}/orders/add`, order)

const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`)
const Login = (data) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)


export { getProducts, getOrders, getUsers, Login, Register, addProduct,editProduct, deleteProduct, addUser, deleteUser,editUser, addOrder, deleteOrder }