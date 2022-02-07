import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CinemaElement from './CinemaElement/CinemaElement';
import styles from './NavBar.module.css';

function NavBar() {

    const dispatch = useDispatch()

    const state = useSelector( state => state.NavBarReducer)

    useEffect(() => {
    
        axios.get('http://192.168.31.37:8080/api/cinemas').then( (res) => {
            let data = res.data
            dispatch({type: "GET-CINEMAS", cinemasList: data})
        }
        )
    }, []);
    

    if (state.cinemasList != null){
        return(
            <div>
                <h2 className={styles.header}>Список Кинотеатров</h2>
                <CinemaElement state={state}/>
            </div>
        )
    }
    else{
        return(
            <div>Not</div>
        )
        
    }
}

export default NavBar;
