import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';
import { UserFirstName } from '../domain/Users/UserFirstName';
import { UserId } from '../domain/Users/UserId';
import { UserLastName } from '../domain/Users/UserLastName';
import { UserCreatorRequest } from './UserCreatorRequest';

export class UserCreator {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run(request: UserCreatorRequest): Promise<void> {
    const user = new User(
      new UserId(request.id),
      new UserFirstName(request.first_name),
      new UserLastName(request.last_name)
    );
    return this.repository.save(user);
  }
}
