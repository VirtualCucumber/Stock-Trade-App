import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Section(props) {
    return(
        <div className="card mb-4">
            <div className="card-header"><FontAwesomeIcon icon={props.icon} size='lg' /> {props.title}</div>
            <div className="card-body card-grid">
                {props.children}
            </div>
        </div>
    );
}

export default Section;