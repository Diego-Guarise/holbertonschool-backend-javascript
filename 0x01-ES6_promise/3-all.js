import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const first = createUser();
  const last = createUser();
  const photo = uploadPhoto();
  
  console.log(Promise.resolve.first);
}