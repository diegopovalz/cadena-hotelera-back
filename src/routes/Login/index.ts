import { Router } from 'express';
import LoginController from '../../controller/LoginController';

const router = Router();

// GET routes
router.get('/', LoginController.verifyLoginInfo);

const searchRoutes = { uri: 'login', uriRouter: router };

export default searchRoutes;
