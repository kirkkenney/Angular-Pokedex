import { Pipe, PipeTransform } from '@angular/core';

// This custom Pipe receives the Pokemon object, and returns the English
// language Pokedex description
@Pipe({
  name: 'getspecieslang'
})
export class GetspecieslangPipe implements PipeTransform {

  transform(value: {}): string {
    let description = '';
    const entries = value['flavor_text_entries'];
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry['language']['name'] === 'en') {
        description = entry['flavor_text']
        return description;
      }
    }
    return description;
  }

}
