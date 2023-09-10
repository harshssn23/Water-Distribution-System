    // The value for 'accessToken' begins with 'pk...'
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFpMjExMDY4MiIsImEiOiJjbGllcXVnN2Uwb2tzM2ZxZmh5Z3h5Y2ZwIn0.upw3Fnm9sz6BLsEarOUPEg';
    let x;
    const map = new mapboxgl.Map({
      container: 'map',
      // Replace YOUR_STYLE_URL with your style URL.
      style: 'mapbox://styles/jai2110682/clij3b0u2006b01qvhupg2t9b', 
      center: [80.0190,13.0082],
      zoom: 10.7
    });

    const destinationDropdown = document.getElementById('destination-dropdown');
    const findRouteButton = document.getElementById('find-route-button');

    const node_dict = {
      0: ['Thiruvottiyur District', 13.1629, 80.3018],
      1: ['Manali District', 13.1993, 80.2504],
      2: ['Madhavaram District', 13.1497, 80.2328],
      3: ['Tondiarpet District', 13.1279, 80.2785],
      4: ['Royapuram District', 13.1090, 80.2934],
      5: ['Thiru-Vi-Ka Nagar District', 13.0827, 80.2707],
      6: ['Ambattur District', 13.1161, 80.1543],
      7: ['Anna Nagar District', 13.0878, 80.2102],
      8: ['Teynampet District', 13.0423, 80.2446],
      9: ['Kodambakkam District', 13.0497, 80.2246],
      10: ['Valasaravakkam District', 13.0413, 80.1675],
      11: ['Alandur District', 13.0042, 80.2006],
      12: ['Adyar District', 13.0060, 80.2577],
      13: ['Perungudi District', 12.9716, 80.2442],
      14: ['Columbus Park', 12.8975, 80.2289],
      15: ['Chembarambakkam Lake', 13.0082, 80.0190]
    };

    const districts= {
  'Thiruvottiyur District': [0, 80.3018, 13.1629],
  'Manali District': [1, 80.2504, 13.1993],
  'Madhavaram District': [2, 80.2328, 13.1497],
  'Tondiarpet District': [3, 80.2785, 13.1279],
  'Royapuram District': [4, 80.2934, 13.1090],
  'Thiru-Vi-Ka Nagar District': [5, 80.2707, 13.0827],
  'Ambattur District': [6, 80.1543, 13.1161],
  'Anna Nagar District': [7, 80.2102, 13.0878],
  'Teynampet District': [8, 80.2446, 13.0423],
  'Kodambakkam District': [9, 80.2246, 13.0497],
  'Valasaravakkam District': [10, 80.1675, 13.0413],
  'Alandur District': [11, 80.2006, 13.0042],
  'Adyar District': [12, 80.2577, 13.0060],
  'Perungudi District': [13, 80.2442, 12.9716],
  'Columbus Park': [14, 80.2289, 12.8975],
  'Chembarambakkam Lake': [15, 80.0190, 13.0082]
}
const districttss = [
  [80.3018, 13.1629, 'Thiruvottiyur District'],
  [80.2504, 13.1993, 'Manali District'],
  [80.2328, 13.1497, 'Madhavaram District'],
  [80.2785, 13.1279, 'Tondiarpet District'],
  [80.2934, 13.1090, 'Royapuram District'],
  [80.2707, 13.0827, 'Thiru-Vi-Ka Nagar District'],
  [80.1543, 13.1161, 'Ambattur District'],
  [80.2102, 13.0878, 'Anna Nagar District'],
  [80.2446, 13.0423, 'Teynampet District'],
  [80.2246, 13.0497, 'Kodambakkam District'],
  [80.1675, 13.0413, 'Valasaravakkam District'],
  [80.2006, 13.0042, 'Alandur District'],
  [80.2577, 13.0060, 'Adyar District'],
  [80.2442, 12.9716, 'Perungudi District'],
  [80.2289, 12.8975, 'Columbus Park'],
  [80.0190, 13.0082, 'Chembarambakkam Lake']
];

