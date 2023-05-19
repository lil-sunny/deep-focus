import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";

const Index = () => {
    return (<>
        <h1>Hello, im React. You are cool!</h1>
        <p>I want to use components</p>
        <App/>
    </>);
};

ReactDOM.render(<Index />, document.getElementById('app'));