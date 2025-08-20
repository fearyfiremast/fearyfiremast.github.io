
const PATH = "/JSON/articles.json"
const postFeed = document.querySelector("#postContent");
const feedStatus = new FeedStatus();

function FeedStatus() {
    // Stores sorted JSON
    this.buffer;
    this.cssClass;
    this.currentPostsDisplayed = 0;

    // Stores JSON object
    this.articleFile = null;
    this.searchKey;
}

async function loadArticlesJSON() {
    // fetchs file with path attributed to path constant
    fetch(PATH)
    .then((response)=> {
        if (!response.ok) {
            // Throwing errors is like Java. can get response status
            throw new Error(`HTTP Error: ${response.statusText}`);
        }
        return response.json();
    })
    .then((jsonResponse)=> {
        feedStatus.articleFile = jsonResponse;
        console.log(feedStatus.articleFile);
        return;
    })
    .catch((responseError)=> {
        console.log("Error added to feedStatus");
        feedStatus.articleFile = responseError;
    });

    return;
}

export async function updatePosts() {
    //TODO: add logic for changing search parameters
    //TODO: add logic for removing all existing posts

    // checks if JSON file already exists. If not process Promise
    if (feedStatus.articleFile === null) {
        // May be messy as fetch API returns a promise
        await loadArticlesJSON();
        console.log(feedStatus.articleFile);
        //postFeed.textContent += feedStatus.articleFile;
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
        postFeed.appendChild(post);
    }
*/
}