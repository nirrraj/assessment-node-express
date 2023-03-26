const app = require('./app');

// Added callback to log when app is running
app.listen(3000, function () {
    console.log('Server starting on port 3000');
});
