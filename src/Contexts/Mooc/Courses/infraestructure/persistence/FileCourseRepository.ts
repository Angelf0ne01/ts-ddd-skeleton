import { serialize, deserialize } from 'bson';
import fs from 'fs';
import { Uuid } from '../../../../Shared/domain/value-object/Uuid';
import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';

export class FileCourseRepository implements CourseRepository {
  private FILE_PATH = '';

  async save(course: Course): Promise<void> {
    fs.promises.writeFile(this.filePath(course.id), serialize(course));
  }

  async search(courseId: Uuid): Promise<Course> {
    const courseData = await fs.promises.readFile(this.filePath(courseId));
    const { id, name, duration } = deserialize(courseData);
    return new Course(id, name, duration);
  }

  private filePath(id: Uuid): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
