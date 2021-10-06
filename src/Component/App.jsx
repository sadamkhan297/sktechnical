import { Route, Switch } from "react-router"
import Home from "../Component/Pages/Home"
import Portfolio from "./Pages/Portfolio"
import Articles from "./Pages/Articles"
import Contact from "./Pages/ContactUs"
import SinglePage1 from "./Img-Single-Page/SinglePage1"
import SinglePage2 from "./Img-Single-Page/SinglePage2"
import SinglePage3 from "./Img-Single-Page/SinglePage3"
import SinglePage4 from "./Img-Single-Page/SinglePage4"
import SinglePage5 from "./Img-Single-Page/SinglePage5"
import SinglePage6 from "./Img-Single-Page/SinglePage6"
import SinglePage7 from "./Img-Single-Page/SinglePage7"
import SinglePage8 from "./Img-Single-Page/SinglePage8"
import SinglePage9 from "./Img-Single-Page/SinglePage9"



const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/portfolio" component={Portfolio}></Route>
                <Route exact path="/articles" component={Articles}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/singlePage1" component={SinglePage1}></Route>
                <Route exact path="/singlePage2" component={SinglePage2}></Route>
                <Route exact path="/singlePage3" component={SinglePage3}></Route>
                <Route exact path="/singlePage4" component={SinglePage4}></Route>
                <Route exact path="/singlePage5" component={SinglePage5}></Route>
                <Route exact path="/singlePage6" component={SinglePage6}></Route>
                <Route exact path="/SinglePage7" component={SinglePage7}></Route>
                <Route exact path="/SinglePage8" component={SinglePage8}></Route>
                <Route exact path="/SinglePage9" component={SinglePage9}></Route>
            </Switch>
        </>
    )
}

export default App
