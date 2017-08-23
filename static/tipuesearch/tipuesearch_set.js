
/*
Tipue Search 6.1
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["aber", "als", "am", "an", "auch", "auf", "aus", "bei", "bin", "bis", "bist", "da", "dadurch", "daher", "darum", "das", "daß", "dass", "dein", "deine", "dem", "den", "der", "des", "dessen", "deshalb", "die", "dies", "dieser", "dieses", "doch", "dort", "du", "durch", "ein", "eine", "einem", "einen", "einer", "eines", "er", "es", "euer", "eure", "für", "hatte", "hatten", "hattest", "hattet", "hier", "hinter", "ich", "ihr", "ihre", "im", "in", "ist", "ja", "jede", "jedem", "jeden", "jeder", "jedes", "jener", "jenes", "jetzt", "kann", "kannst", "können", "könnt", "machen", "mein", "meine", "mit", "muß", "mußt", "musst", "müssen", "müßt", "nach", "nachdem", "nein", "nicht", "nun", "oder", "seid", "sein", "seine", "sich", "sie", "sind", "soll", "sollen", "sollst", "sollt", "sonst", "soweit", "sowie", "und", "unser", "unsere", "unter", "vom", "von", "vor", "wann", "warum", "was", "weiter", "weitere", "wenn", "wer", "werde", "werden", "werdet", "weshalb", "wie", "wieder", "wieso", "wir", "wird", "wirst", "wo", "woher", "wohin", "zu", "zum", "zur", "über"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tip', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 20},
     {'url': 'http://www.tipue.com/search', 'score': 30},
     {'url': 'http://www.tipue.com/is', 'score': 10}
]};


// Illogical stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Related searches

var tipuesearch_related = {'searches': [
     {'search': 'tipue', 'related': 'Tipue Search'},
     {'search': 'tipue', 'before': 'Tipue Search', 'related': 'Getting Started'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'jQuery'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'Blog'}
]};


// Internal strings

var tipuesearch_string_1 = 'Kein Titel';
var tipuesearch_string_2 = 'Zeige Ergebnisse für';
var tipuesearch_string_3 = 'Suche stattdessen nach';
var tipuesearch_string_4 = '1 Ergebnis';
var tipuesearch_string_5 = 'Ergebnisse';
var tipuesearch_string_6 = 'Zurück';
var tipuesearch_string_7 = 'Mehr';
var tipuesearch_string_8 = 'Keine Suchergebnisse.';
var tipuesearch_string_9 = 'Übliche Wörter werden ignoriert.';
var tipuesearch_string_10 = 'Suchbegriff zu kurz';
var tipuesearch_string_11 = 'Es sollte ein Buchstabe oder mehr sein.';
var tipuesearch_string_12 = 'Es sollten';
var tipuesearch_string_13 = 'Buchstaben oder mehr sein.';
var tipuesearch_string_14 = 'Sekunden';
var tipuesearch_string_15 = 'Suche im Zusammenhang mit';


// Internals


// Timer for showTime

var startTimer = new Date().getTime();
