import { asset } from "../../assets/asset"
import { loginGoogle, loginEmail } from "../../config/redux/actions/authAction"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"

export default function Login({ message }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth  = useSelector((state) => state.authReducer);
    const dataLogin = auth?.dataLogin;
    
    useEffect(() => {
        if (dataLogin?.user) {
            alert("Anda sudah login")
            navigate('/')
        }
        //eslint-disable-next-line
    }, [])

    const [formInputData, setFormInputData] = useState({
        email: '',
        password: '123456'
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

    const loginWithGoogle = async () => {
        try {
            const data = await dispatch(loginGoogle());
            if(data){
                navigate('/')
                setTimeout(()=>{
                    alert('Login Successfully');
                },2000);
            } 
        } catch (error) {
            alert(error)
        }
    }
    const loginWithEmail = async (email, password) => {
        try {
            const data = await dispatch(loginEmail(email, password));
            if(data) {
                navigate('/');
                setTimeout(()=>{
                    alert('Login Successfully');
                },2000);
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <div className="signin-content bg-white">
                <img className="signin-img" src={asset.signIn} alt="" />
                <div className="signin-form">
                    <img src={asset.logo} alt="" />
                    <h1>Welcome, Admin BCR</h1>
                    {message ?
                        <div className="signin-alert">
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {message}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                        : <></>}
                    <div className="form">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="text" onChange={handleInputChange} name="email" required className="form-control" placeholder="Contoh: johndee@gmail.com atau admin@admin.com" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onChange={handleInputChange} name="password" value={formInputData.password} required placeholder="6+ karakter" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="sign-in-button">
                            <button onClick={() => loginWithEmail(formInputData.email, formInputData.password)} className="btn btn-blue w-100">Sign in</button>
                        </div>
                    </div>
                    <div className="my-3">
                        <button onClick={loginWithGoogle} className="btn btn-outlined-blue w-100">Login with Google</button>
                    </div>
                    <div className="my-3">
                        <a href="/register">Dont have an account? Register</a>
                    </div>
                </div>
            </div>
        </>
    )
}