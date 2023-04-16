migrate((db) => {
  const collection = new Collection({
    "id": "nyz2a81d92jrvfz",
    "created": "2023-04-15 11:47:48.627Z",
    "updated": "2023-04-15 11:47:48.627Z",
    "name": "dbnote",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vtrf4ohn",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "s3mg51kv",
        "name": "note",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nyz2a81d92jrvfz");

  return dao.deleteCollection(collection);
})
