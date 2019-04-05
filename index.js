// Fork this repository in the forkRepo function. Read more about forking in the GitHub Forks API documentation. If done correctly, the response, once converted to JSON, should contain information about your personal fork of the repo. Pass this JSON data into showResults.
const baseURL = 'https://api.github.com';
const user = 'theomoji';

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
// In showResults, write code to display a link to the forked repo url (json.html_url). Append this link to the results div.
let results = document.getElementById('results');
function showResults(json) {
  let link = json.git_url;
  results.append(link)
  
  //use this function to display the results from forking via the API
}

  //use this function to create an issue based on the values input in index.html
  function createIssue() {
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
