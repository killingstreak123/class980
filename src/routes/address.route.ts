import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import AddressController from '@/controllers/AddressController';
import AddressDto from '@/dto/AddressDto';

class AddressRoute implements Routes {
  public path = '/';
  public router = Router();
  public addressController = new AddressController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}createAddress`, validationMiddleware(AddressDto, 'body'), this.addressController.registerAddress);
    this.router.delete(`${this.path}createAddress/:id`, validationMiddleware(AddressDto, 'body'), this.addressController.deleteAddress);
    this.router.patch(`${this.path}editAddress/:id`, validationMiddleware(AddressDto, 'body'), this.addressController.editUser);
  }
}
export default AddressRoute;
