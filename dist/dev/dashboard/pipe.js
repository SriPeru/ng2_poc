var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        core_1.Pipe({ name: 'keyValues' }), 
        __metadata('design:paramtypes', [])
    ], KeysPipe);
    return KeysPipe;
})();
exports.KeysPipe = KeysPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9waXBlLnRzIl0sIm5hbWVzIjpbIktleXNQaXBlIiwiS2V5c1BpcGUuY29uc3RydWN0b3IiLCJLZXlzUGlwZS50cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRDtJQUFBQTtJQVNBQyxDQUFDQTtJQVBDRCw0QkFBU0EsR0FBVEEsVUFBVUEsS0FBS0EsRUFBRUEsSUFBYUE7UUFDNUJFLElBQUlBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2RBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxLQUFLQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUMzQ0EsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFSSEY7UUFBQ0EsV0FBSUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsV0FBV0EsRUFBQ0EsQ0FBQ0E7O2lCQVN6QkE7SUFBREEsZUFBQ0E7QUFBREEsQ0FUQSxBQVNDQSxJQUFBO0FBUlksZ0JBQVEsV0FRcEIsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvcGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAna2V5VmFsdWVzJ30pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlLCBhcmdzOnN0cmluZ1tdKSA6IGFueSB7XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGtleXMucHVzaCh7a2V5OiBrZXksIHZhbHVlOiB2YWx1ZVtrZXldfSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9