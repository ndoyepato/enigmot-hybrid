import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "~/app/shared/user/user.model";
import {Page} from "../../../node_modules/tns-core-modules/ui/page";
import {UserService} from "~/app/shared/user/user.service";
import {RouterExtensions} from "nativescript-angular";

var Toast = require("nativescript-toast");

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    user: User;
    isLoading: boolean;
    isEnabled: boolean = true;
    isLoggingIn: boolean = true;
    submitBtnText: string = "Connexion";
    toggleBtnText: string = "Inscription";

    @ViewChild("connexion", {static: false}) connexion: ElementRef;
    @ViewChild("inscription", {static: false}) inscription: ElementRef;
    @ViewChild("username_emil", {static: false}) username_emil: ElementRef;
    @ViewChild("email", {static: false}) email: ElementRef;
    @ViewChild("password", {static: false}) password: ElementRef;
    @ViewChild("username", {static: false}) username: ElementRef;
    @ViewChild("qst", {static: false}) qst: ElementRef;

    constructor(private router: RouterExtensions, private page: Page, private userService: UserService) {
        this.user = new User();
        this.isLoading = false;
        this.isEnabled = true;
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    submit() {
        console.log(this.user);
        if (this.user.username == undefined || this.user.username == "")
            alert({
                title: "Champ(s) non renseigné(s)",
                message: "Veuillez renseigner un nom d'utilisateur ou un email svp.",
                okButtonText: "Ok"
            });
        else if (this.user.password == undefined || this.user.password == "") {
            alert({
                title: "Champ(s) non renseigné(s)",
                message: "Veuillez renseigner votre mot de passe svp.",
                okButtonText: "Ok"
            });
        }
        else {
            // Toast.makeText("Hello World", "long").show();
            console.log(this.user);
            this.disableViews();
            this.userService.login(this.user)
                .subscribe((result) => {
                    console.log(result);
                    this.enableViews(true);
                    //this.user.code = result["success"].code;
                    this.router.navigate(["vc", JSON.stringify(this.user)]);
                }, (error) => {
                    console.log(error);
                    this.enableViews(false);
                    Toast.makeText("Impossible de se connecter", "long").show();
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

        this.connexion.nativeElement.text = this.submitBtnText;
        this.isEnabled = true;
        this.isLoading = false;
        this.connexion.nativeElement.style.color = "white";
        this.connexion.nativeElement.style.opacity = 1.0;
        this.username_emil.nativeElement.style.opacity = 1.0;
        this.username.nativeElement.style.opacity = 1.0;
        this.email.nativeElement.style.opacity = 1.0;
        this.password.nativeElement.style.opacity = 1.0;
    }

    disableViews() {
        console.log("Envoi en cours...");

        this.connexion.nativeElement.text = "Envoi en cours...";
        this.isEnabled = false;
        this.isLoading = true;
        this.connexion.nativeElement.style.opacity = 0.5;
        this.username_emil.nativeElement.style.opacity = 0.5;
        this.username.nativeElement.style.opacity = 0.5;
        this.email.nativeElement.style.opacity = 0.5;
        this.password.nativeElement.style.opacity = 0.5;
    }

    toggleLogin() {
        this.isLoggingIn = !this.isLoggingIn;

        if (this.isLoggingIn) {
            this.submitBtnText = "Connexion";
            this.toggleBtnText = "S'inscription";
            this.connexion.nativeElement.text = this.submitBtnText;
            this.inscription.nativeElement.text = this.toggleBtnText;
            this.username.nativeElement.visibility = "collapse";
            this.email.nativeElement.visibility = "collapse";
            this.username_emil.nativeElement.visibility = "visible";
            this.qst.nativeElement.text = "Vous n'avez pas de compte?";
        } else {
            this.submitBtnText = "Inscription";
            this.toggleBtnText = "Se connecter";
            this.connexion.nativeElement.text = this.submitBtnText;
            this.inscription.nativeElement.text = this.toggleBtnText;
            this.username.nativeElement.visibility = "visible";
            this.email.nativeElement.visibility = "visible";
            this.username_emil.nativeElement.visibility = "collapse";
            this.qst.nativeElement.text = "Vous avez déjà un compte?";
        }
    }

    initPassword() {
        Toast.makeText("Init password", "long").show();
    }

}
