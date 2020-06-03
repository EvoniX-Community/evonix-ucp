import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import BlogList from '../pages/blog/BlogList';
import About from '../pages/about/About';
import NewsFeed from '../pages/news/NewsFeed';
import NewsDetail from '../pages/news/NewsDetail';
import Dashboard from '../pages/users/Dashboard';
import Characters from '../pages/users/Characters';
import CharacterAdminWarn from '../pages/users/admin_warn/CharacterAdminWarn';
import CharacterInventory from '../pages/users/inventory/CharacterInventory';
import CharacterVehicle from '../pages/users/vehicle/CharacterVehicle';
import CharacterProperty from '../pages/users/property/CharacterProperty';
import Settings from '../pages/users/Settings';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/news" component={NewsFeed} />
            <Route exact path="/news/:slug" component={NewsDetail} />
            {/* <Route exact path="/blog" component={BlogList} /> */}
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/characters" component={Characters} />
            <PrivateRoute exact path="/characters/:name/admin_records/:id" component={CharacterAdminWarn} />
            <PrivateRoute exact path="/characters/:name/inventory/:id" component={CharacterInventory} />
            <PrivateRoute exact path="/characters/:name/vehicle/:id" component={CharacterVehicle} />
            <PrivateRoute exact path="/characters/:name/property/:id" component={CharacterProperty} />
            <PrivateRoute exact path="/settings" component={Settings} />
        </Switch>
    )
}

export default Routes;
