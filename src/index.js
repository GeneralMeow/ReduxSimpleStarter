import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAtAiBU3_dzxt886nqCK4XJNvkcUpkNSrs';

//create a component, this component should produce html
const App = () => {
    return <div> 
            <SearchBar />
        </div>
}

//take this compenent, generated html and put it on the page (in the DOM)
ReactDOM.render( <App />, document.querySelector('.container') )