import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


   class Form extends React.Component {
  render() {
    return (
       <Form action="mailto:aruneemadeshmukh@gmail.com" method="post" enctype="text/plain">
		  <label>
		    Name:
		    <input type="text" name="name" />
		  </label>
		  <label>
		    Email:
		    <input type="text" name="mail" />
		  </label>
		  <input type="submit" value="Submit" />
		</Form> 
  );
 }
}

export default Form;