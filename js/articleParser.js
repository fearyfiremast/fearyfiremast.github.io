const PATH = "JSON/articles.json"

// Worth considering an id that serves this purpose
const postFeed = document.querySelector("#postContent");

// Represents JSON file loaded into mem
let articleFile = null;

/* Retrieves the JSON files stored in 
 * TODO: Implement
 */
function loadArticlesJSON() {
    return [];
}

function updatePosts() {


    //TODO: add logic for changing search parameters
    //TODO: add logic for removing all existing posts

    // checks if JSON file already exists
    if (articleFile === null) {
        // May be messy as fetch API returns a promise
        articleFile = loadArticlesJSON();
    }

    // handles errors with retrieval
    if (articleFile.length === 0) {
        postFeed.textContent += "HELLO :3";
        return;
    }
    
    // TODO: read json object and ensure values are okay

    //TODO: Debug
    let itemsToAdd = 1;
    let post;
    for (let i = 0; i < itemsToAdd; i++) {
        let toAdd = articleFile[i];

        // TODO: Add eventListener on click that will transport the user to the correct page
        // Note: Do this by altering the window object. window.replace.href()

        post = document.createElement("article");
        // TODO: add alt tag to img
        post.innerHTML =`
            <h3>${toAdd.name}</h3>
            <img src="${toAdd.thumbnail}>
            <p>
                will figure this out later
            </p>`;

        post.addEventListener("click", ()=> {
            // make sure
            location.href = `${toAdd.pagePath}`;
        });

        //TODO: add class to post, make n=1th of class have different css specs

        // adds post to feed
        postFeed.appendChild(post);
    }
    

}

updatePosts()