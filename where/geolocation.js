function initialize()
{
        if (navigator.geolocation) {
                initRedLine();
                generateMap();
                generateRedLine();
                generateWaldCarm();
                getRealTime();
                navigator.geolocation.getCurrentPosition(showPosition);
        } else {
                document.getElementById("map_canvas").innerHTML =
                        "Geolocation is not supported by your browser.";
        }
}

function initRedLine() 
{
        trains = [];
        trains["RALEN"] = { direction:"NORTHBOUND", station:"Alewife Station" };
        trains["RDAVN"] = { direction:"NORTHBOUND", station:"Davis Station" };
        trains["RDAVS"] = { direction:"SOUTHBOUND", station:"Davis Station" };
        trains["RPORN"] = { direction:"NORTHBOUND", station:"Porter Square Station" };
        trains["RPORS"] = { direction:"SOUTHBOUND", station:"Porter Square Station" };
        trains["RHARN"] = { direction:"NORTHBOUND", station:"Harvard Square Station" };
        trains["RHARS"] = { direction:"SOUTHBOUND", station:"Harvard Square Station" };
        trains["RCENN"] = { direction:"NORTHBOUND", station:"Central Square Station" };
        trains["RCENS"] = { direction:"SOUTHBOUND", station:"Central Square Station" };
        trains["RKENN"] = { direction:"NORTHBOUND", station:"Kendall/MIT Station" };
        trains["RKENS"] = { direction:"SOUTHBOUND", station:"Kendall/MIT Station" };
        trains["RMGHN"] = { direction:"NORTHBOUND", station:"Charles/MGH Station" };
        trains["RMGHS"] = { direction:"SOUTHBOUND", station:"Charles/MGH Station" };
        trains["RPRKN"] = { direction:"NORTHBOUND", station:"Park St. Station" };
        trains["RPRKS"] = { direction:"SOUTHBOUND", station:"Park St. Station" };
        trains["RDTCN"] = { direction:"NORTHBOUND", station:"Downtown Crossing Station" };
        trains["RDTCS"] = { direction:"SOUTHBOUND", station:"Downtown Crossing Station" };
        trains["RSOUN"] = { direction:"NORTHBOUND", station:"South Station" };
        trains["RSOUS"] = { direction:"SOUTHBOUND", station:"South Station" };
        trains["RBRON"] = { direction:"NORTHBOUND", station:"Broadway Station" };
        trains["RBROS"] = { direction:"SOUTHBOUND", station:"Broadway Station" };
        trains["RANDN"] = { direction:"NORTHBOUND", station:"Andrew Station" };
        trains["RANDS"] = { direction:"SOUTHBOUND", station:"Andrew Station" };
        trains["RJFKN"] = { direction:"NORTHBOUND", station:"JFK/UMass Station" };
        trains["RJFKS"] = { direction:"SOUTHBOUND", station:"JFK/UMass Station" };
        trains["RSAVN"] = { direction:"NORTHBOUND", station:"Savin Hill Station" };
        trains["RSAVS"] = { direction:"SOUTHBOUND", station:"Savin Hill Station" };
        trains["RFIEN"] = { direction:"NORTHBOUND", station:"Fields Corner Station" };
        trains["RFIES"] = { direction:"SOUTHBOUND", station:"Fields Corner Station" };
        trains["RSHAN"] = { direction:"NORTHBOUND", station:"Shawmut Station" };
        trains["RSHAS"] = { direction:"SOUTHBOUND", station:"Shawmut Station" };
        trains["RASHS"] = { direction:"SOUTHBOUND", station:"Ashmont Station" };
        trains["RNQUN"] = { direction:"NORTHBOUND", station:"North Quincy Station" };
        trains["RNQUS"] = { direction:"SOUTHBOUND", station:"North Quincy Station" };
        trains["RWOLN"] = { direction:"NORTHBOUND", station:"Wollaston Station" };
        trains["RWOLS"] = { direction:"SOUTHBOUND", station:"Wollaston Station" };
        trains["RQUCN"] = { direction:"NORTHBOUND", station:"Quincy Center Station" };
        trains["RQUCS"] = { direction:"SOUTHBOUND", station:"Quincy Center Station" };
        trains["RQUAN"] = { direction:"NORTHBOUND", station:"Quincy Adams Station" };
        trains["RQUAS"] = { direction:"SOUTHBOUND", station:"Quincy Adams Station" };
        trains["RBRAS"] = { direction:"SOUTHBOUND", station:"Braintree Station" };
}

