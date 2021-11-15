
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', function (req, res, next) {
    res.status(200).send('Det virker!!');
});

var emails = "";
$(".txt").find("a.hdrlnk").map(function(i, el) { return el })
.each(function(i, el) { 
 $.get(el.href, function(body) { 
 $.get( $(body).find("#replylink")[0].href, function(linkbody) {
 var email = $(linkbody).find('a[href^="mailto:"]')[0].innerText + ',';
 emails += email;
 })
 })
})
setTimeout(function() { 
 console.log('emails: ' + emails);
}, 5000)

var
    craigslist = require('node-craigslist'),
    client = new craigslist.Client({
      city : 'seattle'
    });
  
  client
    .search('xbox one')
    .then((listings) => {
      // play with listings here...
      listings.forEach((listing) => console.log(listing));
    })
    .catch((err) => {
      console.error(err);
    });

    const express = require('express')
    const app = express()
    const bodyParser=require('body-parser')
    app.get('/',async (req, res) => {
    await res.sendFile(__dirname = '/index.html')
    })
    
     app.post('/craiglist',bodyParser.json(),async (req, res) => {
     var  craigslist = require('node-craigslist'),
      client = new craigslist.Client({
        city : 'seattle'
      });
    
    const listing=await client.search(req.body.search)
    await res.send(listing)
    })
    // Port
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Serveren lytter på http://localhost:${PORT}`);
});
    