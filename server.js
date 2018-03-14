var express = require("express"),
    app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

//app.get('/slobj', function(req, res){
// var Client = require('ssh2').Client;
// var conn = new Client();
// conn.on('ready', function() {
//       console.log('Client :: ready');
//       conn.sftp(function(err, sftp) {
//             if (err) throw err;
//             sftp.readdir('/', function(err, list) {
//                   if (err) throw err;
//                   console.dir(list);
//                   result = list;
//                   conn.end();
//                   if(result.length>0){
//                         var fname = '';
//                         for(var i=0; i < result.length ; i++)
//                               fname = result[i].filename + ' , '+ fname;
//                         res.send('SFTP connected : ' + fname);
//                   }
//                   else
//                         res.send('SFTP not connected');
//             });
//       });
// }).connect({
//       host: 's3-api.us-geo.objectstorage.softlayer.net',
//       port: 22,  
//       username: 'auto-generated-apikey-0e4d3bb7-32ab-44fe-8604-27fc583da176',
//       password: 'S4SAfIoF_9Nj6UseIUV41ltbDly24mFtrEEyt19VvCWR' });
//});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
