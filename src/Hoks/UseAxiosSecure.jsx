import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL: 'https://assignment-11-solution-server.vercel.app',
    withCredentials: true
});
const UseAxiosSecure = () => {
    const {handleSingOut,setUser}=useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        }, error =>{
            if(error.status === 401 || error.status === 403){
               toast.error('need to logout the user')
               handleSingOut()
               setUser(null)
              .then(()=>{
                navigate('/login')
              })
              .catch((error)=>{
                console.log(error);
              })
            }
            return Promise.reject(error)
        })
    },[])
    return axiosInstance
};

export default UseAxiosSecure;