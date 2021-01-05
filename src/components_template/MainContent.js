import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import BookList from '../Components/BookList';
import AddBook from '../Components/AddBook';
import UpdateBook from '../Components/UpdateBook';

export default function MainContent() {
    return (
        <div className="content-wrapper">
            <div class="content">
                <div class="container-fluid">

                    <Switch>
                        <Route path="/BookList" component={BookList}/>
                        <Route path="/AddBook" component={AddBook}/>
                        <Route path="/UpdateBook/:id" component={UpdateBook}/>

                    </Switch>

                </div>
            </div>
        </div>

    )
}
