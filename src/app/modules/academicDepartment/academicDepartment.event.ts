import { RedisClient } from '../../../shared/redis';
import { EVENT_ACADEMIC_DEPARTMENT_CREATED } from './academicDepartment.constants';
import { AcademicDepartmentCreatedEvent } from './academicDepartment.interfaces';
import { AcademicDepartmentService } from './academicDepartment.service';

const initAcademicDepartmentEvents = () => {
  RedisClient.subscribe(
    EVENT_ACADEMIC_DEPARTMENT_CREATED,
    async (e: string) => {
      const data: AcademicDepartmentCreatedEvent = JSON.parse(e);

      await AcademicDepartmentService.insertIntoDBFromEvent(data);

      console.log('event data', data);
    }
  );
};

export default initAcademicDepartmentEvents;
