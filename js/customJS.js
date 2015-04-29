$(document).ready(function() {
	
	//custom scripting goes here


  /*
  -------------------------------
  LEAFLET/MAP SETUP
  -------------------------------
  */

	L.Browser.webkit3d = false;

	var map;

	map = L.map('map').setView([32.8935772, -96.8870228],10);

	L.tileLayer('https://{s}.tiles.mapbox.com/v3/macman.k8fboh62/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Staff Graphic | Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'bontonMap',
	}).addTo(map);

	map.scrollWheelZoom.disable();


	// our recruits pool
	var recruits = [{"updated":"April 29, 2015"},{"rank":11,"name":"Shane Buechele","height":"6'2\"","weight":185,"school":"Arlington Lamar","college":"Offers from Ole Miss, OU, TCU, Texas, Texas Tech and others","position":"quarterback","geo":"32.764435,-97.125012","latitude":32.764435,"longitude":-97.125012},{"rank":16,"name":"Tristen Wallace","height":"6'3\"","weight":220,"school":"DeSoto","college":"Committed to Texas Tech","position":"quarterback","geo":"32.57978,-96.870548","latitude":32.57978,"longitude":-96.870548},{"rank":20,"name":"Bowman Sells","height":"6'2\"","weight":180,"school":"Lovejoy","college":"Offers from Clemson, Iowa, Ohio State, SMU","position":"quarterback","geo":"33.103088,-96.613242","latitude":33.103088,"longitude":-96.613242},{"rank":24,"name":"Greg Eisworth","height":"6'1\"","weight":180,"school":"South Grand Prairie","college":"Offers from Oklahoma, Baylor","position":"quarterback","geo":"32.695137,-97.005372","latitude":32.695137,"longitude":-97.005372},{"rank":19,"name":"Brandon Stephens","height":"6'0\"","weight":200,"school":"Plano","college":"Offers from Illinois, Ohio St., SMU, Tulsa, Wisconsin","position":"running back","geo":"33.028446,-96.752504","latitude":33.028446,"longitude":-96.752504},{"rank":27,"name":"Da'Leon Ward","height":"5'10\"","weight":180,"school":"Skyline","college":"Offers from Louisville, TCU, UNLV","position":"running back","geo":"32.780411,-96.690396","latitude":32.780411,"longitude":-96.690396},{"rank":35,"name":"Ja'Ron Wilson","height":"6'0\"","weight":185,"school":"Euless Trinity","college":"Interest from Big 12, Big 10 and Pac-12","position":"running back","geo":"32.843022,-97.097277","latitude":32.843022,"longitude":-97.097277},{"rank":37,"name":"Brandon Rice","height":"5'11\"","weight":205,"school":"Coppell","college":"Offer from BYU","position":"running back","geo":"32.974846,-96.998323","latitude":32.974846,"longitude":-96.998323},{"rank":42,"name":"DeAndre Cook","height":"5'10\"","weight":185,"school":"Arlington Bowie","college":"Offer from Kansas","position":"running back","geo":"32.662233,-97.076931","latitude":32.662233,"longitude":-97.076931},{"rank":45,"name":"Nic Smith","height":"5'9\"","weight":160,"school":"Arlington Martin","college":"Offer from SMU, interest from Big 12, American","position":"running back","geo":"32.682456,-97.180568","latitude":32.682456,"longitude":-97.180568},{"rank":2,"name":"Devin Duvernay","height":"5'10\"","weight":185,"school":"Sachse","college":"Offers from Ala., Baylor, Mich. St., Ohio St., A&M, others","position":"wide receiver","geo":"32.96147,-96.586598","latitude":32.96147,"longitude":-96.586598},{"rank":4,"name":"Dee Anderson","height":"6'3\"","weight":175,"school":"West Mesquite","college":"Committed to LSU","position":"wide receiver","geo":"32.76091,-96.63439","latitude":32.76091,"longitude":-96.63439},{"rank":9,"name":"Camron Williams","height":"6'3\"","weight":200,"school":"First Baptist","college":"Offers from Baylor, OU, TCU, Texas Tech, USC, others","position":"wide receiver","geo":"32.783763,-96.799862","latitude":32.783763,"longitude":-96.799862},{"rank":33,"name":"Kofi Boateng","height":"6'1\"","weight":175,"school":"Arlington Lamar","college":"Offers from Boston Col., Northwestern, Tx. Tech, Minnesota","position":"wide receiver","geo":"32.764435,-97.125012","latitude":32.764435,"longitude":-97.125012},{"rank":34,"name":"Michael Irvin","height":"6'2\"","weight":200,"school":"Prestonwood","college":"Offers from Miami (Fl.), South Florida","position":"wide receiver","geo":"33.02878,-96.847028","latitude":33.02878,"longitude":-96.847028},{"rank":39,"name":"Adewale Omotosho","height":"6'3\"","weight":180,"school":"Plano East","college":"Offers from Arkansas St., Duke, Navy, SMU","position":"wide receiver","geo":"33.040635,-96.644437","latitude":33.040635,"longitude":-96.644437},{"rank":41,"name":"Juice Parker","height":"5'11\"","weight":155,"school":"South Oak Cliff","college":"Offer from Louisville","position":"wide receiver","geo":"32.699608,-96.815594","latitude":32.699608,"longitude":-96.815594},{"rank":46,"name":"Zach Farrar","height":"6'4\"","weight":205,"school":"Southlake Carroll","college":"Offers from Louisiana Tech, North Texas","position":"wide receiver","geo":"32.94039,-97.175009","latitude":32.94039,"longitude":-97.175009},{"rank":50,"name":"Aaron Fuller","height":"5'11\"","weight":170,"school":"Lovejoy","college":"Offers from SMU, Northwestern","position":"wide receiver","geo":"33.103088,-96.613242","latitude":33.103088,"longitude":-96.613242},{"rank":3,"name":"Kaden Smith","height":"6'5\"","weight":235,"school":"Flower Mound Marcus","college":"Offers from Alabama, Baylor, LSU, Texas, Tx. A&M, others","position":"tight end","geo":"33.063562,-97.062911","latitude":33.063562,"longitude":-97.062911},{"rank":21,"name":"J.C. Chalk","height":"6'3\"","weight":215,"school":"Argyle","college":"Committed to Clemson","position":"tight end","geo":"33.108152,-97.185597","latitude":33.108152,"longitude":-97.185597},{"rank":1,"name":"Gregory Little","height":"6'5\"","weight":300,"school":"Allen","college":"Committed to Texas A&M","position":"offensive lineman","geo":"33.110378,-96.662106","latitude":33.110378,"longitude":-96.662106},{"rank":6,"name":"Jean Delance","height":"6'5\"","weight":270,"school":"North Mesquite","college":"Committed to Oklahoma","position":"offensive lineman","geo":"32.809296,-96.630091","latitude":32.809296,"longitude":-96.630091},{"rank":12,"name":"Kellen Diesch","height":"6'7\"","weight":265,"school":"TC Byron Nelson","college":"Offers from Baylor, Ole Miss, OU, Tenn., Texas Tech, others","position":"offensive lineman","geo":"33.017814,-97.203707","latitude":33.017814,"longitude":-97.203707},{"rank":29,"name":"Clarence Henderson","height":"6'1\"","weight":260,"school":"Skyline","college":"Offers from UCLA, Arizona State, Rice","position":"offensive lineman","geo":"32.780411,-96.690396","latitude":32.780411,"longitude":-96.690396},{"rank":36,"name":"Chris Owens","height":"6'4\"","weight":275,"school":"Arlington Lamar","college":"Offers from Boston College, Northwestern, SMU, Duke","position":"offensive lineman","geo":"32.764435,-97.125012","latitude":32.764435,"longitude":-97.125012},{"rank":7,"name":"Justin Madubuike","height":"6'3\"","weight":245,"school":"McKinney North","college":"Offers from Baylor, Ohio St., OU, TCU, Tx. A&M, others","position":"defensive lineman","geo":"33.230985,-96.642359","latitude":33.230985,"longitude":-96.642359},{"rank":8,"name":"Michael Williams","height":"6'2\"","weight":280,"school":"Fort Worth All Saints","college":"Offers from Baylor, Ole Miss, Ohio St., TCU, Texas, OU, others","position":"defensive lineman","geo":"32.731174,-97.492456","latitude":32.731174,"longitude":-97.492456},{"rank":14,"name":"Brandon Bowen","height":"6'5\"","weight":230,"school":"TC Byron Nelson","college":"Offers from Baylor, Ole Miss, OU, TCU, Texas Tech, others","position":"defensive lineman","geo":"33.017814,-97.203707","latitude":33.017814,"longitude":-97.203707},{"rank":18,"name":"Chris Daniels","height":"6'4\"","weight":280,"school":"Euless Trinity","college":"Offers from Oklahoma, Kansas, TCU, USC, W. Michigan","position":"defensive lineman","geo":"32.843022,-97.097277","latitude":32.843022,"longitude":-97.097277},{"rank":25,"name":"Andrew Fitzgerald","height":"6'5\"","weight":240,"school":"Flower Mound Marcus","college":"Interest from Big 12, Big 10 and SEC","position":"defensive lineman","geo":"33.063562,-97.062911","latitude":33.063562,"longitude":-97.062911},{"rank":32,"name":"Levi Onwuzurike","height":"6'3\"","weight":245,"school":"Allen","college":"Offers from Baylor, TCU, Duke, Northwestern, Texas Tech","position":"defensive lineman","geo":"33.110378,-96.662106","latitude":33.110378,"longitude":-96.662106},{"rank":38,"name":"Houston Miller","height":"6'4\"","weight":230,"school":"Keller","college":"Offers from Boston College, Duke","position":"defensive lineman","geo":"32.939805,-97.234436","latitude":32.939805,"longitude":-97.234436},{"rank":44,"name":"Jordon Robertson","height":"6'3\"","weight":245,"school":"Bishop Dunne","college":"Offer from Iowa","position":"defensive lineman","geo":"32.69514,-96.850744","latitude":32.69514,"longitude":-96.850744},{"rank":49,"name":"Demerick Gary","height":"6'3\"","weight":245,"school":"Kimball","college":"Offers from Arkansas State, S.F. Austin","position":"defensive lineman","geo":"32.699098,-96.877334","latitude":32.699098,"longitude":-96.877334},{"rank":10,"name":"Marvin Terry","height":"6'2\"","weight":220,"school":"South Oak Cliff","college":"Offers from Arkansas, Okla. St., TCU, Tx. Tech, UCLA, others","position":"linebacker","geo":"32.699608,-96.815594","latitude":32.699608,"longitude":-96.815594},{"rank":13,"name":"McKinley Mitchell","height":"6'3\"","weight":200,"school":"Plano West","college":"Offers from Ariz. St., Baylor, SMU, Tx. A&M, Tx. Tech, others","position":"linebacker","geo":"33.043383,-96.813738","latitude":33.043383,"longitude":-96.813738},{"rank":23,"name":"Deonte Williams","height":"6'0\"","weight":210,"school":"Prestonwood","college":"Offers from Baylor, SMU, TCU, Tx. Tech, Washington, others","position":"linebacker","geo":"33.02878,-96.847028","latitude":33.02878,"longitude":-96.847028},{"rank":5,"name":"Jared Mayden","height":"6'0\"","weight":185,"school":"Sachse","college":"Offers from Bay., N. Dame, Ohio St., Ore., Tx. A&M, others","position":"defensive back","geo":"32.96147,-96.586598","latitude":32.96147,"longitude":-96.586598},{"rank":15,"name":"Bailey Phillips","height":"5'8\"","weight":160,"school":"West Mesquite","college":"Committed to Tennessee","position":"defensive back","geo":"32.76091,-96.63439","latitude":32.76091,"longitude":-96.63439},{"rank":17,"name":"Jaylon Jones","height":"5'11\"","weight":170,"school":"Allen","college":"Offers from Baylor, Ole Miss, SMU, TCU, TxTech, others","position":"defensive back","geo":"33.110378,-96.662106","latitude":33.110378,"longitude":-96.662106},{"rank":28,"name":"Donovan Duvernay","height":"5'8\"","weight":165,"school":"Sachse","college":"Offers from TCU, Boise St, SMU","position":"defensive back","geo":"32.96147,-96.586598","latitude":32.96147,"longitude":-96.586598},{"rank":30,"name":"Obi Eboh","height":"6'1\"","weight":180,"school":"Southlake Carroll","college":"Offers from Ole Miss, Miss. St., Tx. Tech, Vanderbilt, others","position":"defensive back","geo":"32.94039,-97.175009","latitude":32.94039,"longitude":-97.175009},{"rank":40,"name":"Raleigh Texada","height":"5'10\"","weight":160,"school":"Frisco Centennial","college":"Offer from Duke","position":"defensive back","geo":"33.136566,-96.768124","latitude":33.136566,"longitude":-96.768124},{"rank":43,"name":"Madre Harper","height":"6'3\"","weight":170,"school":"Arlington Lamar","college":"Offers from Boston College, SMU","position":"defensive back","geo":"32.764435,-97.125012","latitude":32.764435,"longitude":-97.125012},{"rank":47,"name":"A.J. Green","height":"6'1\"","weight":170,"school":"DeSoto","college":"Offer from Louisville","position":"defensive back","geo":"32.57978,-96.870548","latitude":32.57978,"longitude":-96.870548},{"rank":22,"name":"Lil' Jordan Humphrey","height":"6'5\"","weight":200,"school":"Southlake Carroll","college":"Offers from Texas, Col., Duke, Ole Miss, Tx.Tech, Wash.","position":"athlete","geo":"32.94039,-97.175009","latitude":32.94039,"longitude":-97.175009},{"rank":26,"name":"Aubrey White","height":"6'1\"","weight":190,"school":"Wylie East","college":"Committed to Kansas","position":"athlete","geo":"33.01694,-96.494535","latitude":33.01694,"longitude":-96.494535},{"rank":31,"name":"Tyrell Alexander","height":"6'1\"","weight":175,"school":"Lancaster","college":"Offers from West Virginia, Oklahoma St.","position":"athlete","geo":"32.617701,-96.762815","latitude":32.617701,"longitude":-96.762815},{"rank":48,"name":"Devin Williams","height":"5'9\"","weight":165,"school":"Mansfield Timberview","college":"Interest from Big 12, SEC","position":"athlete","geo":"32.621955,-97.078138","latitude":32.621955,"longitude":-97.078138}]
	
	$(recruits).each(function(k, v) {
		if (v.updated) {
			$('#updateDate').html(v.updated);
			console.log(v.updated)
		}
	})
					
	recruits.shift();
					
	drawMap();
		
	function drawMap() {
					
		//sorting our recruits based on rank
		recruits.sort(function(a,b) {
			return a.rank - b.rank;
		})
		console.log(recruits);


		var schoolsTotal = []; // array will hold the school name for each object in recruits
		var schoolsSingle = []; // array will only hold each school name once


		$(recruits).each(function(k, v) {

			var schoolName = v.school; //school name
			schoolsTotal.push(schoolName); //adding each school to the schoolsTotal array

			if ( $.inArray(schoolName, schoolsSingle) === -1 ) {
				schoolsSingle.push(schoolName); //add the school name to the schoolsSingle array only if it's not present there already
			} 

		})


		var allRecruits = [];
		var allRecruitsMarkers;

		function processRecruits(data1, data2) {

			for (i = 0; i < data1.length; i ++) {

				var school = data1[i]; //our school
				var content = ''; // empty content holder
				var counter = 0; // counter will be used

				//lat and long placeholders
				var latitude;
				var longitude;

				//iterate through the full data set, and for each player at the current school, add one to the counter, and pull the info to build the content for the popup, along with the current school's lat and long
				$(data2).each(function(k,v) {
					if (v.school === school) {
						counter += 1;

						if (counter <= 1) {
							content += "<h4>" + v.school + "</h4>";
							content += "<table class='popupTable'>";
							content += "<tr><th>Rk.</th><th>Name</th><th>Pos.</th><th>Ht.</th><th>Wt.</th></tr>";
						}
						var currentPosition;
						switch(v.position) {
							case "quarterback": currentPosition = "QB"; break;
							case "running back": currentPosition = "RB"; break;
							case "wide receiver": currentPosition = "WR"; break;
							case "tight end": currentPosition = "TE"; break;
							case "offensive lineman": currentPosition = "OL"; break;
							case "defensive lineman": currentPosition = "DL"; break;
							case "linebacker": currentPosition = "LB"; break;
							case "defensive back": currentPosition = "DB"; break;
							case "athlete": currentPosition = "ATH"; break;
							case "kicker": currentPosition = "K"; break;
							default: alert('You picked an unsupported position');
						}
						content +="<tr><td>" + v.rank + "</td><td>" + v.name + "</td><td>" + currentPosition + "</td><td>" + v.height + "</td><td>" + v.weight + "</td></tr>";

						latitude = v.latitude;
						longitude = v.longitude; 
					}
				})

				content += "</table>";

				//create a circle using the lat and long, sized by the counter
				var circle = L.circleMarker([latitude, longitude], {
					color: 'white',
					opacity: 1,
					weight: 3,
					fillColor: '#B11623',
					radius: counter * 10,
					fillOpacity: 0.7,
				}).bindPopup(content);

				circle.schoolName = school;

				/*
				circle.on('click', function(e) {
					console.log(e.target.schoolName);
				})*/


				allRecruits.push(circle); //push those circles to the allRecruits array
				allRecruitsMarkers = L.layerGroup(allRecruits); //and add that array to the relevant layer group
			}

			map.addLayer(allRecruitsMarkers); //add that layer group to the map

		}

		processRecruits(schoolsSingle, recruits);


		var qb = [];
		var rb = [];
		var wr = [];
		var te = [];
		var ol = [];
		var dl = [];
		var lb = [];
		var db = [];
		var ath = [];
		var k = [];

		var qb_Markers;
		var rb_Markers;
		var wr_Markers;
		var te_Markers;
		var ol_Markers;
		var dl_Markers;
		var lb_Markers;
		var db_Markers;
		var ath_Markers;
		var k_Markers;

		function processPositions(data1, data2, position) {
			for (i = 0; i < data1.length; i ++) {	

				var school = data1[i]; //our school
				var content = ''; // empty content holder
				var counter = 0; // counter will be used

				//lat and long placeholders
				var latitude;
				var longitude;

				var content = '';

				//iterate through the full data set, and for each player at the current school, add one to the counter, and pull the info to build the content for the popup, along with the current school's lat and long
				$(data2).each(function(k,v) {
					if (v.school === school && v.position === position) {
						counter += 1;
						if (counter <= 1) {
						  content += "<h4>" + v.school + "</h4>";
						  content += "<table class='popupTable'>";
						  content += "<tr><th>Rk.</th><th>Name</th><th>Pos.</th><th>Ht.</th><th>Wt.</th></tr>";
						}

						var currentPosition;
						switch(v.position) {
							case "quarterback": currentPosition = "QB"; break;
							case "running back": currentPosition = "RB"; break;
							case "wide receiver": currentPosition = "WR"; break;
							case "tight end": currentPosition = "TE"; break;
							case "offensive lineman": currentPosition = "OL"; break;
							case "defensive lineman": currentPosition = "DL"; break;
							case "linebacker": currentPosition = "LB"; break;
							case "defensive back": currentPosition = "DB"; break;
							case "athlete": currentPosition = "ATH"; break;
							case "kicker": currentPosition = "K"; break;
							default: alert('You picked an unsupported position');
						}
						content +="<tr><td>" + v.rank + "</td><td>" + v.name + "</td><td>" + currentPosition + "</td><td>" + v.height + "</td><td>" + v.weight + "</td></tr>";

						latitude = v.latitude;
						longitude = v.longitude; 
					}
				})

				if (counter >= 1) {
				//create a circle using the lat and long, sized by the counter
					var circle = L.circleMarker([latitude, longitude], {
						color: 'white',
						opacity: 1,
						weight: 3,
						fillColor: '#B11623',
						radius: counter * 10,
						fillOpacity: 0.7,
					}).bindPopup(content);

					// push the circle to the corresponding position array
					switch(position) {
						case "quarterback": qb.push(circle); break;
						case "running back": rb.push(circle); break;
						case "wide receiver": wr.push(circle); break;
						case "tight end": te.push(circle); break;
						case "offensive lineman": ol.push(circle); break;
						case "defensive lineman": dl.push(circle); break;
						case "linebacker": lb.push(circle); break;
						case "defensive back": db.push(circle); break;
						case "athlete": ath.push(circle); break;
						case "kicker": k.push(circle); break;
						default: alert('You picked an unsupported position');
					}
				}
			}

			//add that position array to the proper layer group
			switch(position) {
				case "quarterback": qb_Markers = L.layerGroup(qb); break;
				case "running back": rb_Markers = L.layerGroup(rb); break;
				case "wide receiver": wr_Markers = L.layerGroup(wr); break;
				case "tight end": te_Markers = L.layerGroup(te); break;
				case "offensive lineman": ol_Markers = L.layerGroup(ol); break;
				case "defensive lineman": dl_Markers = L.layerGroup(dl); break;
				case "linebacker": lb_Markers = L.layerGroup(lb); break;
				case "defensive back": db_Markers = L.layerGroup(db); break;
				case "athlete": ath_Markers = L.layerGroup(ath); break;
				case "kicker": k_Markers = L.layerGroup(k); break;
				default: console.log('something is wrong');
			}
		}

		//create all the circles and layers for each position. We'll add them to the map later when those positions are selected by the user
		processPositions(schoolsSingle, recruits, "quarterback");
		processPositions(schoolsSingle, recruits, "running back");
		processPositions(schoolsSingle, recruits, "wide receiver");
		processPositions(schoolsSingle, recruits, "tight end");
		processPositions(schoolsSingle, recruits, "offensive lineman");
		processPositions(schoolsSingle, recruits, "defensive lineman");
		processPositions(schoolsSingle, recruits, "linebacker");
		processPositions(schoolsSingle, recruits, "defensive back");
		processPositions(schoolsSingle, recruits, "athlete");
		processPositions(schoolsSingle, recruits, "kicker");

		var allLayers = [allRecruitsMarkers, qb_Markers, rb_Markers, wr_Markers, te_Markers, ol_Markers, dl_Markers, lb_Markers, db_Markers, ath_Markers, k_Markers];

		function addPositionLayers(position) {
			//add layers to map based on posiition with switch statement
			switch(position) {
				case "all positions": map.addLayer(allRecruitsMarkers); break;
				case "quarterback": map.addLayer(qb_Markers); break;
				case "running back": map.addLayer(rb_Markers); break;
				case "wide receiver": map.addLayer(wr_Markers); break;
				case "tight end": map.addLayer(te_Markers); break;
				case "offensive lineman": map.addLayer(ol_Markers); break;
				case "defensive lineman": map.addLayer(dl_Markers); break;
				case "linebacker": map.addLayer(lb_Markers); break;
				case "defensive back": map.addLayer(db_Markers); break;
				case "athlete": map.addLayer(ath_Markers); break;
				case "kicker": map.addLayer(k_Markers); break;
				default: console.log('something is wrong');
			}
		}

		/* 
		-----------------------
		CHANGING THE MAP DISPLAY
		-----------------------
		*/

		//when the position dropdown is changed, all layers are removed, then the selected position layer is added
		$("#mapPosition").change(function() {
			$("#mapPosition option:selected").each(function() {
				targetPosition = $(this).attr("value"); //grab the position from the option value
				for (i=0; i<allLayers.length; i++) {
				  map.removeLayer(allLayers[i]); //iterate through the allLayers array, removing each layer
				}
				addPositionLayers(targetPosition); //add the layer of the position selected
			})
		})


		/* 
		-----------------------
		BUILDING THE INITIAL TABLE
		-----------------------
		*/

		var recruitsTable = $('#recruitsTable');

		//building the table based on a supplied school and position
		function tableBuilder(school, position) {
			var tableContent = "<table>"; 
			tableContent += "<tr><th>Rank</th><th>Player</th><th>School</th><th>Pos.</th><th>Ht., Wt.</th><th>College</th></tr>"

			$(recruits).each(function(k, v) {

				//abbreviating the position
				var currentPosition;
				switch(v.position) {
					case "quarterback": currentPosition = "QB"; break;
					case "running back": currentPosition = "RB"; break;
					case "wide receiver": currentPosition = "WR"; break;
					case "tight end": currentPosition = "TE"; break;
					case "offensive lineman": currentPosition = "OL"; break;
					case "defensive lineman": currentPosition = "DL"; break;
					case "linebacker": currentPosition = "LB"; break;
					case "defensive back": currentPosition = "DB"; break;
					case "athlete": currentPosition = "ATH"; break;
					case "kicker": currentPosition = "K"; break;
					default: alert('You picked an unsupported position');
				}
				if (position === "all positions" && school === "All schools") {			
					tableContent += "<tr><td>" + v.rank + "</td><td>" + v.name + "</td><td>" + v.school + "</td><td>" + currentPosition + "</td><td>" + v.height + ", " + v.weight + "</td><td>" + v.college +"</td></tr>"; 
				} else if (position === "all positions" && school === v.school) {
					tableContent += "<tr><td>" + v.rank + "</td><td>" + v.name + "</td><td>" + v.school + "</td><td>" + currentPosition + "</td><td>" + v.height + ", " + v.weight + "</td><td>" + v.college +"</td></tr>"; 
				} else if (position === v.position && school === "All schools") {
					tableContent += "<tr><td>" + v.rank + "</td><td>" + v.name + "</td><td>" + v.school + "</td><td>" + currentPosition + "</td><td>" + v.height + ", " + v.weight + "</td><td>" + v.college +"</td></tr>"; 
				} else if (position === v.position && school === v.school) {
					tableContent += "<tr><td>" + v.rank + "</td><td>" + v.name + "</td><td>" + v.school + "</td><td>" + currentPosition + "</td><td>" + v.height + ", " + v.weight + "</td><td>" + v.college +"</td></tr>"; 
				} 
			})

			tableContent += "</table>";
			recruitsTable.html(tableContent);

			var count = $("#recruitsTable table td").length; //if there are no recruits, supply a message saying so
			if (count === 0) {
				$(recruitsTable).html("<p>No recruits fit your criteria</p>")
			}
		}

		tableBuilder("All schools", "all positions");

		/* 
		--------------------------
		BUILDING THE TABLE DROP DOWNS
		--------------------------
		*/

		var options = "<option value='All schools'>All schools</option>";
		var targetSchool = "All schools";
		var targetPosition = "all positions";

		var schoolsDrop = $("#selectSchool");
		var positionsDrop = $("#selectPosition");

		//building our schools dropdown based on the list of schools made earlier (schoolsSingle)
		$(schoolsSingle).each(function(k,v) {
			options += "<option value='" + v + "'>";
			options += v;
			options += "</option>"
		})

		$(schoolsDrop).html(options);

		// when a school is picked from the dropdown, grab it's text and rebuild the table using that school
		$(schoolsDrop).change(function() {
			$("#selectSchool option:selected").each(function() {
				targetSchool = $(this).text();
				tableBuilder(targetSchool, targetPosition);
			})
		})

		// when a position is picked from the dropdown, grab it's text and rebuild the table using that position
		$(positionsDrop).change(function() {
			$("#selectPosition option:selected").each(function() {
				targetPosition = $(this).attr("value");
				tableBuilder(targetSchool, targetPosition);
			})
		})


		/* 
		--------------------------
		FADING THE CIRCLES
		--------------------------
		*/

		// when a circle is clicked, faded back all other circles and fade up the clicked circle
		$('.leaflet-clickable').each(function(k,v) {
			$(this).click(function(e) {
				var myObject = $(this).find('g')
				$('.leaflet-clickable').attr('fill-opacity', '0.6');
				$(this).attr('fill-opacity', '0.8');
			})
		})

	}



});