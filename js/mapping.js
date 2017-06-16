var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: new google.maps.LatLng(51.736445, 0.468414),
    mapTypeId: 'roadmap'
  });

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
      type: 'University'
    }, {
      position: new google.maps.LatLng(51.770672, 0.130563),
      type: 'KeySite'
    }, {
      position: new google.maps.LatLng(51.504557, 0.488302),
      type: 'EssexPort'
    }, {
      position: new google.maps.LatLng(51.886018, 0.238866),
      type: 'EssexAirport'
    }, {
      position: new google.maps.LatLng(52.056165, 0.236871),
      type: 'KeySite'
    }, {
      position: new google.maps.LatLng(51.569731, 0.704380),
      type: 'EssexAirport'
    }, {
      position: new google.maps.LatLng(51.460841, 0.344897),
      type: 'EssexPort'
    }, {
      position: new google.maps.LatLng(51.947374, 1.255320),
      type: 'EssexPort'
    }, {
      position: new google.maps.LatLng(51.866844, 0.523228),
      type: 'KeySite'
    }, {
      position: new google.maps.LatLng(51.469589, 0.352742),
      type: 'KeySite'
    }, {
      position: new google.maps.LatLng(51.510935, 0.478017),
      type: 'KeySite',
      name: 'London Gateway Logistics Park'
    }, {
      position: new google.maps.LatLng(51.512681, 0.512190),
      type: 'KeySite',
      name: 'Thames Enterprise Park'
    }, {
      position: new google.maps.LatLng(51.876572, -0.372733),
      type: 'NotEssexAirport'
    }, {
      position: new google.maps.LatLng(51.470002, -0.453929),
      type: 'NotEssexAirport'
    }, {
      position: new google.maps.LatLng(51.153662, -0.182063),
      type: 'NotEssexAirport'
    }, {
      position: new google.maps.LatLng(51.530950, -0.125704),
      type: 'NotEssexRailterminal'
    }, {
      position: new google.maps.LatLng(51.504546, 0.049287),
      type: 'NotEssexAirport'
    }, {
      position: new google.maps.LatLng(51.950393, 1.323946),
      type: 'NotEssexPort'
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
}
