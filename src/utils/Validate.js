export const validate = (email, password,name) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(
      password,
    );
    const isNameValid =  /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name) ;
 


    if(!isNameValid) return "Enter a valid Name" ;
    if(!isEmailValid) return "Enter a valid Email ID" ;
    if(!isPasswordValid) return "password not valid" ;


    return null ;
};
