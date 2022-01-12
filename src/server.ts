import 'dotenv/config';
import '@/index';
import App from '@/app';
import validateEnv from '@utils/validateEnv';
import BusinessRoute from './routes/business.route';

validateEnv();

const app = new App([new BusinessRoute()]);

app.listen();
