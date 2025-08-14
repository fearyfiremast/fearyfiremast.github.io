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
    // checks if JSON file already exists
    
    if (articleFile === null) {
        // May be messy as fetch API returns a promise
        articleFile = loadArticlesJSON();
    }

    // handles errors with retrieval
    if (articleFile.length === 0) {
        postFeed.textContent += "HELLO :3";
    }
    
    

}

updatePosts()