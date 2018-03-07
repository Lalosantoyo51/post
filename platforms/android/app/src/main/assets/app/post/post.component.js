"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var post_service_1 = require("./post.service");
var PostComponent = /** @class */ (function () {
    // << (hide)
    function PostComponent(myPostService) {
        this.myPostService = myPostService;
        // >> (hide)
        this.isItemVisible = false;
    }
    PostComponent.prototype.submit = function () {
        this.makePostRequest();
    };
    PostComponent.prototype.makePostRequest = function () {
        var _this = this;
        this.myPostService
            .postData({ username: this.name, })
            .subscribe(function (res) {
            _this.message = res.json.data.username;
            // >> (hide)
            _this.isItemVisible = true;
            // << (hide)
        });
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: "ns-post",
            moduleId: module.id,
            templateUrl: "./post.component.html",
            providers: [post_service_1.MyHttpPostService]
        }),
        __metadata("design:paramtypes", [post_service_1.MyHttpPostService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUlqRSxpQ0FBK0I7QUFDL0IsK0NBQW1EO0FBUW5EO0lBTUksWUFBWTtJQUNaLHVCQUFvQixhQUFnQztRQUFoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFIcEQsWUFBWTtRQUNMLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBRWtCLENBQUM7SUFFbEQsOEJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sdUNBQWUsR0FBdkI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxhQUFhO2FBQ2IsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUksQ0FBQzthQUNuQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsS0FBSSxDQUFDLE9BQU8sR0FBUyxHQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDN0MsWUFBWTtZQUNaLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLFlBQVk7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdEJRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLGdDQUFpQixDQUFDO1NBQ2pDLENBQUM7eUNBUXFDLGdDQUFpQjtPQVAzQyxhQUFhLENBdUJ6QjtJQUFELG9CQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgeyBNeUh0dHBQb3N0U2VydmljZSB9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcG9zdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wb3N0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwUG9zdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RDb21wb25lbnQge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2U6c3RyaW5nO1xuICAgIFxuICAgIC8vID4+IChoaWRlKVxuICAgIHB1YmxpYyBpc0l0ZW1WaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gPDwgKGhpZGUpXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBteVBvc3RTZXJ2aWNlOiBNeUh0dHBQb3N0U2VydmljZSkgeyB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICB0aGlzLm1ha2VQb3N0UmVxdWVzdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWFrZVBvc3RSZXF1ZXN0KCkge1xuICAgICAgICB0aGlzLm15UG9zdFNlcnZpY2VcbiAgICAgICAgICAgIC5wb3N0RGF0YSh7IHVzZXJuYW1lOiB0aGlzLm5hbWUsICB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICg8YW55PnJlcykuanNvbi5kYXRhLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgIC8vID4+IChoaWRlKVxuICAgICAgICAgICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gPDwgKGhpZGUpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19