export const checkValidData = (email,password, fullnm,type)=>{
    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
    const isPwdValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    const isFullNmValid = /^[a-zA-Z\u00C0-\u00ff]{2,}(?: [a-zA-Z\u00C0-\u00ff]+){2,20}$/gm.test(fullnm);
    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPwdValid) return "Password is not Valid";
    if(type ==='SignUp' && !isFullNmValid) return "Full Name is not Valid" ;
    return null;
}