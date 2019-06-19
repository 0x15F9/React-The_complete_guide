import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div>
            <p>This Paragraph is sponsored by UserOutput.</p>
            <p className="Output">Hello {props.name}</p>
        </div>
    );
};

export default UserOutput;