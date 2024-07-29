import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Musicentity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    artistId : string;

    @Column({type  : "decimal",  scale: 2})
    duration : number
}
