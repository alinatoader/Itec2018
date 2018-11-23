import { Component } from "@angular/core";
import { NgbPanelChangeEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
    templateUrl: 'questions-display.component.html'
})
export class QuestionsDisplayComponent{
    private categories = ['Category1', 'Category2', 'Category3'];

    beforeChange($event: NgbPanelChangeEvent) {

        if ($event.panelId === 'preventchange-2') {
            console.log('if 1');
          $event.preventDefault();
        }
    
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            console.log('if2');
          $event.preventDefault();
        }
    }
}