import React from 'react';
import { Paginator } from '../../../Common/Paginator/Paginator';
import { Repository } from './Repository/Repository';
import { NoRepPage } from '../../NoRepPage/NoRepPage';
import s from './RepositoriesPage.module.css';

export const RepositoriesPage = ({ repos, repCount, currentPage, amountPerPage, onPageChanged}) => {
    
    if(repos.length === 0) {
        return <NoRepPage />
    }

    return (
        <div className={s.container}>        
            <div>
                <p className={s.repositories}>Repositories ({repCount})</p>
            </div>
            <div>
                {repos.map(r => <Repository 
                fullname={r.name} 
                description={r.description} 
                url={r.clone_url}
                key={r.id} />)}
            </div>
            <Paginator totalItemsCount={repCount} 
            currentPage={currentPage} 
            onPageChanged={onPageChanged} 
            amountPerPage={amountPerPage}/>
        </div>
    )
}