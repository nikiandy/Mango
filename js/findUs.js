let map;

function loadMap() {
  // Create a map instance
  map = new Microsoft.Maps.Map('#map', {
    credentials: 'Am9b2jsx3PsPUSxEZy-0QUREN-XX6jUd_wQQITcTSe_HWn7yxBQkC8tvcEOtR6J0',
    center: new Microsoft.Maps.Location(53.3919, -6.3910), // Set initial center coordinates
    zoom: 12 // Set initial zoom level
  });
}

function addPushpin(lat, lon) {
  // Add a pushpin to the map with specified latitude and longitude
  const location = new Microsoft.Maps.Location(53.3919, -6.3838);
  const pushpin = new Microsoft.Maps.Pushpin(location, {
    title: 'Blanchardstown Shopping Centre',
    subTitle: 'Dublin, Ireland'
  });
  map.entities.push(pushpin);
}