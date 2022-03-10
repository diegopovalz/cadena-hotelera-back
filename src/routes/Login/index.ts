import { Router } from 'express';
import LoginController from '../../controller/LoginController';

const router = Router();

// POST routes
router.post('/', LoginController.verifyLoginInfo);

const searchRoutes = { uri: 'login', uriRouter: router };

export default searchRoutes;
