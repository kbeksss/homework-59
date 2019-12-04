import React from 'react';

const ToWatch = (props) => {
    return (
        <form action="#" className='ToWatch' onSubmit={props.formSubmit}>
            <input type="text" onChange={props.onChange} value={props.valToWatch}/>
            <button type='submit'>Add</button>
        </form>
    );
};

export default ToWatch;