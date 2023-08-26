function ValidateEmail(email) 
{
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let text = email.value;
    if (text.match(pattern)) {
      var form = document.getElementById("myForm");
      form.onsubmit();
      window.location.href = "Welcome.html"
    } else {
      alert("Invalid email address!");
      myForm.email.focus();
      return false;
    }
}

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('check')
  checkboxes.forEach((item) => {
    if(item != checkbox) item.checked = false
  });
}