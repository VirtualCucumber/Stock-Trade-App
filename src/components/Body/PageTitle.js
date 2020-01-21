import React from 'react';

class PageTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Page Title'
        }
    }

    render() {
        return(
            <div className="page-title">
                <h1 className="mt-4">{this.props.title}</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">{this.props.title}</li>
                </ol>
            </div>
        )
    }
}

export default PageTitle;