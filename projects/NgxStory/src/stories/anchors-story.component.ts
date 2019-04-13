import {Component} from '@angular/core';

@Component({
    selector: 'storyapp-anchors-story',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3>Anchors</h3>
                </div>
                <div class="col-12">
                    <mat-card class="example-card">
                        <mat-card-content>
                            <div class="row">
                                <div class="col-4">Normal</div>
                                <div class="col-4">Secondary light</div>
                                <div class="col-4">
                                    <a href="#">Chambray sriracha gastropub</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">Hover</div>
                                <div class="col-4">Secondary light</div>
                                <div class="col-4">
                                    <a href="#" class="is-hovered">Chambray sriracha gastropub</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">Active</div>
                                <div class="col-4">Secondary light</div>
                                <div class="col-4">
                                    <a href="#" class="is-active">Chambray sriracha gastropub</a>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12">
                    <mat-card class="bc-socondary-dark dark-background">
                        <mat-card-content>
                            <div class="row">
                                <div class="col-4">Normal</div>
                                <div class="col-4">Secondary light</div>
                                <div class="col-4">
                                    <a href="#">Chambray sriracha gastropub</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">Hover</div>
                                <div class="col-4">Secondary light</div>
                                <div class="col-4">
                                    <a href="#" class="is-hovered">Chambray sriracha gastropub</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">Active</div>
                                <div class="col-4">Secondary light</div>
                                <div class="col-4">
                                    <a href="#" class="is-active">Chambray sriracha gastropub</a>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
        </div>
    `
})
export class AnchorsStoryComponent {
}
