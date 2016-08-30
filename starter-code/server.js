// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });





// Gallery View Route


// The Number Guessing Game


// Gallery

var num;

// Root Route
app.get('/', function (req, res){
  res.sendFile('views/index.html', { root : __dirname});
  console.log(__dirname)
});

// ROUTES
app.get('/pick-a-number', function (req, res){
  // console.log(req.query);
  var pickNumber = req.query.number;
  var response;
  if(pickNumber>num){
    response = "Too High";
  } else if (pickNumber<num){
    response = "Too Low";
  } else {
    response = "Nailed It";
  }
  res.send(response);
})

app.post('/pick-a-number', function pick(req, res){
  //console.log('req.body ' + req.body);
  var newNum = req.body.number;
  // num = {number: pickNumber};
  num = newNum;
  //res.status(200).send('Update Number is ' + num);
});



// app.get('/targetnumber', function (req, res){
//   var targ
// })

// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
