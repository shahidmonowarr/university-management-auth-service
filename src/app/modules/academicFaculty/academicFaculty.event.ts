import { RedisClient } from '../../../shared/redis';
import { EVENT_ACADEMIC_FACULTY_CREATED } from './academicFaculty.constants';
import { AcademicFacultyCreatedEvent } from './academicFaculty.interfaces';
import { AcademicFacultyService } from './academicFaculty.service';

const initAcademicFacultyEvents = () => {
  RedisClient.subscribe(EVENT_ACADEMIC_FACULTY_CREATED, async (e: string) => {
    const data: AcademicFacultyCreatedEvent = JSON.parse(e);

    await AcademicFacultyService.insertIntoDBFromEvent(data);

    console.log('faculty event data', data);
  });
};

export default initAcademicFacultyEvents;
