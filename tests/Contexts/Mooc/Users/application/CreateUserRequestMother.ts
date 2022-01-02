import { UserCreatorRequest } from '../../../../../src/Contexts/Mooc/Users/application/UserCreatorRequest';
import { UserFirstName } from '../../../../../src/Contexts/Mooc/Users/domain/Users/UserFirstName';
import { UserId } from '../../../../../src/Contexts/Mooc/Users/domain/Users/UserId';
import { UserLastName } from '../../../../../src/Contexts/Mooc/Users/domain/Users/UserLastName';
import { UserIdMother } from './../Shared/domain/UserIdMother';
import { UserFirstNameMother } from './../domain/UserFirstNameMother';
import { UserLastNameMother } from './../domain/UserLastNameMother';


export class CreateUserRequestMother {
  static create(id: UserId, firstName: UserFirstName, lastName: UserLastName): UserCreatorRequest {
    return {
      id: id.value,
      first_name: firstName.value,
      last_name: lastName.value
    };
  }

  static random(): UserCreatorRequest {
    return this.create(UserIdMother.random(), UserFirstNameMother.random(), UserLastNameMother.random());
  }
}
