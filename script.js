// script.js
document.addEventListener("DOMContentLoaded", function() {
    const resultsData = [
        { rollNumber: "1001", name: "Alice", subject1: 85, subject2: 78, subject3: 92, subject4: 88, subject5: 76 },
        { rollNumber: "1002", name: "Bob", subject1: 72, subject2: 81, subject3: 79, subject4: 85, subject5: 89 },
        { rollNumber: "1003", name: "Charlie", subject1: 90, subject2: 87, subject3: 85, subject4: 91, subject5: 88 },
        { rollNumber: "1004", name: "David", subject1: 64, subject2: 73, subject3: 68, subject4: 71, subject5: 79 },
        { rollNumber: "1005", name: "Eve", subject1: 77, subject2: 82, subject3: 89, subject4: 84, subject5: 75 }
    ];

    const tableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];

    resultsData.forEach(result => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = result.rollNumber;
        row.insertCell(1).textContent = result.name;
        row.insertCell(2).textContent = result.subject1;
        row.insertCell(3).textContent = result.subject2;
        row.insertCell(4).textContent = result.subject3;
        row.insertCell(5).textContent = result.subject4;
        row.insertCell(6).textContent = result.subject5;
        row.insertCell(7).textContent = result.subject1 + result.subject2 + result.subject3 + result.subject4 + result.subject5;
    });
});
