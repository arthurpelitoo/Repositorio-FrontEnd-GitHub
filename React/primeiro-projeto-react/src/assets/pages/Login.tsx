import './Login.css'
import MyInput from '../../components/MyInput'
import MyButton from '../../components/MyButton'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(){

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loginFail, setLoginFail] = useState(false); 

    const navigate = useNavigate();

    const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleOnClick = () => {
        if(user === "usuario" && password === "senha"){
            navigate("/Firstpag");
        } else{
            setLoginFail(true);
            setUser("");
            setPassword("");
            alert("Usuario ou senha incorreto!")
            setLoginFail(false);
        }
    }

    return(
        <> 
            <div className='body'>
                    <form className='DoisReaisOuUmaCaixaMisteriosa'>
                        <div className='Title'>
                            <h1>Insira seus Dados de Login</h1>
                        </div>
                            <div className='caixaspai'>
                                <div className='caixauser'>
                                    <MyInput class="user" type="text" placeholder='digite seu usuario' onChange={handleUserOnChange} value={loginFail ? "": user}/>
                                </div>
                                <div className='caixapassword'>
                                    <MyInput class="password" type="password" placeholder='senha' onChange={handlePasswordOnChange} value={loginFail ? "": password}/> 
                                </div>
                            </div>

                            <div className='butaum'>
                                <MyButton class="botao" onClick={handleOnClick}><p>Fazer Login</p></MyButton>
                            </div>
                    </form>
            </div>
        </>

    )
}

export default Login