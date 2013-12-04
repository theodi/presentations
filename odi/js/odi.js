function hideAll(excepts) {
    	nodes = document.getElementsByClassName("brand");
	for (i=0;i<nodes.length;i++) {
		keep = 0;
		node = nodes[i].getAttribute("id");
		for (j=0;j<excepts.length;j++) {
			except = excepts[j];
			if (node == except) {
				keep = 1;
			}
		}
		if (keep < 1) {
			$('#'+node).fadeOut();
		}
	}
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
	$('#brand').fadeOut();
}

function showBrand() {
	states = [];
	lnodes = document.getElementsByClassName("present");
	for (i=0;i<lnodes.length;i++) {
		lstates = lnodes[i].getAttribute("data-state");
		if (lstates) {
			states = states.concat(lstates.split(" "));
			
		}
	}
	if (states.length > 0) {
		processBrand(states);
	} else {
		hideAll("");
	}
}

function processBrand(states) {
	hideAll(states);
	for (i=0;i<states.length;i++) {
		lnode = states[i];
		if (lnode && lnode!="no-footer") {
			$('#'+lnode).fadeIn();
		} 
		if (lnode == "no-footer") {
			hideFooter();
		}
	}
}

function maxHeightSection(section){
	lclasses = section.getAttribute("class");
	if (parseInt(lclasses.indexOf("center")) < 0) {
		section.style.height="95%";
	}
}

function maxHeightSections() {
	lnodes = document.getElementsByClassName("present");
	for (i=0;i<lnodes.length;i++) {
		maxHeightSection(lnodes[i]);
	}
}

$(document).keydown(function(e) {
	showBrand();
	maxHeightSections();
});

$( document ).ready(function() {
	showBrand();
	maxHeightSections();
});

