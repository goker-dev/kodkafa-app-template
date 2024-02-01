export type ErrorType = {
  status: number;
  name: string;
  message: string;
  timestamp?: string;
  method?: string;
  path?: string;
  stack?: string;
  expended?: boolean;
};
