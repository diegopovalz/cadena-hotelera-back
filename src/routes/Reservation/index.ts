import { Router } from 'express';
import ReservationController from 'controller/ReservationController';

const router = Router();

// GET routes
router.get('/:id', ReservationController.getReservation);

// POST routes
router.post('/', ReservationController.getReservations);
router.post('/create', ReservationController.createReservation);

const searchRoutes = { uri: 'reservations', uriRouter: router };

export default searchRoutes;