function return_ans(end_vertex) {
const vertices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const edges = [
  [0, 1, 7, 250], [0, 3, 5, 250], [0, 4, 6, 200], [1, 2, 6, 200], [2, 3, 6, 300], [0,6,4,150],
  [2, 6, 9, 150], [5, 8, 5, 200], [3, 4, 3, 300], [3, 5, 5, 250], [4, 5, 4, 250], 
  [5, 7, 7, 200], [6, 7, 7, 250], [6, 2, 9, 150], [6, 15, 19, 300], [7, 10, 7, 250], 
  [7, 9, 5, 250], [8, 9, 2, 200], [8, 11, 6, 250], [8, 12, 4, 300], [9, 10, 6, 150], 
  [10, 11, 5, 300], [10, 15, 17, 150], [11, 15, 20, 200], [11, 13, 6, 250], [14, 11, 12, 250], 
  [12, 13, 4, 250], [13, 14, 8, 300], [14, 15, 26, 150]
];

const node_dict = {
  0: ['Thiruvottiyur District', 80.3018, 13.1629],
  1: ['Manali District', 80.2504, 13.1993],
  2: ['Madhavaram District', 80.2328, 13.1497],
  3: ['Tondiarpet District', 80.2785, 13.1279],
  4: ['Royapuram District', 80.2934, 13.1090],
  5: ['Thiru-Vi-Ka Nagar District', 80.2707, 13.0827],
  6: ['Ambattur District', 80.1543, 13.1161],
  7: ['Anna Nagar District', 80.2102, 13.0878],
  8: ['Teynampet District', 80.2446, 13.0423],
  9: ['Kodambakkam District', 80.2246, 13.0497],
  10: ['Valasaravakkam District', 80.1675, 13.0413],
  11: ['Alandur District', 80.2006, 13.0042],
  12: ['Adyar District', 80.2577, 13.0060],
  13: ['Perungudi District', 80.2442, 12.9716],
  14: ['Columbus Park', 80.2289, 12.8975],
  15: ['Chembarambakkam Lake', 80.0190, 13.0082]
}

console.log("----------------------------------------------------------------------");

const edges1 = [
  [0, 1, 4, 250], [0, 3, 3, 250], [0, 4, 4, 200], [1, 2, 4, 200], [2, 3, 3, 300], [2, 6, 9, 150],
  [5, 8, 4, 200], [3, 4, 1, 300], [3, 5, 3, 250], [4, 5, 2, 250], [5, 7, 5, 200], [6, 7, 4, 250],
   [6, 2, 9, 150], [6, 15, 9, 300], [7, 10, 4, 250], [7, 9, 3, 250], [8, 9, 1, 200], [8, 11, 4, 250],
    [8, 12, 2, 300], [9, 10, 6, 150], [10, 11, 2, 300], [10, 15, 17, 150], [11, 15, 15, 200], 
    [11, 13, 4, 250], [14, 11, 7, 250], [12, 13, 2, 250], [13, 14, 4, 300], [14, 15, 25, 150]
];
const num_vertices = vertices.length;
const start_vertex = 15;
const graph1 = convertToWeightedAdjacencyMatrix(edges, num_vertices);

const [distance1, capacity1, shortest_path1] = dijkstra(graph1, start_vertex, end_vertex);
const graph2 = convertToWeightedAdjacencyMatrix(edges1, num_vertices);
const ans = [[80.0190, 13.0082]];
  
const [distance2, capacity2, shortest_path2] = dijkstra(graph2, start_vertex, end_vertex);

if (capacity1 > capacity2) {
  console.log("Shortest distance:", distance1);
  console.log("Capacity along the path:", capacity1);
  console.log("Shortest path:", shortest_path1);

  shortest_path1.forEach((i) => {
    console.log(node_dict[i].slice(1));
  });
} else {
  console.log("Minimum latency path:", distance2);
  console.log("Capacity along the path:", capacity2);
  console.log("Shortest path:", shortest_path2);

  shortest_path2.forEach((i) => {
    ans.push(node_dict[i].slice(1));
  });
}
const Q = (15 * (10 ** (-3))) / 60;
const power = 9810 * Q * distance2;
console.log("Power required by motor to pump 15 liters of water per minute from source to destination is", Math.round(power), "Watts");

// Input time in hours for how much time the pump will work
// Cost of electricity is 6 rs per kilowatt/hr
const costElectricity = 6;
const cost = power * 24 * costElectricity;
console.log("Cost of pumping water is", Math.round(cost), "rs");
const ansss=[ans,distance1,cost]
return ansss;
}
function min_distance(distances, visited) {
let min_dist = Number.MAX_SAFE_INTEGER;
let min_vertex = null;

for (let v = 0; v < distances.length; v++) {
  if (distances[v][0] < min_dist && !visited[v]) {
    min_dist = distances[v][0];
    min_vertex = v;
  }
}

return min_vertex;
}

function dijkstra(graph, start, end) {
const num_vertices = graph.length;
const distances = Array(num_vertices).fill([Number.MAX_SAFE_INTEGER, 0]);
const previous = Array(num_vertices).fill(null);
const visited = Array(num_vertices).fill(false);

distances[start] = [0, Number.MAX_SAFE_INTEGER];

for (let _ = 0; _ < num_vertices - 1; _++) {
  const u = min_distance(distances, visited);
  visited[u] = true;

  for (let v = 0; v < num_vertices; v++) {
    const [weight, capacity] = graph[u][v];
    if (weight > 0 && !visited[v] && distances[v][0] > distances[u][0] + weight) {
      distances[v] = [distances[u][0] + weight, Math.min(distances[u][1], capacity)];
      previous[v] = u;
    }
  }
}

// Construct the shortest path and capacity
const path = [];
let current_vertex = end;
let capacity = Number.MAX_SAFE_INTEGER;
while (current_vertex !== null) {
  path.unshift(current_vertex);
  if (previous[current_vertex] !== null) {
    capacity = Math.min(capacity, graph[previous[current_vertex]][current_vertex][1]);
  }
  current_vertex = previous[current_vertex];
}

return [distances[end][0], capacity, path];
}

