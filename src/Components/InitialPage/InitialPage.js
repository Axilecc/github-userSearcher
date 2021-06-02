import React from 'react';
import searchImage from '@assets/images/search.png';
import s from './InitialPage.module.css';

export const InitialPage = () => {
    return (
        <div className={ s.info }>
            <div>
                <img className={ s.image } src={ searchImage } alt='search_image'/>
                <p className={ s.search } >Start with searching a GitHub user</p>
            </div>
        </div> 
    )
}