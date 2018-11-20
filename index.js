const user = 'cdcardle';
const baseUrl = 'https://api.github.com/repos';
const fork = `${user}/js-ajax-fetch-lab`;

function getToken() {
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`${baseUrl}/${repo}/forks`, {
    method: "post",
    headers: {Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`;
}

function createIssue() {
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(`${baseUrl}/${fork}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {Auythorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => getIssues());
}

function getIssues() {
  fetch(`${baseUrl}/${fork}/issues`, {
    headers: {Authorization: `token: ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => showIssues(json));
}

function showIssues(json) {
  document.getElementById('results').innerHTML += `<a href="https://github.com/${json.full_name}">New Repo</a>`
}
