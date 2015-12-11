function listens() {
	$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=paul_r_schaefer&api_key=0f680404e39c821cac34008cc4d803db&format=json', function(data) {
		$(".song").html(data.recenttracks.track[0].artist["#text"] + " \u2014 " + data.recenttracks.track[0].name);
	});
}
$(document).ready(function(){
	$(".tweet").tweet({
			username: "pschfr",
			retweets: false,
			loading_text: "Loading tweet&hellip;",
			filter: function(t){ return ! /^@\w+/.test(t.tweet_raw_text); },
			fetch: 10,
			count: 1
	});
}).bind("loaded", function(){
	$(".tweet").text($(this).find(".tweet_text").text());
	listens();
	setInterval(listens, 2000);
});
