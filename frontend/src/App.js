import Header from "./components/Header"
import Footer from "./components/Footer" 
import {Container} from "react-bootstrap"
import Homescreen from "./screens/Homescreen"
import Productscreen from "./screens/Productscreen"
import CartScreen from "./screens/CartScreen"
import {BrowserRouter as Router,Route ,Switch} from "react-router-dom"
function App() {
  return (
    <Router>
    
     <Header />
     <Container>
      <main className="py-3">
      <Switch>
      <Route path='/' component={Homescreen} exact/>
      <Route path='/Product/:id' component={Productscreen}  />
      <Route path='/Cart/:id?' component={CartScreen}  />  
      </Switch> 
      
      </main> 
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
