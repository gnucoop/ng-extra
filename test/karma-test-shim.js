/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;

// The default time that jasmine waits for an asynchronous test to finish is five seconds.
// If this timeout is too short the CI may fail randomly because our asynchronous tests can
// take longer in some situations (e.g Saucelabs and Browserstack tunnels)
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

__karma__.loaded = function () {};

var baseDir = '/base';
var specFiles = Object.keys(window.__karma__.files).filter(isNgExtraSpecFile);

// Configure the base path and map the different node packages.
System.config({
  baseURL: baseDir,
  paths: {
    'node:*': 'node_modules/*'
  },
  map: {
    'rxjs': 'node:rxjs',
    'main': 'main.js',
    'tslib': 'node:tslib/tslib.js',
    'moment': 'node:moment/min/moment-with-locales.min.js',

    // Angular specific mappings.
    '@angular/core': 'node:@angular/core/bundles/core.umd.js',
    '@angular/core/testing': 'node:@angular/core/bundles/core-testing.umd.js',
    '@angular/common': 'node:@angular/common/bundles/common.umd.js',
    '@angular/common/testing': 'node:@angular/common/bundles/common-testing.umd.js',
    '@angular/common/http': 'node:@angular/common/bundles/common-http.umd.js',
    '@angular/common/http/testing': 'node:@angular/common/bundles/common-http-testing.umd.js',
    '@angular/compiler': 'node:@angular/compiler/bundles/compiler.umd.js',
    '@angular/compiler/testing': 'node:@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/forms': 'node:@angular/forms/bundles/forms.umd.js',
    '@angular/forms/testing': 'node:@angular/forms/bundles/forms-testing.umd.js',
    '@angular/animations': 'node:@angular/animations/bundles/animations.umd.js',
    '@angular/animations/browser': 'node:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations':
      'node:@angular/platform-browser/bundles/platform-browser-animations.umd',
    '@angular/platform-browser':
      'node:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser/testing':
      'node:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic':
      'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/platform-browser-dynamic/testing':
      'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',

    '@angular/cdk': 'node:@angular/cdk/bundles/cdk.umd.js',
    '@angular/cdk/a11y': 'node:@angular/cdk/bundles/cdk-a11y.umd.js',
    '@angular/cdk/accordion': 'node:@angular/cdk/bundles/cdk-accordion.umd.js',
    '@angular/cdk/bidi': 'node:@angular/cdk/bundles/cdk-bidi.umd.js',
    '@angular/cdk/coercion': 'node:@angular/cdk/bundles/cdk-coercion.umd.js',
    '@angular/cdk/collections': 'node:@angular/cdk/bundles/cdk-collections.umd.js',
    '@angular/cdk/keycodes': 'node:@angular/cdk/bundles/cdk-keycodes.umd.js',
    '@angular/cdk/layout': 'node:@angular/cdk/bundles/cdk-layout.umd.js',
    '@angular/cdk/observers': 'node:@angular/cdk/bundles/cdk-observers.umd.js',
    '@angular/cdk/overlay': 'node:@angular/cdk/bundles/cdk-overlay.umd.js',
    '@angular/cdk/platform': 'node:@angular/cdk/bundles/cdk-platform.umd.js',
    '@angular/cdk/portal': 'node:@angular/cdk/bundles/cdk-portal.umd.js',
    '@angular/cdk/scrolling': 'node:@angular/cdk/bundles/cdk-scrolling.umd.js',
    '@angular/cdk/stepper': 'node:@angular/cdk/bundles/cdk-stepper.umd.js',
    '@angular/cdk/table': 'node:@angular/cdk/bundles/cdk-table.umd.js',
    '@angular/cdk/testing': 'node:@angular/cdk/bundles/cdk-testing.umd.js',

    '@angular/material': 'node:@angular/material/bundles/material.umd.js',
    '@angular/material/autocomplete':
      'node:@angular/material/bundles/material-autocomplete.umd.js',
    '@angular/material/button': 'node:@angular/material/bundles/material-button.umd.js',
    '@angular/material/button-toggle':
      'node:@angular/material/bundles/material-button-toggle.umd.js',
    '@angular/material/card': 'node:@angular/material/bundles/material-card.umd.js',
    '@angular/material/checkbox': 'node:@angular/material/bundles/material-checkbox.umd.js',
    '@angular/material/chips': 'node:@angular/material/bundles/material-chips.umd.js',
    '@angular/material/core': 'node:@angular/material/bundles/material-core.umd.js',
    '@angular/material/datepicker': 'node:@angular/material/bundles/material-datepicker.umd.js',
    '@angular/material/dialog': 'node:@angular/material/bundles/material-dialog.umd.js',
    '@angular/material/divider': 'node:@angular/material/bundles/material-divider.umd.js',
    '@angular/material/expansion': 'node:@angular/material/bundles/material-expansion.umd.js',
    '@angular/material/form-field': 'node:@angular/material/bundles/material-form-field.umd.js',
    '@angular/material/grid-list': 'node:@angular/material/bundles/material-grid-list.umd.js',
    '@angular/material/icon': 'node:@angular/material/bundles/material-icon.umd.js',
    '@angular/material/input': 'node:@angular/material/bundles/material-input.umd.js',
    '@angular/material/list': 'node:@angular/material/bundles/material-list.umd.js',
    '@angular/material/menu': 'node:@angular/material/bundles/material-menu.umd.js',
    '@angular/material/paginator': 'node:@angular/material/bundles/material-paginator.umd.js',
    '@angular/material/progress-bar':
      'node:@angular/material/bundles/material-progress-bar.umd.js',
    '@angular/material/progress-spinner':
      'node:@angular/material/bundles/material-progress-spinner.umd.js',
    '@angular/material/radio': 'node:@angular/material/bundles/material-radio.umd.js',
    '@angular/material/select': 'node:@angular/material/bundles/material-select.umd.js',
    '@angular/material/sidenav': 'node:@angular/material/bundles/material-sidenav.umd.js',
    '@angular/material/slide-toggle':
      'node:@angular/material/bundles/material-slide-toggle.umd.js',
    '@angular/material/slider': 'node:@angular/material/bundles/material-slider.umd.js',
    '@angular/material/snack-bar': 'node:@angular/material/bundles/material-snack-bar.umd.js',
    '@angular/material/sort': 'node:@angular/material/bundles/material-sort.umd.js',
    '@angular/material/stepper': 'node:@angular/material/bundles/material-stepper.umd.js',
    '@angular/material/table': 'node:@angular/material/bundles/material-table.umd.js',
    '@angular/material/tabs': 'node:@angular/material/bundles/material-tabs.umd.js',
    '@angular/material/toolbar': 'node:@angular/material/bundles/material-toolbar.umd.js',
    '@angular/material/tooltip': 'node:@angular/material/bundles/material-tooltip.umd.js',

    '@gnucoop/ng-extra': 'dist/packages/ng-extra/index.js',
    '@gnucoop/ng-extra/geolocation': 'dist/packages/ng-extra/geolocation/index.js',

    '@gnucoop/mat-extra': 'dist/packages/mat-extra/public-api.js',
    '@gnucoop/ion-extra': 'dist/packages/mat-extra/public-api.js',

  },
  packages: {
    // Thirdparty barrels.
    'rxjs': {main: 'index'},

    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
      defaultExtension: 'js'
    }
  }
});

