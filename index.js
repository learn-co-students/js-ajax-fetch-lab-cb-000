function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
   .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const link = `<a href="${json.html_url}">${json.name}</a>`;
  document.getElementById('results').innerHTML += link;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const repo = 'kpediad/js-ajax-fetch-lab';

  fetch(
    `https://api.github.com/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify({title: issueTitle, body: issueBody}),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => getIssues());

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'kpediad/js-ajax-fetch-lab';

  fetch(
    `https://api.github.com/repos/${repo}/issues`,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
   .then(json => showIssues(json));

}

function showIssues(json) {
  const issuesList = `<ul>${json
    .map(issue => '<li><a href="' + issue.html_url + '">' + issue.title + '</a></li>')
    .join('')}</ul>`;
  document.getElementById('issues').innerHTML = issuesList;
}
