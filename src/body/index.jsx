import React, { Component, PropTypes } from 'react';
import style from './index.css';
import ImgKala from '../imgs/kala.png';

class Body extends Component {
  render() {
    return (
            <div className={style.body}>
                Body
                <img src={ImgKala} alt="" />
            </div>
    );
  }
}

Body.propTypes = {

};

export default Body;

