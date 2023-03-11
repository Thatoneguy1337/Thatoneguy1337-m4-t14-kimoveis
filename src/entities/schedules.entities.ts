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
import RealState from "./real_estate.entities";

@Entity("schedule_users_profiles")
class Schedule {
  
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date"})
  date: string;

  @Column({ type: "time"})
  hour: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => RealState)
  realEstate: RealState;
}

export default Schedule;
