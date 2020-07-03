import React,{Component} from 'react';


   class Form extends React.Component {
  render() {
    return (
      <form action="mailto:aruneemadeshmukh@gmail.com" method="post" enctype="text/plain" >
           FirstName:<input type="text" name="FirstName">
           Email:<input type="text" name="Email">
           <input type="submit" name="submit" value="Submit">
      </form>
    
  );
 }
}

export default Form;