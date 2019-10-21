import { Credentials } from '../types';

export class RequestorModule {
  constructor(protected readonly credentials: Credentials) {
  }
}
