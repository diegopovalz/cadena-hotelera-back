import { Router } from 'express';
import ReservationController from 'controller/ReservationController';

const router = Router();

// GET routes
router.get('/', ReservationController.getReservations);
router.get('/:id', ReservationController.getReservation);

// POST routes
router.post('/', ReservationController.createReservation);

const searchRoutes = { uri: 'reservations', uriRouter: router };

export default searchRoutes;
