import { Router } from 'express';
import HotelController from '../../controller/HotelController';

const router = Router();

// GET routes
router.get('/:id', HotelController.getHotelById);

// POST routes
router.post('/', HotelController.getHotels);

const searchRoutes = { uri: 'hotels', uriRouter: router };

export default searchRoutes;
