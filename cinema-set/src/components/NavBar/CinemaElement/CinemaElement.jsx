import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CinemaElement.module.css'

function CinemaElement(props) {
  return <div>
  {
      props.state.cinemasList.map( (el) => {
          return(
            <div className={styles.cinemaName}>{el.cinema_name}</div>

          )
      })
  }

</div>;
}

export default CinemaElement;
