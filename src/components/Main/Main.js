import React from "react";
import { Route } from "react-router-dom";
import DashboardHome from "../../pages/Dashboard/DashboardHome";
import TopNavbar from '../../components/Navbar/TopNavbar';
import SideNavbar from '../../components/Navbar/SideNavbar';
import DashboardContent from '../../components/Body/DashboardContent';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        }

        this.handleViewSidebar = this.handleViewSidebar.bind(this);
    }

    handleViewSidebar() {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
        console.log(this.state.sidebarOpen);
    }

    render() {
        var sideBarClass = this.state.sidebarOpen ? "sb-nav-fixed sb-sidenav-toggled" : "sb-nav-fixed";
        return (
            <div className={sideBarClass}>
                <main>
                    <TopNavbar onClick={this.handleViewSidebar} />
                    <div id="layoutSidenav">
                        <SideNavbar isOpen={this.state.sidebarOpen} />
                        <div id="layoutSidenav_content">
                            <Route exact path="/" component={DashboardHome} />
                              
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Main;