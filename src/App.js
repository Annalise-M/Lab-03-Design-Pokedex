import React, { Component } from 'react';
import { BrowserRouter as Router,
    Route, 
    Switch, 
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import PokelistDetails from './PokelistDetails.js';
//^this is my details page

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
                            path="/pokemon/:pokemon"
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
