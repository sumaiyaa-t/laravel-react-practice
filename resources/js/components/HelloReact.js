import React from 'react';
import ReactDOM from 'react-dom';
function HelloReact() {
    return (
        <div>
          Hello React!
        </div>
    );
}
export default HelloReact;
if (document.getElementById('hello')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello'));
}
