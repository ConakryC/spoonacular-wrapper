import { Http, RequestOptions, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

const apiKey = '';
const autoCompImages = 'https://spoonacular.com/cdn/ingredients_100x100/';

export class Search {

    constructor(private http: Http) {}

    itemByUPC(upc: string) {
        let headers = new Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');

        let reqOps = new RequestOptions({
            headers: headers
        });

        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/upc/'
            + upc, reqOps).map(res => res.json()).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log("API Error");
            }
        );
    }

    itemByKeyword(s: string) {
        let headers = new Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');

        let reqOps = new RequestOptions({
            headers: headers
        });

        let search = '?number=10&offset=0&query=' + s;

        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/search'
            + search, reqOps).map(res => res.json()).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log("API Error");
            }
        );
    }

    recipeByIngredients(items: string, sort: string) {
        let headers = new Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');

        let reqOps = new RequestOptions({
            headers: headers
        });

        let ingrds= '?fillIngredients=false&ingredients=' + items;
        let rank = '&limitLicense=false&number=5&ranking=' + sort;

        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients'
            + ingrds + rank, reqOps).map(res => res.json()).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log("API Error");
            }
        );
    }
}

export class Data {

    constructor(private http: Http) {}

    itemID(id: string) {
        let headers = new Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');

        let reqOps = new RequestOptions({
            headers: headers
        });

        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/'
            + id, reqOps).map(res => res.json()).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log("API Error");
            }
        );
    }

    recipeID(id: string) {
        let headers = new Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');

        let reqOps = new RequestOptions({
            headers: headers
        });

        let recipe = id + '/information?includeNutrition=false';

        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'
            + recipe, reqOps).map(res => res.json()).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log("API Error");
            }
        );
    }
}

