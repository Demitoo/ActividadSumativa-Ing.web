import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import{Regiones,Region,Dia,Clima,DiaDeLaSemana} from '../interfaces/interfaces'

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.scss']
})


export class SemanalComponent implements OnInit {

  regiones: Regiones[]=[
    {
      region: Region.Valparaiso,
      celsius: true,
      semana:[{
        dia: DiaDeLaSemana.Lunes,
        clima: Clima.Lluvioso,
        temperatura:20
      },{
        dia: DiaDeLaSemana.Martes,
        clima: Clima.Lluvioso,
        temperatura:21
      },
      {
        dia: DiaDeLaSemana.Miercoles,
        clima: Clima.Tormenta,
        temperatura:22
      },
      {
        dia: DiaDeLaSemana.Jueves,
        clima: Clima.Tormenta,
        temperatura:23
      },
      {
        dia: DiaDeLaSemana.Viernes,
        clima: Clima.Nublado,
        temperatura:24
      },
      {
        dia: DiaDeLaSemana.Sabado,
        clima: Clima.Nublado,
        temperatura:25
      },
      {
        dia: DiaDeLaSemana.Domingo,
        clima: Clima.Soleado,
        temperatura:26
      }
  
      ]
    }
  ,
  
  {
    region:Region.Metropolitana,
    celsius:true,
    semana:[{
      dia:DiaDeLaSemana.Lunes,
      clima: Clima.Soleado,
      temperatura: 25
    },{
      dia: DiaDeLaSemana.Martes,
      clima: Clima.Soleado,
      temperatura:29
    },
    {
      dia: DiaDeLaSemana.Miercoles,
      clima: Clima.Nublado,
      temperatura: 15
    },
    {
      dia: DiaDeLaSemana.Jueves,
      clima: Clima.Nublado,
      temperatura:17
    },
    {
      dia: DiaDeLaSemana.Viernes,
      clima: Clima.Lluvioso,
      temperatura:20
    },
    {
      dia: DiaDeLaSemana.Sabado,
      clima: Clima.Soleado,
      temperatura:30
    },
    {
      dia: DiaDeLaSemana.Domingo,
      clima: Clima.Soleado,
      temperatura:26
    }
  
    ]
  }
  ,
  {
  region: Region.BioBio,
  celsius: true,
  semana:[{
    dia: DiaDeLaSemana.Lunes,
    clima: Clima.Lluvioso,
    temperatura:18
  },{
    dia: DiaDeLaSemana.Martes,
    clima: Clima.Tormenta,
    temperatura:12
  },
  {
    dia: DiaDeLaSemana.Miercoles,
    clima: Clima.Tormenta,
    temperatura:14
  },
  {
    dia: DiaDeLaSemana.Jueves,
    clima: Clima.Tormenta,
    temperatura:11
  },
  {
    dia: DiaDeLaSemana.Viernes,
    clima: Clima.Nublado,
    temperatura:19
  },
  {
    dia: DiaDeLaSemana.Sabado,
    clima: Clima.Soleado,
    temperatura:25
  },
  {
    dia: DiaDeLaSemana.Domingo,
    clima: Clima.Soleado,
    temperatura:26
  }
  
  ]
  }
  ,
  {
  region: Region.Araucania,
  celsius: true,
  semana:[{
  dia: DiaDeLaSemana.Lunes,
  clima: Clima.Soleado,
  temperatura:22
  },{
  dia: DiaDeLaSemana.Martes,
  clima: Clima.Lluvioso,
  temperatura:11
  },
  {
  dia: DiaDeLaSemana.Miercoles,
  clima: Clima.Lluvioso,
  temperatura:14
  },
  {
  dia: DiaDeLaSemana.Jueves,
  clima: Clima.Lluvioso,
  temperatura:12
  },
  {
  dia: DiaDeLaSemana.Viernes,
  clima: Clima.Lluvioso,
  temperatura:19
  },
  {
  dia: DiaDeLaSemana.Sabado,
  clima: Clima.Soleado,
  temperatura:26
  },
  {
  dia: DiaDeLaSemana.Domingo,
  clima: Clima.Nublado,
  temperatura:17
  }]
  }
  ]

  temperaturaActual:Boolean=true;
  nombreRegionSeleccionada: String = "";
  regionActual:Regiones = this.regiones[0];
  diaActual:Dia=this.regiones[0].semana[0];
  show_form:Boolean=false;


  formulario:FormGroup;
  controlRegiones:FormControl= new FormControl;
  controlClima:FormControl=new FormControl;
  controlDias:FormControl=new FormControl;
  controlTemperatura:FormControl=new FormControl;
  controlUnidad:FormControl=new FormControl;



constructor(private fb: FormBuilder) {


}

ngOnInit(){
  this.formulario=this.fb.group({
    controlRegiones:this.controlRegiones,
    controlClima:this.controlClima,
    controlDias:this.controlDias,
    controlTemperatura:this.controlTemperatura,
    controlUnidad:this.controlUnidad
  })


}




cambioRadio(event:any){
  this.nombreRegionSeleccionada=event.target.value;
  for (let i = 0 ; i < this.regiones.length; i++) {
    if(this.regiones[i].region==this.nombreRegionSeleccionada){
      this.regionActual=this.regiones[i]
      this.temperaturaActual=this.regiones[i].celsius
    }
    
  }
}

cambioFaren(){
  this.temperaturaActual=false;
}
cambioCel(){
  this.temperaturaActual=true;
}
agregar(){
  for ( let i=0;i<this.regiones.length;i++){
    if(this.regiones[i].region==this.controlRegiones.value){
      for(let k=0;k<this.regiones[i].semana.length;k++){
        if(this.regiones[i].semana[k].dia==this.controlDias.value){
          this.regiones[i].semana[k].clima=this.controlClima.value
          if(this.controlUnidad.value=="Farenheit"){
            this.regiones[i].semana[k].temperatura=((this.controlTemperatura.value)-32)*5/9

          }else{
            this.regiones[i].semana[k].temperatura=this.controlTemperatura.value
          }
        }
      }
    }
  }
}


}




