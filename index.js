// function getToken() {
//   //change to your token to run in browser, but set
//   //back to '' before committing so all tests pass
//   return '';
// }
//
// function forkRepo() {
//   const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
//   //use fetch to fork it!
// }
//
// function showResults(json) {
//   //use this function to display the results from forking via the API
// }
//
// function createIssue() {
//   //use this function to create an issue based on the values input in index.html
// }
//
// function getIssues() {
//   //once an issue is submitted, fetch all open issues to see the issues you are creating
// }


const token = ''
const githubUrl = "/api.github.com/repos/"


function getIssues() {
  fetch(`${githubUrl}efl7a/js-ajax-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization:`token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  var issueList = `<ul>${json.map(item => '<li>' + item.title + '</li>').join('')}</ul>`
  var issues = document.getElementById("issues")
  issues.innerHTML = issueList
}

function createIssue() {
  var postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }

  fetch(`$/js-ajax-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization:`token ${token}`
    }
  }).then(getIssues())
}

function showResults(json) {
  var url = json.full_name
  var results = document.getElementById("results")
  results.innerHTML = `<a href="https://github.com/${url}" target="_blank">New Repo</a>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab'
  fetch(`${githubUrl}${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization:`token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
