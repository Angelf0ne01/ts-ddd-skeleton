import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseDuration } from '../domain/Courses/CourseDuration';
import { CourseId } from '../domain/Courses/CourseId';
import { CourseName } from '../domain/Courses/CourseName';
import { CourseCreatorRequest } from './CourseCreatorRequest';

export class CourseCreator {
  private repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(request: CourseCreatorRequest): Promise<void> {
    const course = new Course({
      id: new CourseId(request.id),
      name: new CourseName(request.name),
      duration: new CourseDuration(request.duration)
    });

    return this.repository.save(course);
  }
}
