import 'bulma/css/bulma.css'

import authClient from 'api/authClient';
import icon from 'assets/music.webp';

import OptionsWithNoUser from './OptionsWithOutUser';
import OptionsWithUser from './OptionsWithUser';
import React, { useState } from 'react';

const Nav = () => {

    const [active, setActive] = useState(false);

    let menuClasses = 'navbar-menu';
    let burgerClasses = 'navbar-burger burger';

    if(active) {
        menuClasses += ' is-active';
        burgerClasses += ' is-active';
    }

    return (
        <div className='navbar-wrapper navbar-wrapper-custom'>  
            <nav className='navbar ' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand navbar-brand-custom' >

                    <div className='navbar-brand-inner' onClick={() => window.location.pathname='/'} >
                        <img src={icon} alt='logo' width='40px' />
                        <h5 className='subtitle has-text-weight-normal' style={{margin: '0 5px'}}>Party Q</h5>
                        <img src={icon} alt='logo' width='40px' />
                    </div>

                    <a onClick={() => setActive(!active)} role='button' className={burgerClasses} aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>

                
                <div id='navbarBasicExample' className={menuClasses} style={{marginLeft: '5px'}}>
                    <div className='navbar-start'>
                        <a href='/about' className='navbar-item'>
                            About
                        </a>

                        <a href='/how-to-use' className='navbar-item'>
                           How to Use
                        </a>

                        <a href='/faq' className='navbar-item'>
                           FAQ
                        </a>
                </div>

                <div className='navbar-end'>
                    <div className='navbar-item'>

                        <div className='buttons'>
                            {authClient.isLoggedIn() ? <OptionsWithUser logout={authClient.logout} /> : <OptionsWithNoUser/>}
                        </div>
                        
                    </div>
                </div>
            </div>
    
            </nav>
        </div>
    );
}



 
export default Nav;