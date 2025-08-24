
const PATH = "/JSON/articles.json"
const feedContent = document.querySelector("#postContent");

// Class definition then initialization is clunky
class FeedStatus {

   // array of valid seach keys
   searchKeys = [
    "newest-to-oldest"
   ];

    constructor() {
        // Stores sorted JSON
        this.currentPostsDisplayed = 0;

        // Stores JSON object
        this.postDataList = null;
        this.searchKeyIndex = 0;
    }

    /**
     * Sorts the articles newest to oldest
     */
    sortPostsNewestToOldest() {
        (feedHelper.postDataList).sort((a, b) => {
            // date attribute is in YYYY-MM-DD form AKA Date only form
            return  Date.parse(b["date"]) - Date.parse(a["date"]);
        });  
    }
}

const feedHelper = new FeedStatus();

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
        
        feedHelper.postDataList = [];
        // jsonResponse is returned as an object
        for (const i in jsonResponse) {
            feedHelper.postDataList.push(jsonResponse[i])
        } 

        feedHelper.sortPostsNewestToOldest();
        
    })
    .catch((responseError)=> {

        // Handle error case properly. Will probably crash site if this runs
        console.log("Error added to feedHelper");
        feedHelper.postDataList = responseError;
    }));

    return;
}

export async function updatePosts() {
    //TODO: add logic for changing search parameters
    //TODO: add logic for removing all existing posts

    // checks if JSON file already exists. If not process Promise
    
    if (feedHelper.postDataList === null) {
        await loadArticlesJSON();
        feedContent.textContent = JSON.stringify(feedHelper.postDataList);
    }





    /*
    let itemsToAdd = 1;
    let post;
    for (let i = 0; i < itemsToAdd; i++) {
        let toAdd = postDataList[i];

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