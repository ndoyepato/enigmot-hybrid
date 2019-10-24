import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "~/app/shared/user/user.model";
import {Page} from "../../../node_modules/tns-core-modules/ui/page";
import {confirm} from "../../../node_modules/tns-core-modules/ui/dialogs";
import {UserService} from "~/app/shared/user/user.service";
import {RouterExtensions} from "nativescript-angular";
//var Toast = require("nativescript-toast");

@Component({
    selector: 'ns-mypage',
    templateUrl: './mypage.component.html',
    styleUrls: ['./mypage.component.css']
})

export class MypageComponent implements OnInit {
    user: User;
    isLoading: boolean;
    isEnabled: boolean = true;

    @ViewChild("connexion", {static: false}) connexion: ElementRef;

    constructor(private router: RouterExtensions, private page: Page, private userService: UserService) {
        this.user = new User();
        this.isLoading = false;
        this.isEnabled = true;
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    submit() {
        console.log("Ok");
        if (this.user.telephone == undefined)
            alert({
                title: "Aucun numero",
                message: "Veuillez renseigner un numero svp.",
                okButtonText: "Ok"
            });
        else if (this.user.telephone == "")
            alert({
                title: "Aucun numero",
                message: "Veuillez renseigner un numero svp.",
                okButtonText: "Ok"
            });
        else if (this.user.telephone.length < 9)
            alert({
                title: "Numero incorrect",
                message: "Veuillez renseigner un numero correct svp.",
                okButtonText: "Ok"
            });
        else {
            //Toast.makeText("Hello World", "long").show();
            confirm({
                title: "Confirmer numero",
                message: "Voulez-vous vraiment utiliser ce numero " + this.user.telephone,
                okButtonText: "Ok",
                neutralButtonText: "Annuler"
            }).then((result: boolean) => {
                if (result == true) {
                    this.disableViews();
                    this.userService.requestAcode(this.user)
                        .subscribe((result) => {
                            console.log(result);
                            this.enableViews(true);
                            //this.user.code = result["success"].code;
                            this.router.navigate(["vc", JSON.stringify(this.user)]);
                        }, (error) => {
                            console.log(error);
                            this.enableViews(false);
                        });
                } else {
                    console.log("Envoi annulé. Veuilleez entrer un autre numero svp");
                }
            })
        }
    }

    enableViews(success) {
        if (success) {
            console.log("_msg_ Succès");
        }
        else {
            console.log("_msg_ Echec");
        }
        this.connexion.nativeElement.text = "Connexion";
        this.connexion.nativeElement.style.color = "white";
        this.isEnabled = true;
        this.isLoading = false;
    }

    disableViews() {
        console.log("Envoi en cours...");
        this.connexion.nativeElement.text = "Envoi en cours...";
        this.connexion.nativeElement.style.color = "white";
        this.isEnabled = false;
        this.isLoading = true;
    }

}
