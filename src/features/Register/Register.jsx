import { asset } from "../../assets/asset"
import { register } from "../../config/redux/actions/authAction"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"

export default function Register() {
    const navigate = useNavigate();
    const auth  = useSelector((state) => state.authReducer);
    const dataLogin = auth?.dataLogin;
    
    useEffect(() => {
        if (dataLogin?.user) {
            alert("Anda sudah login");
            navigate('/')
        }
        //eslint-disable-next-line
    }, [])

    const [formInputData, setFormInputData] = useState({
        email: '',
        password: ''
    })
    const handleInputChange = (e) => {
        const inputFieldValue = e.target.value;
        const inputFieldName = e.target.name;
        const newInputValue = {
            ...formInputData,
            [inputFieldName]: inputFieldValue
        }
        setFormInputData(newInputValue);
    }

    const registerEmail = async (email, password) => {
        try {
            const data = await register(email, password);
            if(data){
                alert('Register email successfully. Please login with your registered email.')
                navigate('/')
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <div className="signin-content bg-white">
                <img className="signin-img" src={asset.signIn} alt="sign-in" />
                <div className="signin-form">
                    <img src={asset.logo} alt="logo" />
                    <h1>Create New Account</h1>
                    <div className="form">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="text" onChange={handleInputChange} name="email" required className="form-control" placeholder="Contoh: johndee@gmail.com" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onChange={handleInputChange} name="password" required placeholder="6+ karakter" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="sign-in-button">
                            <button onClick={()=>registerEmail(formInputData.email,formInputData.password)} className="btn btn-primary w-100">Sign Up</button>
                        </div>
                    </div>
                    <div className="my-3">
                        <a href="/login">Already have an account? Login</a>
                    </div>
                </div>
            </div>
        </>
    )
}