import { MigrationInterface, QueryRunner } from "typeorm";

export class History1710469935608 implements MigrationInterface {
    name = 'History1710469935608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bl-content" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bl-content" DROP CONSTRAINT "PK_3840b767a7a3a245a996cdfe188"`);
        await queryRunner.query(`ALTER TABLE "bl-content" ADD CONSTRAINT "PK_270e2aa24e4514bec0b18940db9" PRIMARY KEY ("blId", "fieldId", "id")`);
        await queryRunner.query(`ALTER TABLE "bl-content" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "bl-content" ADD "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bl-content" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "bl-content" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "bl-content" DROP CONSTRAINT "PK_270e2aa24e4514bec0b18940db9"`);
        await queryRunner.query(`ALTER TABLE "bl-content" ADD CONSTRAINT "PK_3840b767a7a3a245a996cdfe188" PRIMARY KEY ("blId", "fieldId")`);
        await queryRunner.query(`ALTER TABLE "bl-content" DROP COLUMN "id"`);
    }

}
