import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  setNombre(nombre:string) {
    localStorage.setItem("nombre", nombre);
  }

  getNombre(nombre:string) {
    localStorage.getItem(nombre);
  }

  setItem(key:string, item:string) {
    localStorage.setItem(key, item);
  }
  
  getItem(key:string) {
    return localStorage.getItem(key);
  }

  removeItem(key:string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
