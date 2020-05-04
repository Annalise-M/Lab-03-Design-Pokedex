import React, { Component } from 'react';
import request from 'superagent';
import { BrowserRouter as Router,
    Route, 
    Switch, 
} from 'react-router-dom';
import { render } from 'enzyme';
import { Pokelist } from './Pokelist.js';
import { DetailPage } from './DetailPage.js';

export default App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} 
                        />
                        <Route
                            path="/pokemon/:name"
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} 
                        />
                    </Switch>
                </Router>
            </div>
        )
        
    }
}
