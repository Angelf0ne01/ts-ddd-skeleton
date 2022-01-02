import { UserCreatorRequest } from '../../../../../src/Contexts/Mooc/Users/application/UserCreatorRequest';
import { User } from '../../../../../src/Contexts/Mooc/Users/domain/User';
import { UserFirstName } from '../../../../../src/Contexts/Mooc/Users/domain/Users/UserFirstName';
import { UserId } from '../../../../../src/Contexts/Mooc/Users/domain/Users/UserId';
import { UserLastName } from '../../../../../src/Contexts/Mooc/Users/domain/Users/UserLastName';
import { UserIdMother } from './../Shared/domain/UserIdMother';
import { UserFirstNameMother } from './UserFirstNameMother';
import { UserLastNameMother } from './UserLastNameMother';

export class UserMother {
  static create(id: UserId, firstName: UserFirstName, lastName: UserLastName): User {
    return new User(id, firstName, lastName);
  }
  static random(): User {
    return this.create(UserIdMother.random(), UserFirstNameMother.random(), UserLastNameMother.random());
  }

  static fromRequest(request: UserCreatorRequest): User {
    return this.create(
      UserIdMother.create(request.id),
      UserFirstNameMother.create(request.first_name),
      UserLastNameMother.create(request.last_name)
    );
  }
}
