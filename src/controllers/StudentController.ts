import { Request, Response } from 'express';
import { NextFunction } from 'express';
import StudentDto from '@/dto/StudentDto';
import StudentService from '@/services/StudentService';
import StudentModel from '@/model/StudentModel';
import { getRepository } from 'typeorm';

export default class StudentController {
  private studentService = new StudentService();

  public registerClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dto: StudentDto = req.body;
      const data = await this.studentService.createClass(dto);
      res.send(data);
    } catch (error) {
      next(error);
    }
  };

  public deleteStudent = async (req: Request, res: Response) => {
    const id = req.params.id;

    const userRepository = getRepository(StudentModel);
    let client: StudentModel;
    try {
      client = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send('Student not found');
      return;
    }
    userRepository.delete(id);

    res.status(204).send();
  };
  public editStudent = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { rollNo, noOfStudent, studentEmail, studentPhone } = req.body;

    const userRepository = getRepository(StudentModel);
    let student: StudentModel;
    try {
      student = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send('student not found');
      return;
    }
    student.rollNo = rollNo;
    student.noOfStudent = noOfStudent;
    student.studentEmail = studentEmail;
    student.studentPhone = studentPhone;
    try {
      await userRepository.save(student);
      res.send(student);
    } catch (error) {
      res.status(404).send('student not saved');
    }
  };
  public listAll = async (req: Request, res: Response) => {
    const StudentRepository = getRepository(StudentModel);
    const Student = await StudentRepository.find({
      select: ['name', 'rollNo', 'studentPhone', 'studentId'],
    });
    res.send(Student);
  };
  public getOneById = async (req: Request, res: Response) => {
    const id = req.params.id;

    const userRepository = getRepository(StudentModel);
    try {
      const Student = await userRepository.findOneOrFail(id, {
        select: ['Phone', 'StudentPhone', 'name'],
      });
      res.send(Student);
    } catch (error) {
      res.status(404).send('Student not found');
    }
  };
}
