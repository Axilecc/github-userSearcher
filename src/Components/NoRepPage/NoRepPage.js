import React from 'react';
import noRepImage from '@assets/images/Union.png';
import s from './NoRepPage.module.css';

export const NoRepPage = () => {
    return (
        <div className={ s.info }>
            <img className={ s.image } src={ noRepImage } alt='search_image' />
            <p className={ s.empty }>Repository list is empty</p>
        </div>
    )
}