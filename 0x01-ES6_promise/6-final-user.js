import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((res) => {
    const array = [];
    res.forEach((elem) => {
      if (elem.status === 'fulfilled') {
        array.push({
          status: elem.status,
          value: elem.value,
        });
      } else {
        array.push({
          status: elem.status,
          value: `${elem.reason}`,
        });
      }
    });
    return array;
  });
}
