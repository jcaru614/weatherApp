import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        flexWrap: 'wrap',
        '& > *': {
            marginLeft: '-2px',
            margin: theme.spacing(1),
            width: theme.spacing(20),
            height: theme.spacing(20),
            backgroundColor: 'rgb(64,81,181)',
            borderRadius: '10px',
            overflow: 'scroll',
        },
    },
}));

export default function SimplePaper(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                {props.children}
            </Paper>
        </div>
    );
}
