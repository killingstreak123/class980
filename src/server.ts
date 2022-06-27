import 'dotenv/config';
import '@/index';
import App from '@/app';
import validateEnv from '@utils/validateEnv';
import BusinessRoute from './routes/business.route';
import AddressRoute from './routes/address.route';
import StudentRoute from './routes/student.route';

validateEnv();

//const app = new App([new BusinessRoute(), new AddressRoute()]);
const app = new App([new StudentRoute()]);
app.listen();
