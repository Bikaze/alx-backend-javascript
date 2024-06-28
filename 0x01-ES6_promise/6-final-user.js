import signUpUser from './4-user-promise.js'; //eslint-disable-line
import uploadPhoto from './5-photo-reject.js'; //eslint-disable-line

async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return results.map((result) => ({
    status: result.status,
    value: result.reason || result.value,
  }));
}

export default handleProfileSignup;
