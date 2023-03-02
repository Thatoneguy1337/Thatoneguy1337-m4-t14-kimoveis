import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity("adresses")

class Adresses{

@Column({length:45, nullable:false})
street:string;

@Column({length:8, nullable: false})
zipCode:string;

@Column({length:6, nullable:false})
city:string;

@Column({length:2, nullable:false})
state:string;

}

export default Adresses







