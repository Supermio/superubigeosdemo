import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DepPage } from './dep/dep.page';
import { ProvPage } from './prov/prov.page';
import { DistPage } from './dist/dist.page';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
        path: 'home',
        component: DepPage
    },
    {
        path: 'prov/:id',
        component: ProvPage
    },
    {
        path: 'dist/:id',
        component: DistPage
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(
            routes
        )
    ],
    exports: [RouterModule]
})
export class OnlineRouting {
}
