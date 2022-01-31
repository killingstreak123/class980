import AddressDao from '@/dao/AddressDao';
import AddressDto from '@/dto/AddressDto';
import AddressModel from '@/model/AddressModel';

export default class AddressService {
  private addressDao = new AddressDao();

  public async createAddress(dto: AddressDto): Promise<AddressModel> {
    return this.addressDao.createAddress(dto);
  }
}
