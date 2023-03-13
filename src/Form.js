import { useState } from 'react';
import './Form.css';

export const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };
    
    const onSubmitHandler = () => {
        alert(
            `Username: ${username} 
            Password: ${password}`
        )
    };

    const onResetHandler = () => {
        setUsername("");
        setPassword("");
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1>Login</h1>
                <input type="text" placeholder="username" onChange={usernameHandler} value={username}></input>
                <input type="text" placeholder="password" onChange={passwordHandler} value={password}></input>
                <button id="login" onClick={onSubmitHandler}>login</button>
                <button id="reset" onClick={onResetHandler}>reset</button>
            </div>
        </div>
    );
} 