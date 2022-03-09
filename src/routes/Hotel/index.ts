import { Router } from 'express';
import HotelController from '../../controller/HotelController';

const router = Router();

// GET routes
router.get('/', HotelController.getHotels);
router.get('/:id', HotelController.getHotelById);

const searchRoutes = { uri: 'hotels', uriRouter: router };

export default searchRoutes;
