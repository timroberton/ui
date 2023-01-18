import { __awaiter, __generator } from "tslib";
export function errorBoundary(func) {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = {};
                    return [4 /*yield*/, func()];
                case 1: return [2 /*return*/, (_a.data = _b.sent(), _a.error = null, _a)];
                case 2:
                    err_1 = _b.sent();
                    return [2 /*return*/, { data: null, error: { msg: err_1 } }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=utils.js.map