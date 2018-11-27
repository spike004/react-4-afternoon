import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student'
export default  (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
        <Route path='/classlist/:class' component={ClassList}/>
        <Route path='/student/:id' component={Student}/>
    </Switch>
)