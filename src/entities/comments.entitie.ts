import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./usuarios.entitie";
import { Posts } from "./posts.entitie";

@Entity("comments")
export class Comments {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column()
    content: string

    @ManyToOne(()=>Usuarios)
    usuario:Usuarios

    
    @ManyToOne(()=>Posts)
    post:Posts

}