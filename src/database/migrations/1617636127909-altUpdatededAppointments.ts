import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class altUpdatededAppointments1617636127909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('appointments', 'update_at');
        await queryRunner.addColumn(
            'appointments', 
        new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
