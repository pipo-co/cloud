// const form = document.getElementById('apply-form');
const cv = document.getElementById('cv');

const queryParamsString = window.location.search.split('?')[1];
const queryParams = new URLSearchParams(queryParamsString);
const searchId = queryParams.get('searchId');
if (!searchId) window.location.href = 'not-found.html';

async function sendIT() {
  const url = new URL("/api/getPresignedURL", document.baseURI);
  url.searchParams.append("busqueda", searchId);

  const URLresponse = await fetch(url, {
    method: 'POST',
  });

  console.log(URLresponse);
  const presignedURL = await URLresponse.json();


  console.log(presignedURL);

  let response = await fetch(presignedURL.URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/pdf',
    },
    body: cv.files[0],
  });
  console.log(response);
  if (response.status === '200') {
    alert('Your CV has been uploaded and you have successfully applied for the position. Good luck!');
    window.location.href = 'index.html';
  }
}

// form.addEventListener("submit", (event) => {
  
//   event.preventDefault()
// });

const applyButton = document.getElementById('apply-button');
applyButton.addEventListener('click', () => {
  sendIT();
});