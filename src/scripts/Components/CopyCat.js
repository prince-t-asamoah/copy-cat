import React from 'react';
import {Styles} from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const name = this.props.name;
    
    return (
      <div style={Styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {name ? name : 'Tom'}</h1>
        <input type="text" value={this.props.input} onChange={this.props.handleChange}/>
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={Styles.imgStyles}
        />
       <p>{copying && this.props.input}</p>
      </div>
    );
  };
}
CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  name: PropTypes.string
}