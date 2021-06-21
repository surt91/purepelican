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
    "teaching": ("Teaching", "fa-chalkboard-teacher", "Any kind of teaching at a university."),
    "prize": ("Prize", "fa-trophy", "Prizes and stipends."),
    "media": ("Media", "fa-broadcast-tower", "Mentions in media."),
    "organization": ("Organization", "fa-sitemap", "Organizing events."),
}

TEACHING_TYPES = {
    "labcourse": "Lab course",
    "tutorial": "Tutorial",
    "guestlecture": "Guest lecture",
    "lecture": "Lecture",
    "supervision_bachelor": "Co-supervision Bachelor thesis",
    "supervision_master": "Co-supervision Master thesis",
}

from datetime import datetime
NOW = datetime.now()
