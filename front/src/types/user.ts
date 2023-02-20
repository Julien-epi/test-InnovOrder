export interface User {
    id?: number;
    firstname: string | undefined;
    lastname?: string;
    email?: string;
    accessToken?: string;
  }
  
  export interface RegisterForm {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  

  export interface LoginForm {
    email: string;
    password: string;
  }

  export interface FormAccount {
    firstname: string,
    lastname: string,
  }