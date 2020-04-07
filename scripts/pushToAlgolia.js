const algoliasearch = require('algoliasearch');
const { APPID, ADMIN_API_KEY, SEARCH_API_KEY, indexName } = require('../config');
const restaurants = require('./restaurants.json');

const client = algoliasearch(APPID, ADMIN_API_KEY);
const index = client.initIndex(indexName);

const arrLength = restaurants.length;
let last = false;

const pushToIndex = (arr, i) => {
  const chunk = arr.slice(i, i + 10000) || arr.slice(i, arrLength);
  if (i+10000 > arrLength) last = true;


  index.saveObjects(chunk, (err, { taskID, objectID } = {}) => {
    index.waitTask(taskID, err => {
      if (!err) {
        if (!last) {
          console.log('finished on ' + i);
          pushToIndex(arr, i + 10000);
        } else {
          console.log('done on ' + arrLength);
        }
      }
    });
  });

  
}

pushToIndex(restaurants, 0);

