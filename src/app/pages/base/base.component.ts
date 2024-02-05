import { Component } from '@angular/core';
import { EmployeeFormComponent } from "../../components/employee-form/employee-form.component";

@Component({
    selector: 'app-base',
    standalone: true,
    templateUrl: './base.component.html',
    styleUrl: './base.component.css',
    imports: [EmployeeFormComponent]
})
export class BaseComponent {

}
