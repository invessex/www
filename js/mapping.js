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
{lat: 51.50318637663801, lng: 0.2272796630859375},
{lat: 51.50788772102843, lng: 0.2362060546875},
{lat: 51.518570790735104, lng: 0.2396392822265625},
{lat: 51.52412499689334, lng: 0.2506256103515625},
{lat: 51.51600708249261, lng: 0.2519989013671875},
{lat: 51.51686166794058, lng: 0.2629852294921875},
{lat: 51.52967852566192, lng: 0.2671051025390625},
{lat: 51.530105692125886, lng: 0.2835845947265625},
{lat: 51.534804258702714, lng: 0.29937744140625},
{lat: 51.5403564848844, lng: 0.33233642578125},
{lat: 51.55145890537641, lng: 0.3247833251953125},
{lat: 51.55743600972587, lng: 0.314483642578125},
{lat: 51.564692866272466, lng: 0.311737060546875},
{lat: 51.562558616910124, lng: 0.2931976318359375},
{lat: 51.57322886201344, lng: 0.287017822265625},
{lat: 51.587309751245456, lng: 0.2739715576171875},
{lat: 51.60053327912699, lng: 0.2698516845703125},
{lat: 51.599680264466606, lng: 0.2547454833984375},
{lat: 51.6082096900525, lng: 0.265045166015625},
{lat: 51.619721873137614, lng: 0.2465057373046875},
{lat: 51.62952624467379, lng: 0.2300262451171875},
{lat: 51.62313232962145, lng: 0.1984405517578125},
{lat: 51.6188692189659, lng: 0.1641082763671875},
{lat: 51.621427133419886, lng: 0.1352691650390625},
{lat: 51.61247380201654, lng: 0.10986328125},
{lat: 51.615884803202704, lng: 0.0995635986328125},
{lat: 51.61076820529578, lng: 0.0899505615234375},
{lat: 51.60351870425863, lng: 0.086517333984375},
{lat: 51.600959780448626, lng: 0.075531005859375},
{lat: 51.608636119273314, lng: 0.05218505859375},
{lat: 51.615884803202704, lng: 0.0487518310546875},
{lat: 51.615884803202704, lng: 0.037078857421875},
{lat: 51.62569000377442, lng: 0.017852783203125},
{lat: 51.63975463454108, lng: 0.0226593017578125},
{lat: 51.64486796450331, lng: -0.0102996826171875},
{lat: 51.65211086156918, lng: -0.012359619140625},
{lat: 51.66020449479616, lng: -0.009613037109375},
{lat: 51.67979362137999, lng: -0.012359619140625},
{lat: 51.68788231035757, lng: -0.0116729736328125},
{lat: 51.70320428462805, lng: -0.0164794921875},
{lat: 51.713416052417614, lng: -0.0171661376953125},
{lat: 51.73085582317015, lng: -0.0061798095703125},
{lat: 51.745312970240214, lng: -0.0089263916015625},
{lat: 51.7465883788042, lng: 0.0020599365234375},
{lat: 51.75466513020614, lng: 0.0061798095703125},
{lat: 51.76146548489398, lng: 0.0144195556640625},
{lat: 51.77038939627966, lng: 0.01922607421875},
{lat: 51.77421338971082, lng: 0.03021240234375},
{lat: 51.77548798218808, lng: 0.053558349609375},
{lat: 51.78186040459308, lng: 0.06317138671875},
{lat: 51.7827099929177, lng: 0.0789642333984375},
{lat: 51.785258661899924, lng: 0.089263916015625},
{lat: 51.78440912157102, lng: 0.102996826171875},
{lat: 51.78780718689691, lng: 0.116729736328125},
{lat: 51.79587656618681, lng: 0.1318359375},
{lat: 51.79545189800759, lng: 0.146942138671875},
{lat: 51.802246108975304, lng: 0.1517486572265625},
{lat: 51.809463836405854, lng: 0.1599884033203125},
{lat: 51.81243550591758, lng: 0.1750946044921875},
{lat: 51.82050047836314, lng: 0.1750946044921875},
{lat: 51.826866542276264, lng: 0.166168212890625},
{lat: 51.8374746497308, lng: 0.16204833984375},
{lat: 51.85147352569114, lng: 0.17303466796875},
{lat: 51.85868336894736, lng: 0.1778411865234375},
{lat: 51.868436024111126, lng: 0.193634033203125},
{lat: 51.87649097061478, lng: 0.186767578125},
{lat: 51.88369680508252, lng: 0.17578125},
{lat: 51.891749018068246, lng: 0.1812744140625},
{lat: 51.88708738637936, lng: 0.1263427734375},
{lat: 51.92817783649209, lng: 0.1215362548828125},
{lat: 51.956961101676114, lng: 0.11260986328125},
{lat: 51.965000183579406, lng: 0.098876953125},
{lat: 51.973460817611695, lng: 0.0968170166015625},
{lat: 51.978536431336764, lng: 0.08514404296875},
{lat: 51.98022817480167, lng: 0.0693511962890625},
{lat: 51.990800124058914, lng: 0.0734710693359375},
{lat: 52.00052411347728, lng: 0.0734710693359375},
{lat: 52.006019347218036, lng: 0.06591796875},
{lat: 52.01362701862776, lng: 0.075531005859375},
{lat: 52.02883848153627, lng: 0.0981903076171875},
{lat: 52.040243684133785, lng: 0.1036834716796875},
{lat: 52.055023876003084, lng: 0.1043701171875},
{lat: 52.05713493293754, lng: 0.1201629638671875},
{lat: 52.04784553622488, lng: 0.1284027099609375},
{lat: 52.04869010664418, lng: 0.146942138671875},
{lat: 52.04446709492352, lng: 0.1586151123046875},
{lat: 52.052068228700975, lng: 0.166168212890625},
{lat: 52.05544609537056, lng: 0.1888275146484375},
{lat: 52.06220106257855, lng: 0.1970672607421875},
{lat: 52.07444183716456, lng: 0.182647705078125},
{lat: 52.076551976411956, lng: 0.19500732421875},
{lat: 52.09132015855136, lng: 0.2025604248046875},
{lat: 52.08710117659877, lng: 0.23345947265625},
{lat: 52.075285904832334, lng: 0.251312255859375},
{lat: 52.09047639407369, lng: 0.278778076171875},
{lat: 52.076973992292686, lng: 0.311737060546875},
{lat: 52.07106540690664, lng: 0.325469970703125},
{lat: 52.05333495862984, lng: 0.344696044921875},
{lat: 52.040666043171306, lng: 0.3646087646484375},
{lat: 52.035175064394245, lng: 0.380401611328125},
{lat: 52.032218104145294, lng: 0.3907012939453125},
{lat: 52.03897658307622, lng: 0.3948211669921875},
{lat: 52.04573404034129, lng: 0.3865814208984375},
{lat: 52.057557132353644, lng: 0.3989410400390625},
{lat: 52.06262321411284, lng: 0.4071807861328125},
{lat: 52.07190953840937, lng: 0.4346466064453125},
{lat: 52.07190953840937, lng: 0.4456329345703125},
{lat: 52.07401979734621, lng: 0.4669189453125},
{lat: 52.07739600418386, lng: 0.476531982421875},
{lat: 52.067688721304165, lng: 0.4888916015625},
{lat: 52.054179425297164, lng: 0.4991912841796875},
{lat: 52.0567127295312, lng: 0.512237548828125},
{lat: 52.055023876003084, lng: 0.5225372314453125},
{lat: 52.0567127295312, lng: 0.5335235595703125},
{lat: 52.05460165264531, lng: 0.5445098876953125},
{lat: 52.0596680695809, lng: 0.55206298828125},
{lat: 52.066422398370676, lng: 0.55755615234375},
{lat: 52.06937709602395, lng: 0.5733489990234375},
{lat: 52.07401979734621, lng: 0.5815887451171875},
{lat: 52.078240015997615, lng: 0.611114501953125},
{lat: 52.076973992292686, lng: 0.6241607666015625},
{lat: 52.082459835698316, lng: 0.635833740234375},
{lat: 52.08203787168061, lng: 0.6598663330078125},
{lat: 52.08414765187575, lng: 0.674285888671875},
{lat: 52.079084011853325, lng: 0.6845855712890625},
{lat: 52.078662015920195, lng: 0.7038116455078125},
{lat: 52.06853291664377, lng: 0.7093048095703125},
{lat: 52.06220106257855, lng: 0.703125},
{lat: 52.04742324502936, lng: 0.712738037109375},
{lat: 52.04362244469156, lng: 0.6983184814453125},
{lat: 52.03433023856414, lng: 0.7010650634765625},
{lat: 52.03137322244006, lng: 0.7106781005859375},
{lat: 52.02461359406285, lng: 0.7065582275390625},
{lat: 52.02376856867204, lng: 0.718231201171875},
{lat: 52.02841601074973, lng: 0.740203857421875},
{lat: 52.01658520822504, lng: 0.745697021484375},
{lat: 52.00644202956117, lng: 0.7436370849609375},
{lat: 52.000101375244405, lng: 0.7518768310546875},
{lat: 51.99291421446105, lng: 0.7601165771484375},
{lat: 51.98191985437978, lng: 0.762176513671875},
{lat: 51.97726758181177, lng: 0.770416259765625},
{lat: 51.96669243817263, lng: 0.773162841796875},
{lat: 51.96119237712624, lng: 0.78826904296875},
{lat: 51.96119237712624, lng: 0.800628662109375},
{lat: 51.96669243817263, lng: 0.81298828125},
{lat: 51.96584631886285, lng: 0.8260345458984375},
{lat: 51.96119237712624, lng: 0.8466339111328125},
{lat: 51.96584631886285, lng: 0.8658599853515625},
{lat: 51.967115491837404, lng: 0.88714599609375},
{lat: 51.97388380738415, lng: 0.891265869140625},
{lat: 51.97557572654266, lng: 0.9249114990234375},
{lat: 51.97007675567704, lng: 0.932464599609375},
{lat: 51.973037823846106, lng: 0.9578704833984375},
{lat: 51.96288477548509, lng: 0.9674835205078125},
{lat: 51.9599230364245, lng: 0.99151611328125},
{lat: 51.953152612307456, lng: 1.0196685791015625},
{lat: 51.95399897123492, lng: 1.034088134765625},
{lat: 51.957807388715516, lng: 1.04644775390625},
{lat: 51.95442214470792, lng: 1.0594940185546875},
{lat: 51.948497352642, lng: 1.05194091796875},
{lat: 51.94553466305084, lng: 1.06292724609375},
{lat: 51.94384160969973, lng: 1.086273193359375},
{lat: 51.94003200599863, lng: 1.1048126220703125},
{lat: 51.94045531127582, lng: 1.1260986328125},
{lat: 51.94087861255871, lng: 1.1480712890625},
{lat: 51.94553466305084, lng: 1.1611175537109375},
{lat: 51.9446881443636, lng: 1.1734771728515625},
{lat: 51.939185383461265, lng: 1.1872100830078125},
{lat: 51.94087861255871, lng: 1.2064361572265625},
{lat: 51.9387620662011, lng: 1.2311553955078125},
{lat: 51.94680441112579, lng: 1.2448883056640625},
{lat: 51.945957916403266, lng: 1.2613677978515625},
{lat: 51.939185383461265, lng: 1.2764739990234375},
{lat: 51.945957916403266, lng: 1.2833404541015625},

