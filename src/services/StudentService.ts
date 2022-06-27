import StudentDao from '@/dao/StudentDao';
import AddressDto from '@/dto/AddressDto';
import StudentDto from '@/dto/StudentDto';
import StudentModel from '@/model/StudentModel';

export default class StudentService {
  private StudentDao = new StudentDao();

  public async createClass(dto: StudentDto): Promise<StudentModel> {
    return this.StudentDao.createClass(dto);
  }
}
