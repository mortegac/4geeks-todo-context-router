import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ThemeProvider from './ThemeProvider';

import NavBarTop from './components/NavBarTop'


//SECCIONES
import { Home } from './view/Home';
import MyTask from './view/MyTask.jsx';
import Tasks from './view/Tasks.jsx'
import { NotFound } from './view/NotFound';


import { Container, Row, Col } from 'react-bootstrap';
const App = () => {
  
  return (
    <Container>
      <ThemeProvider>

        <BrowserRouter>
            <Row>
              <Col><NavBarTop/></Col>
            </Row>
            <Row>
              <Col>
                <Switch>
                  {/* <Redirect from='/hola' to='/home' /> */}
            
                  <Route exact path="/" component={Home} />
                  <Route exact path="/mis-tareas" component={MyTask} />
                  <Route exact path="/tareas" component={Tasks} />

                  <Route render={NotFound} />

                
                </Switch>
              </Col>
          </Row>
        </BrowserRouter>
        
      </ThemeProvider>
    </Container>
  );
}



// ---- COMPARTIR ESTADO ----
// FLUX 
// CONTEXT API 
//  array task 

export default App;
