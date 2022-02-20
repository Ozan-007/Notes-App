from django.urls import path

from notes_api.views import getNote, getNotes, updateNote

urlpatterns = [
    path("notes/", getNotes, name="notes"),
    path("notes/<int:id>", getNote, name="note"),
    path("notes/<int:pk>/update", updateNote, name="note")
]
