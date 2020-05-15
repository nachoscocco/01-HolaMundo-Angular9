import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})

export class BodyComponent{


    mostrar  = true;
    frase: any ={
        mensaje : 'Voy a ser Rey de los Piratas!',
        autor: "Monkey D'Luffy"
    };

    yonkos: string[] = ['Big Mom', 'Shanks', 'Kurohige', 'Kaido'];

    fnRotar=(mostrar) => !mostrar;
}