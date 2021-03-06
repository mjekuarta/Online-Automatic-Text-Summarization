var GLOBALS = {
    spinner : "",
    doc_count : 20, 
    replacements : {
        "Rep" : /Rep\./g,
        "US" : /U\.S\./g,
        "Col" : /Col\./g,
        "Sen" : /Sen\./g,
        "Lt" : /Lt\./g,
        "v" : /(vs\.)|(v\.)/g,
        "Mr" : /Mr\./g,
        "AM" : /a\.m\./gi,
        "PM" : /p\.m\./gi,
        "January" : /jan\./gi,
        "February" : /feb\./gi,
        "March" : /mar\./gi,
        "April" : /apr\./gi,
        "August" : /aug\./gi,
        "September" : /sept\./gi,
        "October" : /oct\./gi,
        "November" : /nov\./gi,
        "December" : /dec\./gi,
        '"' : new RegExp(String.fromCharCode(8221) + "|" + String.fromCharCode(8220), "g"),
        "'" : new RegExp(String.fromCharCode(8216) + "|" + String.fromCharCode(8217), "g"), 
        "" : /[A-Z]\.([A-Z]\.)?/g 
    }
};