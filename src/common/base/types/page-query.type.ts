import { QueryForm } from './query-form.type';

export type PageRequestParams = {
  page: number;
  limit: number;
};

export type PageRequest<T = any> = {
  pageParams: PageRequestParams;
  queryForm: QueryForm<T>;
};
