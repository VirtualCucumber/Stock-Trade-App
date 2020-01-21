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
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <a className="small text-white stretched-link" href="#">View Details</a>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
            </div>
            )
    }
}

export default Card;