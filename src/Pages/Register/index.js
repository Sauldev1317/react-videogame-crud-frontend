import 'date-fns';
import React from 'react';
import { Container, Typography, Card, Grid, Box, TextField, Button} from '@material-ui/core';
import styles from './styles'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default () => {
    const classes = styles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container
            className={classes.mainContent}>
            <Grid
                container>
                <Grid 
                    item 
                    xs={12} sm={12} md={12} lg={12} xl={12}>

                    <Card className={classes.card}>

                        <Grid 
                            container 
                            style={{flexGrow:1}}>
                        
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <form className={classes.formulario} noValidate autoComplete="off">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        style={{ marginBottom: 16 }}
                                    />
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Nombre" 
                                        variant="outlined" 
                                        placeholder="Ingresa el nombre del videojuego" 
                                        style={{ marginBottom: 16 }}
                                        fullWidth />
                                    <TextField
                                        id="outlined-basic" 
                                        label="Desarrolladora" 
                                        variant="outlined" 
                                        placeholder="Ingresa la desarrolladora" 
                                        style={{ marginBottom: 24 }}
                                        fullWidth />

                                    <TextField
                                        id="standard-multiline-static"
                                        label="Descripción"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        placeholder="Ingresa una breve descripción del videojuego"
                                        style={{ marginBottom: 16 }} 
                                        fullWidth/>

                                    <Button 
                                        className={classes.buttonStyle}
                                        variant="contained" 
                                        fullWidth>
                                        GUARDAR
                                    </Button>
                                </form>
                            </Grid>
                            
                       

                            <Box 
                                item 
                                component={Grid}
                                xs={12} sm={6} md={6} lg={6} xl={6}
                                display={{ xs: "none", sm:"block"}}>
                                <div className={classes.instrucciones}>
                                    <Typography>Instrucciones</Typography>
                                </div>
                            </Box>
            

                        </Grid>

                    </Card>

                </Grid>
            </Grid>
            

        </Container>
        </MuiPickersUtilsProvider>
    );
}
