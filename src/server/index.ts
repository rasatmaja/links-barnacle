/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 * 
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import express, {Application} from 'express';
import Routers from './router'

class Server {
    private server: Application = express();
    private routers: Routers = new Routers();;

    constructor(){
        // setting up routing
        this.server.use('/api', this.routers.getRoutes());

        //setting up server host and port
        this.server.listen(5000, () => console.log('Server running ...'));
    }
}

export default Server;