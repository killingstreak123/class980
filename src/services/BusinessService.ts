import BusinessDao from "@/dao/BusinessDao";
import BusinessDto from "@/dto/BusinessDto";
import BusinessModel from "@/model/BusinessModel";


export default class BusinessService {
    private businessDao = new BusinessDao();

    public async createBusiness (dto: BusinessDto): Promise<BusinessModel> {
      return this.businessDao.createBusiness(dto);
    }
}