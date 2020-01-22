import React from 'react';

class SideNavbar extends React.Component {
    render() {
        return (
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="index.html"
                                ><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard</a
                            >
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default SideNavbar;
