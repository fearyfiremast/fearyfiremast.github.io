
const PATH = "/JSON/articles.json"
const feedContent = document.querySelector("#postContent");
const feedHelper = new FeedStatus();

function FeedStatus() {
    // Stores sorted JSON
    this.buffer;
    this.cssClass;
    this.currentPostsDisplayed = 0;

    // Stores JSON object
    this.articleFile = null;
    this.searchKey;
}

// Fetches and assigns JSON file to feedHelper
async function loadArticlesJSON() {
    // TODO: Look into reconstructing code to reduce size of function and allow better error handling

    await (fetch(PATH)
    .then((response)=> {
        if (!response.ok) {
            // Throwing errors is like Java. can get response status
            throw new Error(`HTTP Error: ${response.statusText}`);
        }
        return response.json();
    })
    .then((jsonResponse)=> {
        feedHelper.articleFile = jsonResponse;
    })
    .catch((responseError)=> {

        // Handle error case properly. Will probably crash site if this runs
        console.log("Error added to feedHelper");
        feedHelper.articleFile = responseError;
    }));

    return;
}

export async function updatePosts() {
    //TODO: add logic for changing search parameters
    //TODO: add logic for removing all existing posts

    // checks if JSON file already exists. If not process Promise
    if (feedHelper.articleFile === null) {
        // May be messy as fetch API returns a promise
        await loadArticlesJSON();
        feedContent.textContent = JSON.stringify(feedHelper.articleFile);
        //feedContent.textContent += feedHelper.articleFile;
    }

    
    // TODO: read json object and ensure values are okay

    /*
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
        feedContent.appendChild(post);
    }
*/
}