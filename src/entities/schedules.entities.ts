import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,

  Timestamp,
  ManyToOne,
} from "typeorm";

import Users from "./users.entities";
import realState from "./real_estate.entity";

@Entity("schedule_users_profiles")
class Schedule {
@Column({type:"date", nullable:false})
date:Date;

@Column({type:"datetime",nullable:false})
hour:Timestamp;



@OneToOne(()=>Users, {nullable:false})

@JoinColumn()
usersId:Users

@ManyToOne(()=> realState, {nullable:false})

@JoinColumn()
realStateId:realState


}

export default Schedule
