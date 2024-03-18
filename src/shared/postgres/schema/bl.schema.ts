import { Bl, OffshoreStatus } from '../../../shared/domain/entity/bl.entity';
import { EntitySchema } from 'typeorm';
import { BaseSchema } from './base.schema';

export const BlSchema = new EntitySchema<Bl>({
  name: 'Bl',
  tableName: 'bl',
  columns: {
    ...BaseSchema,
    bkgNo: { type: String },
    state: { type: String },
    createdBy: { type: String },
    updatedBy: { type: Date },
    officeCode: { type: String },
    createdAt: { type: String },
    blinkStatus: { type: String },
    lastUpdated: { type: Date },
    lastUpdatedAction: { type: Date },
    vvd: { type: String },
    etd: { type: String },
    pol: { type: String },
    pod: { type: String },
    shipperName: { type: String },
    status: { type: String },
    bkgOffshoreStatus: { type: 'enum', enum: OffshoreStatus, default: OffshoreStatus.Pending },
    country: { type: String },
    customerOpened: {
      type: 'simple-json',
    },
    onshoreOpened: {
      type: 'simple-json',
    },
  },
});
