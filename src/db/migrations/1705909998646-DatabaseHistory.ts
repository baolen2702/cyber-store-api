import { MigrationInterface, QueryRunner } from "typeorm";

export class DatabaseHistory1705909998646 implements MigrationInterface {
    name = 'DatabaseHistory1705909998646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_option_value" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT true, "optionId" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "proptionIdoductId" integer, CONSTRAINT "PK_2ab71ed3b21be5800905c621535" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_option_value" ADD CONSTRAINT "FK_92acc29795577cc1d2ffd3bae53" FOREIGN KEY ("proptionIdoductId") REFERENCES "product_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_option_value" DROP CONSTRAINT "FK_92acc29795577cc1d2ffd3bae53"`);
        await queryRunner.query(`DROP TABLE "product_option_value"`);
    }

}
