import React from 'react'


import{
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom'; 


import Home from '../screens/Home'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component = {Home} />
                <Route path="/Home" component={Home} />
                <Redirect to='/Home'></Redirect>
            </Switch>
        </Router>
    )
}


export default Routes