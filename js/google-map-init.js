jQuery(document).ready(function() {
    "use strict";


    function b() {
        var a = {
                zoom: 12,
                scrollwheel: true,
                center: new google.maps.LatLng(51.516520, -0.125891),
                styles: [{
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 65
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 51
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 30
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 40
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -100
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "hue": "#ffff00"
                        },
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -97
                        }
                    ]
                }]
            },
            b = document.getElementById("map"),
            c = new google.maps.Map(b, a);
        new google.maps.Marker({
            position: new google.maps.LatLng(51.516520, -0.125891),
            map: c,
            title: "Snazzy!"
        })
    }
    google.maps.event.addDomListener(window, "load", b);

});