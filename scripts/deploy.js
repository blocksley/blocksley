import { execSync } from 'child_process'

execSync('rimraf dist', { stdio: 'inherit'})

const { SITE_ID } = process.env

switch (SITE_ID) {
  case '@blocksley/blocksley-demo':
    execSync('yarn workspace @blocksley/blocksley-demo deploy', { stdio: 'inherit'})
    break;
}
