function initInstaphotos() {
    var feed = new Instafeed({
        get: "user",
        userId: '1421658573',
        accessToken: '1421658573.ba4c844.9b920a8689fa42c0bcebaec1a3f5dddf',
        resolution: 'standard_resolution',
        template: '<div class="insta-wrapper"><a class="instagram-{{orientation}}" href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a><div class="insta-likes">❤ {{likes}}</div></div>',
        sortBy: 'most-recent',
        limit: 8,
        links: false
    });
    feed.run();
}

