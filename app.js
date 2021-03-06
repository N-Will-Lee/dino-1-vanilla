
//API request and passing result to job card creating function
axios.get('https://dino-1-server.herokuapp.com/').then(function(result)   {
    let jobDataFromApi = result.data;
    jobDataFromApi.map(createListing);
});

//Event listener on Submit button
document.querySelector('.job-form').addEventListener('submit', jobFromInputInfo);

//Create new job card using object containing job info as the parameter
function createListing(job)   {
    let newJob = document.createElement('li');
    newJob.innerText = job.title;
    let pay = document.createElement('p');
    pay.innerHTML = '<small>' + job.pay + '</small>';
    let desc = document.createElement('p');
    desc.innerText = job.description;
    let interestedDinosaurs = document.createElement('p');
    interestedDinosaurs.innerHTML = `<small> ${job.interested.length} dinosaurs are interested in this job.</small>`;
    newJob.append(pay, desc, interestedDinosaurs);
    let jobList = document.querySelector('#job-listings');
    jobList.appendChild(newJob);
};

//Make a new object using user inputs on the page. pass the object to the job card creating function
function jobFromInputInfo(e)   {
    let newJobObject = {'title': document.querySelector('#titleInput').value, 'pay': document.querySelector('#pay').value, 'description': document.querySelector('#description').value, 'interested': []};
    createListing(newJobObject);
    e.preventDefault();
};