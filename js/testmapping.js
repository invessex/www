var map;
var styles = [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"47"},{"lightness":"100"},{"gamma":"10.00"},{"color":"#3a3434"},{"weight":"8.68"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"saturation":"26"},{"gamma":"0.00"},{"weight":"1.29"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"on"},{"hue":"#008eff"},{"gamma":"0.00"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"hue":"#8400ff"},{"weight":"0.01"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"gamma":"10.00"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"gamma":"0.00"},{"weight":"0.87"}]},{"featureType":"poi.attraction","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#9c9dae"}]},{"featureType":"transit.station.rail","elementType":"geometry.stroke","stylers":[{"lightness":"35"},{"visibility":"simplified"},{"weight":"0.15"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#314c72"}]}]
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    zoom: 9,
    center: new google.maps.LatLng(51.736445, 0.468414),
    mapTypeId: 'roadmap'
  });
  map.setOptions({styles: styles});
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById('menuswitch'));
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById('keypanel'));
var EssexCoords = [
{lat: 51.61759020766987, lng: 0.95855712890625},
{lat: 51.61759020766987, lng: 0.9578704833984375},
{lat: 51.59669458697305, lng: 0.9393310546875},
{lat: 51.57621608189103, lng: 0.9056854248046875},
{lat: 51.56341232867588, lng: 0.8740997314453125},
{lat: 51.55572834577052, lng: 0.85693359375},
{lat: 51.55914360956701, lng: 0.845947265625},
{lat: 51.55273977957101, lng: 0.8504104614257812},
{lat: 51.545267504998435, lng: 0.83221435546875},
{lat: 51.536512708129735, lng: 0.8140182495117188},
{lat: 51.53266860674158, lng: 0.8057785034179688},
{lat: 51.5283970022217, lng: 0.7985687255859375},
{lat: 51.522202463728135, lng: 0.7892990112304688},
{lat: 51.52092072985822, lng: 0.7824325561523438},
{lat: 51.52562024435109, lng: 0.7652664184570312},
{lat: 51.529251355189906, lng: 0.7491302490234375},
{lat: 51.529251355189906, lng: 0.7357406616210938},
{lat: 51.53181431790163, lng: 0.7213211059570312},
{lat: 51.53202789161458, lng: 0.7117080688476562},
{lat: 51.53288217644661, lng: 0.7014083862304688},
{lat: 51.5373669087963, lng: 0.6780624389648438},
{lat: 51.53886172138776, lng: 0.65093994140625},
{lat: 51.5403564848844, lng: 0.6437301635742188},
{lat: 51.53864817973768, lng: 0.638580322265625},
{lat: 51.535017818387956, lng: 0.6392669677734375},
{lat: 51.53288217644661, lng: 0.627593994140625},
{lat: 51.53288217644661, lng: 0.613861083984375},
{lat: 51.61759020766987, lng: 0.95855712890625}
];
 var EssexCounty = new google.maps.Polygon({
    paths: EssexCoords,
    strokeColor: 'green',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'green',
    fillOpacity: 0.35
  });
  EssexCounty.setMap(map);

   google.maps.event.addListener(EssexCounty, 'click', function() {
      this.setMap(null);
  });

  google.maps.event.addListener(map, 'zoom_changed', function() {
if (map.getZoom()>10) {EssexCounty.setMap(null);}
else {EssexCounty.setMap(map);}
  });
          //var legend = document.getElementById('keypanel');

  
  
  var iconBase = '//res.cloudinary.com/investessex/image/upload/w_42/v1497596913/map/';
  var icons = {
    EssexAirport: {
      icon: iconBase + 'White_Plane_on_Green.png'
    },
    NotEssexAirport: {
      icon: iconBase + 'White_Plane_on_Grey.png'
    },
    EssexRailterminal: {
      icon: iconBase + 'White_Train_on_Green.png'
    },
   NotEssexRailterminal: {
      icon: iconBase + 'White_Train_on_Grey.png'
    },
    EssexPort: {
      icon: iconBase + 'White_Anchor_on_Green.png'
    },
    NotEssexPort: {
      icon: iconBase + 'White_Anchor_on_Grey.png'
    },
    portcentric: {
      icon: iconBase + 'White_Property_on_Green.png'
    },
    KeySite: {
      icon: iconBase + 'White_Key_Site_on_Green.png'
    },
    University: {
      icon: iconBase + 'White_University_on_Green.png'
    }
  };

