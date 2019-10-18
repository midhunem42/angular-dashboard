export class LoginModel {
  token: string;
  role: string;
  userId: string;
  refreshToken: string;
  loginTime: number;
  expiresIn: number;
  setField(user) {
    this.token = user.token;
    this.userId = user.userId;
    this.role = user.role;
    this.refreshToken = user.refreshToken;
    this.loginTime = user.loginTime;
    this.expiresIn = user.expiresIn;
  }
}
