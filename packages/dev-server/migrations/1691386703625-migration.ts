import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1691386703625 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "product" ADD "customFieldsProducttype" character varying(255)`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product" ADD "customFieldsVenue" character varying(255)`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsDate" TIMESTAMP(6)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsDate"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsVenue"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsProducttype"`, undefined);
    }
}
