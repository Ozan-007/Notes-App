from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from notes_api.models import Note

from notes_api.serializers import NoteSerializer


# Create your views here.

@api_view(["GET"])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)