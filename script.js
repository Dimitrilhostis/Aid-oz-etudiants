document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: '/api/events', // Récupérer les événements depuis le backend
    dateClick: function(info) {
      alert('Vous avez cliqué sur : ' + info.dateStr);
    }
  });
  calendar.render();
});
