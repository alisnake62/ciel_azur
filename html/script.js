document.addEventListener('DOMContentLoaded', function() {
    // Définition des calendriers
    const calendar1El = document.getElementById('calendar1');
    const calendar2El = document.getElementById('calendar2');

    const bookingForm1 = document.getElementById('booking-form1');
    const bookingForm2 = document.getElementById('booking-form2');

    const bookingStatus1 = document.getElementById('booking-status1');
    const bookingStatus2 = document.getElementById('booking-status2');

    // Initialiser les calendriers avec FullCalendar
    const calendar1 = new FullCalendar.Calendar(calendar1El, {
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: function(info) {
            document.getElementById('date1').value = info.dateStr;
        }
    });
    calendar1.render();

    const calendar2 = new FullCalendar.Calendar(calendar2El, {
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: function(info) {
            document.getElementById('date2').value = info.dateStr;
        }
    });
    calendar2.render();

    // Soumission des formulaires de réservation
    bookingForm1.addEventListener('submit', function(event) {
        event.preventDefault();
        handleBookingFormSubmit(bookingForm1, bookingStatus1);
    });

    bookingForm2.addEventListener('submit', function(event) {
        event.preventDefault();
        handleBookingFormSubmit(bookingForm2, bookingStatus2);
    });

    function handleBookingFormSubmit(form, statusElement) {
        const formData = new FormData(form);
        const bookingDetails = {
            name: formData.get('name'),
            email: formData.get('email'),
            date: formData.get('date')
        };

        // Ici, vous pouvez implémenter la logique de backend pour la réservation

        // Affichage du statut de réservation
        statusElement.style.display = 'block';
        statusElement.innerHTML = `
            <p>Réservation confirmée pour ${bookingDetails.name} (${bookingDetails.email}) le ${bookingDetails.date}.</p>
        `;
    }
});
