import { IEntity } from '../model/seedwork';
import { BaseEntity } from './base.entity';
enum BlinkStatus {
  BC = 'BC',
  BX = 'BX',
  BI = 'BI',
  BK = 'BK',
  BO = 'BO',
  BR = 'BR',
  BD = 'BD',
  BM = 'BM',
  BA = 'BA',
  BQ = 'BQ',
  BP = 'BP',
  BS = 'BS',
  BF = 'BF',
}
export interface IStatus {
  onshore: 'Resolved' | 'New Inquiry' | 'Reopen';
  customer: 'New Inquiry' | 'Reopen';
  bl: BlinkStatus;
}
export enum OffshoreStatus {
  Pending = 'Pending',
  Completed = 'Completed',
}
export class Bl extends BaseEntity {
  id: string;
  bkgNo: string;
  state: 'DRF_SEND' | 'REQUEST' | 'INQUIRED';
  customerOpened: {
    isFirstReceive: false;
    isUpdated: true;
  };
  onshoreOpened: {
    isFirstReceive: true;
    isUpdated: false;
  };
  createdBy: string;
  updatedBy: string;
  officeCode: string;
  createdAt: Date;
  blinkStatus: string;
  lastUpdated: Date;
  lastUpdatedAction: Date;
  vvd: string;
  etd: Date;
  pol: string;
  pod: string;
  shipperName: string;
  status: IStatus;
  bkgOffshoreStatus: OffshoreStatus;
  country: string;

  constructor(init?: Partial<Bl>) {
    super();
    Object.assign(this, init);
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof Bl)) {
      return false;
    }
    return this.id === entity.id;
  }
}
