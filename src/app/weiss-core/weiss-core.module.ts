import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CardEffects } from './store/effects/card.effects';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [CommonModule, EffectsModule.forFeature([CardEffects])],
  exports: [CardComponent]
})
export class WeissCoreModule {}
