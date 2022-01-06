const app = require('./App');
require('./db');


app.listen(app.get('port'), () => {
  console.log('Iniciando servidor');
});