{ lat: 51.945957916403266, lng: 1.289520263671875},
{ lat: 51.935375384321524, lng: 1.28814697265625},
{ lat: 51.91674406410398, lng: 1.2613677978515625},
{ lat: 51.89386778172307, lng: 1.2462615966796875},
{ lat: 51.8849683030403, lng: 1.2448883056640625},
{ lat: 51.8849683030403, lng: 1.262054443359375},
{ lat: 51.875643149451236, lng: 1.28814697265625},
{ lat: 51.86249987712349, lng: 1.289520263671875},
{ lat: 51.8374746497308, lng: 1.2627410888671875},
{ lat: 51.82134933886299, lng: 1.2421417236328125},
{ lat: 51.807765651569355, lng: 1.2139892578125},
{ lat: 51.785683426064985, lng: 1.153564453125},
{ lat: 51.77676253866605, lng: 1.1336517333984375},
{ lat: 51.769964488120365, lng: 1.097259521484375},
{ lat: 51.76826481548208, lng: 1.0601806640625},
{ lat: 51.76783988732215, lng: 1.0430145263671875},
{ lat: 51.78313478108053, lng: 1.031341552734375},
{ lat: 51.79375318529814, lng: 1.0265350341796875},
{ lat: 51.8001230280236, lng: 1.0169219970703125},
{ lat: 51.81201099369775, lng: 0.9963226318359375},
{ lat: 51.79630123036681, lng: 1.0045623779296875},
{ lat: 51.78186040459308, lng: 0.973663330078125},
{ lat: 51.77293876123393, lng: 0.9372711181640625},
{ lat: 51.77293876123393, lng: 0.89813232421875},
{ lat: 51.75253980933651, lng: 0.8795928955078125},
{ lat: 51.74403752566787, lng: 0.8617401123046875},
{ lat: 51.73638410203618, lng: 0.8438873291015625},
{ lat: 51.736809326247624, lng: 0.8219146728515625},
{ lat: 51.73978578369456, lng: 0.8026885986328125},
{ lat: 51.7406361640977, lng: 0.7903289794921875},
{ lat: 51.73851018308143, lng: 0.7779693603515625},
{ lat: 51.72957997047593, lng: 0.734710693359375},
{ lat: 51.72405085931109, lng: 0.726470947265625},
{ lat: 51.7155432138891, lng: 0.7257843017578125},
{ lat: 51.713841492715844, lng: 0.7525634765625},
{ lat: 51.708735945002054, lng: 0.7711029052734375},
{ lat: 51.70277874427563, lng: 0.7642364501953125},
{ lat: 51.708310456678895, lng: 0.792388916015625},
{ lat: 51.71681946274873, lng: 0.7930755615234375},
{ lat: 51.71937185241758, lng: 0.8205413818359375},
{ lat: 51.720647993227516, lng: 0.850067138671875},
{ lat: 51.731706371625876, lng: 0.8768463134765625},
{ lat: 51.74318720928146, lng: 0.899505615234375},

