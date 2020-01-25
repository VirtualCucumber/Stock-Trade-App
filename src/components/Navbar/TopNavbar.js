import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class TopNavbar extends React.Component {

    render() {
        return (
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">Stock Trading App</a><button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={this.props.onClick} href="#"><FontAwesomeIcon icon='bars' size='lg' /></button
                >
                <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>

            </nav>
        );
    }
}

export default TopNavbar;