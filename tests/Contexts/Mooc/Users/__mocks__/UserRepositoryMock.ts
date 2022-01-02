import { User } from '../../../../../src/Contexts/Mooc/Users/domain/User';
import { UserRepository } from '../../../../../src/Contexts/Mooc/Users/domain/UserRepository';

export class UserRepositoryMock implements UserRepository {
  private mockSave = jest.fn();

  async save(user: User): Promise<void> {
    this.mockSave(user);
  }

  assertLastSavedUserIs(expected: User): void {
    const mock = this.mockSave.mock;
    const lastSavedCourse = mock.calls[mock.calls.length - 1][0] as User;
    expect(lastSavedCourse).toBeInstanceOf(User);
    expect(lastSavedCourse.id).toEqual(expected.id);
  }
}
