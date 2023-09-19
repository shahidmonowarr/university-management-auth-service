import { RedisClient } from '../../../shared/redis';
import { EVENT_ACADEMIC_SEMESTER_CREATED } from './academicSemester.constant';
import { IAcademicSemesterCreateEvent } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';

const InitAcademicSemesterEvents = () => {
  RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_CREATED, async (e: string) => {
    const data: IAcademicSemesterCreateEvent = JSON.parse(e);
    await AcademicSemesterService.createSemesterFromEvent(data);
  });
};

export default InitAcademicSemesterEvents;
