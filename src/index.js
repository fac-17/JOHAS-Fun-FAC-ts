const app = require ('./app');

app.listen(app.get('port'), () => {
  console.log('App up and running on port', app.get('port'));
});
