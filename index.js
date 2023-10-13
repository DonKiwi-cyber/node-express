const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by DonKiwi-cyber');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/work-experience', (req, res, next) => {
  res.sendfile("assets/work-experience.json");
});

app.get('/skills-competences', (req, res, next) => {
  res.sendfile("assets/skills-&-competences.json");
});

app.get('/achievements-certificates', (req, res, next) => {
  res.sendfile("assets/achievements-&-certificates.json");
});

app.get('/interests', (req, res, next) => {
  res.sendfile("assets/interests.json");
});


app.get('/a1_proxy_size', (req, res, next) => {
  res.sendfile("assets/a1_proxy_size.json");
})

app.get('/a1_dev_hours', (req, res, next) => {
  res.sendfile("assets/a1_dev_hours.json");
})


app.listen(port,  () => 
	console.log('listening on port ' + port
));
