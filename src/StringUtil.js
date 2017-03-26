"use strict";
var StringUtil = (function () {
    function StringUtil() {
    }
    StringUtil.IsNull = function (str) {
        if (str == undefined || str == null) {
            return true;
        }
        return false;
    };
    StringUtil.IsNullOrWhiteSpace = function (str) {
        if (StringUtil.IsNull(str)) {
            return true;
        }
        if (str == StringUtil.Empty || StringUtil.IsWhiteSpace(str)) {
            return true;
        }
        return false;
    };
    StringUtil.IsWhiteSpace = function (str) {
    };
    return StringUtil;
}());
StringUtil.Empty = "";
module.exports = StringUtil;
//# sourceMappingURL=StringUtil.js.map