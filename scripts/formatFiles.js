const fs = require('fs');
const lineReader = require('line-reader');

let arr = [];

lineReader.eachLine('../yelp_dataset/yelp_academic_dataset_business.json', function (line, last) {
  let hit = JSON.parse(line); 
  hit.objectID = hit.business_id;
  hit._geoloc = {
    "lat": hit.latitude,
    "lng": hit.longitude
  }
  delete hit.latitude;
  delete hit.longitude;
  arr.push(hit);


  if (last) {
    fs.writeFile('restaurants.json', JSON.stringify(arr, null, 2), 'utf-8', err => {
    // fs.writeFile('restaurants.json', arr, 'utf-8', err => {
      if (err) throw err;
      console.log('Your index has been exported!');
    });
    return false
  }
})