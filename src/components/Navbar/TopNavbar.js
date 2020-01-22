import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TopNavbar extends React.Component {

    render() {
        return (
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">Stock Trading App</a><button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={this.props.onClick} href="#"><FontAwesomeIcon icon='bars' size='lg' /></button
                >
            </nav>
        );
    }
}

export default TopNavbar;