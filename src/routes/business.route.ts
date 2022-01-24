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
    this.router.get(`${this.path}createBusiness/`, validationMiddleware(BusinessDto, 'body'), this.businessController.listAll);
    this.router.get(`${this.path}createBusiness/:id`, validationMiddleware(BusinessDto, 'body'), this.businessController.getOneById);
    this.router.post(`${this.path}createBusiness`, validationMiddleware(BusinessDto, 'body'), this.businessController.registerBusiness);
    this.router.delete(`${this.path}createBusiness/:id`, validationMiddleware(BusinessDto, 'body'), this.businessController.deleteUser);
  }
}

export default BusinessRoute;
