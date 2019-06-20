import React from 'react';

const Message = (props) => {
    return(
        <div>
            <h1>This is a BIG message</h1>
            <button onClick={props.click}>Toggle Person</button>
        </div>
    );
};

export default Message;