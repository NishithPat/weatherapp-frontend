import React, { Component } from 'react';
import DataField from './DataField';
import CityInput from './CityInput';
import RadioInput from './RadioInput';
import ErrorDataField from './ErrorDataField';
import shortid from 'shortid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class SubmitForm extends Component {
    state = { cityName: "", unit: "", weatherData: [] }

    changeCityValue = event => {
        this.setState({ cityName: event.target.value });
    }

    changeTempScale = event => {
        this.setState({ unit: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            //let idForWeather = process.env.REACT_APP_WEATHER_ID;
            //let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=${this.state.unit}&appid=${idForWeather}`;
            let url = `http://localhost:9890/weatherdata?q=${this.state.cityName}&units=${this.state.unit}`;

            let response = await fetch(url);
            let respondData = await response.json();

            let tempSymbol = "";

            if (this.state.unit === "metric") {
                tempSymbol = "℃";
            } else {
                tempSymbol = "℉";
            }

            let urlGIF = await this.addGIF(respondData.weather[0].main);

            let newWeatherData = {
                field: "field",
                city: respondData.name,
                temp: `${respondData.main.temp} ${tempSymbol}`,
                humidity: respondData.main.humidity,
                description: respondData.weather[0].description,
                url: urlGIF
            }

            this.setState({ weatherData: [newWeatherData, ...this.state.weatherData] });
        } catch (err) {
            let urlErrorGIF = await this.addErrorGIF();

            let newWeatherData = {
                field: undefined,
                url: urlErrorGIF
            };

            this.setState({ weatherData: [newWeatherData, ...this.state.weatherData] });
        }

        this.setState({ cityName: "" });

    }

    addGIF = async (main) => {
        try {
            //let idForGiphy = process.env.REACT_APP_GIPHY_ID;
            // let url = `https://api.giphy.com/v1/gifs/translate?api_key=${idForGiphy}&s=${main}&weirdness=${10}`;
            let url = `http://localhost:9890/gifdata?s=${main}`


            let response = await fetch(url);
            let responseData = await response.json();

            return responseData.data.images.fixed_height.url;
        } catch (err) {
            console.log(err);
        }
    }

    addErrorGIF = async () => {
        try {
            //let idForGiphy = process.env.REACT_APP_GIPHY_ID;
            // let url = `https://api.giphy.com/v1/gifs/translate?api_key=${idForGiphy}&s=error&weirdness=${10}`;
            let url = `http://localhost:9890/errorgifdata`

            let response = await fetch(url);
            let responseData = await response.json();

            return responseData.data.images.fixed_height.url;
        } catch (err) {
            console.log(err + " :error");
        }
    }

    render() {

        // if (this.state.weatherData[0] !== undefined) {
        //     console.log(this.state.weatherData[0].city);
        // }

        return (
            <div>
                <Card>
                    <Box p={3}>
                        <CardContent>
                            <form onSubmit={this.handleSubmit}>
                                <Typography variant="h4" align="left" gutterBottom>Enter details</Typography>
                                <CityInput cityName={this.state.cityName} changeCityValue={this.changeCityValue} />
                                <br />
                                <RadioInput unit={this.state.unit} changeTempScale={this.changeTempScale} />
                                <br />
                                <CardActions>
                                    <Button variant="contained" type="submit">Submit</Button>
                                </CardActions>
                            </form>
                        </CardContent>
                    </Box>
                </Card>
                <br />
                <Grid container justify="flex-start" spacing={3}>
                    {
                        this.state.weatherData.map(data => {
                            if (data.field !== undefined) {
                                return (
                                    <Grid key={shortid.generate()} item xs={12} sm={6}>
                                        <DataField data={data} />
                                    </Grid>
                                )
                            } else {
                                return (
                                    <Grid key={shortid.generate()} item xs={12} sm={6}>
                                        <ErrorDataField data={data} />
                                    </Grid>
                                )
                            }
                        })
                    }
                </Grid>
                <Box m={5} />
            </div>
        );
    }
}

export default SubmitForm;