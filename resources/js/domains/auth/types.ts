export interface Credentials {
  email: string;
  password: string;
}

export interface Email {
  email: string;
}

export interface Reset {
  email: string;
  password: string;
  password_confirmation: string;
  token: string | string[];
}