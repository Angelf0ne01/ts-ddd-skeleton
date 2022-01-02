import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../../src/Contexts/Mooc/Courses/domain/Courses/CourseDuration';
import { CourseId } from '../../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';
import { CourseName } from '../../../../../../src/Contexts/Mooc/Courses/domain/Courses/CourseName';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infraestructure/persistence/FileCourseRepository';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const expectedCourse = new Course(
      new CourseId('07e9f9b0-f8b1-11e9-9f5b-2a2ae2dbcce4'),
      new CourseName('some-name'),
      new CourseDuration('some-duration')
    );

    const repository = new FileCourseRepository();
    await repository.save(expectedCourse);

    const course = await repository.search(expectedCourse.id);
    expect(course).toEqual(expectedCourse);
  });
});
