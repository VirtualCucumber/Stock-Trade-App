import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Section(props) {
    return(
        <div className="card mb-4">
            <div className="card-header"><i className="fas fa-chart-area mr-1"></i><FontAwesomeIcon icon={props.icon} size='lg' /> {props.title}</div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Section;