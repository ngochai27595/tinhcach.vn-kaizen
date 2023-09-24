export const getUserNameEmail = (email: string) => {
  try {
    return email.split("@")[0];
  } catch (error) {
    return email;
  }
};
