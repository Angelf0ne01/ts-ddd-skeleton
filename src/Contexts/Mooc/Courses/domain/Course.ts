import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { CourseDuration } from './Courses/CourseDuration';
import { CourseId } from './Courses/CourseId';
import { CourseName } from './Courses/CourseName';
export class Course extends AggregateRoot {
  readonly id: CourseId;
  readonly name: CourseName;
  readonly duration: CourseDuration;

  constructor({ id, name, duration }: { id: CourseId; name: CourseName; duration: CourseDuration }) {
    super();
    this.id = id;
    this.name = name;
    this.duration = duration;
  }

  static fromPrimitives({ id, name, duration }: { id: string; name: string; duration: string }): Course {
    return new Course({
      id: new CourseId(id),
      name: new CourseName(name),
      duration: new CourseDuration(duration)
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value
    };
  }
}
