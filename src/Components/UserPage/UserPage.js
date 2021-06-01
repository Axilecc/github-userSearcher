import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Preloader } from '../../Common/Preloader/Preloader';
import { useHttp } from '../../Hooks/http.hook';
import { UserData } from './UserData/UserData';
import { Redirect } from 'react-router-dom';
import { RepositoriesPage } from './RepositoriesPage/RepositoriesPage';
import s from './UserPage.module.css';


export const UserPage = () => {
    const { currentPage, loading, onPageChanged, request } = useHttp();
    const [userData, setUserData] = useState('');
    const [repos, setRepos] = useState('');
    const userId = useParams().userId;
    const amountPerPage = 4;


    useEffect(() => {
        const getUserData = async() => {
            const data = await request(`https://api.github.com/users/${userId}`);
            if(!data) {
                return <Redirect to={'/notfound'} />
            }
            setUserData(data);
        }
        getUserData();
        const getRepos = async() => {
            const data = await request(`https://api.github.com/users/${userId}/repos?page=${currentPage}&per_page=${amountPerPage}`);
            setRepos(data);
        }
        getRepos();
    }, [amountPerPage, currentPage, userId, request])

    if (loading) {
       return <Preloader />
    }

    return (
       <div className={s.container}>
            <div className={s.userData}>
                {!loading && userData && <UserData 
                followers={userData.followers}
                userLink={userData.html_url}
                following={userData.following}
                name={userData.name}
                login={userData.login}
                url={userData.avatar_url}/>}
            </div>
            <div className={s.repos}>
                {!loading && repos && <RepositoriesPage 
                amountPerPage={amountPerPage}
                currentPage={currentPage} 
                onPageChanged={onPageChanged}
                repCount={userData.public_repos} 
                repos={repos}/> }
            </div>
       </div>
    )
}