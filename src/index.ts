import { Core } from './types';
import { Credentials } from './types/credentials.type';
import { RequestorModule } from './modules/requestor.module';

export * from './types';

export class HubSolv {
  protected readonly requestor: RequestorModule;

  constructor(credentials: Credentials) {
    this.requestor = new RequestorModule(credentials);
  }

  public submitLead(lead: Partial<Core>) {

  }
}
