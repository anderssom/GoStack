import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

//app.get('/',(request, response) =>{
 //   return response.json({ message:'hello É onde '}); 
//});
app.listen(4444,()=> {
    console.log(' server started or port 4444!');

});