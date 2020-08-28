import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        return (
            <div>
                <div className="ing" onClick={(e) => this.props.stackBurger(e)}>{this.props.name}</div>
            </div>
        );
    }
}

export default Ingredient;