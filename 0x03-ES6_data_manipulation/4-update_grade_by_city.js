/* eslint-disable no-param-reassign */
import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentscity = getStudentsByLocation(students, city);
  return studentscity.map((student) => {
    const score = newGrades.filter((element) => element.studentId === student.id)[0];
    if (!score) {
      student.grade = 'N/A';
    } else {
      student.grade = score.grade;
    }
    return student;
  });
}
