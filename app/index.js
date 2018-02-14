import dotenv from 'dotenv';
import winston from 'winston';
import app from './app';

dotenv.config({ silent: true });

const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  winston.info('You are running a Node version lower than 7.5. Please upgrade Node!!');
  process.exit();
}

const port = process.env.PORT || 8881;

app.listen(port, err => {
  !err && winston.info(
    `${process.env.NODE_ENV} server live on http://localhost:${port}`
  );
});