import React,{Component} from 'react';
import store from '../redux/Store'
import * as Actions from '../redux/Actions';

import PropTypes from 'prop-types';
class MyView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: store.getState()[this.props.caption]
        }
    }
    increment = () => {
        store.dispatch(Actions.Increment(this.props.caption, 10))
    }

    decrement = () => {
        store.dispatch(Actions.Decrement(this.props.caption, 10))
    }

    onChange = () => {
        this.setState({ value: store.getState()[this.props.caption] })
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div >
        );
    }
}
MyView.propTypes = {
    caption: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};


export default MyView;