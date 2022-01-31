import AddressDto from '@/dto/AddressDto';
import AddressModel from '@/model/AddressModel';
import { Repository } from 'typeorm';

export default class AddressDao extends Repository<AddressModel> {
  public async createAddress(addressDto: AddressDto) {
    return AddressModel.create({ ...addressDto }).save();
  }
}
