import { DefaultDataServiceConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Todos: {},
};

export const entityConfig = {
  entityMetadata,
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com/',
  timeout: 3000, // request timeout
};
