import React from 'react';
import { SideNavBar } from './sideNavbar';

class SideNavbarParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <SideNavBar {...this.props} />
    }
}

export default SideNavbarParent;