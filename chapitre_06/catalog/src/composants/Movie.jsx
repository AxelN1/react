import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>Movies</h1>
                <li><Link to="/movie">Movie</Link></li>

                <BrowserRouter>
                    <div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/movie">About</Link></li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route path="/movie" component={Movie} />

                            <Route path="*" component={Error404} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Movie;