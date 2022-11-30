import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import { MenuOutlined } from '@material-ui/icons';

const Header = () => {
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active);
    }

    return (
        <div className='header'>
            <a href = "/">
                <div className='logo' />
            </a>
            <div className='dropdown'>
                <div className='menu-icon'>
                    <MenuOutlined className='menu' onClick = { showMenu } />
                </div>

                <nav className={active ? "slider active" : "slider"}>
                    <ul className='ul'>
                        {/*<div className='closed'>
                            <Close className='close' onClick = { showMenu } />
                        </div>*/}

                        <li>
                            <Link to = '/home'>Home</Link>
                        </li>
                        <li>
                            <Link to = '/about'>About</Link>
                        </li>
                        <li>
                            <Link to = '/team'>Team</Link>
                        </li>
                        <li>
                            <Link to = '/roadmap'>Roadmap</Link>
                        </li>
                        <li>
                            <Link to = '/mint'>Mint</Link>
                        </li>
                        <li>
                            <Link to = '/gallery'>Gallery</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;