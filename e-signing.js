// Keep track of the number of signers added
let signerCount = 0;

// Function to add new signer input fields
function addSigner() {
    signerCount++;
    const signersContainer = document.getElementById('signers-container');

    const signerDiv = document.createElement('div');
    signerDiv.classList.add('signer-input');
    signerDiv.id = `signer-${signerCount}`;

    signerDiv.innerHTML = `
        <input type="text" id="signer-name-${signerCount}" placeholder="Signer Name">
        <input type="email" id="signer-email-${signerCount}" placeholder="Signer Email">
        <button onclick="removeSigner(${signerCount})">Remove</button>
    `;

    signersContainer.appendChild(signerDiv);
}

// Function to remove signer input fields
function removeSigner(id) {
    const signerDiv = document.getElementById(`signer-${id}`);
    signerDiv.remove();
}

// Function to handle document submission for signing
async function submitForSigning() {
    const fileInput = document.getElementById('document-upload');
    const signers = [];

    // Collect signers' details
    for (let i = 1; i <= signerCount; i++) {
        const name = document.getElementById(`signer-name-${i}`).value;
        const email = document.getElementById(`signer-email-${i}`).value;
        if (name && email) {
            signers.push({ name, email });
        }
    }

    if (!fileInput.files.length) {
        alert('Please upload a document to sign.');
        return;
    }

    if (signers.length === 0) {
        alert('Please add at least one signer.');
        return;
    }

    // Create a FormData object to send file and signers data
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('signers', JSON.stringify(signers));

    try {
        // Send request to the backend server for signing (adjust the URL accordingly)
        const response = await fetch('http://localhost:3000/submit-for-signing', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('status-message').innerText = `Document submitted successfully! Signing process initiated.`;
        } else {
            document.getElementById('status-message').innerText = `Error: ${result.message}`;
        }
    } catch (error) {
        console.error('Error submitting document for signing:', error);
        document.getElementById('status-message').innerText = `Error: Unable to submit document for signing.`;
    }
}
