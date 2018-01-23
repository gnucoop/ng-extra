import {BuildPackage} from 'ng-extra-build-tools';

export const ngExtraPackage = new BuildPackage('ng-extra');
export const matExtraPackage = new BuildPackage('mat-extra', [ngExtraPackage]);
export const ionExtraPackage = new BuildPackage('ion-extra', [ngExtraPackage]);
export const matExamplesPackage = new BuildPackage('mat-extra-examples', [matExtraPackage]);
export const ionExamplesPackage = new BuildPackage('ion-extra-examples', [matExtraPackage]);

// The ng-extra, mat-extra and ion-extra packages re-exports
// their secondary entry-points at the root so that all of the
// components can still be imported through `@gnucoop/ng-extra`,
// `@gnucoop/mat-extra` and ``@gnucoop/ion-extra`
ngExtraPackage.exportsSecondaryEntryPointsAtRoot = true;
matExtraPackage.exportsSecondaryEntryPointsAtRoot = true;
ionExtraPackage.exportsSecondaryEntryPointsAtRoot = true;
