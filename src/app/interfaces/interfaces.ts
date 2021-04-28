export interface Regiones{
    region: Region,
    celsius: Boolean,
    semana: Dia[],
}
export interface Dia{
    dia: DiaDeLaSemana,
    clima: Clima,
    temperatura:number,
}
export enum Clima{
    Soleado = "Soleado"
    ,
    Lluvioso = "Lluvioso"
    ,
    Nublado = "Nublado"
    ,
    Tormenta = "Tormenta"
}

export enum Region{
    Valparaiso="Valparaiso"
    ,
    Metropolitana="Metropolitana"
    ,
    BioBio="BioBio"
    ,
    Araucania="Araucania"
}

export enum DiaDeLaSemana{
    Lunes="Lunes"
    ,
    Martes="Martes"
    ,
    Miercoles="Miercoles"
    ,Jueves="Jueves"
    ,Viernes="Viernes"
    ,Sabado="Sabado"
    ,Domingo="Domingo"
}
