import React from 'react'

const CreateComp = () => {
    return React.createElement(
        'h1',
        {className: 'greeting'},
        'halo dari createElement'
    );
    }

export default CreateComp