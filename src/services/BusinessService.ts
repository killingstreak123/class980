import BusinessDao from "@/dao/BusinessDao";
import BusinessDto from "@/dto/BusinessDto";


export default class BusinessService {
    private businessDao = new BusinessDao();

    public async createBusiness (dto: BusinessDto) {
      return this.businessDao.save(dto);
    }
}