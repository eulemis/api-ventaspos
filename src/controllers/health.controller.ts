import { Request, Response } from 'express';

export const getHealth = (req: Request, res: Response) => {
  res.json({ status: 'OK' });
};

export const postData = (req: Request, res: Response) => {
  const data = req.body;
  res.json({ received: data });
};