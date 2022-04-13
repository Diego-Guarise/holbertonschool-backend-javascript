/* Return a Promise using this prototype function getResponseFromAPI() */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(
        Error('The fake API is not working currently'),
      );
    }
  });
}
