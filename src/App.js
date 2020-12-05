import Home from './Home'
import Header from "./Header"
import Footer from './Footer'
import SearchPage from './SearchPage'
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/*">
            <h1>Error 404 No route found</h1>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
