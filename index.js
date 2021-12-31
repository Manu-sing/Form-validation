const form = document.querySelector("form");

// EMAIL
// add form validation for e-mail input 
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", () => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showEmailError();
    }
})

// email error function
function showEmailError() {
    //email
    if (email.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        emailError.textContent = "Enter an e-mail address.";
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if (email.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `"Email should be at least ${email.minLength} characters; you entered ${email.value.length}."`;
    }
    // Set the styling for active error
    emailError.className = "error active";

}

// COUNTRY
// add form validation for country input field
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

country.addEventListener("input", () => {
    if (country.validity.valid) {
        countryError.textContent = "";
        countryError.className = "error";
    } else {
        showCountryError();
    }
})

function showCountryError() {
    if (country.validity.valueMissing) {
        countryError.textContent = "Enter a country.";
    } else if (country.validity.typeMismatch) {
        countryError.textContent = "Entered value needs to be a country.";
    } 
    countryError.className = "error active";
}

//ZIPCODE
// add form validation for zipcode
const zipCode = document.getElementById("zip-code");
const zipCodeError = document.querySelector("#zip-code + span.error");

zipCode.addEventListener("input", () => {
    if (zipCode.validity.valid) {
        zipCodeError.textContent = "";
        zipCodeError.className = "error";
    } else {
        showZipCodeError();
    }
})


function showZipCodeError() {
if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = "Enter a zip code.";
} else if (zipCode.validity.patternMismatch) {
    zipCodeError.textContent = "Entered value needs to be a number.";
} else if (zipCode.validity.tooShort) {
    zipCodeError.textContent = "Zip-code must be 6 digits"
}
zipCodeError.className = "error active";

}

//PASSWORD
// add form validation for password
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

password.addEventListener("input", () => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error";
    } else {
        showPasswordError();
    }
})

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "Enter a password.";
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
    }
   passwordError.className = "error active";
}


const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password + span.error");

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "The 2 passwords don't match.";
    } else {
        confirmPasswordError.textContent = "";
        confirmPasswordError.className = "error";
    }
})


// ALL INPUTS
// form on submit
form.addEventListener("submit", (e) => {
    if (!email.validity.valid) {
        showEmailError();
        e.preventDefault(); // so that the form doesn't ignore the error event by sending the inputs anyway 
    }
    if (!country.validity.valid) {
        showCountryError();
        e.preventDefault();
    }

    if(!zipCode.validity.valid) {
        showZipCodeError();
        e.preventDefault();
    }

    if(!password.validity.valid) {
        showPasswordError();
        e.preventDefault();
    }

    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "The 2 passwords don't match.";
        e.preventDefault();
    }

    if (confirmPassword.value == "") {
        confirmPasswordError.textContent = "Enter the confirmed password.";
        e.preventDefault();
    } 

    else {
        alert("Well done, the form was submitted succesfully!")
    }
    
})

// Well in that case you can make it an input type = text, and try using the pattern attribute and use a regex expression to make sure that it is 6 digits, and to see if it doesn't match the pattern you can use the patternMismatch from the constraint validation api.