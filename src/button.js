import React from "react";
import './Button.css'

const STYLES =['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn-large', 'btn--mobile', 'bbtn--wide'];

const COLOR = ['primary', 'blue', 'red', 'green'];

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonStyle,
    buttonColor

}) => {
    return (
        <button className={`btn ${checkButttonStyle} ${checkButtonSize} ${checkButtonColor} `}>{children}</button>
    )
};