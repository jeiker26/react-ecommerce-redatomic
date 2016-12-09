import React, { Component, PropTypes } from 'react';

const SeasonsOptions = ({ season, isChecked, onChange }) => {
    return (
        <div className="season-option">
        { season }
        <input
            type="checkbox"
            name={ "s" + season }
            value={ season }
            checked={ isChecked }
            onChange={ onChange }/>
        </div>
    )
}

SeasonsOptions.propTypes = {
    season: PropTypes.number,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func
}

export default SeasonsOptions;