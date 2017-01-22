"use strict";
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var apiKey = 'LGzRSpu12QmshEYgXnbe5NvD91DYp183EV0jsnjoKY7hGWVZs2';
var autoCompImages = 'https://spoonacular.com/cdn/ingredients_100x100/';
var Search = (function () {
    function Search(http) {
        this.http = http;
    }
    Search.prototype.itemByUPC = function (upc) {
        var headers = new http_1.Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');
        var reqOps = new http_1.RequestOptions({
            headers: headers
        });
        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/upc/'
            + upc, reqOps).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log("API Error");
        });
    };
    Search.prototype.itemByKeyword = function (s) {
        var headers = new http_1.Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');
        var reqOps = new http_1.RequestOptions({
            headers: headers
        });
        var search = '?number=10&offset=0&query=' + s;
        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/search'
            + search, reqOps).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log("API Error");
        });
    };
    Search.prototype.recipeByIngredients = function (items, sort) {
        var headers = new http_1.Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');
        var reqOps = new http_1.RequestOptions({
            headers: headers
        });
        var ingrds = '?fillIngredients=false&ingredients=' + items;
        var rank = '&limitLicense=false&number=5&ranking=' + sort;
        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients'
            + ingrds + rank, reqOps).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log("API Error");
        });
    };
    return Search;
}());
exports.Search = Search;
var Data = (function () {
    function Data(http) {
        this.http = http;
    }
    Data.prototype.itemID = function (id) {
        var headers = new http_1.Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');
        var reqOps = new http_1.RequestOptions({
            headers: headers
        });
        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/'
            + id, reqOps).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log("API Error");
        });
    };
    Data.prototype.recipeID = function (id) {
        var headers = new http_1.Headers();
        headers.append('X-Mashape-Key', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json ');
        var reqOps = new http_1.RequestOptions({
            headers: headers
        });
        var recipe = id + '/information?includeNutrition=false';
        this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'
            + recipe, reqOps).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log("API Error");
        });
    };
    return Data;
}());
exports.Data = Data;
