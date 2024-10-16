import{
    Entity,
    PrimaryGeneratedColumn,
    Column,
}from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : Number;

    @Column()
    fullName:string;

    @Column({unique:true})
    email:string;
}
