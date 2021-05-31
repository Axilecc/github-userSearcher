import React from 'react';
import searchImage from '../../Images/user.png'
import s from './NotFoundPage.module.css'
export const NotFoundPage = () => {
    return (
        <div className={s.info}>
            <div className={s.image}>
                <img className={s.image} src={searchImage} alt='search_image'></img>
            </div>
            <div>
                <p>User not found</p>
            </div>
        </div>
    )
}