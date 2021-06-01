import React from 'react';
import searchImage from '@assets/images/search.png';
import s from './InitialPage.module.css';
export const InitialPage = () => {
    return (
        <div className={s.info}>
            <div className={s.image}>
                <img className={s.image} src={searchImage} alt='search_image'></img>
            </div>
            <div>
                <p>Start with searching a GitHub user</p>
            </div>
        </div> 
    )
}