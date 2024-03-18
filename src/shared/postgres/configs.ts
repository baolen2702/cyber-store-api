import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentVariables } from '../../utils/configs/env.validation';
import { DataSource } from 'typeorm';

export function optionsFactory(configService: ConfigService<EnvironmentVariables>): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    // ssl: configService.get('DATABASE_SSL'),
    synchronize: true,
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    entities: [__dirname + '/schema/*{.ts,.js}'],
  };
}

if (!process.env['DATABASE_HOST'] && (!process.env['NODE_ENV'] || process.env['NODE_ENV'] === 'local' || process.env['NODE_ENV'] === 'test')) {
  // eslint-disable-next-line
  require('dotenv').config();
}

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 5432),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  // ssl: Boolean(Number(process.env.DATABASE_SSL)),
  synchronize: false,
  migrations: [__dirname + '/migration/*{.ts,.js}'],
  entities: [__dirname + '/schema/*{.ts,.js}'],
});
