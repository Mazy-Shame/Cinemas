import React from 'react';
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
