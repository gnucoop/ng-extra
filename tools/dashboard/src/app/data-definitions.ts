/** Interface that describes the payload results from the Firebase database. */
export interface PayloadResult {
  timestamp: number;
  // Ng-Extra bundles
  ng_extra_umd: number;
  ng_extra_umd_minified_uglify: number;
  ng_extra_fesm_2015: number;
  ng_extra_fesm_2014: number;
  // Mat-Extra bundles
  mat_extra_umd: number;
  mat_extra_umd_minified_uglify: number;
  mat_extra_fesm_2015: number;
  mat_extra_fesm_2014: number;
  // Ion-Extra bundles
  ion_extra_umd: number;
  ion_extra_umd_minified_uglify: number;
  ion_extra_fesm_2015: number;
  ion_extra_fesm_2014: number;
}

/** Type that specifies the available coverage entries. */
export type CoverageEntries = 'branches' | 'functions' | 'lines' | 'statements';

/** Interface that describes the coverage reports in Firebase. */
export interface CoverageResult {
  branches: CoverageDataEntry;
  functions: CoverageDataEntry;
  lines: CoverageDataEntry;
  statements: CoverageDataEntry;
  timestamp: number;
}

/** Interface that describes data entries for different coverage types. */
export interface CoverageDataEntry {
  covered: number;
  pct: number;
  skipped: number;
  total: number;
}
