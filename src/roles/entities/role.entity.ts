import { BasicEntity } from 'src/common/base/entities';
import { UserRole } from 'src/user-roles/entities/user-role.entity';
import { Entity, Column, OneToMany } from 'typeorm';

/*
tabla roles
name unico
*/
@Entity('roles')
export class Role extends BasicEntity {
  @Column()
  name: string
  @Column()
  description: string


  @OneToMany(() => UserRole,(userRoles)=> userRoles.role,{
    cascade: true
  })
  userRoles: UserRole[]

}
