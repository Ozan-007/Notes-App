from django.urls import path

from notes_api.views import getNotes

urlpatterns = [
    path("notes/", getNotes, name="notes")
]
