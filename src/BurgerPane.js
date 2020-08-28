import React, { Component, useState } from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

function BurgerPane(props) {
    return (
        <div>
            <BurgerStack stack={props.stack}/>
            <ClearBurger clear={props.clear}/>
        </div>
    );
}

export default BurgerPane;