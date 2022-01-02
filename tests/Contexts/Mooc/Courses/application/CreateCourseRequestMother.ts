import { CourseCreatorRequest } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreatorRequest';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/Courses/CourseDuration';
import { CourseId } from '../../../../../src/Contexts/Mooc/Courses/domain/Courses/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/Courses/CourseName';
import { CourseIdMother } from '../../Shared/domain/CourseIdMother';
import { CourseDurationMother } from '../domain/CourseDurationMother';
import { CourseNameMother } from '../domain/CourseNameMother';

export class CreateCourseRequestMother {
  static create(id: CourseId, name: CourseName, duration: CourseDuration): CourseCreatorRequest {
    return {
      id: id.value,
      name: name.value,
      duration: duration.value
    };
  }

  static random(): CourseCreatorRequest {
    return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
  }

  static invalidRequest(): CourseCreatorRequest {
    return this.create(CourseIdMother.random(), CourseNameMother.invalidName(), CourseDurationMother.random());
  }
}
