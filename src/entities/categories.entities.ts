import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity("categories")

class Categories {

@Column({length:45, nullable:false})
name:string;

}

export default Categories




