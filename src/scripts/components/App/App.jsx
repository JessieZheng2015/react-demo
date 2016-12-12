import React from 'react';

import { Link, IndexLink } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>App</h1>
                <ul>
                    <li><Link to="/publisher">Publisher</Link></li>
                    <li><Link to="/todo">TodoApp</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App;