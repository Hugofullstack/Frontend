import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute, 
    private personaService:PersonaService,
    private router: Router,
    public imageService: ImageService
    ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.details(id).subscribe(
      data => {
        this.persona = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
      )
  }

  onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);

  }
)
  }
  uploadImage($event:any){
    this.imageService.uploadImage($event)

  }

}
