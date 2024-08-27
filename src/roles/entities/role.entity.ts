import { BasicEntity } from 'src/common/base/entities';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, OneToMany } from 'typeorm';

/*
tabla roles
name unico
*/
@Entity('roles')
export class Role extends BasicEntity {
  @Column()
  name: string;
  @Column()
  description: string;

  @OneToMany(() => User, (user) => user.role, {
    cascade: true,
  })
  users: User[];
}
