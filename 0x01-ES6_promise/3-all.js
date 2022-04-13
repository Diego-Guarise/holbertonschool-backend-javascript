import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const first = await createUser();
  const last = await createUser();
  const photo = await uploadPhoto();
  //  console.log(first.firstName);
  //  console.log(last);
  //  console.log(photo);
  return new Promise(() => {
    if (first.firstName && last.lastName && photo.body) {
      console.log(photo.body, first.firstName, last.lastName);
    } else { console.log('Signup system offline'); }
  });
}
