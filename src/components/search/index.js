/**
 * Created by jesus on 7/12/16.
 */
import React, { Component, PropTypes } from 'react';
import Title from './title';
import ResultSearch from './resultSearch';
import Result from './result';
import Form from './form';
import Data from '../../data/got';

function search(filter, characters) {
    const regex = new RegExp(filter.name, 'i');
    return characters.filter( c => {
        return (
            // name
            (regex.test(c.name) || regex.test(c.actor)) &&
            // family
            (!filter.family || c.family === filter.family) &&
            // seasons
            (!filter.seasons.length || filter.seasons.every(x => c.seasons.indexOf(x) !== -1)) &&
            // alive
            (!filter.aliveOnly || c.alive)
        )
    });
}

function extractFamilyNames(characters) {
    return characters.reduce((acc, c) => {
        if(acc.indexOf(c.family) === -1) {
            acc.push(c.family);
        }
        return acc;
    }, []).sort();
}

function extractSeasons(characters) {
    return characters.reduce((acc, c) => {
        c.seasons.forEach( n => {
           if(acc.indexOf(n) === -1) {
               acc.push(n);
           }
        });
        return acc;
    }, []);
}

class SearchGot extends Component {
    constructor() {
        super();
        this.state = {
            characters: Data.characters,
            familyNames: extractFamilyNames(Data.characters),
            allSeasons: extractSeasons(Data.characters),
            filter: {
                name: '',
                family:'',
                seasons: [],
                aliveOnly: false
            }
        }

        this.handleQueryChange = this.handleQueryChange.bind(this);
    }

    handleQueryChange(change) {
        const newFilter = Object.assign({}, this.state.filter, change);
        const characters = search(newFilter, Data.characters);

        this.setState({
            filter: newFilter,
            allSeasons: extractSeasons(characters),
            familyNames: extractFamilyNames(characters),
            characters
        });
    }


    render() {
        // const characters = search(this.state.filter, this.state.characters);
        const { characters } = this.state;
        return (
            <div className="search-engine">
                <Title title="Buscador juego de tronos"/>
                <Form
                    familyNames={ this.state.familyNames }
                    allSeasons={ this.state.allSeasons }
                    filter={ this.state.filter }
                    onQueryChange={ this.handleQueryChange }
                />
                <Result items={ characters }/>
                <ResultSearch totalSearch={ characters.length } />
            </div>
        )
    }
}

export default SearchGot;
