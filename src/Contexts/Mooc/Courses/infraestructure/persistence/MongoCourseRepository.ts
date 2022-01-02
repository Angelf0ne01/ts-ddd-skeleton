import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../../Shared/infrasestructure/persistence/mongo/MongoRepository';
import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';
import { CourseId } from '../../domain/Courses/CourseId';

export interface CourseDocument {
  _id: string;
  name: string;
  duration: string;
}

export class MongoCourseRepository extends MongoRepository<Course> implements CourseRepository {
  public save(course: Course): Promise<void> {
    return this.persist(course.id.value, course);
  }

  public async search(id: CourseId): Promise<Nullable<Course>> {
    const collection = await this.collection();
    //@ts-ignore
    const document = await collection.findOne<CourseDocument>({ _id: id.value });
    //@ts-ignore
    return document ? Course.fromPrimitives({ name: document.name, duration: document.duration, id: id.value }) : null;
  }

  protected collectionName(): string {
    return 'courses';
  }
}
