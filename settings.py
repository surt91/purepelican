DIRECT_TEMPLATES = (('index', '404'))

ASSET_BUNDLES = (
    ('sass', ['sass/blog.scss'], {'filters': 'libsass', 'output': 'sass.css'}),
)

from datetime import datetime
NOW = datetime.now()
