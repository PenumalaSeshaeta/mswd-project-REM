import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Services from "../services/Services"
import Blog from "../blog/Blog"
import Pricing from "../pricing/Pricing"
import Contact from "../contact/Contact"
import Register from "../Register/Register"
import Logout from "../logout/Logout"
import Login from "../login/Login"

const Pages = () => {
    return (
        <>
        <Router>
        <Header />
       <Switch>
           
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
         </Switch>
       <Footer/>
    
        </Router>
        </>
    )
}

export default Pages

