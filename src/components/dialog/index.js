import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
    Dialog,
} from '@material-ui/core';

// style
const styles = theme => ({
    rootCard: {
        "& .MuiDialog-paperWidthSm": {
            boxShadow: "0px 35px 50px #70707028 !important",
            padding: 24,
            borderRadius: 8,
            width:"450px",
        }
    },
    transprant:{
        "& .MuiDialog-paperWidthSm": {
            boxShadow: "0px 35px 50px #70707028 !important",
            padding: 24,
            borderRadius: 8,
            width:"450px",
            background:"transparent"
        }
        
    }
})
// end

class DialogComponent extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {}
    }
    // end

    render() {

        const {
            classes,
            handleClose,
            component,
            open,
            transprant
        } = this.props;

        return (<Dialog open={open} onClose={handleClose} className={  transprant ? classes.transprant : classes.rootCard} >
            {component}
        </Dialog>)
    }
}

export default withStyles(styles)(withRouter(DialogComponent));