import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class altUpdatededUser1617637930484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'update_at');
        await queryRunner.addColumn(
            'users', 
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
