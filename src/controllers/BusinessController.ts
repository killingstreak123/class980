import BusinessDto from "@/dto/BusinessDto";
import BusinessService from "@/services/BusinessService";
import { NextFunction } from "express";

export default class BusinessController {
  private businessService = new BusinessService();

  public registerBusiness = (req: Request, res: Response, next: NextFunction): void => {
    try {
      console.log("lll")
      const dto: BusinessDto = req.body;
      console.log("lll  11")
      this.businessService.createBusiness(dto);
    } catch (error) {
      next(error);
    }
  };

}