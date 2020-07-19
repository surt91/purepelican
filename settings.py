DIRECT_TEMPLATES = (('index', '404'))

ASSET_BUNDLES = (
    ('sass', ['sass/blog.scss'], {'filters': 'libsass', 'output': 'sass.css'}),
)

TIMELINE_CATEGORIES = {
    "work": ("Work", "fa-handshake"),
    "visit": ("Research visit", "fa-handshake"),
    "graduation": ("Graduation", "fa-graduation-cap"),
    "conference": ("Conference", "fa-comments"),
    "workshop": ("Workshop", "fa-comments"),
    "summerschool": ("Summer school", "fa-chalkboard"),
    "teaching": ("Teaching", "fa-chalkboard-teacher"),
    "prize": ("Prize", "fa-trophy")
}

TEACHING_TYPES = {
    "labcourse": "Lab course",
    "tutorial": "Tutorial",
    "guestlecture": "Guest lecture",
    "lecture": "Lecture",
}

from datetime import datetime
NOW = datetime.now()
