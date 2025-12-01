import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import {Persona, SqliteService} from "../services/sqlite-service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ReactiveFormsModule, IonItem, IonLabel, IonInput, IonButton],
})
export class HomePage implements OnInit {

  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private db: SqliteService) {}

  async ngOnInit(){

    this.formulario = this.fb.group({
        rut: ['', Validators.required],
        nombre: ['', Validators.required],
        apellidop: ['', Validators.required],
        apellidom: ['', Validators.required],
        direccion: ['', Validators.required],
        comuna: ['', Validators.required],
        region: ['', Validators.required],

      })
    }

  async guardarDatos(){
    if(this.formulario.invalid) return;
    console.log(this.formulario.value);

    const persona: Persona = this.formulario.value;
    try {

      await this.db.insertarPersona(persona);

    }catch (error) {

      console.error(error);

    }

  }

}
