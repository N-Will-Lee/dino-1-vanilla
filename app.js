

axios.get('https://dino-1-server.herokuapp.com/').then(function(result)   {
    let apiJobData = result.data;
    populateJobListings(apiJobData);
    let submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', function(e)   {
        let title = document.querySelector('#titleInput').value
        let pay = document.querySelector('#pay').value
        let description = document.querySelector('#description').value
        addToJobListings(title, pay, description);
        e.preventDefault();
    })
})

function populateJobListings(jobData) {
        for (let i=0; i<jobData.length; i++) {
            let jobList = document.querySelector('#job-listings');
            let job = document.createElement('li');
            job.innerText = jobData[i]['title'];
            let pay = document.createElement('p');
            pay.innerHTML = '<small>' + jobData[i]['pay'] + '</small>'
            job.appendChild(pay);
            let desc = document.createElement('p');
            desc.innerText = jobData[i]['description'];
            job.appendChild(desc);
            jobList.appendChild(job)
        }
    }

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
    jobList.appendChild(job)
}