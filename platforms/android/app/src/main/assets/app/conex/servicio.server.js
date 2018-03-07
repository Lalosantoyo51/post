"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var conex_service_1 = require("./conex.service");
var ProfileService = /** @class */ (function () {
    function ProfileService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ProfileService.prototype.create = function (form) {
        console.log(JSON.stringify(form));
        return this.http.post(this.URL, form, this.authService.HTTP_AUTH_OPTIONS);
    };
    Object.defineProperty(ProfileService.prototype, "URL", {
        get: function () {
            return this.authService.API_URL + 'addUser';
        },
        enumerable: true,
        configurable: true
    });
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, conex_service_1.AuthService])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljaW8uc2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmljaW8uc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCxpREFBOEM7QUFNOUM7SUFDSSx3QkFBb0IsSUFBZ0IsRUFBVSxXQUF3QjtRQUFsRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRTFFLCtCQUFNLEdBQU4sVUFBTyxJQUFXO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBQ0Qsc0JBQUksK0JBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFUUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBRWlCLGlCQUFVLEVBQXVCLDJCQUFXO09BRDdELGNBQWMsQ0FVMUI7SUFBRCxxQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vY29uZXguc2VydmljZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7dXNlclJ9IGZyb20gXCIuLi9tb2RlbHVzZXIvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG4gIFxuICAgIGNyZWF0ZShmb3JtOiB1c2VyUil7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGZvcm0pKVxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLlVSTCwgZm9ybSwgdGhpcy5hdXRoU2VydmljZS5IVFRQX0FVVEhfT1BUSU9OUyk7XG4gICAgfVxuICAgIGdldCBVUkwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLkFQSV9VUkwgKyAnYWRkVXNlcic7XG4gICAgfVxufSJdfQ==