###Setup MongoLab

1. Create free account on mongoLab (https://mongolab.com/)

2. http://docs.mongolab.com/

3. http://docs.mongolab.com/data-api/

4. Created task-manager database

5. Created tasks and users collections

Structure of document for tasks collection:
{
    "user": {
        "name": "Alan"
    },
    "action": "TestResource",
    "done": false
}

Structure of document for users collection:
{
    "name": "Vardan",
    "location": "AM"
}

Add a few documents to these collections.



###Setup Environment

1. install node.js from https://nodejs.org/en/

2. install git from https://git-scm.com/
	See options in git-option.png

3. install bower from command line: 
	> npm install -g bower

4. install gulp from command line: 
	> npm install -g gulp

5. run project from project folder:
	> npm start
