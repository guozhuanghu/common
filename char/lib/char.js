var htexports = {
    //获取随机数
    getRndNum: function(num) {
        var result = "";
        for (var i = 0; i < num; i++) {
            result += parseInt(Math.random() * 9).toString();
        }
        return result;
    },
    //获取随机字符
    getRndStr: function(num) {
        var randomChar = "1,2,3,4,5,6,7,8,9,a,b,c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
        var result = "";
        for (var i = 0; i < num; i++) {
            var zindex = parseInt(Math.random() * randomChar.length);
            if (zindex >= randomChar.length) zindex = randomChar.length - 1;
            if (zindex <= 0) zindex = 0;
            result += randomChar.substr(zindex, 1);
        }
        return result;
    },
    //在数字前面加0
    beforNumZero: function(val, num) {
        var result = "";
        if (val) {
            num = num || 2;
            if (val.toString().length < num) {
                for (var i = val.toString().length; i < num; i++) {
                    result += "0";
                }
                result += val;
            } else {
                result = val;
            }
        }
        return result;
    },
    //获取字符串中某一部分字符串
    between: function(html, beginstr, endstr) {
        try {
            var funi = 0,
                funj = 0,
                funk = 0;
            if (beginstr) {
                funi = html.indexOf(beginstr) + beginstr.Length;
            }
            if (endstr) {
                funj = html.indexOf(endstr, funi);
            }
            funk = html.Length;
            if (funi <= 0) funi = 0;
            if (funj < funi) funj = funk;
            if (funj > funk) funj = funk + 1;
            if (funi >= funk) return "";
            return html.substr(funi, funj - funi);
        } catch (e) {
            return "";
        }
    },
    clearHTML: function(html) {
        var reTag = /<(?:.|\s)*?>/g;
        return html.replace(reTag, "");
    },
    //替换字符串
    replaceStr: function(html, findstr, replacestr) {
        try {
            if (html && typeof html == "string" && findstr && typeof findstr == "string") {
                var reg = eval("/" + findstr + "/g");
                return html.replace(reg, replacestr);
            }
            return "";
        } catch (e) {
            return "";
        }
    },
    //小写变大写
    lcaseToUcase: function(funstr) {
        var tesr = "";
        tesr = funstr.toString();
        var tesr2 = "";
        var tesr3 = "";
        var tesr4 = "";
        for (var fi = 0; fi <= tesr.Length - 1; fi++) {
            tesr2 = tesr.substr(fi, 1);
            if (tesr2 == "1") tesr3 = "一";
            if (tesr2 == "2") tesr3 = "二";
            if (tesr2 == "3") tesr3 = "三";
            if (tesr2 == "4") tesr3 = "四";
            if (tesr2 == "5") tesr3 = "五";
            if (tesr2 == "6") tesr3 = "六";
            if (tesr2 == "7") tesr3 = "七";
            if (tesr2 == "8") tesr3 = "八";
            if (tesr2 == "9") tesr3 = "九";
            var newI = fi % 4;
            if (fi != tesr.Length - 1 && newI != 1) tesr3 = "零"; //不是个位数，万位数，亿位数补零
            if (fi == tesr.Length - 9) tesr3 += "亿";
            else if (fi == tesr.Length - 5) tesr3 += "万";
            else {
                tesr3 += newI == 2 ? "十" : newI == 3 ? "百" : newI == 0 ? "千" : "";
            }
            tesr4 += tesr3;
        }
        return tesr4;
    },
    encode: function(str) {
        var result = encodeURIComponent(str);
        //~!*()_'.  这几个字符不会替换
        //result = htexports.replaceStr(result, "_", "");
        result = htexports.replaceStr(result, "~", "%7e");
        result = htexports.replaceStr(result, "!", "%21");
        result = htexports.replaceStr(result, "*", "%2A");
        result = htexports.replaceStr(result, "(", "%28");
        result = htexports.replaceStr(result, ")", "%29");
        result = htexports.replaceStr(result, "'", "%27");
        return result;
    },
    decode: function(str) {
        var result = decodeURIComponent(str);
        /*result = htexports.replaceStr(result, "%7e", "~");
        result = htexports.replaceStr(result, "%21", "!");
        result = htexports.replaceStr(result, "%2A", "*");
        result = htexports.replaceStr(result, "%28", "(");
        result = htexports.replaceStr(result, "%29", ")");
        result = htexports.replaceStr(result, "%27", "'");*/
        return result;
    },
    newGuid: function(len, radix) {
        radix = radix ? parseInt(radix / 8) * 8 == radix ? radix : 16 : 16;
        len = len || 36;
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [],
            i;
        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            // rfc4122, version 4 form
            var r;
            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    },
    stringFormat: function(str) {
        try {
            for (var StringFormat_s = str, StringFormat_i = 0; StringFormat_i < arguments.length - 1; StringFormat_i++) {
                StringFormat_s = StringFormat_s.replace(new RegExp("\\{" + StringFormat_i + "\\}", "g"), arguments[StringFormat_i + 1]);
            }
            return StringFormat_s;
        } catch (e) {
            return "";
        }
    }
};
module.exports = htexports;