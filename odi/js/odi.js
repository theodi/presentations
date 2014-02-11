function showFooter(excepts) {
	footer = 1;
	for (j=0;j<excepts.length;j++) {
		except = excepts[j];
		if (except == "no-footer") {
			footer = 0;
		}
	}
	if (footer > 0) {
		$('#brand').fadeIn();
	}
}

function hideFooter() {
	states = [];
	lnodes = document.getElementsByClassName("present");
	for (i=0;i<lnodes.length;i++) {
		lstates = lnodes[i].getAttribute("data-state");
		if (lstates) {
			states = states.concat(lstates.split(" "));	
		}
	}
	if (states.length > 0) {
		hide(states);
	} else {
		showFooter("");
	}
}

function hide(states) {
	showFooter(states);
	for (i=0;i<states.length;i++) {
		lnode = states[i];
		if (lnode == "no-footer") {
			$('#brand').fadeOut();
		}
	}
}

function maxHeightSection(section){
	lclasses = section.getAttribute("class");
	if ((parseInt(lclasses.indexOf("center")) < 0) && (parseInt(lclasses.indexOf("logo-background")) < 0)) {
		section.style.height="100%";
	}
}

function maxHeightSections() {
	lnodes = document.getElementsByClassName("present");
	for (i=0;i<lnodes.length;i++) {
		maxHeightSection(lnodes[i]);
	}
}

$(document).keydown(function(e) {
	hideFooter();
	maxHeightSections();
});

$( document ).ready(function() {
	hideFooter();
	maxHeightSections();
});

