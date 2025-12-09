📘 README – How to View MongoDB Data in Docker (Ubuntu / EC2)

This guide explains how to open the MongoDB shell inside a Docker container and inspect your database, collections, and documents.

✅ 1. Check MongoDB Container Name

List running containers:

docker ps


Look for something like:

ems-mongo   or   mongo


Use that name in the next steps.

✅ 2. Open Mongo Shell (mongosh)

If your container name is ems-mongo:

sudo docker exec -it ems-mongo mongosh


If your container name is mongo:

sudo docker exec -it mongo mongosh


This opens the MongoDB interactive shell.

✅ 3. Show All Databases

Inside mongosh:

show dbs

✅ 4. Select Your Database

Example: your backend uses database employees

use employees

✅ 5. Show All Collections (Tables)
show collections

✅ 6. View All Documents in a Collection

Example: print all employee records:

db.employees.find().pretty()

📌 Common Useful Commands
Count documents:
db.employees.countDocuments()

Find one record:
db.employees.findOne()

Delete all documents:
db.employees.deleteMany({})

🔎 Exit Mongo Shell
exit

📝 Notes

These commands work only inside the MongoDB Docker container.

Your database name may be different depending on your backend .env or MONGO_URI.
