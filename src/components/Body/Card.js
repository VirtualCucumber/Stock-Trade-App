import React from 'react';

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
                <div className="card-body">{this.props.title}</div>
            </div>
            )
    }
}

export default Card;