/***********  SIGNUP  ***********/

export interface ISignupRequest {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone_number: string;
  }
  
  export interface IUserRespone {
    message: string;
  }
  
  /***********  LOGIN  ***********/
  
  export interface ILoginRequest {
      emailAddress: string;
      password: string;
  }
  
  export interface IResetPassword {
    user_id: string;
    token: string;
    password: string;
  }
  