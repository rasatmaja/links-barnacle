/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 * 
 * @author Rasio Atmaja <contact@rasio.dev>
 */


import express, {Application, Request, Response, NextFunction} from 'express';

// init express
const app: Application = express();

// setup routes 
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Links Barnacle ready to serve')
})

// Setup server with port 5000
app.listen(5000, () => console.log('Server running ...'))