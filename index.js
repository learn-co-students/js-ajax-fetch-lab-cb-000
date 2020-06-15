const baseURL = 'https://api.github.com';
const user = 's-blais';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  // POST /repos/:owner/:repo/forks
  fetch(`${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
  .then(resp => resp.json())
  .then(json => showResults(json));
}

function showResults(json) {
  
  document.getElementById("results").innerHTML += `<a href="${json.html_url}">${json.html_url}</a>`;
}

function createIssue() {
  const issueData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };
  fetch(
    `${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`,
    {
      method: 'POST',
      body: JSON.stringify(issueData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
  .then(response => response.json())
  .then(json => getIssues()); // why does getIssues need an argument to work? It works fine with no argument! Does .then require an argument on its callback even if it doesn't use it? Don't know enough about Promise yet.
}

function getIssues() {
  // GET /repos/:owner/:repo/issues
  fetch(
    `${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`,
    {
      headers: {
      Authorization: `token ${getToken()}`
      }
    }
  )
  .then(response => response.json())
  .then(json => issuesHTML(json));
}

function issuesHTML(issues) {
  let result = issues.map((issue)=>renderIssue(issue)).join('');
  document.getElementById("issues").innerHTML += `<ul>${result}</ul>`;
}

function renderIssue(issue) {
  return`<li>${issue.title}</li>`;
}