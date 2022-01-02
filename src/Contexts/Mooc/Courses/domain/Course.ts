import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { CourseDuration } from './Courses/CourseDuration';
import { CourseId } from '../../Shared/domain/Courses/CourseId';
import { CourseName } from './Courses/CourseName';
export class Course extends AggregateRoot {
  readonly id: CourseId;
  readonly name: CourseName;
  readonly duration: CourseDuration;

  constructor(id: CourseId, name: CourseName, duration: CourseDuration) {
    super();
    this.id = id;
    this.name = name;
    this.duration = duration;
  }

  static fromPrimitives({ id, name, duration }: { id: string; name: string; duration: string }): Course {
    return new Course(new CourseId(id), new CourseName(name), new CourseDuration(duration));
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value
    };
  }
}
