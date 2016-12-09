/**
 * Created by jesus on 4/12/16.
 */
import React, {Component, PropTypes} from 'react';

class Saludo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this); // contexto de this correcto
    }

    handleClick(e) {
        console.log("click!");
    }

    render() {
        const { user, text } = this.props;
        return (
            <div>
                { text },
                { user.name },
                { user.age }
                <br/>
                <button onClick={ this.handleClick() }>Button</button>
            </div>
        )
    }
}

Saludo.propTypes = {
    text: PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    })
};

Saludo.defaultProps = {
    text: 'Hola mundo',
    user: {
        name: 'Jesus',
        age: 24
    }
}

export default Saludo;