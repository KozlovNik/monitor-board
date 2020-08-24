from django.shortcuts import render

def index(request):
    return render(request, 'monitor_board_app/index.html')
