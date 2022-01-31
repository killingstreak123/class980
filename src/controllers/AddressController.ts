import { Request, Response } from "express";
import { NextFunction } from 'express';
import AddressDto from "@/dto/AddressDto";
import AddressService from "@/services/AddressService";
import AddressModel from "@/model/AddressModel";
import { getRepository } from "typeorm";
import { Address } from ".../Entity/AddressModel";

export default class AddressController {
  private addressService = new AddressService();

  public registerAddress = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dto: AddressDto = req.body;
      const data = await this.addressService.createAddress(dto);
      res.send(data);
    } catch (error) {
      next(error);
    }
  };
  public deleteAddress = async (req: Request, res: Response) => {
    const id = req.params.id;

    const userRepository = getRepository(AddressModel);
    let client: AddressModel;
    try {
      client = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send('Address not found');
      return;
    }
    userRepository.delete(id);

    res.status(204).send();
  };

  public editUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { pinCode,state,city,buildingName,areaColony  } = req.body;

    const userRepository = getRepository(AddressModel);
    let user;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send("address not found");
      return;
    }
    user.pinCode = pinCode;
    user.state = state;
    user.city = city;
    user.buildingName = buildingName;
    user.areaColony = areaColony;
    try{
     await userRepository.save(user);
     res.send(user);
    }catch(error){
      res.status(404).send("address not saved");
    }
  };
}
