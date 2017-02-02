# knowledge-base

Simple Express + Node.js + Angular + MongoDB project.

# Steps
### 1. Install express & express-generator
-------
###### If you already installed it, no need to install again.
`npm install -g express` -> install express

`npm install -g express-generator` -> install express generator

-------
### 2. Generate the project
Enter the folder:`express <project name>`
In our case: `express knowledge`

-------

### 3. Add mongodb denpency to package.json file
![屏幕快照 2017-02-02 13.31.39](https://cloud.githubusercontent.com/assets/12025010/22573544/16ab15b0-e96f-11e6-906a-bc505f3ba3d4.png)


-------
### 4. Run npm command:
`cd knowledge` then

Run `npm install` install all the dependencies.


-------
### 5. Open the project folder, then add MongoDB dependency to app.js:
`var mongo = require('mongodb');`

`var mongoose = require('mongoose');`

 `var db = mongoose.connection;`
 
 `mongoose.connect(your local db);` 
 
![屏幕快照 2017-02-02 13.45.36](https://cloud.githubusercontent.com/assets/12025010/22573561/32f7a0e4-e96f-11e6-955c-bd9be3f42cc3.png)

>  Use _mongoose.connect_ to connect to our local database(knowledge).

-------

### 6. Configure our route in _app.js_:
> (Assume our knowledge db has two collections, one call **articles**, the other is **categories**, we will create that later)

Our route folder should looks like:
![屏幕快照 2017-02-02 14.29.15](https://cloud.githubusercontent.com/assets/12025010/22573572/418f8522-e96f-11e6-80f7-4f8873fc09fc.png)

Then we need to configure the entity in our app.js. Be careful with the path, make sure that is correct.
`var index = require('./routes/index');`
`var articles = require('./routes/api/articles');`
`var categories = require('./routes/api/categories');`

![屏幕快照 2017-02-02 13.45.36](https://cloud.githubusercontent.com/assets/12025010/22573561/32f7a0e4-e96f-11e6-955c-bd9be3f42cc3.png)

-------
Then create the default endpoint api address( in app.js ):

![屏幕快照 2017-02-02 17.15.13](media/14860564398265/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-02-02%2017.15.13.png)

-------


### 7. Create our database, add categories and articles
(1). Open a terminal: `mongod`
(2). Open another terminal: `mongo`
(3). See how many collections are there: `show dbs`
(4). Create our db: `use categories`
(5). Insert document: `db.categories.insert()`
(6). Update document: `db.categories.update({"name": "Technology"}, {$set: {"description": "..."}})` 
(7). Remove document: `db.categories.remove({"_id": Object(...)})`


-------
###  8. 


