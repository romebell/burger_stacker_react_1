import React from 'react';
import Ingredient from './Ingredient';

class BurgerStack extends Component {
    render() {
        // Render all added ingredients
        const allIngredients = this.props.stack.map((ingred, index) => {
            return <Ingredient key={`in-${index}`} name={ingred.name} color={ingred.color} />;
        });
        return (
            <div>
                {allIngredients}
            </div>
        );
    }
}

export default BurgerStack;