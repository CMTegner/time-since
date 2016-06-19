import React, { Component } from 'react';
import moment from 'moment';

export default class TimeSince extends Component {
    static defaultProps = {
        time: moment().format('YYYY-MM-DD')
    }
    constructor(props) {
        super(props);
        const { time } = props;
        this.state = { time };
    }
    _onChange({ value }) {
        this.setState({ time: value });
    }
    render() {
        const { time } = this.state;
        return (
            <div>
                Time since 
                <input
                    type="date"
                    onChange={e => this._onChange(e.target)}
                    value={time}
                />
                : {moment().diff(time, 'days')}
            </div>
        );
    }
}
