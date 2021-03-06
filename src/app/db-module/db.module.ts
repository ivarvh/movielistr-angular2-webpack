import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MovieService} from "./movie.service";

@NgModule({
    imports: [CommonModule],
    providers: [MovieService]
})
export class DbModule {
}
