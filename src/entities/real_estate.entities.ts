import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import Adress from "./adresses.entities";

import Categories from "./categories.entities";

import Schedules from "./schedules.entities";

@Entity("real_state")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({type: "date"})
  createdAt: string;

  @UpdateDateColumn({type: "date"})
  UpdateDateColumn: string;

  @OneToOne(() => Adress)
  @JoinColumn()
  address: Adress;

  @ManyToOne(() => Categories, { nullable: true })
  category: Categories;

  @OneToMany(() => Schedules, (schedules) => schedules.realEstate)
  schedules: Schedules[];
}

export default RealEstate;
