import React from 'react';
import s from './Repository.module.css';

export const Repository = ({ url, fullname, description }) => {
    return (
        <div className={s.info}> 
            <a href={`${url}`} target='_blank' rel="noreferrer">
                <span className={s.fullname}>{fullname}</span></a>
            <br/>
            <span className={s.description}>{description}</span>
        </div>
    )
}