function generateMap()
{
        latlng = new google.maps.LatLng(42.330497742, -71.095794678);
        mapOptions = {
                zoom: 12,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById ("map_canvas"),
                                  mapOptions);
}

function getRealTime() {
        try {
                request = new XMLHttpRequest();
        }
        catch (ms1) {
                try {
                        request = new ActiveXObject("Msxml2.XMLHTTP");
  		}
  		catch (ms2) {
    			try {
      				request = new ActiveXObject("Microsoft.XMLHTTP");
    			}
    	                catch (ex) {
      			        request = null;
    		        	}
  				}
		}
        //Set up, execute, and handle the request
        request.open("GET", "http://mbtamap.herokuapp.com/mapper/redline.json", true);
        request.send();
}

function generateRedLine()
{
	markers = [];
        var redStations = [];
        var redBranchBraintree = [];
        var redBranchAshmont = [];
        var tico = "T.png";

        // Red line station information
        pt = new google.maps.LatLng(42.395428, -71.142483);
		markers.push(new google.maps.Marker({position: pt, title: "Alewife Station", icon: tico}));
		redStations.push(pt);

		pt = new google.maps.LatLng(42.39674, -71.121815);
		markers.push(new google.maps.Marker({position: pt, title: "Davis Station", icon: tico}));
		redStations.push(pt);

        pt = new google.maps.LatLng(42.3884, -71.119149);
        markers.push(new google.maps.Marker({position: pt, title: "Porter Square Station", icon: tico}));
        redStations.push(pt);
        
        pt = new google.maps.LatLng(42.373362, -71.118956);
        markers.push(new google.maps.Marker({position: pt, title: "Harvard Square Station", icon: tico}));
        redStations.push(pt);

        pt = new google.maps.LatLng(42.365486, -71.103802);
        markers.push(new google.maps.Marker({position: pt, title: "Central Square Station", icon: tico}));
        redStations.push(pt);

        pt = new google.maps.LatLng(42.36249079, -71.08617653);
        markers.push(new google.maps.Marker({position: pt, title: "Kendall/MIT Station", icon: tico}));
        redStations.push(pt);

        pt = new google.maps.LatLng(42.361166, -71.070628);
        markers.push(new google.maps.Marker({position: pt, title: "Charles/MGH Station", icon: tico}));
        redStations.push(pt);

        pt = new google.maps.LatLng(42.35639457, -71.0624242);
        markers.push(new google.maps.Marker({position: pt, title: "Park St. Station", icon: tico}));
        redStations.push(pt);

        pt = new google.maps.LatLng(42.355518, -71.060225);
        markers.push(new google.maps.Marker({position: pt, title: "Downtown Crossing Station", icon: tico}));
        redStations.push(pt);

        pt = new google.maps.LatLng(42.352271, -71.055242);
        markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: tico}));
        redStations.push(pt);

        pt = new google.maps.LatLng(42.342622, -71.056967);
        markers.push(new google.maps.Marker({position: pt, title: "Broadway Station", icon: tico}));
        redStations.push(pt);

        pt = new google.maps.LatLng(42.330154, -71.057655);
        markers.push(new google.maps.Marker({position: pt, title: "Andrew Station", icon: tico}));
        redStations.push(pt);

        pt = new google.maps.LatLng(42.320685, -71.052391);
        markers.push(new google.maps.Marker({position: pt, title: "JFK/UMass Station", icon: tico}));
        redStations.push(pt);
        redBranchAshmont.push(pt);
        redBranchBraintree.push(pt);

        pt = new google.maps.LatLng(42.31129, -71.053331);
        markers.push(new google.maps.Marker({position: pt, title: "Savin Hill Station", icon: tico}));
        redBranchAshmont.push(pt);

        pt = new google.maps.LatLng(42.275275, -71.029583);
        markers.push(new google.maps.Marker({position: pt, title: "North Quincy Station", icon: tico}));
        redBranchBraintree.push(pt);

        pt = new google.maps.LatLng(42.2665139, -71.0203369);
        markers.push(new google.maps.Marker({position: pt, title: "Wollaston Station", icon: tico}));
        redBranchBraintree.push(pt);

        pt = new google.maps.LatLng(42.300093, -71.061667);
        markers.push(new google.maps.Marker({position: pt, title: "Fields Corner Station", icon: tico}));
        redBranchAshmont.push(pt);

        pt = new google.maps.LatLng(42.251809, -71.005409);
        markers.push(new google.maps.Marker({position: pt, title: "Quincy Center Station", icon: tico}));
        redBranchBraintree.push(pt);

        pt = new google.maps.LatLng(42.29312583, -71.06573796);
        markers.push(new google.maps.Marker({position: pt, title: "Shawmut Station", icon: tico}));
        redBranchAshmont.push(pt);

        pt = new google.maps.LatLng(42.233391, -71.007153);
        markers.push(new google.maps.Marker({position: pt, title: "Quincy Adams Station", icon: tico}));
        redBranchBraintree.push(pt);

        pt = new google.maps.LatLng(42.284652, -71.064489);
        markers.push(new google.maps.Marker({position: pt, title: "Ashmont Station", icon: tico}));
        redBranchAshmont.push(pt);

        pt = new google.maps.LatLng(42.2078543, -71.0011385);
        markers.push(new google.maps.Marker({position: pt, title: "Braintree Station", icon: tico}));
        redBranchBraintree.push(pt);

        //Render markers to map
        var infowindow = new google.maps.InfoWindow();
        for (i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
                google.maps.event.addListener(markers[i], 'click', function() {
                        request.onreadystatechange = parse(this);
                        infowindow.setContent(content);
                        infowindow.open(map, this);
                });
        }

        //Render polyline
        redStations = new google.maps.Polyline({
                path: redStations,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 10
        });
        redBraintree = new google.maps.Polyline({
                path: redBranchBraintree,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 10
        });
        redAshmont = new google.maps.Polyline({
                path: redBranchAshmont,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 10
        });
        redStations.setMap(map);
        redBraintree.setMap(map);
        redAshmont.setMap(map);
}

