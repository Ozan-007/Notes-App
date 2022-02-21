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


@api_view(["GET"])
def getNote(request,id):
    note = Note.objects.get(id=id)
    serializer = NoteSerializer(note)
    return Response(serializer.data)

@api_view(["GET","PUT","DELETE"])
def updateNote(request,pk):
    if request.method == "GET":
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(note)
        return Response(serializer.data)
    if request.method == "PUT":
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(instance=note,data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

@api_view(["GET","DELETE"])
def deleteNote(request,id):
    if request.method == "GET":
        note = Note.objects.get(id=id)
        serializer = NoteSerializer(note)
        return Response(serializer.data)
    if request.method == "DELETE":
        note = Note.objects.get(id=id)
        note.delete()
        return Response("Note has been removed.")
