import React from 'react';
import followersLogo from '@assets/images/followers.png';
import followingLogo from '@assets/images/following.png';
import s from './UserData.module.css';

export const UserData = ({ followers, userLink, following, 
                           name, login, url }) => {
    return (
        <div className={ s.container }> 

            <div className={ s.avatar }>
                <img src={ url } alt='user_avatar'/>
            </div>
            
            <div className={ s.about }>
                <span className={ s.name }>{ name }</span>

                <br />

                <span className={ s.login }>
                    <a href={`${ userLink }`} 
                    target='_blank' 
                    rel='noreferrer'>{ login }</a>
                </span>

                <p className={ s.follow }>
                    <span>
                        <img src={ followersLogo } alt='followers_icon'/>
                        { followers } followers 
                    </span>
                    <span>
                        <img src={ followingLogo } alt='following_icon'/>
                        { following } following
                    </span>
                </p>
            </div>
        </div>
    )
}