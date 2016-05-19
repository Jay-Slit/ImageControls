
$.ajax({
  url: 'https://api.imgur.com/3/image',
  type: 'POST',
  headers: {
    Authorization: auth,
    Accept: 'application/json'
  },
  data: {
    image: localStorage.dataBase64,
    type: 'base64'
  }
});

var root = chrome.contextMenus.create({
  title: 'Options',
  contexts: ['image']
}, function(){
  var imgurUpload = chrome.contextMenus.create({
    id: 'imgurUpload',
    title: 'Upload to Imgur',
    contexts: ['image']
  }, function(){
    document.this.addEventListener("click", function(info){
      var x = new XMLHttpRequest();
      x.open("POST", "https://api.imgur.com/3/image", false, info);
      x.send();
    });
  });

  var twitterUpload = chrome.contextMenus.create({
    id: 'twitterUpload',
    title: 'Upload to Twitter',
    contexts: ['image']
  }, function(){
    var oauth = require('oauth');

    var consumer_key = oauth.consumer.new(
      "s7xhrd5NYCw2CuosFkNVPkKcX",
      "fQecUewG1deLyaupLRY6ViEQBZ6TxI8t9h8dyMJV29oYyM4vb5");
    var access_token = oauth.token.new(
      "710001862427197441-DlQRHHNIc4EUOJvoA7aJVZlPRxaTCgz",
      "JC5o6xuMbYQurLSTWPqPYdYC2MoBGPeeJ92PYeSncWxLr");

    var baseurl = "https://api.twitter.com";

    var address = URI("#{baseurl}/1.1/account/verify_credentions.json");
  });

  var facebookUpload = chrome.contextMenus.create({
    id: 'facebookUpload',
    title: 'Upload to Facebook',
    contexts: ['image']
  });
});
document.getElementById('twitterUpload').addEventListener("click", pubImgur());
document.getElementById('facebookUpload').addEventListener("click", pubImgur());
