/* Global Variables */
let data = {};
const apiKey = 'be6a4d51af89985c0ee5ef7faabc09e1&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const asyncWeather = async (zip=15085) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`);
    try {
        const data = await res.json();
        console.log(data);
        return {
            content: data.base,
            date: data.dt,
            temp: data.main.temp
        }
    } catch(e) {
        console.log(e);
        return {};
    }
};

const postData = async (url='', data={}) => {
    console.log(data);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch(e) {
        console.log(e);
    }
};

const retrieveData = async () => {
    const request = await fetch('/all');
    try {
        // Transform into JSON
        const allData = await request.json()
        console.log('all data: ' + allData)
        // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
        document.getElementById('content').innerHTML = allData.feel;
        document.getElementById('date').innerHTML =allData.date;
    }
    catch(error) {
        console.log('error', error);
        // appropriately handle the error
    }
};

const generateEventListener = document.querySelector('#generate').addEventListener('click', () => {
    asyncWeather(document.querySelector('#zip').value).then( (data) => {
        postData('/', data);
        retrieveData();
        
    });
    
});


