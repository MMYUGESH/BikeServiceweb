import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, Container } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
//import CheckIcon from '@material-ui/icons/Check';
import Book from "./Book";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '9%',
        flexGrow: 1,
        margin: 15,
        alignItems: 'center',
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
    },
    rot: {
        flexGrow: 1,
        margin: 15,
        alignItems: 'center',
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        marginTop: '9%',
    },
    media: {
        maxWidth: 500,
        height: 120,
    },
    bike: {
        maxWidth: 500,
        height: 300
    },
    arrange: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.80%', // 16:9

    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: "grey",
        padding: theme.spacing(0),
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                <Grid >
                    <Grid item xs={12}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Typography style={{ color: "purple" }} variant="h3" >Welcome to MechMac</Typography>
                        </div>
                    </Grid>
                </Grid>

                <Container style={{ marginTop: "3%" }}>

                    <div className={classes.arrange} >
                        <Grid container spacing={4}>

                            <Grid item xs={12} sm={6} md={4} lg={6} >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://static.gobumpr.com/offers-imgs/bike-engine-oil.jpg"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h4" >
                                            Bike General Service
                       <Typography variant="h5" style={{ textAlign: "right" }}>
                                                Rs.999
                    </Typography>
                                        </Typography>

                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://autozang.com/images/royalpackage.jpg"
                                            title="Image title"
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={6}>
                                <Card className={classes.card}>
                                    <Book />

                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Container>


                <Grid item xs={12} lg={12}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Typography style={{ color: "purple", marginTop: "7%" }} variant="h3" >Services Included</Typography>
                    </div>
                </Grid>




                <Grid>
                    <Grid item xs={12} sm={6}>

                        <div style={{ justifyContent: "center", alignItems: "center" }}>
                            <Typography variant="h5" ><DoubleArrowIcon style={{ color: "purple" }} /> Complete General Service Includes Engine Oil Change</Typography>
                            <Typography variant="h5" ><DoubleArrowIcon style={{ color: "purple" }} />Brakes Check and Clean</Typography>
                            <Typography variant="h5"><DoubleArrowIcon style={{ color: "purple" }} />Clutch Play Adjustment</Typography>
                            <Typography variant="h5" ><DoubleArrowIcon style={{ color: "purple" }} />Chain Lubrication and Adjustment</Typography>
                            <Typography variant="h5" ><DoubleArrowIcon style={{ color: "purple" }} />Spark Plug Clean</Typography>
                            <Typography variant="h5"><DoubleArrowIcon style={{ color: "purple" }} />Inspect brake shoe wear and adjust or replace as per requirement.</Typography>
                            <Typography variant="h5"><DoubleArrowIcon style={{ color: "purple" }} />
Electrical Wiring Check</Typography>
                            <Typography variant="h5"><DoubleArrowIcon style={{ color: "purple" }} />Exterior Foam Wash</Typography>

                        </div>
                    </Grid>

                </Grid>


            </Grid>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Branches
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" >
                    <ul type="none" style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                        <li>Kodambakkam</li>
                        <li>Vadapalani</li>
                        <li>Anna Nagar</li>
                        <li>TNagar</li>
                    </ul>
                </Typography>

            </footer>

        </div>
    )
}

export default Home
