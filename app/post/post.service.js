"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/common/http");
var MyHttpPostService = /** @class */ (function () {
    function MyHttpPostService(http) {
        this.http = http;
        this.serverUrl = "https://httpbin.org/post";
    }
    MyHttpPostService.prototype.postData = function (data) {
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl, { data: data }, { headers: options })
            .map(function (res) { return res; });
    };
    MyHttpPostService.prototype.createRequestOptions = function () {
        var headers = new http_1.HttpHeaders();
        return headers;
    };
    MyHttpPostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MyHttpPostService);
    return MyHttpPostService;
}());
exports.MyHttpPostService = MyHttpPostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGlDQUErQjtBQUMvQiw2Q0FBNkU7QUFHN0U7SUFHSSwyQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixjQUFTLEdBQUcsMEJBQTBCLENBQUM7SUFFUCxDQUFDO0lBRXpDLG9DQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ2hFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU8sZ0RBQW9CLEdBQTVCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFFaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBZlEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBSWlCLGlCQUFVO09BSDNCLGlCQUFpQixDQWdCN0I7SUFBRCx3QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE15SHR0cFBvc3RTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9odHRwYmluLm9yZy9wb3N0XCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgcG9zdERhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwsIHsgZGF0YSB9LCB7IGhlYWRlcnM6IG9wdGlvbnMgfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59XG4iXX0=