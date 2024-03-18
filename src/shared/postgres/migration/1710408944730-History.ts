import { MigrationInterface, QueryRunner } from 'typeorm';

export class History1710408944730 implements MigrationInterface {
  name = 'History1710408944730';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TYPE "public"."bl_bkgoffshorestatus_enum" AS ENUM('Pending', 'Completed')`);
    await queryRunner.query(
      `CREATE TABLE "bl" ("id" uuid NOT NULL, "createdAt" character varying NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "bkgNo" character varying NOT NULL, "state" character varying NOT NULL, "createdBy" character varying NOT NULL, "updatedBy" TIMESTAMP NOT NULL, "officeCode" character varying NOT NULL, "blinkStatus" character varying NOT NULL, "lastUpdated" TIMESTAMP NOT NULL, "lastUpdatedAction" TIMESTAMP NOT NULL, "vvd" character varying NOT NULL, "etd" character varying NOT NULL, "pol" character varying NOT NULL, "pod" character varying NOT NULL, "shipperName" character varying NOT NULL, "status" character varying NOT NULL, "bkgOffshoreStatus" "public"."bl_bkgoffshorestatus_enum" NOT NULL DEFAULT 'Pending', "country" character varying NOT NULL, "customerOpened" text NOT NULL, "onshoreOpened" text NOT NULL, CONSTRAINT "PK_4932f35c8d0549e60e60423e6a4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "id" uuid NOT NULL`);
    await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
    await queryRunner.query(`ALTER TABLE "field" DROP CONSTRAINT "PK_39379bba786d7a75226b358f81e"`);
    await queryRunner.query(`ALTER TABLE "field" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "field" ADD "id" uuid NOT NULL`);
    await queryRunner.query(`ALTER TABLE "field" ADD CONSTRAINT "PK_39379bba786d7a75226b358f81e" PRIMARY KEY ("id")`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "field" DROP CONSTRAINT "PK_39379bba786d7a75226b358f81e"`);
    await queryRunner.query(`ALTER TABLE "field" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "field" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(`ALTER TABLE "field" ADD CONSTRAINT "PK_39379bba786d7a75226b358f81e" PRIMARY KEY ("id")`);
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
    await queryRunner.query(`DROP TABLE "bl"`);
    await queryRunner.query(`DROP TYPE "public"."bl_bkgoffshorestatus_enum"`);
  }
}
