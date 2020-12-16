/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 * 
 * @author Rasio Atmaja <contact@rasio.dev>
 */
import express, {Application, Request, Response, NextFunction} from 'express';

class Server {
    private server: Application = express();

    constructor(){
        // setting up routing
        this.server.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.send('Links Barnacle ready to serve')
        })

        //setting up server host and port
        this.server.listen(5000, () => console.log('Server running ...'));
    }
}

export default Server;