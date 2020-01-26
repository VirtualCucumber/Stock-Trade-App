import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl,  } from 'react-bootstrap';
import PageTitle from '../../components/Body/PageTitle';
import Card from '../../components/Body/Card';
import Section from '../../components/Body/Section';
import GraphData from '../../services/StockBackend/GraphData';
import moment from "moment";
import { Line, Pie, Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListItem from '../../components/Body/ListItem';
import ReactLoading from 'react-loading';

class DashboardHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comparedStockData: [],
            dashboardLoading: true,
            chartReference: {},
            stockInput: '',
            compareStockInput: '',
            comparedStocks: []
        }

        this.graphData = new GraphData();
    }

    componentDidMount() {
        console.log(this.props.stockData.name);
    }

    getGraphData = () => {
        this.setState({dashboardLoading: true});

        this.graphData.getGraphData(this.state.stockInput, 'day', 10).then(response => {  
            for (let i = 0; i < response.time.length; i++) {
                response.time[i] = moment(response.time[i]).format('dddd');
            }  
            this.props.handleStockData(response);
        });

        this.setState({dashboardLoading: false})
    }

    updateInputValue(evt) {
        this.setState({
            compareStockInput: evt.target.value
        });
    }

    updateStockInputValue(evt) {
        this.setState({
            stockInput: evt.target.value
        });
    }

    addComparedStockData = () => {
        this.graphData.getGraphData(this.state.compareStockInput, 'day', 10).then(response => {  
            for (let i = 0; i < response.time.length; i++) {
                response.time[i] = moment(response.time[i]).format('dddd');
            }  
            
        this.setState({
            comparedStockData: this.state.comparedStockData.concat(response)
        });

        console.log(this.state.comparedStockData);

        let compareIndex = this.state.comparedStockData.length;

        let dummyData = {
            label:this.state.comparedStockData[compareIndex-1].name,
            data:this.state.comparedStockData[compareIndex-1].price,
            lineTension: 0,
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            fill: false,
            borderDash: [5, 5],
            pointRadius: 5,
            pointHoverRadius: 10,
        }

        this.chartReference.chartInstance.config.data.datasets.push(dummyData);

        this.chartReference.chartInstance.update();

    });

    }

    removeComparedStockData(index) {
        let dataset = this.chartReference.chartInstance.config.data.datasets;
        const filteredItems = dataset.slice(0, index+1).concat(dataset.slice(index + 2, dataset.length));
        this.chartReference.chartInstance.config.data.datasets = filteredItems;
        this.chartReference.chartInstance.update();
    }

    renderCompareChart = () => {

        return (
            <Line ref={(reference) => this.chartReference = reference }
                height={300}
                data={{
                    labels:this.props.stockData.time,
                    datasets: [
                        {
                            label:this.props.stockData.name,
                            data:this.props.stockData.price,
                            lineTension: 0,
                            borderColor: "rgb(255, 99, 132)",
                            pointBackgroundColor: "rgb(255, 99, 132)",
                            pointHitRadius: 50,
                            pointBorderWidth: 2,
                            fill: false,
                            borderDash: [5, 5],
                            pointRadius: 5,
                            pointHoverRadius: 10,
                        }
                    ]
                }}
                options={{
                    responsive:true,
                    maintainAspectRatio:false,
                    title:{
                        display:false,
                        text:'Apple',
                        fontSize:25
                        },
                        legend:{
                        display:false,
                        position:'right'
                        },
                        tooltips: {
                        mode: 'index',
                        intersect: false,
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        }
                }}
            />
        )
    }

    renderComparedStocks() {
        return this.state.comparedStockData.map((comparedStocks, index) => {
            return(
                <ListItem key={index}
                name={comparedStocks.name}
                index={index}
                clickHandler={() =>this.removeComparedlistItem(index)}
                />
            )
        });
    }

    removeComparedlistItem(index) { 
        this.removeComparedStockData(index);
        const filteredItems = this.state.comparedStockData.slice(0, index).concat(this.state.comparedStockData.slice(index + 1, this.state.comparedStockData.length));
        this.setState({comparedStockData: filteredItems})
    }

    render() {
        if(typeof this.props.stockData.name == 'undefined') {
            return (
                <div className='blank'>
                    <form className="d-none d-md-inline-block form-inline m-auto">
                        <div className="input-group">
                            <input value={this.state.stockInput} onChange={evt => this.updateStockInputValue(evt)} class="form-control" type="text" placeholder="Stock to check..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button onClick={this.getGraphData} className="btn btn-primary" type="button"><i class="fas fa-search"></i><FontAwesomeIcon icon='search' /></button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        } else {
            return(
                <Container fluid='true'>
                    <PageTitle title={this.props.stockData.name} />
                    <Row>
                        <Col xl={3} md={6}>
                            <Card title={this.props.stockData.currentPrice} icon='dollar-sign' bgStyle='bg-primary'/>
                        </Col>
                        <Col xl={3} md={6}>
                            <Card title='Stock price difference from last year' bgStyle='bg-warning'/>
                        </Col>
                        <Col xl={3} md={6}>
                            <Card title='Stock rank with other companies' bgStyle='bg-success'/>
                        </Col>
                        <Col xl={3} md={6}>
                            <Card title='Google trend data of stock' bgStyle='bg-danger'/>
                        </Col>
                    </Row>
                    <Row>
                    <Col xl={12}>
                            <Section title='Chart' icon='chart-area'>
                                <div>
                                    {this.renderCompareChart()}
                                </div>
                            <form className="d-none d-md-inline-block form-inline m-auto">
                                <div className="input-group">
                                    <input value={this.state.compareStockInput} onChange={evt => this.updateInputValue(evt)} class="form-control" type="text" placeholder="Compare stock..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button onClick={this.addComparedStockData} className="btn btn-success" type="button"><i class="fas fa-search"></i><FontAwesomeIcon icon='plus' /></button>
                                    </div>
                                </div>
                            </form>
                            {this.renderComparedStocks()}
                            </Section>
                            
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}

export default DashboardHome;