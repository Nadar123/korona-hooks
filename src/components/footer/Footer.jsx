import React, {Fragment} from 'react';
import image from '../../images/covid-19.png';
import './footer.scss';

const Footer = () => {
  return (
    <Fragment>
      <img className="footer-logo" src={image} alt=""/>
    </Fragment>
  )
}

export default Footer
