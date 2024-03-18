import { MigrationInterface, QueryRunner } from 'typeorm';

export class History1710469410402 implements MigrationInterface {
  name = 'History1710469410402';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "bl-content" ("blId" uuid NOT NULL, "fieldId" uuid NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_3840b767a7a3a245a996cdfe188" PRIMARY KEY ("blId", "fieldId"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "bl-content" ADD CONSTRAINT "FK_383320d33091e49aa64c9b86155" FOREIGN KEY ("blId") REFERENCES "bl"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bl-content" ADD CONSTRAINT "FK_4fb0ee0ce854378d6a532c50089" FOREIGN KEY ("fieldId") REFERENCES "field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "bl-content" DROP CONSTRAINT "FK_4fb0ee0ce854378d6a532c50089"`);
    await queryRunner.query(`ALTER TABLE "bl-content" DROP CONSTRAINT "FK_383320d33091e49aa64c9b86155"`);
    await queryRunner.query(`DROP TABLE "bl-content"`);
  }
}
