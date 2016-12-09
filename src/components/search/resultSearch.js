import React, { PropTypes } from 'react';

const ResultSearch = ({ totalSearch }) => (
    <div className="search-results-summary">
        <div className="row">
            Encontrados <span className="search-results-total">{ totalSearch }</span> personajes
        </div>
    </div>
);

ResultSearch.propTypes = {
    totalSearch: PropTypes.number.isRequired
}

export default ResultSearch;