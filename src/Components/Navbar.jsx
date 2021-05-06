import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <AppBar style={{ backgroundColor: "blue", color: "violet", display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "10px" }} position="fixed">
                    <Toolbar >


                        <Typography variant="h4" >
                            <Link to="/" style={{ color: "Purple", padding: "50px", textDecoration: "none" }}>
                                MechMac  </Link>
                        </Typography>

                        <Typography variant="h6" >
                            <Link to="/" style={{ color: "violet", textDecoration: "none" }}>Home</Link>
                        </Typography>

                        <Typography variant="h6" >
                            <Link to="/Book" style={{ color: "violet", padding: "50px", textDecoration: "none" }}>Book</Link>
                        </Typography>




                    </Toolbar>
                </AppBar>

            </div>

        </div>
    );
}