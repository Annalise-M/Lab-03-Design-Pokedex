import React, { Component } from 'react';
import { BrowserRouter as Router,
    Route, 
    Switch, 
} from 'react-router-dom';

import PokelistDetails from './PokelistDetails.js';
//^this is my details page
import SearchPage from './SearchPage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <SearchPage {...routerProps}
                            />}
                        />
                        <Route
                            path="/pokemon/:some-id"
                            exact
                            render={(routerProps) => <PokelistDetails {...routerProps}
                            />}
                        />
                    </Switch>
                </Router>
            </div>
        )
        
    }
}
