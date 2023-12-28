import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
})
export class CityComponent {

  @ViewChild('txtBusqueda') busqueda!: ElementRef<HTMLInputElement>;
  @Output() cityEvent = new EventEmitter<string>();
  // @Output() terminoBusqueda: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe((resOk) => {
      if (resOk.trimStart().length > 0) {
        this.cityEvent.emit(resOk.trimStart());
      } else {
        this.cityEvent.emit(resOk);
      }
    });
  }

  onTeclaPresionada() {
    this.debouncer.next(this.busqueda.nativeElement.value);
  }


  private readonly fb = inject(FormBuilder);




  
 

  // weatherForm = this.fb.nonNullable.group({
  //   city: ['', Validators.required],
  // });



  // onSubmit() {
  //   if (this.weatherForm.valid) {
  //     const city = this.weatherForm.getRawValue().city;
  //     this.cityEvent.emit(city);
  //   }
  // }
}