function parse(marker)
{
        if (request.readyState == 4 && request.status == 200) {
                str = request.responseText;
                parsed = JSON.parse(str);
                content = "<h1>" + marker.title + "</h1>";
                if (parsed.length > 0) {
                        counter = 0;
                        content += '<table id="schedule">';
                        content += '<tr><th>Line</th><th>Trip #</th>';
                        content += '<th>Direction</th><th>Time Remaining</th></tr>';
                        for (i = 0; i < parsed.length; i++) {
                                createTable(i, marker.title);
                        }
                        content += '</table>';
                        if (counter == 0) {
                                content += "<p>No schedule for this station.</p>";                  
                        }                     
                } else {
                        content += "<p>No schedule for this station.</p>"; 
                }
        } else if (request.readyState == 4 && request.status == 0) {
                content += "<p>Unable to load MBTA Red Line live data.</p>";
        } 
}

function createTable(i, marker_title)
{
        var platform = parsed[i]["PlatformKey"]; 
        var station_name = trains[platform]["station"];
        direction = trains[platform].direction;

        if (station_name == marker_title && parsed[i]["InformationType"] == "Predicted") {
                content += '<tr>';
                content += '<td>' + parsed[i]["Line"] + '</td>';
                content += '<td>' + parsed[i]["Trip"] + '</td>';
                content += '<td>' + direction + '</td>';
                content += '<td>' + parsed[i]["TimeRemaining"] +'</td>';
                content += '</tr>';
                counter++;
        }
}

