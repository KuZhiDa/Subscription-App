import { Link } from "react-router-dom"
import "./Login.css"
import { useState } from "react"

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState<'error'|'success'|''>('')

    const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>{
        event.preventDefault();

        if(!email.trim() || !password.trim()){
            setMessageType('error')
            setMessage('Нельзя отправлять пустую строку')
            return
        }

        setMessageType('success')
        setMessage('Вход выполнен')
    }

    return(<div className="login-page">
        <div className="login-card">
            <h1>С возвращением</h1>
            <h2>Войдите в ваш аккаунт</h2>
            <form className="login-form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setEmail(event.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input id="password" name="password" type="password" value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setPassword(event.target.value)} required/>
                </div>
                <button type="submit">Войти</button>
            </form>
            {message && <p className={`login-message login-message-${messageType}`}>{message}</p>}
            <p>Нет аккаунта?<Link to="/register">Зарегистрироваться</Link></p>
        </div>
    </div>)
}

export default Login