var char = require("./char");

function handle(reg, str, flag) {
    str = str ? str.toString() : "";
    var match = str.match(reg);
    flag = flag ? str.length == match[0].length : true;
    if (match && flag) {
        return match[0];
    } else {
        return "";
    }
}
var htexports = {
    handleSqlStr: function(str) {
        str = str ? str.toString() : "";
        return str.replace(/'/g, "");
    },
    //处理int
    handleInt: function(str, def) {
        return newI = isNaN(parseInt(str)) ? isNaN(parseInt(def)) ? 0 : parseInt(def) : parseInt(str);
    },
    //手机号码的处理
    handleMobile: function(mobile) {
        return handle(/[0-9]{11,11}/, mobile, true);
    },
    //电话号码的处理
    handlePhone: function(telphone) {
        return handle(/[0-9]+[-]?[0-9]+[-]?[0-9]/, telphone, true);
    },
    //IP地址的处理
    handleIpAddress: function(ipaddress) {
        return handle(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/, ipaddress, true);
    },
    //中文名的处理
    handleCNName: function(cnname) {
        return handle(/[\u4e00-\u9fa5]*/, cnname, true);
    },
    //Email的处理
    handleEmail: function(email) {
        return handle(/[\w-]+\@[\w-]+\.(com|net|org|edu|mil|tv|biz|info)/, email, true);
    },
    //GUID的处理
    handleGuid: function(guid) {
        return handle(/[0-9a-z-]{36,36}/, guid, true);
    }
};
module.exports = htexports;