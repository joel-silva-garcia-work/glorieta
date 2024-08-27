import { Entity, Column, ManyToOne } from 'typeorm';
import { BasicEntity } from 'src/common/base/entities/basic.entity';
import { Role } from 'src/roles/entities/role.entity';

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
  lastName: string;

  @Column({ nullable: true })
  phone: string;

  @ManyToOne(() => Role, { eager: true })
  role: Role;
}
