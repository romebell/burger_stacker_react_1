import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
    render() {
        const listOfIngredients = this.props.ingredients.map((ingred, idx) => {
            return <Ingredient key={idx} name={ingred} color={ingred.color} stackBurger={this.props.stackBurger} />
        });
        return (
            <div>
                {/* TODO map over ingredients list and display an ingredient component for each ingredients */}
                {listOfIngredients}
            </div>
        );
    }
}

export default IngredientList; 