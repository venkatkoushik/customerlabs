import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { matchPath, useHistory } from 'react-router-dom';

const drawerWidth = 56;

const useStyles = makeStyles((theme) => ({
    root: {
        width: props => props?.isMobile ? 240 : drawerWidth,
        position: 'absolute',
    },
    drawer: {
        height: props => props?.isMobile ? `100vh` : `calc(100vh - 64px)`,
        width: props => props?.isMobile ? 240 : drawerWidth,
    },
    drawerContainer: {
        overflow: 'hidden',
    },
}));

export const SideNavBar = (props) => {

    const classes = useStyles(props);

    const history = useHistory();

    const isSelected = (data) => {
        if (data.link) {
            return matchPath(history.location.pathname, {
                path: data.link
            })
        }
    }

    const onListClick = (data) => {
        if (data.link) {
            history.push(data.link)
        }
    }

    return (
        <div className={classes.root}>
            <Paper
                className={classes.drawer}
                square
            >
                <div className={classes.drawerContainer}>
                    <List>
                        {[].map((navBar, index) => (
                            <ListItem onClick={(e) => onListClick(navBar)}
                                button
                                key={index}
                                selected={isSelected(navBar)}>

                                <ListItemIcon>{navBar.icon}</ListItemIcon>

                                <ListItemText primary={navBar.name} />

                            </ListItem>
                        ))}
                    </List>
                </div>
            </Paper>
        </div>
    );
}
