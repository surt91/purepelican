https://github.com/getpelican/pelican-plugins/blob/master/i18n_subsites/localizing_using_jinja2.rst

pybabel extract --mapping babel.cfg --output messages.pot ./
pybabel init --input-file messages.pot --output-dir translations/ --locale en --domain messages
pybabel compile --directory translations/ --domain messages

pybabel update --input-file messages.pot --output-dir translations/ --domain messages
