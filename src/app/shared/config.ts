import { getString, setString } from "tns-core-modules/application-settings";

export class Config {
    private static baseUrl = "https://tailleur.xeuweul.com/api";
    static requestAcode = Config.baseUrl + "/register";
    static verifierCode = Config.baseUrl + "/verification";
    static putUser = Config.baseUrl + "/users_update";
    static userDetails = Config.baseUrl + "/details";
    static getUsers = Config.baseUrl + "/clients";
    static getComandes = Config.baseUrl + "/commandes";
    static postClient = Config.baseUrl + "/clients";
    static postCommandes = Config.baseUrl + "/commandes";
    static getModeles = Config.baseUrl + "/modeles";
    static changerStatus = Config.baseUrl + "/traitement";
    static token_key = "token_key_";


    static modelExample = "https://tailleur.xeuweul.com/api";

     static setToken(token) {
        setString(Config.token_key, token);
    }
    static getToken() {
        getString(Config.token_key, "");
    }

    static isAuthenticated(){
        return (getString(Config.token_key, "") != "");
    }
}
