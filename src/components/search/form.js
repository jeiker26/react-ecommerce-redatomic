import React, { Component, PropTypes } from 'react';
import SeasonsOptions from './seasons_options';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSeasonChange = this.handleSeasonChange.bind(this);
        this.handleAliveChange = this.handleAliveChange.bind(this);
    }
    handleChange(e) {
        this.props.onQueryChange({
            [e.target.name]: e.target.value
        })
    }

    handleSeasonChange(e) {
        const season = parseInt(e.target.value),
            isChecked = e.target.checked;

        let newSeasonsSelected;
        if(isChecked) {
            newSeasonsSelected = this.props.filter.seasons.concat([season]);
        } else {
            newSeasonsSelected = this.props.filter.seasons.filter(x => x !== season);
        }
        this.props.onQueryChange({
            seasons: newSeasonsSelected
        });
    }

    handleAliveChange(e) {
        this.props.onQueryChange({
            aliveOnly: e.target.checked
        });
    }

    render() {
        const filter = this.props.filter;
        const familyOpstions = this.props.familyNames.map( f =>
            <option value={ f } key={ f }>{ f }</option>
        );

        const seasonsOptionsElements = this.props.allSeasons.map( s => {
            const isChecked = filter.seasons.indexOf(s) !== -1;
            return (
                <SeasonsOptions
                    key={ s }
                    season={ s }
                    isChecked={ isChecked }
                    onChange={ this.handleSeasonChange }/>
            )
        });

        return (
            <div className="search-form">
                <form>
                    <div className="row">
                        <div className="col one-half">
                            <label htmlFor="character">Actor / personaje</label>
                            <input type="text" name="name"
                                   value={ filter.name }
                                   onChange={ this.handleChange } />
                        </div>
                        <div className="col one-half">
                            <label htmlFor="family">Familia</label>
                            <select name="family"
                                    value={ filter.family }
                                    onChange={ this.handleChange } >
                                <option value="">Todas</option>
                                { familyOpstions }
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col one-half">
                            <label htmlFor="alive">Sólo personajes vivos</label>
                            <input
                                type="checkbox"
                                name="alive"
                                checked={ filter.aliveOnly }
                                onChange={ this.handleAliveChange } />
                        </div>
                        <div className="col one-half">
                            <fieldset>
                                <legend>Aparece en temporada</legend>
                                { seasonsOptionsElements }
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Form.propTypes = {
    familyNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    allSeasons: PropTypes.arrayOf(PropTypes.number).isRequired,
    filter: PropTypes.shape({
        name: PropTypes.string,
        family: PropTypes.string,
        seasons: PropTypes.arrayOf(PropTypes.number)
    }).isRequired,
    onQueryChange: PropTypes.func.isRequired
}

export default Form;