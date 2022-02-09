from django.urls import path

from notes_api.views import getNote, getNotes

urlpatterns = [
    path("notes/", getNotes, name="notes"),
    path("notes/<int:id>", getNote, name="note")
]
