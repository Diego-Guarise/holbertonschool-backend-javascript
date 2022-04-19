export default function getStudentIdsSum(student) {
  return student.reduce((prev, next) => prev + next.id, 0);
}
