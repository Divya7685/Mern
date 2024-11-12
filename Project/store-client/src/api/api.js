
import axios from 'axios'


const API = 'http://localhost:3000'


const getProducts = () => axios.get(`${API}/products/all`)
const getOrders = () => axios.get(`${API}/orders/all`)
const getUsers = () => axios.get(`${API}/users/all`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)

const deleteProduct=(id)=>axios.delete(`${API}/products/delete/${id}`)
const Login = (data) => axios.post(`${API}/auth/login`, data)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)


export { getProducts,getOrders,getUsers,Login, Register, addProduct,deleteProduct }