function showPosition(position)
{
        latlng = new google.maps.LatLng(position.coords.latitude,
                                        position.coords.longitude);

        myLat = position.coords.latitude;
        myLng = position.coords.longitude;

        //Change map position when geolocation is acquired
        map.panTo(latlng);

        var markerOptions = {
                map: map,
                position: latlng,
                visible: true
        }

        marker = new google.maps.Marker(markerOptions);

        myContent = "<h1>You are here.</h1>";
        nearestT();
        myContent += "<p>";
        myContent += "The closest station to you is " + max_station + ". ";
        myContent += "<br/>It is " + max + " miles away from you.<br/>";

        if (waldoPos != 0) {
                var d = distance(waldoPos.ib, waldoPos.jb);
                myContent += "<br/>Waldo is " + d + " miles away from you.";
        }
        if (carmenPos != 0) {
                var d = distance(carmenPos.ib, carmenPos.jb);
                myContent += "<br/>Carmen Sandiego is " + d + " miles away from you.";
        }
        
        var windowOptions = {
                content: myContent
        }

        wind = new google.maps.InfoWindow(windowOptions);
        wind.open(map, marker);
}

function nearestT()
{
        max = 25000;
        for (i = 0; i < markers.length; i++) {
                var Tstop = markers[i].getPosition();
                var TLat = Tstop.ib;
                var TLng = Tstop.jb;

                var d = distance(TLat, TLng); 

                if (d < max) { 
                        max_station = markers[i].title;
                        max = d; 
                }
        } 
}

function distance(toLat, toLng)
{
        var R = 6371 / 1.609344;
        var x1 = toLat - myLat;
        var dLat = toRad(x1);
        var x2 = toLng - myLng;
        var dLon = toRad(x2);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(toRad(myLat)) * Math.cos(toRad(toLat)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; 

        return d; 
}

function toRad(degrees)
{
        return degrees * Math.PI / 180;
}

function generateWaldCarm()
{
        try {
                requestWC = new XMLHttpRequest();
        }
        catch (ms1) {
                try {
                        requestWC = new ActiveXObject("Msxml2.XMLHTTP");
  		}
  		catch (ms2) {
    			try {
      				requestWC = new ActiveXObject("Microsoft.XMLHTTP");
    			}
    	                catch (ex) {
      			        requestWC = null;
    		        }
  		}
	}

        //Set up, execute, and handle the request
        requestWC.open("GET", "http://messagehub.herokuapp.com/a3.json", true);
        requestWC.send();
        requestWC.onreadystatechange = function () {
                waldoPos = 0;
                carmenPos = 0; 
                                
                if (requestWC.readyState == 4 && requestWC.status == 200) {
                        strWC = requestWC.responseText;
                        parsedWC = JSON.parse(strWC);
                        
                        if (parsedWC.length > 0) {
                                for (i = 0; i < parsedWC.length; i++) {
                                        var lat = parsedWC[i].loc.latitude;
                                        var lng = parsedWC[i].loc.longitude;
                                        var position = new google.maps.LatLng(lat, lng);
                                        
                                        if (parsedWC[i].name == "Waldo") {
                                                var waldo = new google.maps.Marker({
                                                        position: position,
                                                        title: "Waldo",
                                                        icon: "waldo.png"
                                                });
                                                waldo.setMap(map);
                                                waldoPos = position;
                                        } else if (parsedWC[i].name == "Carmen Sandiego") {
                                                var carmen = new google.maps.Marker({
                                                        position: position,
                                                        title: "Carmen Sandiego",
                                                        icon: "carmensandiego.png"
                                                });
                                                carmen.setMap(map);
                                                carmenPos = position;
                                        }
                                } 
                        } 
                } else if (requestWC.readyState == 4 && requestWC.status == 0) {
                        alert ("Unable to find Carmen or Waldo");
                }
        };
}
