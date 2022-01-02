import { serialize, deserialize } from 'bson';
import fs from 'fs';
import { Uuid } from '../../../../Shared/domain/value-object/Uuid';
import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';
import { UserId } from '../../domain/Users/UserId';

export class FileUserRepository implements UserRepository {
  private FILE_PATH = '';

  async save(user: User): Promise<void> {
    fs.promises.writeFile(this.filePath(user.id), serialize(user));
  }

  async search(userId: UserId): Promise<User> {
    const courseData = await fs.promises.readFile(this.filePath(userId));
    const { id, firstName, lastName } = deserialize(courseData);
    return new User(id, firstName, lastName);
  }

  private filePath(id: Uuid): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
