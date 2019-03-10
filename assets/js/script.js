
jQuery(document).ready(function () {
// appends element after ready document into form on footer section



});// end Jquery



function initMap() {

var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 49.420047, lng: 32.027229},
	zoom: 12,
	minZoom: 2,
	maxZoom: 18,
	mapTypeControlOptions: {
		mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']
	}
});

}

initMap();
