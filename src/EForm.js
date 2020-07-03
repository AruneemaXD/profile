import React,{Component} from 'react';
import './EForm.css'

   class EForm extends React.Component {
  render() {
    return (
       <form action="mailto:aruneemadeshmukh@gmail.com" method="post" enctype="text/plain" align="center" >
		  <label>
		    Name:-       
		    <input type="text" name="name" />
		  </label>
		  <label>
		    Email:-   
		    <input type="text" name="mail" />
		  </label>
		  <label>
		  <input type="submit" value="Submit" />
		  </label>
		</form> 
  );
 }
}

export default EForm;