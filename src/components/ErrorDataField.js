import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

// class ErrorDataField extends Component {

//     state = { data: this.props.data }


//     render() {
//         return (
//             <Card>
//                 <CardHeader title="Weather Details" />
//                 <CardMedia title="imageHere" component="img" image={this.props.data.url} />
//                 <CardContent>
//                     <h3 style={{ color: "red" }}>Error! Unable to fetch data!</h3>
//                     <h4>Check whether the name of the city has been correctly typed!</h4>
//                 </CardContent>
//             </Card>
//         );
//     }
// }

const useStyles = makeStyles({
    media: {
        height: '60%'
    },
    divHeight: {
        height: '600px'
    },
    h3: {
        fontSize: '25px',
        color: 'red',
        marginBottom: '2%',
        marginTop: '2%'
    },
    h4: {
        fontSize: '20px',
        marginTop: '5%'
    }
})

function ErrorDataField(props) {

    const classes = useStyles();
    return (
        <Card>
            <div className={classes.divHeight}>
                <CardHeader title="Weather Details" />
                <CardMedia title="imageHere" component="img" image={props.data.url} className={classes.media} />
                <CardContent>
                    <h3 className={classes.h3}>Error! Unable to fetch data!</h3>
                    <p className={classes.h4}>Check whether the name of the city has been correctly typed!</p>
                </CardContent>
            </div>
        </Card >
    );
}

export default ErrorDataField;