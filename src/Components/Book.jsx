import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, TextField, CssBaseline, Container } from '@material-ui/core';
//import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {

        marginTop: '10%',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    Button: {
        display: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',

    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        color: theme.palette.success.main
    }
}));

const Book = () => {
    const classes = useStyles();

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [location, setLocation] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [number, setNumber] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [postCode, setPostCode] = useState("");
    const [address, setAddress] = useState("");
    const [specification, setSpecification] = useState("");
    const [show, setShow] = useState("");
    console.log(firstName, lastName);


    const locations = { area1: "Kodambakkam", area2: "Vadapalani", area3: "Guindy", area4: "Pallavaram", area5: "Anna Nagar", area6: "Choolaimedu", area7: "TNagar", area8: "Red Hills", area9: "AshokNagar", area0: "Ambatur" }
    // const [form, setForm] = useState({ firstName: "", lastName: "", mobile: "", email: "", brand: "", model: "", number: "", dateTime: "", postCode: "", location: "", address: "", specification: "" })
    const [msg, setMsg] = useState({ firstName: "", lastName: "", mobile: "", email: "", brand: "", model: "", number: "", dateTime: "", postCode: "", location: "", address: "", specification: "" })
    const [error, setError] = useState({ firstName: false, lastName: false, mobile: false, email: false, brand: false, model: false, number: false, dateTime: false, postCode: false, location: false, address: false, specification: false });


    const handleform = (event) => {
        event.preventDefault();
        const form = { firstName, lastName, brand, model, address, dateTime, postCode, location, specification }

        if (firstName === "") {
            setMsg({ ...msg, firstName: "Cannot be empty" });
            setError({ ...error, firstName: true })
        } else if (lastName === "") {
            setMsg({ ...msg, lastName: "Cannot be empty" });
            setError({ ...error, lastName: true })
        } else if (mobile === "") {
            setMsg({ ...msg, mobile: "Cannot be empty" })
            setError({ ...error, mobile: true })
        } else if (email === "") {
            setMsg({ ...msg, email: "Cannot be empty" })
            setError({ ...error, email: true })
        } else if (model === "") {
            setMsg({ ...msg, model: "Cannot be empty" });
            setError({ ...error, model: true })
        } else if (brand === "") {
            setMsg({ ...msg, brand: "Cannot be empty" });
            setError({ ...error, brand: true })
        } else if (number === "") {
            setMsg({ ...msg, number: "Cannot be empty" });
            setError({ ...error, number: true })
        } else if (dateTime === "") {
            setMsg({ ...msg, dateTime: "Cannot be empty" });
            setError({ ...error, dateTime: true })
        } else if (postCode === "") {
            setMsg({ ...msg, postCode: "Cannot be empty" });
            setError({ ...error, postCode: true })
        } else if (address === "") {
            setMsg({ ...msg, address: "Cannot be empty" });
            setError({ ...error, address: true })
        } else if (specification === "") {
            setMsg({ ...msg, specification: "if no specified repair fill null" });
            setError({ ...error, specification: true })
        } else if (location === "") {
            setMsg({ ...msg, location: "Cannot be empty" });
            setError({ ...error, location: true })
        } else {

            console.log(form);


            axios.post("https://bikeserviceap.herokuapp.com/book", form).then((res) => {
                // 
                //https://bikeserviceap.herokuapp.com/book
                if (res.status === 200) {
                    console.log("Booking confirmed");
                    setShow("Confirmed!Thankyou for booking!")
                }
            }).catch((err) => {
                setShow("Try again later,Something went wrong")
            })
        }


    }





    return (

        <div>

            <CssBaseline />
            <Grid container spacing={3} className={classes.root}>
                <Typography variant="h3" gutterBottom style={{ flexGrow: 1, alignItems: 'center', color: 'green' }}>Book Your Service</Typography>


                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            error={error.firstName === true}
                            helperText={msg.firstName}
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            value={firstName} fullWidth onChange={(e) => setfirstName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            error={error.lastName === true}
                            helperText={msg.lastName}
                            autoComplete="family-name"
                            value={lastName} fullWidth onChange={(e) => setlastName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="mobile"
                            name="mobile"
                            label="Mobile No:"
                            fullWidth
                            error={error.mobile === true}
                            helperText={msg.mobile}
                            type="number"
                            autoComplete="Mobile no"
                            value={mobile} fullWidth onChange={(e) => setMobile(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            error={error.email === true}
                            helperText={msg.email}
                            autoComplete="email"
                            value={email} fullWidth onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="bike brand"
                            name="bike brand"
                            label="Bike Brand"
                            fullWidth
                            error={error.brand === true}
                            helperText={msg.brand}
                            autoComplete="Bike Brand"
                            value={brand} fullWidth onChange={(e) => setBrand(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="bike model"
                            name="bike model"
                            label="Bike Model"
                            fullWidth
                            error={error.model === true}
                            helperText={msg.model}
                            autoComplete="BikeModel"
                            value={model} fullWidth onChange={(e) => setModel(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="bike number"
                            name="bike number"
                            label="Bike Number"
                            fullWidth
                            error={error.number === true}
                            helperText={msg.number}
                            autoComplete="Bike number"
                            value={number} fullWidth onChange={(e) => setNumber(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="datetime"
                            name="datetime"
                            label="Date & Time"
                            fullWidth
                            error={error.dateTime === true}
                            helperText={msg.dateTime}
                            type="datetime-local"
                            autoComplete="datetime"
                            InputLabelProps={{ shrink: true, }}
                            value={dateTime} fullWidth onChange={(e) => setDateTime(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Service Location</InputLabel>

                        <Select value={location} error={error.location === true}
                            helpertext={msg.location} fullWidth onChange={(e) => setLocation(e.target.value)}>
                            {Object.entries(locations).map(([area, name]) => ({ id: area, label: name })).map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.label}

                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zipcode"
                            name="zipcode"
                            label="Post Code"
                            fullWidth
                            error={error.postCode === true}
                            helperText={msg.postCode}
                            autoComplete="zipcode"
                            value={postCode} fullWidth onChange={(e) => setPostCode(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
                            type="text"
                            fullWidth
                            error={error.address === true}
                            helperText={msg.address}
                            autoComplete="address"
                            value={address} fullWidth onChange={(e) => setAddress(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="specification"
                            name="specification"
                            label="Any specific bike repair needed:"
                            type="text"
                            fullWidth
                            error={error.specification === true}
                            helperText={msg.specification}
                            autoComplete="specification"
                            value={specification} fullWidth onChange={(e) => setSpecification(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} className={classes.button}>
                        <div >
                            <Button variant="contained" color="primary" onClick={handleform} >Book Service</Button>
                        </div>
                    </Grid>

                </Grid>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h5" align="center" gutterBottom>
                            {show}
                        </Typography>
                    </Container>
                </div>


            </Grid >


        </div >



    )
}

export default Book;
