import React from 'react';

const Inputbox = ({value, onChange}) => {
    return (
        <div>
            <input id='input' value={value} onChange={onChange}></input>
        </div>
    );
};

export default Inputbox;