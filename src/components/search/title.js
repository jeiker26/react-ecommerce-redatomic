import React, { PropTypes } from 'react';

const Title = ({ title }) => (
    <div className="search-title">
        <div className="row">
            <h1>{ title }</h1>
        </div>
    </div>
);

Title.propTypes = {
    title: PropTypes.string
}

Title.defaultProps = {
    title: "Buscador..."
}

export default Title;