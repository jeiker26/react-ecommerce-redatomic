import React, { PropTypes, Component } from 'react';
import ItemResult from './result_item';

const Result = (props) => {
    const { items } = props;
    const resultItems = items.map( item =>
        <ItemResult key={ item.actor } item={ item } />
    );
    return (
        <div className="search-results">
            <table>
                <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Actor</th>
                    <th className="center">Temporadas</th>
                    <th className="center">Vivo</th>
                </tr>
                </thead>
                <tbody>
                { resultItems }
                </tbody>
            </table>
        </div>
    )
};

Result.propTypes = {
    items: PropTypes.array
}

export default Result;