$(document).ready(function() {
     $('#tipue_search_input').tipuesearch({
         {% if 'tipue_search' in PLUGINS %}
             'mode' : 'json',
         {% else %}
             'mode': 'live',
         {% endif %}
         'show': 10,
         'newWindow': false,
         {# I cannot place following statements in the conditionals above because then Tipue Search fails to work. Possibly a bug in Tipue Search. #}
         {% if 'tipue_search' in PLUGINS %}
             'contentLocation': 'tipuesearch_content.json'
         {% else %}
             'liveDescription': '.article-content'
         {% endif %}
     });
});
