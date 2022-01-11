import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import BusinessController from '@/controllers/BusinessController';
import BusinessDto from '@/dto/BusinessDto';

class BusinessRoute implements Routes {
  public path = '/';
  public router = Router();
  public businessController = new BusinessController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}createBusiness`, validationMiddleware(BusinessDto, 'body'), this.businessController.registerBusiness);
  }
}

export default BusinessRoute;