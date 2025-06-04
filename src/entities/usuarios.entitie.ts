import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { getRounds,  } from "bcryptjs";

@Entity("usuarios")
export class Usuarios {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    name: string

    @Column({unique:true})
    email: string

    @Column()
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){

    }

}