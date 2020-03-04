import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div className='contactIcons'>
                <div className='icons'>
                    <a href={'tel:3609519101'}>
                        <FontAwesomeIcon className='logo' icon='phone' />
                    </a>

                    <a href={'mailto:stevenwthornton0@gmail.com'}>
                        <FontAwesomeIcon className='logo' icon='envelope' />
                    </a>

                    <a href={'https://github.com/Stevenwthornton0'} target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon className='logo' icon={['fab', 'github']} />
                    </a>

                    <a href={'https://www.linkedin.com/in/steven-thornton-189348182/'} target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon className='logo' icon={['fab', 'linkedin']} />
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;