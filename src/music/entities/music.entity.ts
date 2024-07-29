import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MusicEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    artistId : string;

    @Column({type  : "decimal",  scale: 2})
    duration : number;

    @DeleteDateColumn()
    deletedat: Date | null
}
