import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/Courses/CourseName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CourseNameMother {
  static create(value: string): CourseName {
    return new CourseName(value);
  }

  static random(): CourseName {
    return this.create(WordMother.random());
  }

  static invalidName(): CourseName {
    return this.create(WordMother.random().repeat(30));
  }
}
