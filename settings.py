DIRECT_TEMPLATES = (('index', '404'))

ASSET_BUNDLES = (
    ('sass', ['sass/blog.scss'], {'filters': 'libsass', 'output': 'sass.css'}),
)

TIMELINE_CATEGORIES = {
    "work": ("Work", "fa-handshake", "Contracts for research focused jobs."),
    "visit": ("Research visit", "fa-handshake", "Visiting a reseach facility for at least one month."),
    "graduation": ("Graduation", "fa-graduation-cap", "Graduation with an academic degree."),
    "conference": ("Conference", "fa-comments", "International conferences with parallel sessions."),
    "workshop": ("Workshop", "fa-comments", "Small conferences without parallel sessions."),
    "summerschool": ("Summer school", "fa-chalkboard", "Participant of a summer school."),
    "teaching": ("Teaching", "fa-chalkboard-teacher", "Any kind of teaching at an university."),
    "prize": ("Prize", "fa-trophy", "Prizes and stipends.")
}

TEACHING_TYPES = {
    "labcourse": "Lab course",
    "tutorial": "Tutorial",
    "guestlecture": "Guest lecture",
    "lecture": "Lecture",
}

from datetime import datetime
NOW = datetime.now()
