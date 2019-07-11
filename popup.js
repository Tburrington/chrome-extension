const todoList = {
  todos: [],
  addTodo: function(todoText) {
    //new code i added

    this.todos.push({
      todoText: todoText,
      completed: false
    });
  }

};

function addTodo() {
  let addTodoTextInput = document.getElementById("addTodoTextInput");
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = "";
  view.displayTodos();
}

const handlers = {
  addTodo: function() {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  }};
 
const ul = document.querySelector("ul");
let addButton = document.getElementById("add-button");
const button = document.querySelector("#delete-button");
const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const liMaker = text => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

addTodoTextInput.addEventListener("keypress", function(key) {
  if (key.keyCode === 13) {
    // addTodo();

    key.preventDefault();
    itemsArray.push(addTodoTextInput.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    liMaker(addTodoTextInput.value);
    addTodoTextInput.value = "";
  }
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener("click", function() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});





// var tag = document.createElement("script");

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("player", {
//     height: "250",
//     width: "250",
//     videoId: "r5KidgLsaeQ",
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange
//     }
//   });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }

// function authenticate() {
//   return gapi.auth2
//     .getAuthInstance()
//     .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
//     .then(
//       function() {
//         console.log("Sign-in successful");
//       },
//       function(err) {
//         console.error("Error signing in", err);
//       }
//     );
// }
// function loadClient() {
//   gapi.client.setApiKey("AIzaSyCgxkKgvYepVDz00q0XxglPzW7jGOhUvdg");
//   return gapi.client
//     .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//     .then(
//       function() {
//         console.log("GAPI client loaded for API");
//       },
//       function(err) {
//         console.error("Error loading GAPI client for API", err);
//       }
//     );
// }
// // Make sure the client is loaded and sign-in is complete before calling this method.
// $(function() {
//   $("#submission-form").on("submit", function(e) {
//     return gapi.client.youtube.search
//       .list({
//         part: "snippet",
//         maxResults: 25,
//         q: encodeURIComponent($("#addTodoTextInput").val()).replace(
//           /%20/g,
//           "+"
//         ),
//         maxResults: 1,
//         order: "viewCount",
//         publishedAfter: "2019-01-01T00:00:00Z"
//       })
//       .then(
//         function(response) {
//           // Handle the results here (response.result has the parsed body).
//           console.log("Response", response);
//         },
//         function(err) {
//           console.error("Execute error", err);
//         }
//       );
//   });
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({
//       client_id:
//         "958041010612-e5vsemos3kjphffjqd5a54be5j8sli58.apps.googleusercontent.com"
//     });
//   });
// });
