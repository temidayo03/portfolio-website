const express = require('express');
const winston = require('winston');
const path = require('path');
const app = express();

// winston.level = 'debug';
// myLogger.log('debug', 'default logger being used');
// new (winston.transports.File)({ filename: 'somefile.log', level: 'warn' })

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => res.status(200).sendFile(path.join(__dirname, '../build/index.html')));

app.listen(app.get('port'), () => {
  winston.log({ message: `app running on port ${app.get('port')}` });
});
