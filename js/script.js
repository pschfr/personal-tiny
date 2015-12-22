var a=document.getElementById("snow"),d=a.getContext("2d"),e=[],f=Math;a.style.pointerEvents="none";a.style.position="fixed";a.style.width="100vw";a.style.height="100vh";a.height=a.offsetHeight;a.width=a.offsetWidth;window.onresize=function(){a.height=a.offsetHeight;a.width=a.offsetWidth}; setInterval(function(){d.clearRect(0,0,a.width,a.height);d.beginPath();if(.3<f.random()){var b=f.random(),g=.05+.95*b,c={};c.x=1.5*a.width*f.random()-.5*a.width;c.y=-9;c.c=2*g*(f.random()/2+.5);c.d=5*g;c.a=5*b;c.b=function(){var t=this;t.x+=t.c;t.y+=t.d;d.beginPath();d.arc(t.x,t.y,t.a,0,2*f.PI,!1);d.fillStyle="#FFF";d.fill()};e.push(c)}for(b=0;b<e.length;b++)e[b].y>a.height?e.splice(b,1):e[b].b()},16);
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
