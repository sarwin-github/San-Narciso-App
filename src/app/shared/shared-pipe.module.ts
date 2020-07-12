import { NgModule } from '@angular/core';
import { SearchPipePipe } from './pipes/search-pipe.pipe'; 

const classesToInclude = [
  SearchPipePipe
]

@NgModule({
  imports: [
  ],
  entryComponents: [],
  providers: [],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedPipeModule { }
