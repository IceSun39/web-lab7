import { Component } from '@angular/core';
import { Animal } from '../../classes/animal';
import { Cat } from '../../classes/cat';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-animals',
  styleUrl: './animals.css',
  templateUrl: './animals.html',
})
export class AnimalsComponent {
  animal_show: string = '';
  cat_show: string = '';
  CAT_KOEF: number = 15;
  calcWeight(
    animal_height: string,
    animal_koef: string,
    animal_name: string,
    cat_name: string,
    cat_brade: string,
    cat_height: string,
  ) {
    try {
      let animal = new Animal(animal_name, parseFloat(animal_height));
      let cat = new Cat(cat_name, parseFloat(cat_height), cat_brade);
      this.animal_show = "Ім'я " + animal.name + ' Вага ' + animal.getWeigth(parseFloat(animal_koef));
      this.cat_show =
        "Ім'я " + cat.name + ' Порода ' + cat.brade + ' Вага у грамах ' + cat.getWeigth(this.CAT_KOEF);
    } catch {
      throw 'Помилка вхідних даних';
    }
  }
}
