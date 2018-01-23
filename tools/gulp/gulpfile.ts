import {createPackageBuildTasks} from 'ng-extra-build-tools';
import {
  ngExtraPackage,
  matExtraPackage,
  ionExtraPackage,
  matExamplesPackage,
  ionExamplesPackage
} from './packages';

createPackageBuildTasks(ngExtraPackage);
createPackageBuildTasks(matExtraPackage);
createPackageBuildTasks(ionExtraPackage);
createPackageBuildTasks(matExamplesPackage);
createPackageBuildTasks(ionExamplesPackage);

import './tasks/aot';
import './tasks/changelog';
import './tasks/ci';
import './tasks/clean';
import './tasks/coverage';
import './tasks/default';
import './tasks/development';
import './tasks/docs';
import './tasks/e2e';
import './tasks/examples';
import './tasks/lint';
import './tasks/mat-extra-release';
import './tasks/payload';
import './tasks/publish';
import './tasks/screenshots';
import './tasks/unit-test';
import './tasks/universal';
import './tasks/validate-release';
