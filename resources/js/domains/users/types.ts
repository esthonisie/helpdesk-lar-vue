export interface User {
  id: number;
  first_name: string;
  last_name: string;
  name?: string;
  email: string;
  phone_number: string;
  is_admin?: boolean;
  password?: string;
}