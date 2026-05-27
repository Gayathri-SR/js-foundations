//GET
fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => console.log(data));

//POST
fetch('https://api.example.com/api/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key : 'value' })
})
.then(res => res.json())
.then(data => console.log(data));

//PUT
const data = {
    title: "Updated Title",
    content : "Updated content"
};

fetch('https://api.example.com/api/data/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(res => {
    if(!res.ok) {
        throw new Error(`HTTP error! : ${res.status}`);
    }
    return res.json();
})
.then(data => console.log(data));

//DELETE
fetch('https://api.example.com/api/data/1', {
    method: 'DELETE'
})
.then(res => {
    if(!res.ok) {
        throw new Error('Check network response');
    }
    console.log('Deleted successfully!');
})
.catch(err => console.log(err));