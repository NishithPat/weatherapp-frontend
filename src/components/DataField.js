import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// class DataField extends Component {

//     state = { data: this.props.data }

//     render() {
//         let { data } = this.state;
//         return (
//             <Card>
//                 <CardHeader title="Weather Details" />
//                 <CardMedia title="imageHere" component="img" image={data.url} />
//                 <CardContent>
//                     <ul >
//                         <li>City: {data.city}</li>
//                         <li>Temp: {data.temp}</li>
//                         <li>Humidity: {data.humidity}%</li>
//                         <li>Description: {data.description}</li>
//                     </ul>
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
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0
    },
})

function DataField(props) {

    const classes = useStyles();

    const { data } = props;

    return (
        <Card>
            <div className={classes.divHeight}>
                <CardHeader title="Weather Details" />
                <CardMedia title="imageHere" component="img" image={data.url} className={classes.media} />
                <CardContent>
                    {/*<ul >
                        <li>City: {data.city}</li>
                        <li>Temp: {data.temp}</li>
                        <li>Humidity: {data.humidity}%</li>
                        <li>Description: {data.description}</li>
                    </ul>*/}
                    <List>
                        <ListItem className={classes.list}>
                            <ListItemText primary={`City: ${data.city}`} />
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary={`Temperature: ${data.temp}`} />
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary={`Humidity: ${data.humidity}`} />
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary={`Description: ${data.description}`} />
                        </ListItem>
                    </List>
                </CardContent>
            </div>
        </Card>
    );
}

export default DataField;