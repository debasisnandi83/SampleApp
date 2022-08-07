import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit, AfterViewInit, OnDestroy {
    
    id: any;
    constructor(private fb:FormBuilder, private router: Router, private route: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        });
        
    }

    ngAfterViewInit(){
    }

    ngOnDestroy(){
    }

}
