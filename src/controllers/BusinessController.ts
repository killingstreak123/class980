import BusinessDto from "@/dto/BusinessDto";
import BusinessService from "@/services/BusinessService";
import { NextFunction } from "express";

export default class BusinessController {
  private businessService = new BusinessService();

  public async registerBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dto: BusinessDto = req.body;
      let data = await this.businessService.createBusiness(dto);
      return res.status(201).json({ data: data, message: 'Created' });
    } catch (error) {
      next(error);
    }
  };

}