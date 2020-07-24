const baseURL = 'https://api.github.com';
const user = 'theouternet';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  
     const url = `${baseURL}/repos/${repo}/forks`; 
  
  //use fetch to fork it!
  
    fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json));
  
}


 let results = document.getElementById('results'); 

function showResults(json) {
  //use this function to display the results from forking via the API
  
   let link = json.git_url;
  results.append(link)

  
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  
   const repo = `${user}/js-ajax-fetch-lab`;
    const url = `${baseURL}/repos/${repo}/issues`;
    const postData = {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(res => res.json())
      .then(json => getIssues());
  
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
  
}
