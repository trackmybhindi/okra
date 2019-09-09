
var Utils = function (data) {
    this.data = this.sanitize(data);
}


Utils.convertSQLresult = function (data ) {
    var result ={};
    for (var i = 0; i < data.length; i++) {
        result  =   data [i] ;;
    }
    console.log ("result" + result);
    return result;
}

Utils.convertJSONtoHTMLtable = function (data ) {
    var htmlwithtable ='<html > <h1> Welcome to TrackMyBhindi <BR> <HR> </h1>';
    htmlwithtable = htmlwithtable + "<style> body { background-image: url('https://cdn1.sph.harvard.edu/wp-content/uploads/sites/21/2018/07/fruiteg.jpeg'); background-repeat:no-repeat; background-size:cover; color: blue;}</style>";
    var htmlwithtable = htmlwithtable+ '<table width="100%" border="3">';
    for (var i = 0; i < data.length; i++) {
        htmlwithtable = htmlwithtable + "<TR>";
        // hardcoded way -> theShit = theShit + ('| ' + rows[i].name + ' | ' +  rows[i].address_zip);
        myObj = data[i];
        for( var j in myObj ) {
            if (myObj.hasOwnProperty(j)) {
                htmlwithtable = htmlwithtable + ("<TD> " + myObj[j] + "</TD>");
            }
        }
        htmlwithtable = htmlwithtable + '</TR>'
    }

    htmlwithtable = htmlwithtable + '</table> </html> ';
    console.log ("result" + htmlwithtable);
    return htmlwithtable;
}

module.exports = Utils;  



