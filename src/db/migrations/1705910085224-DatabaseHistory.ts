import { MigrationInterface, QueryRunner } from "typeorm";

export class DatabaseHistory1705910085224 implements MigrationInterface {
    name = 'DatabaseHistory1705910085224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_option_value" DROP CONSTRAINT "FK_92acc29795577cc1d2ffd3bae53"`);
        await queryRunner.query(`ALTER TABLE "product_option_value" DROP COLUMN "proptionIdoductId"`);
        await queryRunner.query(`ALTER TABLE "product_option_value" ADD CONSTRAINT "FK_0cfedcaea398f4844c568d90f09" FOREIGN KEY ("optionId") REFERENCES "product_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_option_value" DROP CONSTRAINT "FK_0cfedcaea398f4844c568d90f09"`);
        await queryRunner.query(`ALTER TABLE "product_option_value" ADD "proptionIdoductId" integer`);
        await queryRunner.query(`ALTER TABLE "product_option_value" ADD CONSTRAINT "FK_92acc29795577cc1d2ffd3bae53" FOREIGN KEY ("proptionIdoductId") REFERENCES "product_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
