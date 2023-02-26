const { MongoClient } = require('mongodb');
const process = require('process');
const dbData = require('../DB.json');

// Replace the following variables with your own settings
const uri = process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/ucademy';
const collectionName = 'users';

async function importFile() {
  // Connect to the MongoDB server
  const client = await MongoClient.connect(uri, { useNewUrlParser: true });
  const db = client.db();

  // Get a reference to the collection
  const collection = db.collection(collectionName);

  for (let index = 0; index < dbData.length; index++) {
    const user = dbData[index];
    await collection.insertOne(user);
  }
}

importFile()
  .then(() => {
    console.log('Exported');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Import failed:', error);
    process.exit(1);
  });
