import { uploadPhoto, createUser } from './utils.js'; //eslint-disable-line

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
