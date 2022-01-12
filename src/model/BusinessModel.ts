import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("business")
export default class BusinessModel extends BaseEntity{

  @PrimaryGeneratedColumn({name: 'business_id'})
  businessId: number;

  @Column({name: "business_name", nullable: false, unique: true})
  name: string;

  @Column({name: "logo", nullable: false})
  logo: string;

  @Column({name: "domain", nullable: false, unique: true})
  domain: string;

  @Column({name: "is_multiple_location_enabled", default: false})
  isMultipleLocationEnabled: boolean;

  @Column({name: "number_of_employees"})
  noOfEmplopyees: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

}