{ lat: 51.747442, lng: 0.930399},
{ lat: 51.734637, lng:  0.945929},
{ lat: 51.745738110429116, lng: 0.924224853515625},
{ lat: 51.727453469289564, lng: 0.94757080078125},
{ lat: 51.7061829550304, lng: 0.943450927734375},
{ lat: 51.6959695543072, lng: 0.9393310546875},
{ lat: 51.6810708788698, lng: 0.946197509765625},
{ lat: 51.65679682539816, lng: 0.9400177001953125},
{ lat: 51.63549308575171, lng: 0.93658447265625},
{ lat: 51.6218534384778, lng: 0.9056854248046875},
{ lat: 51.6220665895049, lng: 0.88714599609375},
{ lat: 51.621000824356926, lng: 0.8586502075195312},
{ lat: 51.62483746174322, lng: 0.802001953125},
{ lat: 51.6188692189659, lng: 0.8188247680664062},
{ lat: 51.61673751344668, lng: 0.8394241333007812},
{ lat: 51.61439252172533, lng: 0.86517333984375},
{ lat: 51.5981874502554, lng: 0.8682632446289062},
{ lat: 51.61353976742359, lng: 0.8758163452148438},
{ lat: 51.615884803202704, lng: 0.8881759643554688},
{ lat: 51.61481889286828, lng: 0.9094619750976562},
{ lat: 51.61609798226564, lng: 0.9290313720703125},
{ lat: 51.61908238401073, lng: 0.94207763671875},


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
{ lat: 51.53459069801548, lng: 0.6066513061523438},
{ lat: 51.53031927385486, lng: 0.6052780151367188},
{ lat: 51.528183411474586, lng: 0.61248779296875},
{ lat: 51.52775622697431, lng: 0.6251907348632812},
{ lat: 51.52327054772944, lng: 0.6310272216796875},
{ lat: 51.51921169524833, lng: 0.630340576171875},
{ lat: 51.51429786349476, lng: 0.6142044067382812},
{ lat: 51.51087923308819, lng: 0.5898284912109375},
{ lat: 51.50788772102843, lng: 0.5747222900390625},
{ lat: 51.51045188624856, lng: 0.5530929565429688},
{ lat: 51.51707531179727, lng: 0.5472564697265625},
{ lat: 51.51963895991334, lng: 0.5393600463867188},
{ lat: 51.51792987720294, lng: 0.528717041015625},
{ lat: 51.52519303580198, lng: 0.5211639404296875},
{ lat: 51.52967852566192, lng: 0.5173873901367188},
{ lat: 51.530105692125886, lng: 0.5091476440429688},
{ lat: 51.52775622697431, lng: 0.5156707763671875},
{ lat: 51.52316374045663, lng: 0.5185890197753906},
{ lat: 51.5177162373547, lng: 0.5196189880371094},
{ lat: 51.51365688983539, lng: 0.5295753479003906},
{ lat: 51.51408420661045, lng: 0.5390167236328125},
{ lat: 51.51248174803477, lng: 0.54107666015625},
{ lat: 51.50842193401685, lng: 0.5331802368164062},
{ lat: 51.50767403407925, lng: 0.5227088928222656},
{ lat: 51.509917697061866, lng: 0.51910400390625},
{ lat: 51.50500286265417, lng: 0.5079460144042969},
{ lat: 51.50233153463367, lng: 0.4873466491699219},
{ lat: 51.50094238217542, lng: 0.46863555908203125},
{ lat: 51.50510971251776, lng: 0.4643440246582031},
{ lat: 51.50671243040581, lng: 0.4598808288574219},
{ lat: 51.50468231156, lng: 0.4519844055175781},
{ lat: 51.504254906593374, lng: 0.4434013366699219},
{ lat: 51.50286581276557, lng: 0.44048309326171875},
{ lat: 51.500354651080414, lng: 0.44434547424316406},
{ lat: 51.497202145853784, lng: 0.4452037811279297},
{ lat: 51.49159121584418, lng: 0.4399681091308594},
{ lat: 51.490522388965736, lng: 0.4406547546386719},
{ lat: 51.485445119088524, lng: 0.43979644775390625},
{ lat: 51.48197087182526, lng: 0.4387664794921875},
{ lat: 51.48010001366223, lng: 0.43953895568847656},
{ lat: 51.46256367014164, lng: 0.4361915588378906},
{ lat: 51.45967594295107, lng: 0.43061256408691406},
{ lat: 51.45673455150474, lng: 0.4184246063232422},
{ lat: 51.45566490761857, lng: 0.4149055480957031},
{ lat: 51.456039285829874, lng: 0.413360595703125},
{ lat: 51.4538999404075, lng: 0.40409088134765625},
{ lat: 51.45384645548734, lng: 0.39748191833496094},
{ lat: 51.45250931211742, lng: 0.3898429870605469},
{ lat: 51.452616285028306, lng: 0.38143157958984375},
{ lat: 51.451760494722905, lng: 0.3668403625488281},
{ lat: 51.45106515328741, lng: 0.35396575927734375},
{ lat: 51.452027930916636, lng: 0.3422069549560547},
{ lat: 51.454648722710076, lng: 0.33860206604003906},
{ lat: 51.45673455150474, lng: 0.3352546691894531},
{ lat: 51.46176154202789, lng: 0.33233642578125},
{ lat: 51.462617144847925, lng: 0.3327655792236328},
{ lat: 51.469033654704226, lng: 0.32675743103027344},
{ lat: 51.47266927645419, lng: 0.31851768493652344},
{ lat: 51.473310826688646, lng: 0.3119087219238281},
{ lat: 51.47250888748587, lng: 0.30272483825683594},
{ lat: 51.469300989701175, lng: 0.2934551239013672},
{ lat: 51.465932454265854, lng: 0.2877044677734375},
{ lat: 51.46090592316693, lng: 0.2819538116455078},
{ lat: 51.46176154202789, lng: 0.27191162109375},
{ lat: 51.466360218581926, lng: 0.26126861572265625},
{ lat: 51.47074457161725, lng: 0.25096893310546875},
{ lat: 51.476358067093685, lng: 0.24015426635742188},
{ lat: 51.48229158266151, lng: 0.23036956787109375},
{ lat: 51.487636431227635, lng: 0.21912574768066406},
{ lat: 51.48940009377448, lng: 0.2089977264404297},
{ lat: 51.491110246849814, lng: 0.2094268798828125},
{ lat: 51.49266001766468, lng: 0.20856857299804688},
{ lat: 51.494156298116394, lng: 0.2110576629638672}
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

  var OseaCoords = [
{lat: 51.72633701612026, lng: 0.7563400268554688},
{lat: 51.72612435524751, lng: 0.7572841644287109},
{lat: 51.72628385099588, lng: 0.7606744766235352},
{lat: 51.726150937911314, lng: 0.7632923126220703},
{lat: 51.725699030500834, lng: 0.7659101486206055},
{lat: 51.7251142024403, lng: 0.7677125930786133},
{lat: 51.72442303225123, lng: 0.7708883285522461},
{lat: 51.72487495241682, lng: 0.7726478576660156},
{lat: 51.72495470256533, lng: 0.7747077941894531},
{lat: 51.72468886818985, lng: 0.7753515243530273},
{lat: 51.72479520212763, lng: 0.7764673233032227},
{lat: 51.72479520212763, lng: 0.7777118682861328},
{lat: 51.723838187684024, lng: 0.7805013656616211},
{lat: 51.72373185149533, lng: 0.7819175720214844},
{lat: 51.723279919903185, lng: 0.782475471496582},
{lat: 51.72062140732797, lng: 0.7836771011352539},
{lat: 51.720142858463504, lng: 0.7823038101196289},
{lat: 51.720142858463504, lng: 0.7798147201538086},
{lat: 51.71953137198843, lng: 0.7785701751708984},
{lat: 51.7193452657677, lng: 0.7773256301879883},
{lat: 51.71891987724404, lng: 0.7750511169433594},
{lat: 51.71865400738457, lng: 0.7720470428466797},
{lat: 51.71918574554029, lng: 0.7693862915039062},
{lat: 51.72062140732797, lng: 0.7656955718994141},
{lat: 51.72163166052071, lng: 0.7620906829833984},
{lat: 51.72181775733106, lng: 0.7606744766235352},
{lat: 51.72261530641408, lng: 0.7569408416748047},
{lat: 51.72381160366029, lng: 0.7550954818725586},
{lat: 51.72436986487593, lng: 0.7546234130859375},
{lat: 51.72527370175257, lng: 0.7546126842498779},
{lat: 51.72564586462615, lng: 0.755385160446167},
{lat: 51.72594492185801, lng: 0.755610466003418},
{lat: 51.72612435524751, lng: 0.7560503482818604}
  ];
 var Oseaisland = new google.maps.Polygon({
    paths: OseaCoords,
    strokeColor: 'green',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'green',
    fillOpacity: 0.35
  });
  Oseaisland.setMap(map);

   google.maps.event.addListener(EssexCounty, 'click', function() {
      this.setMap(null);
      Oseaisland.setMap(null);
  });

  google.maps.event.addListener(map, 'zoom_changed', function() {
if (map.getZoom()>10) {EssexCounty.setMap(null);Oseaisland.setMap(null);}
else {EssexCounty.setMap(map);Oseaisland.setMap(map);}
  });

google.maps.event.addListener(Oseaisland, 'click', function() {
      this.setMap(null);
      EssexCounty.setMap(null);
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
      link: 'investessex.co.uk/studies/place-studies/university-of-essex'
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