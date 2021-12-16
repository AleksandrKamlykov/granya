import React from 'react';
import { CatalogItem } from './CatalogItem';
import { allProducts } from "../data";
import { Element } from 'react-scroll/modules';

export const Catalog = () => {

    return (
        <Element id='catalog' name='catalog'>
            <div className='catalog'>
                {allProducts.map((elem) => <CatalogItem key={elem.article} productItem={elem} />)}
            </div>
        </Element>
    )
}