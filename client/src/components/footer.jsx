import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-input">
      <form >
        <label for="fname" >First name:</label><br/>
        <input type="text" id="fname" name="fname" placeholder="First Name"/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname"placeholder="Last Name"/><br/>
        <label for="lname">Last name:</label><br/>
      <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/><br/>
        <label for="lname">Last name:</label><br/>
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Last Name">

</textarea><br/>
      <button className="btn btn-outline-secondary btn-lg" >Submit</button>
      </form>
      </div>
      <p>Copyright ⓒ {year}</p>

    </footer>
  );
}

export default Footer;
