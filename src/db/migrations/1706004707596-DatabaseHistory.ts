import { MigrationInterface, QueryRunner } from 'typeorm';

export class DatabaseHistory1706004707596 implements MigrationInterface {
  name = 'DatabaseHistory1706004707596';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "slug" character varying NOT NULL, "description" text NOT NULL, "image" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "slug" character varying NOT NULL, "description" text NOT NULL, "image" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "price" integer NOT NULL DEFAULT '20', "categoryId" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_variant" ("id" SERIAL NOT NULL, "sku" character varying NOT NULL, "productId" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_1ab69c9935c61f7c70791ae0a9f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_option_value" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT true, "optionId" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "productId" integer, "variantId" integer, CONSTRAINT "PK_2ab71ed3b21be5800905c621535" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_option" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT true, "productId" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4cf3c467e9bc764bdd32c4cd938" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_variant" ADD CONSTRAINT "FK_6e420052844edf3a5506d863ce6" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option_value" ADD CONSTRAINT "FK_0cfedcaea398f4844c568d90f09" FOREIGN KEY ("optionId") REFERENCES "product_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option_value" ADD CONSTRAINT "FK_fab09dadca168bfb0e9eed0c3e6" FOREIGN KEY ("variantId") REFERENCES "product_variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option_value" ADD CONSTRAINT "FK_1f611a4840fda7f7b69fa9cbe9d" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option" ADD CONSTRAINT "FK_2ca1aab0a82e9c0058d8465ad02" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_option" DROP CONSTRAINT "FK_2ca1aab0a82e9c0058d8465ad02"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option_value" DROP CONSTRAINT "FK_1f611a4840fda7f7b69fa9cbe9d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option_value" DROP CONSTRAINT "FK_fab09dadca168bfb0e9eed0c3e6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option_value" DROP CONSTRAINT "FK_0cfedcaea398f4844c568d90f09"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_variant" DROP CONSTRAINT "FK_6e420052844edf3a5506d863ce6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`,
    );
    await queryRunner.query(`DROP TABLE "product_option"`);
    await queryRunner.query(`DROP TABLE "product_option_value"`);
    await queryRunner.query(`DROP TABLE "product_variant"`);
    await queryRunner.query(`DROP TABLE "product"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
