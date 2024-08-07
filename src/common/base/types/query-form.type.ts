import { QueryBuilder } from 'typeorm';

export type Relations<T> = Record<string, QueryForm<T>>;
export type Filter<T> = Record<string, T>;

export type QueryForm<T = any> = {
  attributes?: string[];
  relations?: Relations<T>;
  filter?: Filter<T>;
  order?: string | string[];
  queryBuilder?: QueryBuilder<T>;
};

export class QueryFormFunctions {
  constructor(private queryForm: QueryForm) {
    if (!queryForm)
      queryForm = {
        attributes: ['*'],
        filter: {},
      };
  }

  getQueryForm(): QueryForm {
    return this.queryForm;
  }

  addFilter(filter: Record<string, any>): QueryFormFunctions {
    filter = {
      $and: filter,
    };
    this.queryForm.filter = Object.assign(this.queryForm.filter, filter);
    return this;
  }
}
