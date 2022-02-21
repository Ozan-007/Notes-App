from django.urls import path

from notes_api.views import getNote, getNotes, updateNote, deleteNote

urlpatterns = [
    path("notes/", getNotes, name="notes"),
    path("notes/<int:id>", getNote, name="note"),
    path("notes/<int:pk>/update", updateNote, name="update-note"),
    path("notes/<int:id>/delete", deleteNote, name="delete-note")
]
