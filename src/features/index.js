import { useEffect } from "react"
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Root(){
    const navigate = useNavigate();
    const {dataLogin} = useSelector((state)=>state.authReducer);

    useEffect(()=>{
        if(dataLogin?.user){
            if(dataLogin?.user?.email==="admin@admin.com"){
                navigate('/dashboard');
            }else{
                navigate('/home')
            }
        }else{
            navigate('/login')
        }
    })
}