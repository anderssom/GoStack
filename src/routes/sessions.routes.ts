import {Router} from 'express';
import { Subject } from 'typeorm/persistence/Subject';

import AuthenticateUserService from '../sevices/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) =>{
    try{

        const { email, password } = request.body;

        const authenticateUser = new AuthenticateUserService();

        const {user, token} = await authenticateUser.execute({
            email,
            password,
        });

        const userWithoutPassword = {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.created_at,
            updated_at: user.updated_at,
            token: token,  
            
        };
            
    
            return response.json(userWithoutPassword);
        }catch(err){
            return response.status(400).json({ error: err.message });
            }
});

export default sessionsRouter;