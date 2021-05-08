const nonActivatedUser1 = {
  email: 'hamoksha@live.com',
  password: '12345678',
  confirmationPath: '/auth/confirmation/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDkyZWE2ODMyNmZhNTEwMTExNWRmYWQiLCJpYXQiOjE2MjAyNDM0NjB9.P9rxADqZ2aU8nD1BIOnoIMK-0LAweOaFBGFpGfI3Ovw',
  resetPath: '/auth/forgot-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDkyZWE2ODMyNmZhNTEwMTExNWRmYWQiLCJpYXQiOjE2MjAyNDM0NjB9.aJUvFCG4pJzbAIJ5WEOjvPlSaq3A_gEua7KSbYhp15U',
};
const nonActivatedUser2 = {
  email: 'hamoksha@hotmail.com',
  password: '12345678',
  confirmationPath: '/auth/confirmation/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDkyZWE2ODMyNmZhNTEwMTExNWRmYWUiLCJpYXQiOjE2MjAyNDM0NjB9.KZiJ0nm2kCeZm06uhk0ADM2zXlmGCBwe5u-dOKNMHlQ',
  resetPath: '/auth/forgot-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDkyZWE2ODMyNmZhNTEwMTExNWRmYWUiLCJpYXQiOjE2MjAyNDM0NjB9.omilvd71oGncQ-13ABOU3Nr_Zl0pG2sr2T0nglMB73M',
};
const activatedUser1 = {
  email: 'activated@gmail.com',
  password: '12345678',
  confirmationPath: '/auth/confirmation/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDkyZWE2ODMyNmZhNTEwMTExNWRmYWYiLCJpYXQiOjE2MjAyNDM0NjB9._RicP5M8wDvNRSj62ahI7TrMK7EFPo5ok_5D9bjqJwE',
  resetPath: '/auth/forgot-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDkyZWE2ODMyNmZhNTEwMTExNWRmYWYiLCJpYXQiOjE2MjAyNDM0NjB9.bDBpwV5dqJdXtCRIgGIhpw6rKm0n1FhsfJKGgKhDJh4',

};
const activatedUser2 = {
  email: 'activated@hotmail.com',
  password: '12345678',
  confirmationPath: '/auth/confirmation/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDkyZWE2ODMyNmZhNTEwMTExNWRmYjAiLCJpYXQiOjE2MjAyNDM0NjB9.7j6tjdmkXjmefCD0YGrYL9gDbAfvFORDVCslAK4BEB0',
  resetPath: '/auth/forgot-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDkyZWE2ODMyNmZhNTEwMTExNWRmYjAiLCJpYXQiOjE2MjAyNDM0NjB9.USqCNCfdsDLL3_OlMRarzIp1-n33koznuYFHugTAcsc',

};

const newUser = {
  email: 'hello@live.com',
  password: '12345678',
};

const newPassword = '1234Hamada';

module.exports = {
  newPassword,
  nonActivatedUser1,
  nonActivatedUser2,
  activatedUser1,
  activatedUser2,
  newUser,
};
