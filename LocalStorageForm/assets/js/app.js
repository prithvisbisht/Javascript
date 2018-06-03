// Variables
const tweetList= document.getElementById('tweet-list');


//Event Listeners
eventListeners();
function eventListeners() {
    //Form Submission
    document.querySelector('#form').addEventListener('submit',newTweet);

    //Remove tweet from the list
    tweetList.addEventListener('click',removeTweet);

    //
    document.addEventListener('DOMContentLoaded',localStorageOnLoad);
}

//functions

function newTweet(e) {
    e.preventDefault();// To prevent the default working of form

    //Reading the value from the text area
    const tweet = document.getElementById('tweet').value;
    console.log(tweet);

    //create the remove button
    const removeBtn=document.createElement('a');
    removeBtn.classList='remove-tweet';
    removeBtn.textContent='X';

    //Create an li element
    const li=document.createElement('li');
    li.textContent=tweet;

    //Add the remove button to each tweet
    li.appendChild(removeBtn);

    //Add to the List
    tweetList.appendChild(li);

    //this function adds the above tweet to the local storage
    addTweetLocalStorage(tweet);

    document.getElementById("tweet").value="";
    alert("New Tweet is added to the storage");
}

//Removes the tweet from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }

    removeTweetFromStorage(e.target.parentElement.textContent);
}

//Adds the tweet to the local storage of Javascript
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    //add tweet into the array
    tweets.push(tweet);

    //convert this array into the string
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS =localStorage.getItem('tweets');
    if(tweetsLS===null){
        tweets=[];
    }
    else{
        tweets=JSON.parse(tweetsLS);
    }
    return tweets
}

//prints local storage tweets on load

function localStorageOnLoad() {
    let tweets= getTweetsFromStorage();

    tweets.forEach(function(tweet){
        const removeBtn=document.createElement('a');
        removeBtn.classList='remove-tweet';
        removeBtn.textContent='X';

        //Create an li element
        const li=document.createElement('li');
        li.textContent=tweet;

        //Add the remove button to each tweet
        li.appendChild(removeBtn);

        //Add to the List
        tweetList.appendChild(li);
    });
}

//Removes tweets from local Storage
function removeTweetFromStorage(tweet) {
    let tweets=getTweetsFromStorage();

    //Remove the x from the tweet
    const deleteTweet = tweet.substring(0,tweet.length-1);

    //Loop through the tweets and delete the one that matched
    tweets.forEach(function(tweetLS,index){
        if(deleteTweet===tweetLS){
            tweets.splice(index,1);
        }
    });
    localStorage.setItem('tweets',JSON.stringify(tweets));
}