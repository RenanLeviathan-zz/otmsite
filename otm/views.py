from django.shortcuts import render
from django.http import HttpResponse
from datetime import date

# Create your views here.
def index(request):
	return render(request, 'otm/start.html')

ctx = {
	'numbers':[1,2,3,4,5,6]
}
def game(request):
	return render(request, 'otm/game.html', ctx)

info = {
	'date':date.today()
}
def htp(request):
	return render(request, 'otm/htp.html', info)
