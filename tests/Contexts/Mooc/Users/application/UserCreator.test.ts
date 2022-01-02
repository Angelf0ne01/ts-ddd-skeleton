import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock';
import { UserCreator } from '../../../../../src/Contexts/Mooc/Users/application/UserCreator';
import { CreateUserRequestMother } from './CreateUserRequestMother';
import { UserMother } from './../domain/UserMother';
let repository: UserRepositoryMock;
let creator: UserCreator;

beforeEach(() => {
  repository = new UserRepositoryMock();
  creator = new UserCreator(repository);
});

describe('UserCreator', () => {
  it('sholid create a valid user', async () => {
    const request = CreateUserRequestMother.random();
    const user = UserMother.fromRequest(request);
    await creator.run(request);
    repository.assertLastSavedUserIs(user);
  });
});
