import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EbecuadorSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EbecuadorSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EbecuadorSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EbecuadorSharedModule {
  static forRoot() {
    return {
      ngModule: EbecuadorSharedModule
    };
  }
}
