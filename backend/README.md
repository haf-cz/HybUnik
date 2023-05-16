# backend

once the web reaches the last page it should send request to REST based backend which will serve as trigger for HW and/or other purposes (e.g. notify operator)

For simplicity backend will be complete done in node.js HW part removed until needed.

## Dependencies
 * play-sound
 * express

## Endpoints
* test
* ok

## after clone
run `npm install` to install missing dependencies.

## how to run
navigate to backend folder and run either `npm start` or `node ./src/server.js`.

## notes
on OK endpoint called a sound wil be played. For that you have to setup default player in windows...