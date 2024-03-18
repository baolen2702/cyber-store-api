import { Transform } from 'class-transformer';
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum Environment {
  Local = 'local',
  Development = 'development',
  Production = 'production',
  Staging = 'staging',
  Test = 'test',
  Provision = 'provision',
}

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  HOST: string;

  @IsNotEmpty()
  @IsNumber()
  PORT: number;

  @IsNotEmpty()
  @IsString()
  ENV: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_HOST: string;

  @IsNotEmpty()
  @IsNumber()
  DATABASE_PORT: number;

  @IsNotEmpty()
  @IsString()
  DATABASE_USER: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_NAME: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_SCHEMA: string;

  @Transform(({ obj }) => {
    return [true, 'enabled', 'true'].indexOf(obj.DATABASE_SYNCHRONIZE) > -1;
  })
  @IsNotEmpty()
  @IsBoolean()
  DATABASE_SYNCHRONIZE: boolean;

  @Transform(({ obj }) => {
    return [true, 'enabled', 'true'].indexOf(obj.DATABASE_SSL) > -1;
  })
  @IsNotEmpty()
  @IsBoolean()
  DATABASE_SSL: boolean;
}
