import React, { useState } from 'react';
import s from './Header.module.css';
import logo  from '@assets/images/Vector.png';
import { Link, useHistory } from 'react-router-dom';

export const Header = () => {
    const history = useHistory();
    let [value, setValue] = useState('');
    
    const searchUser = async (event) => {
        if(event.key === 'Enter') {
            history.push(`/user/${value}`);
        }
    }

    return (
        <header className={s.header}>
            <div>
                <Link to='/'> <img className={s.headerLogo} src={logo} alt='logo'/> </Link>
            </div>
            <div>
                <input id='user' 
                type='text' 
                placeholder='search user' 
                onChange={e => setValue(e.target.value)} 
                onKeyPress={searchUser} 
                value={value} />
            </div>
        </header>
    )
}