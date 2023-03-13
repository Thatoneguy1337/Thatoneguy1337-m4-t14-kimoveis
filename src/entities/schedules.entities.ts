import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Timestamp,
  ManyToOne,
} from "typeorm";

import User from "./users.entities";
import RealEstate from "./real_estate.entities";

@Entity("schedule_users_profiles")
class Schedule {
  
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => RealEstate, realEstates => realEstates.schedules)
  realEstate: RealEstate;
}

export default Schedule;
