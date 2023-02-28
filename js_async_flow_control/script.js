/* 

Recupera tramite API i dati di un post (va bene un qualsiasi *id* a caso), le info sul suo autore e stampale nella console dei developer tools.

In sintesi:

 1) recupero un **post** via API tramite id
 2) utilizzo l'userId dell'oggetto post per recuperare un **utente**
 3) stampo entrambe le info tramite **console.log**

*/

const api_base_url = "https://jsonplaceholder.typicode.com";
const post_id = 100;

// 1. callbacks pattern
/* function getPost(id, successCb, errorCb) {
  fetch(api_base_url + "/posts/" + id)
    .then((response) => response.json())
    .then((data) => successCb(data))
    .catch((error) => errorCb(error));
}
function getUser(id, successCb, errorCb) {
  fetch(api_base_url + "/users/" + id)
    .then((response) => response.json())
    .then((data) => successCb(data))
    .catch((error) => errorCb(error));
}

getPost(
  post_id,
  (post) => {
    const { userId } = post; // destructuring
    // const userId = post.userId;
    getUser(
      userId,
      (user) => {
        console.log("Post:", post);
        console.log("User", user);
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
*/

// 2. promise pattern
/* function getPost(id) {
  return fetch(api_base_url + "/posts/" + id).then((response) =>
    response.json()
  );
}
function getUser(id) {
  return fetch(api_base_url + "/users/" + id).then((response) =>
    response.json()
  );
}

const data = {};
getPost(post_id)
  .then((post) => {
    data.post = post;
    return getUser(post.userId);
  })
  .then((user) => {
    data.user = user;
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  }); */

// 3. async-await
async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function init() {
  try {
    const post = await getData(api_base_url + "/posts/" + post_id);
    const user = await getData(api_base_url + "/users/" + post.userId);
    console.log("Post:", post);
    console.log("User:", user);
  } catch (error) {
    console.error(error);
  }
}

init();
