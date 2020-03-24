const input = document.querySelector("#password");
const hint = document.querySelector("#hint");
const details = document.querySelector("#details");

hideDefault();

input.addEventListener("keyup", password_check);

function password_check(event) {
  hint.style.display = "block";
  details.style.display = "block";
  const { value } = event.target;
  if (value == "") {
    hint.style.display = "none";
    details.innerText = "";
    return false;
  }
  if (value.length < 5) {
    response(
      "Password strength: Weak",
      "Use a password with 6 letters or above."
    );
  } else {
    /* See if password contains atleast uppercased letter or a digit */
    if (value.match(/[A-Z0-9]/g)) {
      response("Password strength: Good");
      /* See if password value contains non-alpha character */
      if (value.match(/[^a-zA-Z0-9-]+/g)) {
        response("Password strength: Secure", "Well done!");
      } else {
        response(
          "Password strength: Good",
          "Password would be stronger with symbols."
        );
      }
    } else {
      response(
        "Password strength: Moderate",
        "Use atleast uppercase to make password more solid."
      );
    }
  }
}

/**
 *
 * @param {String} strength The strength of the password
 * @param {String} help Any hints to secure password more.
 */
function response(strength, help) {
  hint.innerText = help;
  details.innerText = strength;
}

function hideDefault() {
  if (hint.innerText == "" && details.innerText == "") {
    hint.style.display = "none";
    details.style.display = "none";
  }
}
