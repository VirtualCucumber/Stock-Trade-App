import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgStyle: 'bg-primary',
            title: 'Title'
        }
    }

    render() {
        return(
            <div className={"card text-white mb-4 " + this.props.bgStyle}>
                <div className="card-body"><FontAwesomeIcon icon={this.props.icon} size='lg' /> {this.props.title}</div>
            </div>
            )
    }
}

export default Card;