var features = [
    {
      position: new google.maps.LatLng(51.877034, 0.946933),
      type: 'University',
      name: 'The University of Essex',
      popup: 'University',
      image: '//res.cloudinary.com/investessex/image/upload/w_170/UniversityOfEssex.jpg',
      synopsis: "A public research university, ranked in the UK's top-20 for research excellence.",
      link: 'investessex.co.uk/studies/place-studies/the-university-of-essex'
    }, {
      position: new google.maps.LatLng(51.770672, 0.130563),
      type: 'KeySite',
      name: 'Harlow Enterprise Zone',
      popup: 'Key Site',
      image: '//res.cloudinary.com/investessex/image/upload/w_170/HarlowEnterpriseZone.jpg',
      synopsis: 'A new Enterprise Zone focused on high-tech and medical technology businesses.',
      link: 'investessex.co.uk/studies/place-studies/harlow-enterprise-zone'
    }, {
      position: new google.maps.LatLng(51.504557, 0.488302),
      type: 'EssexPort',
      name: 'London Gateway Port',
      popup: 'Port',
      image: '//res.cloudinary.com/investessex/image/upload/w_170/LondonGateway.jpg',
      synopsis: 'A major multimodal, deep-sea container port with co-located logistics park.',
      link: '//investessex.co.uk/studies/place-studies/london-gateway-port'
    }, {
      position: new google.maps.LatLng(51.886018, 0.238866),
      type: 'EssexAirport',
      name: 'London Stansted Airport',
      popup: 'Airport',
      image: '//res.cloudinary.com/investessex/image/upload/w_170/LondonStansted.jpg',
      synopsis: 'The UK’s third-largest airport for both passengers and cargo, serving 150+ destinations.',
      link: '//investessex.co.uk/studies/place-studies/london-stansted-airport'
    }, {
      position: new google.maps.LatLng(52.056165, 0.236871),
      type: 'KeySite',
      name: 'Chesterford Research Park',
      popup: 'Key Site',
      image: '//res.cloudinary.com/investessex/image/upload/w_170/ChesterfordRP.jpg',
      synopsis: 'A prime science park location, integral to the South Cambridge Biotech Cluster.',
      link: '//investessex.co.uk/studies/place-studies/chesterford-research-park1'
    }, {
      position: new google.maps.LatLng(51.569731, 0.704380),
      type: 'EssexAirport',
      name: 'London Southend Airport',
      popup: 'Airport',
      image: '//res.cloudinary.com/investessex/image/upload/w_170/SouthendAirport.jpg',
      synopsis: 'Offering key European business destinations, user-friendliness and fast access to London.',
      link: '//investessex.co.uk/studies/place-studies/london-southend-airport'
    }, {
      position: new google.maps.LatLng(51.460841, 0.344897),
      type: 'EssexPort',
      name: 'Port of Tilbury',
      popup: 'Port',
      image: '//res.cloudinary.com/investessex/image/upload/w_170/PortOfTilbury.jpg',
      synopsis: 'The UK’s third largest container port, handling 80 percent of London’s traffic.',
      link: '//investessex.co.uk/studies/place-studies/port-of-tilbury'
    }, {
      position: new google.maps.LatLng(51.947374, 1.255320),
      type: 'EssexPort',
      name: 'Harwich International Port',
      popup: 'Port',
      image: '//res.cloudinary.com/investessex/image/upload/w_170/PortOfHarwich.jpg',
      synopsis: 'A leading, multi-purpose freight and passenger port, handling containers and bulk cargoes.',
      link: '//investessex.co.uk/studies/place-studies/harwich-international-port'
    }, {
      position: new google.maps.LatLng(51.866844, 0.523228),
      type: 'KeySite',
      name: 'Braintree Skyline 120',
      popup: 'Key Site',
      image: '//res.cloudinary.com/investessex/image/upload/w_170/Skyline120.jpg',
      synopsis: 'High-quality, bespoke warehouse, office and industrial accommodation on a strategically-located site.',
      link: '//investessex.co.uk/studies/place-studies/braintree-skyline120'
    }, {
      position: new google.maps.LatLng(51.469589, 0.352742),
      type: 'KeySite',
      name: 'London Distribution Park',
      popup: 'Key Site',
      image: '',
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.510935, 0.478017),
      type: 'KeySite',
      name: 'London Gateway Logistics Park',
      popup: false,
      image: '',
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.512681, 0.512190),
      type: 'KeySite',
      name: 'Thames Enterprise Park',
      popup: false,
      image: '',
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.876572, -0.372733),
      type: 'NotEssexAirport',
      name: 'London Luton',
      popup: false,
      image: '',
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.470002, -0.453929),
      type: 'NotEssexAirport',
      name: 'London Heathrow',
      popup: false,
      image: '',
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.153662, -0.182063),
      type: 'NotEssexAirport',
      name: 'London Gatwick',
      popup: false,
      image: '',
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.530950, -0.125704),
      type: 'NotEssexRailterminal',
      name: 'Eurostar St Pancras',
      popup: false,
      image: '',
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.504546, 0.049287),
      type: 'NotEssexAirport',
      name: 'London City',
      popup: false,
      image: '',
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.950393, 1.323946),
      type: 'NotEssexPort',
      name: 'Felixstowe',
      popup: false,
      image: '',
      synopsis: '',
      link: ''
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
   if(feature.popup){ 
    var infowindow = new google.maps.InfoWindow({
      content: '<div style="max-width: 190px;padding-left:20px;"><h5 class="map-infobox">'+feature.popup +'</h5><img src="'+feature.image+'"/><h3 class="map-infobox">'+ feature.name +'</h3><p class="map-infobox">'+ feature.synopsis +'</p><a href="//'+feature.link+'"><center><button style="border-radius: 0;text-transform: uppercase;padding: 15px 22px;font-size: 13px;line-height: 13px;background: #6ba00f;color: #ffffff;">More Info</button></center></a></div>'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  }
  });
}

$('#menuswitch').click(function () {
		$('#keypanel').toggle();
		});	