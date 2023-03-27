type AuthenticationParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
};

type AppParamList = {
  Authentication: undefined;
  App: undefined;
};

type Transaction = {
  id: number;
  title: string;
  amount: string;
  type: number;
};
