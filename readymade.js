function generatePleading() {
    // Get values from the form
    const partyName = document.getElementById("partyName").value;
    const caseNumber = document.getElementById("caseNumber").value;
    const courtName = document.getElementById("courtName").value;
    const date = document.getElementById("date").value;
    const pleadingContent = document.getElementById("pleadingContent").value;

    // Create the pleading content preview
    const previewContent = `
        IN THE ${courtName} COURT OF LAW

        CASE NUMBER: ${caseNumber}

        PARTY NAME: ${partyName}

        DATE: ${date}

        PLEADING:

        ${pleadingContent}
    `;

    // Display the preview content
    document.getElementById("pleadingPreview").innerText = previewContent;
}

function downloadPleading() {
    const pleadingText = document.getElementById("pleadingPreview").innerText;

    // Create a blob with the pleading content
    const blob = new Blob([pleadingText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "LegalPleading.txt";
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
}

function submitPleading() {
    // Get values from the form
    const partyName = document.getElementById("partyName").value;
    const caseNumber = document.getElementById("caseNumber").value;
    const courtName = document.getElementById("courtName").value;
    const date = document.getElementById("date").value;
    const pleadingContent = document.getElementById("pleadingContent").value;

    // Create a JSON object to send to the backend
    const pleadingData = {
        partyName: partyName,
        caseNumber: caseNumber,
        courtName: courtName,
        pleadingDate: date,
        pleadingContent: pleadingContent
    };

    // Send the data to the server using Fetch API
    fetch('server.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pleadingData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Pleading submitted successfully: ' + data.message);
        // Optionally, clear the form or update UI
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting pleading');
    });
}
