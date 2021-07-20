import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class RadioInput extends Component {
    state = {}
    render() {
        return (
            <div>
                <Box pb={1}>
                    <Typography variant="h5">
                        Temp Scale
                    </Typography>
                </Box>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="Scale" value={this.props.unit} onChange={this.props.changeTempScale}>
                        <FormControlLabel value="metric" control={<Radio />} label="Celcius" />
                        <FormControlLabel value="imperial" control={<Radio />} label="Fahrenheit" />
                    </RadioGroup>
                </FormControl>
                {/*<div>
                    <Box pb={1}>
                        <Typography variant="h5">
                            Temp Scale
                        </Typography>
                    </Box>
                </div>
                <div>
                    <label>
                        <Radio
                            value="metric"
                            checked={this.props.unit === "metric"}
                            onChange={this.props.changeTempScale}
                            label="Celcius"
                        />
                        Celcius
                    </label>

                </div>
                <div>
                    <label>
                        <Radio
                            type="radio"
                            value="imperial"
                            checked={this.props.unit === "imperial"}
                            onChange={this.props.changeTempScale}
                        />
                        Fahrenheit
                    </label>
                </div>*/}
            </div>
        );
    }
}

export default RadioInput;