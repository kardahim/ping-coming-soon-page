// event listener
document.getElementById('form').addEventListener("submit", validation);

function validation(event) {
    let email = document.getElementById('email');
    const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let message = "";
    let ok = false;

    if (email.value == "") {
        message = "Email address cannot be empty";
    }
    else if (email.value.match(emailPattern) == null) {
        message = "Please provide a valid email address";
    }
    else {
        ok = true;
    }

    if (!ok) {
        event.preventDefault();
        email.style.border = "1px solid hsl(354, 100%, 66%)";

        document.getElementById('error').style.visibility = "visible";
        document.getElementById('error').innerHTML = message;
    }
}