type AuthenticationParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
};

type AppParamList = {
  SplashScreen: undefined;
  Authentication: undefined;
  App: undefined;
};

type Transaction = {
  id: number;
  title: string;
  amount: string;
  type: number;
};

type MainParamList = {
  Home: undefined;
  Account: undefined;
  AddCard: undefined;
  QRCode: undefined;
  Transaction: undefined;
  'Transaction History': undefined;
  Payment: undefined;
  Exchange: undefined;
};
