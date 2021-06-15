import React, {useState} from 'react';
import s from './Paginator.module.css';

export const Paginator = ({ totalItemsCount, currentPage, 
                            amountPerPage, onPageChanged }) => {

    let pageSize = 5;
    let pagesCount = Math.ceil(totalItemsCount / amountPerPage);
    let pages = [];    

    for (let i = 1; i <=pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = pagesCount / pageSize;
    let [portionNumber, setportionNumber] = useState(1);
    let leftBorderPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightBorderPageNumber = portionNumber * pageSize;

    let lastItem = amountPerPage * currentPage;
    let firstItem = lastItem - (amountPerPage - 1);


    return (
        <div className={ s.container }>
            <span>{ firstItem } - { lastItem } of { totalItemsCount } items </span>

            { portionNumber > 1 && 
            <button onClick={ () => setportionNumber(portionNumber - 1) }>Prev</button> }

            { pages.filter( page => 
            page >=leftBorderPageNumber && page <=rightBorderPageNumber).map( page => {
                return (
                    <div key={ page } className={ s.pagesNav }>
                        <span className={ currentPage === page && s.selectedPage }
                        onClick={ () => onPageChanged(page) }>{ page }</span>
                    </div>
                )
            }) }

            { portionsCount > portionNumber && 
            <button onClick={ () => setportionNumber(portionNumber + 1) }>Next</button> }
        </div>
    )
}