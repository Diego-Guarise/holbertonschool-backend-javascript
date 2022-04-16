import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((result) => {
    const array = [];
    result.forEach((item) => {
      if (item.status === 'rejected') {
        array.push({
          status: item.status,
          value: `${item.reason}`,
        });
      } else {
        array.push(item);
      }
    });
    return array;
  });
}
