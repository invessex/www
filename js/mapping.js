var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: new google.maps.LatLng(51.736445, 0.468414),
    mapTypeId: 'roadmap'
  });
var EssexCoords = [
{lat: 51.93241182796718, lng:  1.29913330078125},
{lat: 51.949083, lng:  1.289086},
{lat: 51.939877, lng:  1.276554},
{lat: 51.951093, lng:  1.253552},
{lat: 51.947650889871994, lng:  1.07391357421875},
{lat: 51.95272942685291, lng:  0.79925537109375},
{lat: 51.99333702056398, lng:  0.73333740234375},
{lat: 52.03052832477023, lng:  0.71136474609375},
{lat: 52.0845695959468, lng:  0.6646728515625},
{lat: 52.05249047600099, lng:  0.50537109375},
{lat: 52.07444183716456, lng:  0.43670654296875},
{lat: 52.04573404034129, lng:  0.3900146484375},
{lat: 52.089632613639715, lng:  0.28289794921875},
{lat: 52.08794500490239, lng:  0.2142333984375},
{lat: 52.05924589011585, lng:  0.1922607421875},
{lat: 52.03897658307622, lng:  0.1593017578125},
{lat: 52.042355439413214, lng:  0.120849609375},
{lat: 52.040666043171306, lng:  0.09613037109375},
{lat: 51.98149694047459, lng:  0.09063720703125},
{lat: 51.98149694047459, lng:  0.120849609375},
{lat: 51.891749018068246, lng:  0.14556884765625},
{lat: 51.890053935216926, lng:  0.186767578125},
{lat: 51.85783521205157, lng:  0.2032470703125},
{lat: 51.839171715043946, lng:  0.164794921875},
{lat: 51.82219818336938, lng:  0.15655517578125},
{lat: 51.81201099369775, lng:  0.15106201171875},
{lat: 51.791629704426924, lng:  0.120849609375},
{lat: 51.781435604431195, lng:  0.06317138671875},
{lat: 51.781435604431195, lng:  0.0384521484375},
{lat: 51.74913908790851, lng:  -0.0054931640625},
{lat: 51.65040675460229, lng:  -0.0054931640625},
{lat: 51.614605707797466, lng:  0.05767822265625},
{lat: 51.62313232962145, lng:  0.23345947265625},
{lat: 51.55316672962128, lng:  0.296630859375},
{lat: 51.55487448974971, lng:  0.3240966796875},
{lat: 51.529251355189906, lng:  0.33233642578125},
{lat: 51.513870548723986, lng:  0.274658203125},
{lat: 51.4882243263235, lng:  0.24444580078125},
{lat: 51.4608524464555, lng:  0.28289794921875},
{lat: 51.46598592502469, lng:  0.3240966796875},
{lat: 51.44887208400473, lng:  0.362548828125},
{lat: 51.455718390408165, lng:  0.4229736328125},
{lat: 51.48480373951605, lng:  0.44219970703125},
{lat: 51.50019435946635, lng:  0.439453125},
{lat: 51.50532341149336, lng:  0.46966552734375},
{lat: 51.49848454717058, lng:  0.49713134765625},
{lat: 51.50361379162682, lng:  0.59051513671875},
{lat: 51.51045188624856, lng:  0.6756591796875},
{lat: 51.53266860674158, lng:  0.59600830078125},
{lat: 51.56170488911645, lng:  0.61248779296875},
{lat: 51.55658218576253, lng:  0.823974609375},
{lat: 51.55145890537641, lng:  0.85693359375},
{lat: 51.614605707797466, lng:  0.95855712890625},
{lat: 51.730430542940184, lng:  0.9393310546875},
{lat: 51.7406361640977, lng:  0.93109130859375},
{lat: 51.73723454645786, lng:  0.90362548828125},
{lat: 51.72022261695929, lng:  0.82122802734375},
{lat: 51.713416052417614, lng:  0.7470703125},
{lat: 51.723625515056554, lng:  0.703125},
{lat: 51.72872938200587, lng:  0.7305908203125},
{lat: 51.73723454645786, lng:  0.802001953125},
{lat: 51.74233687689103, lng:  0.85418701171875},
{lat: 51.7593404840675, lng:  0.87615966796875},
{lat: 51.793328497122566, lng:  0.99151611328125},
{lat: 51.79842449127874, lng:  1.00250244140625},
{lat: 51.79672589054756, lng:  1.03271484375},
{lat: 51.76614013468048, lng:  1.0491943359375},
{lat: 51.76783988732215, lng:  1.11236572265625},
{lat: 51.786532942396384, lng:  1.18377685546875},
{lat: 51.81540697949439, lng:  1.24420166015625},
{lat: 51.85104938128887, lng:  1.2908935546875},
{lat: 51.864620019548866, lng:  1.29913330078125},
{lat: 51.87818656498399, lng:  1.26068115234375},
{lat: 51.87649097061478, lng:  1.21673583984375},
{lat: 51.890053935216926, lng:  1.24969482421875},
{lat: 51.91208502557546, lng:  1.263427734375},
{lat: 51.92394344554469, lng:  1.2908935546875},
{lat: 51.92902466674442, lng:  1.29638671875},
{lat: 51.93241182796718, lng:  1.29913330078125}
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
      popup: true,
      synopsis: "A public research university, ranked in the UK's top-20 for research excellence.",
      link: 'investessex.co.uk/studies/place-studies/the-university-of-essex'
    }, {
      position: new google.maps.LatLng(51.770672, 0.130563),
      type: 'KeySite',
      name: 'Harlow Enterprise Zone',
      popup: true,
      synopsis: 'A new Enterprise Zone focused on high-tech and medical technology businesses.',
      link: 'investessex.co.uk/studies/place-studies/harlow-enterprise-zone'
    }, {
      position: new google.maps.LatLng(51.504557, 0.488302),
      type: 'EssexPort',
      name: 'London Gateway Port',
      popup: true,
      synopsis: 'A major multimodal, deep-sea container port with co-located logistics park.',
      link: '//investessex.co.uk/studies/place-studies/london-gateway-port'
    }, {
      position: new google.maps.LatLng(51.886018, 0.238866),
      type: 'EssexAirport',
      name: 'London Stansted Airport',
      popup: true,
      synopsis: 'The UK’s third-largest airport for both passengers and cargo, serving 150+ destinations.',
      link: '//investessex.co.uk/studies/place-studies/london-stansted-airport'
    }, {
      position: new google.maps.LatLng(52.056165, 0.236871),
      type: 'KeySite',
      name: 'Chesterford Research Park',
      popup: true,
      synopsis: 'A prime science park location, integral to the South Cambridge Biotech Cluster.',
      link: '//investessex.co.uk/studies/place-studies/chesterford-research-park1'
    }, {
      position: new google.maps.LatLng(51.569731, 0.704380),
      type: 'EssexAirport',
      name: 'London Southend Airport',
      popup: true,
      synopsis: 'Offering key European business destinations, user-friendliness and fast access to London.',
      link: '//investessex.co.uk/studies/place-studies/london-southend-airport'
    }, {
      position: new google.maps.LatLng(51.460841, 0.344897),
      type: 'EssexPort',
      name: 'Port of Tilbury',
      popup: true,
      synopsis: 'The UK’s third largest container port, handling 80 percent of London’s traffic.',
      link: '//investessex.co.uk/studies/place-studies/port-of-tilbury'
    }, {
      position: new google.maps.LatLng(51.947374, 1.255320),
      type: 'EssexPort',
      name: 'Harwich International Port',
      popup: true,
      synopsis: 'A leading, multi-purpose freight and passenger port, handling containers and bulk cargoes.',
      link: '//investessex.co.uk/studies/place-studies/harwich-international-port'
    }, {
      position: new google.maps.LatLng(51.866844, 0.523228),
      type: 'KeySite',
      name: 'Braintree Skyline 120',
      popup: true,
      synopsis: 'High-quality, bespoke warehouse, office and industrial accommodation on a strategically-located site.',
      link: '//investessex.co.uk/studies/place-studies/braintree-skyline120'
    }, {
      position: new google.maps.LatLng(51.469589, 0.352742),
      type: 'KeySite',
      name: 'London Distribution Park',
      popup: false,
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.510935, 0.478017),
      type: 'KeySite',
      name: 'London Gateway Logistics Park',
      popup: false,
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.512681, 0.512190),
      type: 'KeySite',
      name: 'Thames Enterprise Park',
      popup: false,
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.876572, -0.372733),
      type: 'NotEssexAirport',
      name: 'London Luton',
      popup: false,
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.470002, -0.453929),
      type: 'NotEssexAirport',
      name: 'London Heathrow',
      popup: false,
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.153662, -0.182063),
      type: 'NotEssexAirport',
      name: 'London Gatwick',
      popup: false,
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.530950, -0.125704),
      type: 'NotEssexRailterminal',
      name: 'Eurostar St Pancras',
      popup: false,
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.504546, 0.049287),
      type: 'NotEssexAirport',
      name: 'London City',
      popup: false,
      synopsis: '',
      link: ''
    }, {
      position: new google.maps.LatLng(51.950393, 1.323946),
      type: 'NotEssexPort',
      name: 'Felixstowe',
      popup: false,
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
      content: '<h5>'+feature.type +'</h5><h3>'+ feature.name +'</h3><p>'+ feature.synopsis +'</p><a href="//'+feature.link+'">'+feature.link+'</a>'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  }
  });
}


