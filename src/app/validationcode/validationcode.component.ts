import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "~/app/shared/user/user.model";
import {Page} from "../../../node_modules/tns-core-modules/ui/page";
import {UserService} from "~/app/shared/user/user.service";

@Component({
    selector: 'ns-validationcode',
    templateUrl: './validationcode.component.html',
    styleUrls: ['./validationcode.component.css']
})
export class ValidationcodeComponent implements OnInit {

    user: User;
    isLoading: boolean;
    isEnabled: boolean = true;

    @ViewChild("validation", {static: false}) validation: ElementRef;

    constructor(private activatedRoute: ActivatedRoute, private page: Page, private userService: UserService, private router: Router) {

    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.user = JSON.parse(this.activatedRoute.snapshot.params.user);
    }

    submit() {
        if (this.user.code == undefined)
            alert({
                title: "Aucun code",
                message: "Veuillez renseigner un code svp.",
                okButtonText: "Ok"
            });
        else if (this.user.code == "")
            alert({
                title: "Aucun code",
                message: "Veuillez renseigner un code svp.",
                okButtonText: "Ok"
            });
        else if (this.user.telephone.length < 4)
            alert({
                title: "Code incorrect",
                message: "Veuillez renseigner un code correct svp.",
                okButtonText: "Ok"
            });
        else {
            this.disableViews();
            this.userService.validateCode(this.user)
                .subscribe((result) => {
                    console.log(result["message_info"]);
                    this.enableViews(true);
                }, (error) => {
                    console.log(error);
                    this.enableViews(false);
                });
        }
    }

    enableViews(success) {
        if (success) {
            console.log("_msg_ Succès");
        }
        else {
            console.log("_msg_ Echec");
        }
        this.validation.nativeElement.text = "Valider";
        this.validation.nativeElement.style.color = "white";
        this.isEnabled = true;
        this.isLoading = false;
    }

    disableViews() {
        console.log("Envoi en cours...");
        this.validation.nativeElement.text = "Envoi en cours...";
        this.validation.nativeElement.style.color = "#C4AFB4";
        this.isEnabled = false;
        this.isLoading = true;
    }
}
