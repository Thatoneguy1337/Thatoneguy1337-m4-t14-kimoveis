import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinColumn,
} from "typeorm";

import Adresses from "./adresses.entities";

import Categories from "./categories.entities";

@Entity("real_state")
class realState {
  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({ type: "decimal", length: 12.2 })
  value: number;

  @Column({ type: "integer" })
  size: number;
  
  @CreateDateColumn()
  createdAt:string;
  
  @UpdateDateColumn()
  UpdateDateColumn:string;
  
  @ManyToMany(()=> Adresses,{nullable:false})
  
  @JoinColumn()
  adressesId : Adresses;
  
  @ManyToMany(()=> Categories,{nullable:false})
  
  @JoinColumn()
  categoriesId:Categories;
  

  
}


export default realState