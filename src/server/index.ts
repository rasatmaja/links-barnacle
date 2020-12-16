/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 * 
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import express, {Application} from 'express';
import Routers from './router'
import Config from '../config'

class Server {
    private server: Application = express();
    private routers: Routers = new Routers();
    private config: Config = new Config(); 

    constructor(){
        // setting up routing
        this.server.use('/api', this.routers.getRoutes());

        //setting up server host and port
        let port = this.config.get("PORT")
        this.server.listen(port, () => console.log('Server running ...'));
    }
}

export default Server;