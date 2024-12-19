// JavaScript function to handle form submission
function submitForm() {
    // Clear any previous error messages
    clearErrors();

    // Get form values
    const lawyerName = document.getElementById('lawyer-name').value;
    const clientName = document.getElementById('client-name').value;
    const caseNumber = document.getElementById('case-number').value;
    const vakalatFile = document.getElementById('vakalat-file').files[0];

    // Basic validation
    let isValid = true;

    if (!lawyerName) {
        showError('lawyerNameError', 'Lawyer’s name is required.');
        isValid = false;
    }

    if (!clientName) {
        showError('clientNameError', 'Client’s name is required.');
        isValid = false;
    }

    if (!caseNumber) {
        showError('caseNumberError', 'Case number is required.');
        isValid = false;
    }

    if (!vakalatFile) {
        showError('fileError', 'Please upload a Vakalat document.');
        isValid = false;
    } else if (!/\.(pdf|doc|docx)$/i.test(vakalatFile.name)) {
        showError('fileError', 'Only PDF, DOC, or DOCX files are allowed.');
        isValid = false;
    }

    if (isValid) {
        // Show a success message (this can be replaced with an actual form submission)
        document.getElementById('form-status').innerText = 'Vakalat submitted successfully!';
    } else {
        document.getElementById('form-status').innerText = 'Please fix the errors and try again.';
    }
}

// Function to display error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = 'block';
    errorElement.innerText = message;
}

// Function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
        error.innerText = '';
    });
}
