import initAcademicDepartmentEvents from '../modules/academicDepartment/academicDepartment.event';
import initAcademicFacultyEvents from '../modules/academicFaculty/academicFaculty.event';
import InitAcademicSemesterEvents from '../modules/academicSemester/academicSemester.event';

const subscribeEvents = () => {
  InitAcademicSemesterEvents();
  initAcademicFacultyEvents();
  initAcademicDepartmentEvents();
};

export default subscribeEvents;
