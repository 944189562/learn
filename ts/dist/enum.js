"use strict";
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["Success"] = 200] = "Success";
    ErrorCode[ErrorCode["NotFoundError"] = 404] = "NotFoundError";
})(ErrorCode || (ErrorCode = {}));
function getList(type) {
    switch (type) {
        case 'success':
            return ErrorCode.Success;
    }
    return ErrorCode.Success;
}
