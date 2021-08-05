import { User } from "./app/auth/models/user";

export interface State {
    user: User | undefined,
    [key: string]: any;
  }
  