export type TApiError = {
  status: number;
  type?: string;
};

export type TError<T> = {
  data?: T;
  status?: number;
};
