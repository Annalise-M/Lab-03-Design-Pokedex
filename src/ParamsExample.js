import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    // Route,
    // Link,
    // useParams
} from 'react-router-dom';

export default class ParamsExample extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Header</h2>
                    <Switch>
                        <Router path="/:myId" children={<Child />} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

class Child extends React.Component {
    render() {
        const id = props.match.params.myId;

        return (
            <div>
                <h3>ID: {id}</h3>
            </div>
        );
    }
}