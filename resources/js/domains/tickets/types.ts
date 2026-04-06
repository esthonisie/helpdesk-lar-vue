export interface Ticket {
  id: number;
  user_id: number;
  admin_id: number;
  category_id: number;
  title: string;
  body: string;
  status: string;
  priority: string;
  created_at: string;
  updated_at: string;
}