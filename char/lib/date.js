var char = require("./char");
var htexports = {
    //时间格式化
    handleDate: function(str, format) {
        try {
            var currentdate = new Date(str || null);
            if (!currentdate.getTime()) {
                if (str) str = str.toString();
                currentdate = new Date(parseInt(str.replace("/Date(", "").replace(")/", "").split("+")[0]));
            }
            if (currentdate.getTime()) {
                format = format || "yyyy/mm/dd";
                var result = format.replace(/yyyy/i, currentdate.getFullYear());
                result = result.replace("MM", char.beforNumZero(currentdate.getMonth() + 1));
                result = result.replace(/dd/i, char.beforNumZero(currentdate.getDate()));
                result = result.replace(/hh/i, char.beforNumZero(currentdate.getHours()));
                result = result.replace("mm", char.beforNumZero(currentdate.getMinutes()));
                result = result.replace(/ss/i, char.beforNumZero(currentdate.getSeconds()));
                return result;
            } else {
                return "";
            }
        } catch (e) {
            return "";
        }
    },
    //字符转化为事件
    covertToDateTime: function(date, time) {
        try {
            return new Date(date + " " + time);
        } catch (e) {
            return null;
        }
    },
    //时间间隔
    dateDiff: function(interval, begindate, enddate) {
        var long = enddate.getTime() - begindate.getTime(); //相差毫秒
        switch (interval.toLowerCase()) {
            case "y":
                return parseInt(enddate.getFullYear() - begindate.getFullYear());
            case "m":
                return parseInt((enddate.getFullYear() - begindate.getFullYear()) * 12 + (enddate.getMonth() - begindate.getMonth()));
            case "d":
                return parseInt(long / 1000 / 60 / 60 / 24);
            case "w":
                return parseInt(long / 1000 / 60 / 60 / 24 / 7);
            case "h":
                return parseInt(long / 1000 / 60 / 60);
            case "n":
                return parseInt(long / 1000 / 60);
            case "s":
                return parseInt(long / 1000);
            case "l":
                return parseInt(long);
        }
    },
    //获取当前季度
    GetQuarter: function(nMonth) {
        if (nMonth <= 3)
            return 1;
        if (nMonth <= 6)
            return 2;
        if (nMonth <= 9)
            return 3;
        return 4;
    }
};
module.exports = htexports;