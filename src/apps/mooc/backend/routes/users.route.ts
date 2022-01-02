import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { validateReqSchema } from '.';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('first_name').exists().isString(),
    body('last_name').exists().isString()
  ];
  const userPutController = container.get('Apps.mooc.controllers.UserPutController');
  router.put('/users', reqSchema, validateReqSchema, (req: Request, res: Response) =>
  userPutController.run(req, res)
  );
};
