import { uploadPhoto, createUser } from "./utils.js";
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(result => {
    const body = result[0].body;
    const firstName = result[1].firstName;
    const lastName = result[1].lastName;
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(error => {
    console.log('Signup system offline');
  });
}