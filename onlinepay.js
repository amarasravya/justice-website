// JavaScript function to handle form validation and submission
function validateForm(event) {
    // Prevent form submission to allow validation
    event.preventDefault();

    // Get form values
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;
    const establishment = document.getElementById('establishment').value;
    const partyName = document.getElementById('partyName').value;
    const courtFeeAmount = document.getElementById('courtFeeAmount').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const termsAccepted = document.getElementById('termsCheckbox').checked;

    // Validate required fields
    if (state === "") {
        alert("Please select a state.");
        return false;
    }

    if (district === "") {
        alert("Please select a district.");
        return false;
    }

    if (establishment === "") {
        alert("Please select an establishment.");
        return false;
    }

    if (partyName === "") {
        alert("Party name is required.");
        return false;
    }

    if (courtFeeAmount === "" || courtFeeAmount <= 0) {
        alert("Please enter a valid court fee amount.");
        return false;
    }

    if (mobileNumber === "" || !/^\d{10}$/.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    if (!termsAccepted) {
        alert("Please agree to the Terms and Conditions.");
        return false;
    }

    // If all validations pass, show success message (can be replaced with form submission)
    alert("Form submitted successfully!");
    return true;
}
