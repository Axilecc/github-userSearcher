import React from 'react'
import followers from '../../../Images/followers.png'
import following from '../../../Images/following.png'
import s from './UserData.module.css'

export const UserData = (props) => {
    return (
        <div className={s.container}> 
            <div className={s.avatar}>
                <img src={props.url} alt='user_avatar'/>
            </div>
            <div className={s.about}>
                <span className={s.name}>{props.name}</span>
                <br />
                <span className={s.login}><a href={`${props.userLink}`} target='_blank' rel='noreferrer'>{props.login}</a></span>
                <p className={s.follow}>
                    <span>
                        <img src={followers} alt='followers_icon'/>
                        {props.followers} followers 
                    </span>
                    <span>
                        <img src={following} alt='following_icon'/>
                        {props.following} following
                    </span>
                </p>
            </div>
        </div>
    )
}