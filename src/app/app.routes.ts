import { Routes } from '@angular/router';
import { Contador } from './contador/contador';
import { Matatopos } from './matatopos/matatopos';
import { Kanban } from './kanban/kanban';
import { EyeCandy } from './eye-candy/eye-candy';
import { Carrera } from './carrera/carrera';
import { ListaPersonajes } from './Personajes/lista-personajes/lista-personajes';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'matatopos', component: Matatopos},
    { path: 'kanban', component: Kanban},
    { path: 'eye-candy', component: EyeCandy},
    { path: 'carrera', component: Carrera},
    { path: 'Personajes/lista-personajes', component: ListaPersonajes},
    { path: 'formulario', component: Formulario}
];



