import React, { useState } from 'react';
import style from './LoginUp.module.css'
import axios from 'axios';

function LoginUp() {


    const [isClick, setisClick] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [login, setlogin] = useState('Login In');
    const [isReg, setisReg] = useState(false);

    async function loginIn(event) {
    event.preventDefault()

    let Name 

    if (isClick){
        setisClick(false)
    }
    else{
        setisClick(true)
    }

    let data
    await axios.get('http://192.168.31.37:8080/api/users').then( res => {
        data = res.data
    })


    data.forEach( (el) => {
        if (el.login == email && el.password == password){

            Name = el.login
            setisReg(true)
            setlogin(Name)
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

    return(
      <div>
        <div className={style.dropdown}>
        
        {isClick? 
        <div>
            <button className={style.dropbtn} onClick={() => logBtnOn()} disabled={isReg}>{login}</button>

            <div className={style.logform}>

            <form onSubmit={loginIn}>
            <input name="" id="" className={style.mail} onChange={(event) => setemail(event.target.value)} value={email}/>
            <input type="password" name="" id="" className={style.password} onChange={(event) => setpassword(event.target.value)} value={password} />
            <button className={style.sendbtn}>Login In</button>
            </form>
            </div>

        </div>
        : 
        <button className={style.dropbtn} onClick={() => logBtnOn()} disabled={isReg}>{login}</button>}
        
        

        </div>
      </div>
  )
}

export default LoginUp;
