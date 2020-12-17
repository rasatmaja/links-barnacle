/**
 * Links Barnacle - A restfull API that serving a data for project links.rasio.dev.
 * 
 * @author Rasio Atmaja <contact@rasio.dev>
 */

import { Request, Response, NextFunction} from 'express';
class Links {
    
    async getLinks(req: Request, res: Response, next: NextFunction) {
        res.send('Links Barnacle ready to serve')
    }

    async getLink(req: Request, res: Response, next: NextFunction) {
        res.send('Links Barnacle ready to serve')
    }
    
}

export default Links