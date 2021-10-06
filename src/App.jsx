import { Route, Switch } from "react-router"
// import img from "./image/b2.jpg"
import Navigation from "./Navigation"
import Menu from "./Menu"
// import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"


const App = () => {
    return (
        <>
<Navigation/>
<Menu/>
<Switch>
   {/* <Route exact path="/" component={About}></Route> */}
   <Route exact path="/about" component={About}></Route>
   <Route exact path="/services" component={Services}></Route>
   <Route exact path="/contact" component={Contact}></Route>
</Switch>
        </>
    )
}

export default App
