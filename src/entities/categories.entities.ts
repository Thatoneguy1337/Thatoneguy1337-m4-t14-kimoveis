import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import RealEstate from "./real_estate.entities"
@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type:"varchar", length: 45, nullable: false })
  name: string;
  
  @OneToMany(() => RealEstate, realEstates => realEstates.category)
  realEstate: RealEstate[]
}

export default Category;
