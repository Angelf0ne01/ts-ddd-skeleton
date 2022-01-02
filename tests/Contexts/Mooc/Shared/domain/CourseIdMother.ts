import { CourseId } from '../../../../../src/Contexts/Mooc/Courses/domain/Courses/CourseId';
import { UuidMother } from '../../../Shared/domain/UuidMother';

export class CourseIdMother {
  static create(value: string): CourseId {
    return new CourseId(value);
  }

  static random(): CourseId {
    return new CourseId(UuidMother.random());
  }
}
