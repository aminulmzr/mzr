document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Name: ${name}</p><p>Date: ${date}</p>`;
});
