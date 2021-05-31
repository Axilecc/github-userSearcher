import React from 'react'
import s from './Repository.module.css'

export const Repository = (props) => {
    return (
        <div className={s.info}> 
            <a href={`${props.url}`} target='_blank' rel="noreferrer">
                <span className={s.fullname}>{props.fullname}</span></a>
            <br/>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}