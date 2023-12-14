import { Router } from 'express';

const router = Router();

router.post('/', (req, res, next) => {
  res.send('recieved invite submission!');
});

export default router;