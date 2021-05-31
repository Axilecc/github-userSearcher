import React, {useState} from 'react';
import s from './Paginator.module.css';

export const Paginator = ({id, totalItemsCount, currentPage, amountPerPage, onPageChanged}) => {
    let pageSize = 5;
    let pagesCount = Math.ceil(totalItemsCount / amountPerPage);
    let pages = [];    

    for(let i = 1; i <=pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = pagesCount / pageSize;
    let [portionNumber, setportionNumber] = useState(1);
    let leftBorderPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightBorderPageNumber = portionNumber * pageSize;

    let lastItem = amountPerPage * currentPage;
    let firstItem = lastItem - (amountPerPage - 1);


    return <div>
        <span>{firstItem}-{lastItem} of {totalItemsCount} items </span>
        {portionNumber > 1 && 
        <button onClick={() => setportionNumber(portionNumber - 1)}>Prev</button>}

        {pages.filter(p => p >=leftBorderPageNumber && p <=rightBorderPageNumber).map((p) => {
            return <div className={s.pagesNav}>
                <span className={currentPage === p && s.selectedPage}
                onClick={() => {onPageChanged(p)}}>{p}</span>
            </div>
        })}

        {portionsCount > portionNumber && 
        <button onClick={() => setportionNumber(portionNumber + 1)}>Next</button>}
    </div>
}