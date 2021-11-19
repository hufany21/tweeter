/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
 

 const renderTweets = function(tweets) {
  for(let i of tweets){
  let k = createTweetElement(i)
  $('#tweet-con').append(k);
  }

}

const createTweetElement = function(tweet) { 
  let article =$(`<article class="tweet"></article>`);
  const name_avatars_handle =$(`<header id=name_avatars_handle ><p><img id='avatars' src="${tweet.user.avatars}width="45" height="55">${tweet.user.name} </p><p id='handle'>${tweet.user.handle}</p> </header>`);
 
  const content = $(`<p id='content'>${tweet.content.text}</p> <hr>`)
  const created_at =$(`<footer><p id='created_at'>${timeago.format(tweet.created_at)}</p>
  <p>
    <i class="fa fa-heart" ></i>
    <i class="fa fa-retweet"></i>
    <i class="fa fa-flag"></i>
</p>    
  </footer>`)
article.append(name_avatars_handle);
article.append(content);
article.append(created_at);

  
  return article;
};

$("form").on("submit", function (event) {
  event.preventDefault();
  const $tweetText = document.getElementById('tweet-text') 
  const $counter = document.getElementById("counter")
$.post("/tweets", $(this).serialize())

if ($(this).serialize().length === 5) {
  $('#er').html("❗You forgot to tell us what your humming about, try again!❗");
  return $('#er').slideDown("slow")
}
if ($(this).serialize().length > 145){
   $('#er').html("❗Too long! Can we try being a little more concise?❗")
   return $('#er').slideDown("slow")
}
if ($(this).serialize().length < 140) {
  $.ajax({
    url: "/tweets",
    method: "GET",
  }).then((result) => {
    const index = result.length-1
   $("#tweet-con").append(createTweetElement(result[index]));
   return $('#er').slideUp("slow") 
  }  

)}
$tweetText.value = ''
$counter.value = '140'
});





const loadtweets = function () {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (data) {
      renderTweets(data);
  });
}

loadtweets()





});



