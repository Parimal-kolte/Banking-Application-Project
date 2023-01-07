import * as Yup from 'yup'
export const signUPSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("please enter your name"),
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("enter password").matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "password must match"),
    date:Yup.string().required("enter your date of birth"),
    address:Yup.string().min(3).required("enter your address"),
    contact:Yup.string().required("enter your contact number").matches(/^[789][0-9]{9}$/,"indian contact number must start with 7,8,9 and not less or greater than 10 digits"),
    deposit:Yup.number().min(10000).required("value not less than 10000")
    
});
