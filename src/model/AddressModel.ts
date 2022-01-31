import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity('address')
export default class AddressModel extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'address_id' })
  addressId: number;

  @Column({ name: 'pin_code', nullable: false })
  pinCode: number;

  @Column({ name: 'state', nullable: false })
  state: string;

  @Column({ name: 'city', nullable: false })
  city: string;

  @Column({ name: 'building_name', nullable: false })
  buildingName: string;

  @Column({ name: 'area_colony', nullable: false })
  areaColony: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
