import React,{Component} from 'react';
import photo1 from './photo1.jpg';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import EForm from './EForm';
import {Container} from 'reactstrap';

 
class App extends Component {
   render(){

    return (

    <div>
      <NavBar>
  	  </NavBar>

      <About>
      </About>
      
      <Projects>
      </Projects>

       
      <footer>
       <hr/>
        <Container>
             <EForm>
  	         </EForm>
        </Container>
      </footer>
         
        

    </div>
    
  );
 }
}


export default App;
