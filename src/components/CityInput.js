import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class CityInput extends Component {
    render() {
        return (
            <div>
                <TextField id="standard-basic" label="City" value={this.props.cityName} onChange={this.props.changeCityValue} />
            </div>
        );
    }
}

export default CityInput;