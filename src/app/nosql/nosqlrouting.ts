import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DepsPage } from './deps/deps.page';
import { ProvsPage } from './provs/provs.page';
import { DistsPage } from './dists/dists.page';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'deps',
      pathMatch: 'full'
    },
    {
        path: 'deps',
        component: DepsPage
      },
    {
      path: 'provs/:id',
      component: ProvsPage
    },
    {
      path: 'dists/:id',
      component: DistsPage
    }
  ];
@NgModule({
    imports: [
        RouterModule.forChild(
            routes
        )
    ],
    exports: [ RouterModule ]
})
export class Nosqlrouting {
}
