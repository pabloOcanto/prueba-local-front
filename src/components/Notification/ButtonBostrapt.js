import React from 'react';

const Button = ({addArea,props})=>(
    <>
    <button
    type="button"
    className="btn btn-primary text-center px-4"
    onClick={addArea}
    >Add
    <i className="fa fa-plus-circle" aria-hidden="true" />
    </button >
    
    <br/>
    <br/>

    </>
);

export default Button;