// Configure the Angular test bed and run all specs once configured.
 configureTestBed()
  .then(runNgExtraSpecs)
  .then(__karma__.start, __karma__.error);


/** Runs the Ng-Extra specs in Karma. */
function runNgExtraSpecs() {
  // By importing all spec files, Karma will run the tests directly.
  return Promise.all(specFiles.map(function(fileName) {
    return System.import(fileName);
  }));
}

/** Whether the specified file is part of Ng-Extra. */
function isNgExtraSpecFile(path) {
  return path.slice(-8) === '.spec.js' && path.indexOf('node_modules') === -1;
}

/** Configures Angular's TestBed. */
function configureTestBed() {
  return Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
  ]).then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];

    var testBed = testing.TestBed.initTestEnvironment(
      testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting()
    );

    patchTestBedToDestroyFixturesAfterEveryTest(testBed);
  });
}

/**
 * Monkey-patches TestBed.resetTestingModule such that any errors that occur during component
 * destruction are thrown instead of silently logged. Also runs TestBed.resetTestingModule after
 * each unit test.
 *
 * Without this patch, the combination of two behaviors is problematic for Angular Material:
 * - TestBed.resetTestingModule catches errors thrown on fixture destruction and logs them without
 *     the errors ever being thrown. This means that any component errors that occur in ngOnDestroy
 *     can encounter errors silently and still pass unit tests.
 * - TestBed.resetTestingModule is only called *before* a test is run, meaning that even *if* the
 *    aforementioned errors were thrown, they would be reported for the wrong test (the test that's
 *    about to start, not the test that just finished).
 */
function patchTestBedToDestroyFixturesAfterEveryTest(testBed) {
  // Original resetTestingModule function of the TestBed.
  var _resetTestingModule = testBed.resetTestingModule;

  // Monkey-patch the resetTestingModule to destroy fixtures outside of a try/catch block.
  // With https://github.com/angular/angular/commit/2c5a67134198a090a24f6671dcdb7b102fea6eba
  // errors when destroying components are no longer causing Jasmine to fail.
  testBed.resetTestingModule = function() {
    try {
      this._activeFixtures.forEach(function (fixture) { fixture.destroy(); });
    } finally {
      this._activeFixtures = [];
      // Regardless of errors or not, run the original reset testing module function.
      _resetTestingModule.call(this);
    }
  };

  // Angular's testing package resets the testing module before each test. This doesn't work well
  // for us because it doesn't allow developers to see what test actually failed.
  // Fixing this by resetting the testing module after each test.
  // https://github.com/angular/angular/blob/master/packages/core/testing/src/before_each.ts#L25
  afterEach(function() {
    testBed.resetTestingModule();
  });
}
