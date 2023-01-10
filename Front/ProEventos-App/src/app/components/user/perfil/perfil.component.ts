import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  form: FormGroup;
  id!: string;
  loading = false;
  submitted = false

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validation();
  }

  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      descricao: ['', Validators.required],
      funcao: ['', Validators.required],
      senha: ['', [Validators.minLength(6), Validators.nullValidator]],
      confirmeSenha: ['', Validators.nullValidator],
    }, formOptions);
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
  }

  public resetForm(event: any): void {
    event.preventDefault();
    this.submitted = false;
    this.form.reset;
  }
}
