import BusinessDto from '@/dto/BusinessDto';
import BusinessModel from '@/model/BusinessModel';
import { Repository } from 'typeorm';

export default class BusinessDao extends Repository<BusinessModel> {
  public async createBusiness(businessDto: BusinessDto) {
    return BusinessModel.create({ ...businessDto, isMultipleLocationEnabled: true, noOfEmployees: '100-200', isActive: true }).save();
  }
}
