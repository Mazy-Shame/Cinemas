import React, { useState } from 'react';
import style from './LoginUp.module.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function LoginUp() {

    const dispatch = useDispatch()

    const getUsers = () => {
        axios.get('http://192.168.31.37:8080/api/users').then( res => {
            let data = res.data
            dispatch({type:"GET-USERS", users:data})
        })
    }

    useEffect(() => {
        getUsers()
    }, []);

    
    const state = useSelector(state => state)

    const [isClick, setisClick] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    async function loginIn(event) {
    event.preventDefault()

    let Name 

    if (isClick){
        setisClick(false)
    }
    else{
        setisClick(true)
    }


    state.UserReducer.allUsers.forEach( (el) => {
        if (el.login == email && el.password == password){

            Name = el.login
            dispatch({type: "SET-LOGIN", name: Name})
        }
    })
    }


    const logBtnOn = () => {
        if (isClick){
            setisClick(false)
        }
        else{
            setisClick(true)
        }
    }

    const unLogin = () => {
        dispatch({type:"LOGIN-OUT"})
    }

    if (state.UserReducer.isLogin){
        return(
            <div>
                <button className={style.dropbtn} disabled >{state.UserReducer.userLogin}</button>
                <button className={style.exitbtn} onClick={() => unLogin()} >LoginOut</button>
            </div>
        )
    }
    else{
    return(
      <div>
        <div className={style.dropdown}>
        
        {isClick? 
        <div>
            <button className={style.dropbtn} onClick={() => logBtnOn()} disabled={state.UserReducer.isLogin}>{state.UserReducer.userLogin}</button>

            <div className={style.logform}>

            <form onSubmit={loginIn}>
            <input name="" id="" className={style.mail} onChange={(event) => setemail(event.target.value)} value={email} placeholder="Введите логин"/>
            <input type="password" name="" id="" className={style.password} onChange={(event) => setpassword(event.target.value)} value={password} placeholder="Введите пароль"/>
            <button className={style.sendbtn}>Login In</button>
            </form>
            </div>

        </div>
        : 
        <button className={style.dropbtn} onClick={() => logBtnOn()} disabled={state.UserReducer.isLogin}>{state.UserReducer.userLogin}</button>}
        
        

        </div>
      </div>
  )
}
}

export default LoginUp;
