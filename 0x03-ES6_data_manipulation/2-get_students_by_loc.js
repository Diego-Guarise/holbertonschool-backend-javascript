export default function getStudentsByLocation(student, string) {
  return student.filter((student) => student.location === string);
}
