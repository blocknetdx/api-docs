//= require ./all_nosearch
//= require ./app/_search

document.addEventListener("DOMContentLoaded", function() {
  // adds target=_blank to https and pdf links so they open in a new tab
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    // open external links and pdfs in new tab
    if (/(https?)|(\.pdf)|(\.zip)/.test(links[i].getAttribute('href'))) {
      links[i].target = '_blank';
    }
    // if current site and not prf then open in same tab
    if (/^(?=.*(api\.blocknet\.com))(?!.*(\.pdf))(?!.*(\.zip)).*/.test(links[i].getAttribute('href'))) {
      links[i].target = '_self';
    }
  }

	var notifications = document.getElementById('notification-bar');
	for (var i = 0; i < notifications.children.length; i++) {
	    var expiredDate = parseInt(notifications.children[i].getAttribute('data-expire'));
	    var now = Math.round((new Date).getTime()/1000);
	    if (expiredDate < now && expiredDate != "") {
	        notifications.children[i].style.display = 'none';
	    }
	}

});
