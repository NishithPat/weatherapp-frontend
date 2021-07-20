import React, { Component } from 'react';
import SubmitForm from './SubmitForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class Starter extends Component {

    theme = createMuiTheme({
        typography: {
            fontFamily: [
                'Fredoka One',
                'cursive'
            ].join(','),
        }
    })

    theme = responsiveFontSizes(this.theme)

    render() {

        return (
            <div>
                <ThemeProvider theme={this.theme}>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Typography variant="h1" align="center" gutterBottom>Weather App</Typography>
                        <SubmitForm />
                    </Container>
                </ThemeProvider>
            </div>
        );
    }
}

export default Starter;