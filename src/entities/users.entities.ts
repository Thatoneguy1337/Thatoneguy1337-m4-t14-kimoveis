import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, nullable: false })
  name: string;

  @Column({ length: 45, unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @CreateDateColumn({ nullable: false })
  createdAt: string;

  @UpdateDateColumn({ nullable: false })
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;
}

export default Users;
