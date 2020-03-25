const input = document.querySelector("#password");
const hint = document.querySelector("#hint");
const details = document.querySelector("#details");

/* Control states if requirements are fulfilled */
const password_length = document.querySelector("#pass_length");
const password_upper = document.querySelector("#pass_upper");
const password_symbol = document.querySelector("#pass_symbol");

hideDefault();

input.addEventListener("keyup", password_check);

function password_check(event) {
  hint.style.display = "block";
  details.style.display = "block";
  const { value } = event.target;
  if (value == "") {
    hint.style.display = "none";
    password_length.classList.remove("check");
    password_upper.classList.remove("check");
    password_symbol.classList.remove("check");
    return false;
  }
  if (value.length < 5) {
    response(
      "Password strength: Weak",
      "Use a password with 6 letters or above."
    );
    password_length.classList.remove("check");
  } else {
    password_length.classList.add("check");
    /* See if password contains atleast uppercased letter or a digit */
    if (value.match(/[A-Z0-9]/g)) {
      password_upper.classList.add("check");
      response("Password strength: Good");
      /* See if password value contains non-alpha character */
      if (value.match(/[^a-zA-Z0-9-]+/g)) {
        password_symbol.classList.add("check");
        response("Password strength: Secure", "Well done!");
      } else {
        password_symbol.classList.remove("check");
        response(
          "Password strength: Good",
          "Password would be stronger with symbols."
        );
      }
    } else {
      password_upper.classList.remove("check");
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
}

function hideDefault() {
  if (hint.innerText == "" && details.innerText == "") {
    hint.style.display = "none";
    details.style.display = "none";
  }
}
