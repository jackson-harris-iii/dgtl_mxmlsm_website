import React from "react";
import {  BrowserRouter, Switch, Route } from "react-router-dom";
// And our Post component
import Post from '../containers/Post';
import HomePage from '../components/HomePage'
const Index = () => <h2>Home</h2>;
const Users = () => <h2>Users</h2>;


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/posts/" component={Post} />
                    <Route path="/users/" component={Users} />
            </Switch>
        </ BrowserRouter>    
    )};

export default AppRouter;