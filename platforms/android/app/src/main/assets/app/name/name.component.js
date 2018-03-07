"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var servicio_server_1 = require("../conex/servicio.server");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(router, profileService) {
        this.router = router;
        this.profileService = profileService;
        this.name = "";
        this.selectedIndex = 1;
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createProfile = function () {
        console.log(this.profileService.URL);
        this.profileService.create({
            name: this.name
        }).subscribe(function (profile) {
            console.log(JSON.stringify(profile));
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: "ns-create",
            moduleId: module.id,
            templateUrl: "./name.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, servicio_server_1.ProfileService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSxzREFBK0Q7QUFHL0QsNERBQXVEO0FBT3ZEO0lBS0kseUJBQW9CLE1BQXlCLEVBQVUsY0FBK0I7UUFBbEUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFKdEYsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixrQkFBYSxHQUFHLENBQUMsQ0FBQztJQUtqQixDQUFDO0lBQ0Ysa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCx1Q0FBYSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSTtTQUNqQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBTztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUMsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFdkMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBdEJRLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBTStCLHlCQUFnQixFQUEyQixnQ0FBYztPQUw3RSxlQUFlLENBdUIzQjtJQUFELHNCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge3VzZXJSfSBmcm9tIFwiLi4vLi4vYXBwL21vZGVsdXNlci91c2VyLm1vZGVsXCJcblxuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4uL2NvbmV4L3NlcnZpY2lvLnNlcnZlclwiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWNyZWF0ZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9uYW1lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbmFtZTpzdHJpbmcgPSBcIlwiO1xuICAgIHNlbGVjdGVkSW5kZXggPSAxO1xuXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHByb2ZpbGVTZXJ2aWNlIDogUHJvZmlsZVNlcnZpY2UpIHtcbiAgICAgICBcbiAgICAgfVxuICAgIG5nT25Jbml0KCkgOiB2b2lkIHtcbiAgICAgICAgXG4gICAgfVxuICAgIGNyZWF0ZVByb2ZpbGUoKSA6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVTZXJ2aWNlLlVSTClcbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5jcmVhdGUoe1xuICAgICAgICAgICAgbmFtZTp0aGlzLm5hbWVcbiAgICAgICAgfSkuc3Vic2NyaWJlKChwcm9maWxlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xuICAgICAgICB9LChlcnJvcik9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgfVxufSJdfQ==