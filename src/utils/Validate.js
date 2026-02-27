export const validate = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(
      password,
    );


    if(!isEmailValid) return "Enter a valid Email ID" ;
    if(!isPasswordValid) return "password not valid" ;


    return null ;
};
