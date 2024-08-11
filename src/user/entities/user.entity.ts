import { Entity, Column, OneToMany } from 'typeorm';
import { UserRole } from 'src/user-roles/entities/user-role.entity';
import { BasicEntity } from 'src/common/base/entities/basic.entity';

@Entity('users')
export class User extends BasicEntity {
  @Column()
  name: string;
  @Column({ nullable: false })
  hash: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  phone: string;

  @OneToMany(() => UserRole, (userRoles) => userRoles.user, {
    eager: true,
    cascade: true,
  })
  userRoles: UserRole[];
}
