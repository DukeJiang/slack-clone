This project requires running the frontend and backend on two ports

To start the frontend:
cd into ./FrontEnd
then run:
    npm install
    npm run start
now we should have our frontend running on port 3000


This project uses a mixture of firebase, flask and sqlite for backend and database,
Used firebase for user authentication, messages, media file storage and channel management,
Used flask and sqlite for managing replies. The script for create the sqlite database can be found in db.py
To start the backend:
cd into ../BackEnd
then run:
    export FLASK_APP=app.py
    flask run
now we should have our backend server running (if you are on windows change export to set)

To test the application, navigate to localhost:3000 in the browser