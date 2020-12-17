/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 * 
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import express, { Router } from 'express'
import Links from '../links'

class Routers {
    private routers: Router = express.Router();
    private links: Links = new Links();

    constructor(){
        this.routers.get('/links', this.links.getLinks);
        this.routers.get('/link', this.links.getLink)
    }

    getRoutes(){
        return this.routers;
    }
}
export default Routers