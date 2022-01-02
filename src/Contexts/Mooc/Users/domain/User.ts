import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { UserFirstName } from './Users/UserFirstName';
import { UserId } from './Users/UserId';
import { UserLastName } from './Users/UserLastName';

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly first_name: UserFirstName;
  readonly last_name: UserLastName;

  constructor(id: UserId, first_name: UserFirstName, last_name: UserLastName) {
    super();
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
  }

  static fromPrimitives(params: { id: string; firstName: string; lastName: string }): User {
    return new User(new UserId(params.id), new UserFirstName(params.firstName), new UserLastName(params.lastName));
  }

  toPrimitives() {
    return {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name
    };
  }
}
