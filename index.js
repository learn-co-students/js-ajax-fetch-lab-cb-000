const username = 'NAME'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const apiURL = `https://api.github.com/repos/${repo}/forks`
  fetch(apiURL, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById("#results").innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {

  //use this function to create an issue based on the values input in index.html
  const repo = `${username}/js-ajax-fetch-lab`
  const URL = `https://api.github.com/repos/${repo}/issues`
  const data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(URL,{
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => getIssues(json));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${username}/js-ajax-fetch-lab`
  const URL = `https://api.github.com/repos/${repo}/issues`
  fetch(URL,{
    Authorization: `token ${getToken()}`
  })
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json){
  document.getElementById("issues").innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}
