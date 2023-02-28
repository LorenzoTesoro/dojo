/* 

Recupera tramite API i dati di un post (va bene un qualsiasi *id* a caso), le info sul suo autore e stampale nella console dei developer tools.

In sintesi:

 1) recupero un **post** via API tramite id
 2) utilizzo l'userId dell'oggetto post per recuperare un **utente**
 3) stampo entrambe le info tramite **console.log**

*/

const api_base_url = "https://jsonplaceholder.typicode.com";
const post_id = 100;

function getPost(id, successCb, errorCb) {
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