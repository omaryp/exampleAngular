import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() name_user;
  constructor() { }

  ngOnInit() {
  }

}
