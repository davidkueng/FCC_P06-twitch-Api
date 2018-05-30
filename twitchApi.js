$(document).ready(function() { 
  
    const twitchAPI = "https://wind-bow.gomix.me/twitch-api/" 
    let channels = ["freecodecamp", "alkaizerx", "food"] 
    
    channels.forEach(function(channel) {
      $.getJSON(twitchAPI + "streams/" + channel + "?callback=?", function(data) {
        
        let status;
        data.stream === null ? status = "offline": status = "online";
       
      $.getJSON(twitchAPI + "channels/" + channel + "?callback=?", function(data1) {
        let name = data1.display_name;
        let description = data1.status;     
        status === "online" ? $("#channelContainer").prepend( "<div class='channels'>" + "<img class ='pic' src=" + data1.logo + " placeholder='no pic available'>" + "</img>" 
                            + "<p class='channelInfo'>" + "<a href=" + data1.url + "target='_blank'>" + name + "</a>" + " is streaming: " + description + "</p>" + "</div>") :
                              $("#channelContainer").prepend( "<div class='channels'>" + "<img class ='pic' src=" + data1.logo + " placeholder='no pic available'>" + "</img>" 
                              + "<p class='channelInfo'>" + "<a href=" + data1.url + "target='_blank'>" + name + "</a>" + " is currently offline" + "</p>" + "</div>"); 
          });
        });
      });
    });