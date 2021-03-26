import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>ToDoCRUD Application</h1>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("app"));