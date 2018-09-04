axios.get('https://dino-1-server.herokuapp.com/').then(function(result)   {
    let apiJobData = result.data;
    apiJobData.map((job) =>   {
        let jobList = document.querySelector('#job-listings');
        let newJob = document.createElement('li');
        newJob.innerText = job.title;
        let pay = document.createElement('p');
        pay.innerHTML = '<small>' + job.pay + '</small>';
        newJob.appendChild(pay);
        let desc = document.createElement('p');
        desc.innerText = job.description;
        newJob.appendChild(desc);
        let interestedDinosaurs = document.createElement('p');
        interestedDinosaurs.innerHTML = '<small></small>';
        newJob.appendChild(interestedDinosaurs);
        jobList.appendChild(newJob);
    });
});

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', function(e)   {
    let title = document.querySelector('#titleInput').value
    let pay = document.querySelector('#pay').value
    let description = document.querySelector('#description').value
    addToJobListings(title, pay, description);
    e.preventDefault();
});

function addToJobListings(title, pay, description) {
    let jobList = document.querySelector('#job-listings');
    let job = document.createElement('li');
    job.innerText = title;
    let compensation = document.createElement('p');
    compensation.innerHTML = '<small>' + pay + '</small>';
    job.appendChild(compensation);
    let desc = document.createElement('p');
    desc.innerText = description;
    job.appendChild(desc);
    jobList.appendChild(job);
}