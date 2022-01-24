import { Request, Response } from "express";
import BusinessDto from '@/dto/BusinessDto';
import BusinessService from '@/services/BusinessService';
import { NextFunction } from 'express';
import BusinessModel from '@/model/BusinessModel';
import { getRepository } from 'typeorm';

export default class BusinessController {
  private businessService = new BusinessService();

  public registerBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dto: BusinessDto = req.body;
      const data = await this.businessService.createBusiness(dto);
      return res.status(201).json({ data: data, message: 'Created' });
    } catch (error) {
      next(error);
    }
  };


  public listAll = async (req: Request, res: Response) => {

    const userRepository = getRepository(BusinessModel);
    const users = await userRepository.find({
      select: ['logo', 'domain', 'name'],
    });
    res.send(users);
  };

  public getOneById = async (req: Request, res: Response) => {

    const id = req.params.id;

    const userRepository = getRepository(BusinessModel);
    try {
      const user = await userRepository.findOneOrFail(id , {
        select: ["logo", "domain", "name"]
      });
      res.send(user);
    }
    catch (error) {
      res.status(404).send("business not found");
    }
  };

    public deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;

    const userRepository = getRepository(BusinessModel);
    let user: BusinessModel;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send('business not found');
      return;
    }
    userRepository.delete(id);

    res.status(204).send();
  };
}
export { BusinessController };
