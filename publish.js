function sendTweet(status) {
  status = status || "Yeah";

  var twitterKeys = {
    TWITTER_CONSUMER_KEY: "s7xhrd5NYCw2CuosFkNVPkKcX",
    TWITTER_CONSUMER_SECRET: "<<consumer secret>>",
    TWITTER_ACCESS_TOKEN: "<<access token>>",
    TWITTER_ACCESS_SECRET: "<<access secret>>"
  };

  var props = PropertiesService.getScriptProperties();

  props.setProperties(twitterKeys);
}

function pubImgur(info){
  // Get the image from cache:
        var x = new XMLHttpRequest();
        x.onload = function() {
            // Create a form
            var fd = new FormData();
            fd.append("image", x.response); // x.response = blob
            fd.append("key", "35301db7443eb80");

            // Now, upload the image
            var y = new XMLHttpRequest();
            y.onload = function() {
                var url = JSON.parse(xhr.responseText).upload.links.imgur_page;
                console.log(url);
            };
            y.open('POST', 'http://api.imgur.com/2/upload.json');
            y.send(fd);
        }
}
