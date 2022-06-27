import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import StudentController from '@/controllers/StudentController';
import StudentDto from '@/dto/StudentDto';

class StudentRoute implements Routes {
  public path = '/';
  public router = Router();
  public studentController = new StudentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}createClass`, validationMiddleware(StudentDto, 'body'), this.studentController.registerClass);
    this.router.delete(`${this.path}createClass/:id`, validationMiddleware(StudentDto, 'body'), this.studentController.deleteStudent);
    this.router.patch(`${this.path}editClass/:id`, validationMiddleware(StudentDto, 'body'), this.studentController.editStudent);
    this.router.get(`${this.path}listClass/`, validationMiddleware(StudentDto, 'body'), this.studentController.listAll);
    this.router.get(`${this.path}listStudent/:id`, validationMiddleware(StudentDto, 'body'), this.studentController.getOneById);
  }
}
export default StudentRoute;
