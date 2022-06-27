import StudentDto from '@/dto/StudentDto';
import StudentModel from '@/model/StudentModel';
import { Repository } from 'typeorm';

export default class StudentDao extends Repository<StudentModel> {
  public async createClass(studentDto: StudentDto) {
    return StudentModel.create({ ...studentDto }).save();
  }
}
