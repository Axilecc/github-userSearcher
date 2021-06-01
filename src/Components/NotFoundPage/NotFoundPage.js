import React from 'react';
import searchImage from '@assets/images/user.png';
import s from './NotFoundPage.module.css';

export const NotFoundPage = () => {
    return (
        <div className={ s.info }>
            <img className={ s.image } src={ searchImage } alt='search_image'/>
            <p className={ s.notFound }>User not found</p>
        </div>
    )
}