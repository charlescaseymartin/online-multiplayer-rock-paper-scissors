import { Router } from 'express';

const router = Router();

router.post('/', (req, res, next) => {
  console.log({ body: req.body });
  res.send({ message: 'recieved invite submission!' });
});

export default router;