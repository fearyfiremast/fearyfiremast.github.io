import * as Feed from "./postFeed.js";

// Driver method
async function initialize() {

    /* For some reason running the method here calls the entire file in postFeed.
    EG functions run that are called in the postFeed file.

    Additionally postFeed.js does not require the document be passed into it
     */
    Feed.updatePosts();
}

initialize();