import {Router , Request , Response} from 'express'


var routes=Router()

routes.get("/", (req: Request, res: Response) =>{   
    res.send("Backend")
})


export default routes