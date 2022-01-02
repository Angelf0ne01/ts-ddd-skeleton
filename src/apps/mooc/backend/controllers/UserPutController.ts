import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { UserCreator } from '../../../../Contexts/Mooc/Users/application/UserCreator';
import { Controller } from './Controller';

export class UserPutController implements Controller {
  constructor(private userCreator: UserCreator) {}

  async run(req: Request, res: Response) {
    const { id, first_name, last_name } = req.body;

    await this.userCreator.run({ id, first_name, last_name });

    res.status(httpStatus.CREATED).send();
  }
}
