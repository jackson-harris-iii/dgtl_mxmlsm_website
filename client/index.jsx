import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav'
import HomePage from './components/HomePage';


// We will need to import this from redux to create our store and make use of the thunk
import { createStore, applyMiddleware } from 'redux';
// Dont forget to import redux thunk
import thunk from 'redux-thunk';
// Getting our combined reducers
import reducers from './reducers/reducers';
// And our Post component
// import Post from './containers/Post'

// Define our store
const store = createStore(reducers, applyMiddleware(thunk));

// This will be the entry point of our app
class App extends Component {
    render(){
        return (
            // We will add our components here
            <div>
                <Nav />
                <HomePage />
            </div>
        );
    }    
};
const root = document.getElementById('app');
// We need to wrap our app in provider to make use of redux
const AppWithStore = (
	<Provider store={store}>
		<App />
	</Provider>
);
ReactDOM.render(AppWithStore, root);