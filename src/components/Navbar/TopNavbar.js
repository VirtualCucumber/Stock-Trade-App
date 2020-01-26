import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import GraphData from '../../services/StockBackend/GraphData';
import moment from "moment";

class TopNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockInput: ''
        }

        this.graphData = new GraphData();
    }

    updateInputValue(evt) {
        this.setState({
            stockInput: evt.target.value
        });
    }

    getGraphData = () => {
        this.graphData.getGraphData(this.state.stockInput, 'day', 10).then(response => {  
            for (let i = 0; i < response.time.length; i++) {
                response.time[i] = moment(response.time[i]).format('dddd');
            }  
            this.props.handleStockData(response);
        });
    }

    render() {
        return (
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">Stock Trading App</a><button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={this.props.onClick} href="#"><FontAwesomeIcon icon='bars' size='lg' /></button
                >
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input value={this.state.stockInput} onChange={evt => this.updateInputValue(evt)} class="form-control" type="text" placeholder="Change stock..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button onClick={this.getGraphData} className="btn btn-primary" type="button"><i class="fas fa-search"></i><FontAwesomeIcon icon='search' /></button>
                        </div>
                    </div>
                </form>

            </nav>
        );
    }
}

export default TopNavbar;