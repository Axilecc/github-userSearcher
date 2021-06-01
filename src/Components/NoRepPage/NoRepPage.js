import React from 'react';
import emptyRepImage from '@assets/images/Union.png';
import s from './NoRepPage.module.css';

export const NoRepPage = () => {
    return (
        <div className={s.info}>
            <img className={s.image} src={emptyRepImage} alt='search_image'></img>
            <p className={s.empty}>Repository list is empty</p>
        </div>
    )
}