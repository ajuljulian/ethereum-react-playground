import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Questions?</h2>
        <p>
            <a href="mailto:ajuljulian@yahoo.com?Subject=Hello" target="_top">Email me</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;