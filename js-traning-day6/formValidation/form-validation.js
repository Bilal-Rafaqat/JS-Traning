function validate() {

  const username = document.getElementById('username');
  const emailAddress = document.getElementById('email-address');
  if (username.value === "") {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
  if (emailAddress.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }
  if (!emailIsValid(emailAddress.value)) {
    alert("Please enter a valid email address.");
    emailAddress.focus();
    return false;
  }
  return true;
}
const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
