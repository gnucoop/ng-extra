import {join} from 'path';
import {getSubdirectoryNames} from './secondary-entry-points';
import {buildConfig} from './build-config';

/** Method that converts dash-case strings to a camel-based string. */
export const dashCaseToCamelCase =
  (str: string) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

/** List of potential secondary entry-points for the ng-extra package. */
const ngExtraSecondaryEntryPoints = getSubdirectoryNames(join(buildConfig.packagesDir, 'ng-extra'));

/** List of potential secondary entry-points for the mat-extra package. */
const matExtraSecondaryEntryPoints =
    getSubdirectoryNames(join(buildConfig.packagesDir, 'mat-extra'));

/** List of potential secondary entry-points for the ion-extra package. */
const ionExtraSecondaryEntryPoints =
    getSubdirectoryNames(join(buildConfig.packagesDir, 'ion-extra'));

/** Object with all ng-extra entry points in the format of Rollup globals. */
const rollupNgExtraEntryPoints = ngExtraSecondaryEntryPoints
  .reduce((globals: any, entryPoint: string) => {
    globals[`@gnucoop/ng-extra/${entryPoint}`] = `gc.nge.${dashCaseToCamelCase(entryPoint)}`;
    return globals;
  }, {});

/** Object with all mat-extra entry points in the format of Rollup globals. */
const rollupMatExtraEntryPoints =
  matExtraSecondaryEntryPoints.reduce((globals: any, entryPoint: string) => {
    globals[`@gnucoop/mat-extra/${entryPoint}`] = `gc.mte.${dashCaseToCamelCase(entryPoint)}`;
    return globals;
  }, {});

/** Object with all ion-extra entry points in the format of Rollup globals. */
const rollupIonExtraEntryPoints =
  ionExtraSecondaryEntryPoints.reduce((globals: any, entryPoint: string) => {
    globals[`@gnucoop/ion-extra/${entryPoint}`] = `gc.ine.${dashCaseToCamelCase(entryPoint)}`;
    return globals;
  }, {});

/** Map of globals that are used inside of the different packages. */
export const rollupGlobals = {
  'tslib': 'tslib',
  'moment': 'moment',

  '@angular/animations': 'ng.animations',
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/common/http': 'ng.common.http',
  '@angular/router': 'ng.router',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-server': 'ng.platformServer',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@angular/core/testing': 'ng.core.testing',
  '@angular/common/testing': 'ng.common.testing',
  '@angular/common/http/testing': 'ng.common.http.testing',

  // Some packages are not really needed for the UMD bundles, but for the missingRollupGlobals rule.
  '@gnucoop/ng-extra': 'ng.nge',
  '@gnucoop/mat-extra': 'ng.mte',
  '@gnucoop/ion-extra': 'ng.ine',
  '@gnucoop/mat-extra-examples': 'ng.mteExamples',
  '@gnucoop/ion-extra-examples': 'ng.ineExamples',

  // Include secondary entry-points of the ng-extra, mat-extra and ion-extra packages
  ...rollupNgExtraEntryPoints,
  ...rollupMatExtraEntryPoints,
  ...rollupIonExtraEntryPoints,

  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/Subscriber': 'Rx',
  'rxjs/Scheduler': 'Rx',

  'rxjs/observable/combineLatest': 'Rx.Observable',
  'rxjs/observable/forkJoin': 'Rx.Observable',
  'rxjs/observable/fromEvent': 'Rx.Observable',
  'rxjs/observable/interval': 'Rx.Observable',
  'rxjs/observable/merge': 'Rx.Observable',
  'rxjs/observable/of': 'Rx.Observable',
  'rxjs/observable/throw': 'Rx.Observable',
  'rxjs/observable/defer': 'Rx.Observable',
  'rxjs/observable/fromEventPattern': 'Rx.Observable',
  'rxjs/observable/empty': 'Rx.Observable',

  'rxjs/operators/debounceTime': 'Rx.operators',
  'rxjs/operators/takeUntil': 'Rx.operators',
  'rxjs/operators/take': 'Rx.operators',
  'rxjs/operators/first': 'Rx.operators',
  'rxjs/operators/filter': 'Rx.operators',
  'rxjs/operators/map': 'Rx.operators',
  'rxjs/operators/mergeMap': 'Rx.operators',
  'rxjs/operators/tap': 'Rx.operators',
  'rxjs/operators/startWith': 'Rx.operators',
  'rxjs/operators/auditTime': 'Rx.operators',
  'rxjs/operators/switchMap': 'Rx.operators',
  'rxjs/operators/finalize': 'Rx.operators',
  'rxjs/operators/catchError': 'Rx.operators',
  'rxjs/operators/share': 'Rx.operators',
  'rxjs/operators/delay': 'Rx.operators',
  'rxjs/operators/combineLatest': 'Rx.operators',
};
