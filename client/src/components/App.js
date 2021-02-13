import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne</div> 
    // BAD! Do not add an anchor tag to navigate to another page as you would normally.
};

const PageTwo = () => {
    return <div>
        PageTwo
        <button>Click me</button>
    </div>
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;