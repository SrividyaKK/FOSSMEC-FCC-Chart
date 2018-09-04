import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import users from '../users';


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0, name, position, totalScore, todaysScore;
function createData(user) {
    name = user.datasets[0].label;
    position = id+1; // Change this
    totalScore = user.datasets[0].data[user.datasets[0].data.length-1];
    todaysScore = user.datasets[0].data[user.datasets[0].data.length - 1] - user.datasets[0].data[user.datasets[0].data.length - 2];
    id += 1;
    return { id, name, position, totalScore, todaysScore };
}

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props
        }
    }

    componentWillMount() {
        this.getChartData(); //Async Call
    }

    getChartData() {
        // TODO: fetch data
        this.setState({
            chartData: users
        }); //end of setState
    }

    render() {
        const { classes } = this.props;
        const { chartData } = this.state; 
        const rows = chartData.map(user => createData(user));

        return (
            <div className='ml6 mr6 mt5'>
                <Paper className={classes.root}>
                <Table className={classes.table} style={{ fontFamily: 'Roboto' }}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell numeric>#</CustomTableCell>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell numeric>Today's Score</CustomTableCell>
                            <CustomTableCell numeric>Total Score</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map(user => {
                                return (
                                    <TableRow className={classes.row} key={user.key}>
                                        <CustomTableCell numeric component="th" scope="row">
                                            {user.position}
                                        </CustomTableCell>
                                        <CustomTableCell>{user.name}</CustomTableCell>
                                        <CustomTableCell numeric>{user.todaysScore}</CustomTableCell>
                                        <CustomTableCell numeric>{user.totalScore}</CustomTableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </Paper>
            </div>
        );
    }
}

LeaderBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeaderBoard);