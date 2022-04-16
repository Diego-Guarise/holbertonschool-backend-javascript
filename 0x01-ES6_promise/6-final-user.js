import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([Promise.resolve(user), Promise.reject(photo)]).then((result) => {
    const array = [];
    result.forEach((item) => {
      if (item.status === 'fulfilled') {
        array.push(item.value);
      } else {
        array.push(item.reason);
      }
    }
    );
    return array;
  });
}