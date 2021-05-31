import React from 'react'
import { Paginator } from '../../../Common/Paginator/Paginator'
import { Repository } from './Repository/Repository'
import { NoRepPage } from '../../NoRepPage/NoRepPage'
import s from './RepositoriesPage.module.css'

export const RepositoriesPage = (props) => {
    return (
        <div className={s.container}>
            {!props && <NoRepPage />}
            <div>
                <p className={s.repositories}>Repositories ({props.repCount})</p>
            </div>
            <div>
                {props.repos.map(r => <Repository fullname={r.name} 
                description={r.description} 
                url={r.clone_url}
                key={r.id} />)}
            </div>
            <Paginator totalItemsCount={props.repCount} currentPage={props.currentPage} 
            onPageChanged={props.onPageChanged} amountPerPage={props.amountPerPage}/>
        </div>
    )
}