function convertToWeightedAdjacencyMatrix(edges, num_vertices) {
const graph = Array(num_vertices).fill(null).map(() => Array(num_vertices).fill([0, 0]));
for (const [u, v, weight, capacity] of edges) {
  graph[u][v] = [weight, capacity];
  graph[v][u] = [weight, capacity];
}
return graph;
}

    for (const nodeId in node_dict) {
      const option = document.createElement('option');
      option.value = nodeId;
      option.text = node_dict[nodeId][0];
      destinationDropdown.appendChild(option);
    }

    map.on('click', (event) => {

      const features = map.queryRenderedFeatures(event.point, {
        layers: ['districts-tn'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];  
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(map);
    });
    function displayOnMap(coordinates) {
      const startCoordinates = coordinates[0];
      const endCoordinates = coordinates[coordinates.length - 1];
    
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coordinates[1],
        zoom: 12
      });
    
      const geojson = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'coordinates': coordinates,
              'type': 'LineString'
            }
          }
        ]
      };
    
      map.on('load', () => {
        map.addSource('line', {
          type: 'geojson',
          data: geojson
        });
    
        map.addLayer({
          type: 'line',
          source: 'line',
          id: 'line-background',
          paint: {
            'line-color': 'blue',
            'line-width': 6,
            'line-opacity': 0.4
          }
        });
    
        map.addLayer({
          type: 'line',
          source: 'line',
          id: 'line-dashed',
          paint: {
            'line-color': 'red',
            'line-width': 6,
            'line-dasharray': [0, 4, 3]
          }
        });
    
        const dashArraySequence = [
          [0, 4, 3],
          [0.5, 4, 2.5],
          [1, 4, 2],
          [1.5, 4, 1.5],
          [2, 4, 1],
          [2.5, 4, 0.5],
          [3, 4, 0],
          [0, 0.5, 3, 3.5],
          [0, 1, 3, 3],
          [0, 1.5, 3, 2.5],
          [0, 2, 3, 2],
          [0, 2.5, 3, 1.5],
          [0, 3, 3, 1],
          [0, 3.5, 3, 0.5]
        ];
    
        let step = 0;
    
        function animateDashArray(timestamp) {
          const newStep = parseInt((timestamp / 50) % dashArraySequence.length);
    
          if (newStep !== step) {
            map.setPaintProperty('line-dashed', 'line-dasharray', dashArraySequence[step]);
            step = newStep;
          }
    
          requestAnimationFrame(animateDashArray);
        }
    
        animateDashArray(0);
    
        // Add markers for intermediate nodes
        coordinates.slice(2, -1).forEach((coord, index) => {
          const marker = new mapboxgl.Marker({ color: 'blue' })
            .setLngLat(coord)
            .addTo(map);
    
          const location = districttss.find(districttss => districttss[0] === coord[0] && districttss[1] === coord[1]);
          const locationName = location ? location[2] : 'Unknown Location';
    
          const popup = new mapboxgl.Popup({ offset: [1, -14] })
            .setLngLat(coord)
            .setHTML(`<h3>${locationName}</h3>`)
            .addTo(map);
    
          marker.setPopup(popup);
        });
    
        // Add marker for the start vertex
        const startMarker = new mapboxgl.Marker({ color: '#00ff00' })
          .setLngLat(startCoordinates)
          .addTo(map);
    
        // Add marker for the destination vertex
        const endMarker = new mapboxgl.Marker({ color: '#ff0000' })
          .setLngLat(endCoordinates)
          .addTo(map);
      });
    }
    
    
    
    // const outputContainer = document.getElementById("output");
    const outputContainer = document.getElementById("outputContainer");
    outputContainer.style.fontWeight = "normal";

    findRouteButton.addEventListener('click', () => {
      const selectedNodeId = destinationDropdown.value;
      const selectedNode = node_dict[selectedNodeId];
      const destinationCoordinates = [selectedNode[2], selectedNode[1]];
      console.log('Selected Destination:', selectedNode[0]);
      console.log('Destination Coordinates:', destinationCoordinates);``
    
      console.log('the number is',districts[selectedNode[0]][0]);
      
      let result = return_ans(districts[selectedNode[0]][0]);
      let x = result[1];
      console.log('the value is', x);
      displayOnMap(result[0]);
      console.log(x);
      const resultt=result[0];
      const locationNames = resultt.map(coord => {
        const [longitude, latitude] = coord;
        const location = districttss.find(dist => dist[0] === longitude && dist[1] === latitude);
        return location ? location[2] : 'Unknown Location';
      });
      
      const locationString = locationNames.join(' - ');
      
      console.log(locationString);

// Construct string with hyphens
      const outputHTML = `<p>The value of the distance is: ${x} km <br>
                              Cost of pumping water is : ${result[2]} rs<br>
                             The path for optimal distribution of water is ${locationString.substring(23)}</p>
                              `;
      outputContainer.innerHTML = outputHTML;
    });
    
    

    
