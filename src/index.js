const express       =   require('express');
const app           =   express();
const routes        =   require('./routes/book_routes');
const { mongoose }  =   require('./database');

//  Settings
app.set('port', 8081);
app.use(express.json());
app.use('/api', routes);

//Starting server
app.listen(app.get('port'), () => {
    console.log('server listening on port ' + app.get('port'));
});