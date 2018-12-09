var initMap;

(function ($) {
    function mapObj() {
        var map = {
            callMap: function () {
                msp.cache.$head.append('<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNoqmrXBC8gLcweyuVINQEgcVBPtlIask&callback=initMap"></script>');
            },
            onLoad: function () {
                initMap = function () {
                    var uluru,
                        iconBase,
                        marker,
                        map;

                    uluru = { lat: 51.537171, lng: 0.687101 };
                    map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 13,
                        center: uluru,
                        styles: [
                            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                            {
                                featureType: 'administrative.locality',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#d59563' }]
                            },
                            {
                                featureType: 'poi',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#d59563' }]
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'geometry',
                                stylers: [{ color: '#263c3f' }]
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#6b9a76' }]
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry',
                                stylers: [{ color: '#38414e' }]
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry.stroke',
                                stylers: [{ color: '#212a37' }]
                            },
                            {
                                featureType: 'road',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#9ca5b3' }]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry',
                                stylers: [{ color: '#746855' }]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry.stroke',
                                stylers: [{ color: '#1f2835' }]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#f3d19c' }]
                            },
                            {
                                featureType: 'transit',
                                elementType: 'geometry',
                                stylers: [{ color: '#2f3948' }]
                            },
                            {
                                featureType: 'transit.station',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#d59563' }]
                            },
                            {
                                featureType: 'water',
                                elementType: 'geometry',
                                stylers: [{ color: '#17263c' }]
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: '#515c6d' }]
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.stroke',
                                stylers: [{ color: '#17263c' }]
                            }
                        ]
                    });
                    iconBase = '/images/logoMS-MapsApi.png';
                    marker = new google.maps.Marker({
                        position: uluru,
                        icon: iconBase,
                        map: map
                    });
                };
            },
            init: function () {
                map.onLoad();
                map.callMap();
            }
        };

        map.init();
    }

    $(document).ready(function () {
        alert(msp.cache.$main.length);
        if (msp.cache.$main.find('#map').length) {
            mapObj();
        }
    });
})(jQuery);