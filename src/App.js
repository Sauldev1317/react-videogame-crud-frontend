import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Componentes
import Navbar from "./Components/Navbar";
import Register from './Pages/Register/index'
import Home from './Pages/Home/index'

function App() {
  return (
    <div>
      <Navbar/>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Register} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
