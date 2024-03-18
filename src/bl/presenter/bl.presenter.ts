import { Bl, IStatus, OffshoreStatus } from '../../shared/domain/entity/bl.entity';

export class BlPresenter {
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

  constructor(bl: Bl) {
    this.id = bl.id;
    this.bkgNo = bl.bkgNo;
    this.state = bl.state;
    this.customerOpened = bl.customerOpened;
    this.onshoreOpened = bl.onshoreOpened;
    this.createdBy = bl.createdBy;
    this.updatedBy = bl.updatedBy;
    this.officeCode = bl.officeCode;
    this.createdAt = bl.createdAt;
    this.blinkStatus = bl.blinkStatus;
    this.lastUpdated = bl.lastUpdated;
    this.lastUpdatedAction = bl.lastUpdatedAction;
    this.vvd = bl.vvd;
    this.etd = bl.etd;
    this.pol = bl.pol;
    this.pod = bl.pod;
    this.shipperName = bl.shipperName;
    this.status = bl.status;
    this.bkgOffshoreStatus = bl.bkgOffshoreStatus;
    this.country = bl.country;
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}
