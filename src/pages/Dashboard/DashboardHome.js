import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageTitle from '../../components/Body/PageTitle';
import Card from '../../components/Body/Card';
import Section from '../../components/Body/Section';
import GraphData from '../../services/StockBackend/GraphData';
import moment from "moment";
import { Line, Pie, Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DashboardHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphData: 
                {
                    price:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    time:['0','0','0','0','0','0','0','0','0','0']
                }
            
        }

        this.graphData = new GraphData();
    }

    componentDidMount() {
        this.getGraphData();
    }

    getGraphData() {
        this.graphData.getGraphData('AAPL', 'day', 10).then(response => {
            
            for (let i = 0; i < response.time.length; i++) {
                response.time[i] = moment(response.time[i]).format('dddd');
            }
            
            this.setState({graphData: response});
        });
    }

    render() {
        return(
            <Container fluid='true'>
                <PageTitle title="Dashboard" />
                <Row>
                    <Col xl={3} md={6}>
                        <Card title='Stock price here' bgStyle='bg-primary'/>
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
                            <Line 
                                height={300}
                                data={{
                                    labels:this.state.graphData.time,
                                    datasets: [
                                        {
                                        label:'Stock',
                                        data:this.state.graphData.price,
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
                        </Section>
                    </Col>
                    <Col xl={6}>
                        
                        <Section title='Demographic' icon='chart-pie'>
                            <Pie 
                                data={{
                                    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                                    datasets:[
                                    {
                                        label:'Population',
                                        data:[
                                        617594,
                                        181045,
                                        153060,
                                        106519,
                                        105162,
                                        95072
                                        ],
                                        backgroundColor:[
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(153, 102, 255, 0.6)',
                                        'rgba(255, 159, 64, 0.6)',
                                        'rgba(255, 99, 132, 0.6)'
                                        ]
                                    }
                                    ]
                                }}
                                options={{
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
                        </Section>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DashboardHome;