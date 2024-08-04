document.getElementById('addNoteBtn').addEventListener('click', function() {
    const noteText = document.getElementById('noteInput').value.trim();
    const errorElement = document.getElementById('error');

    if (noteText === "") {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';

        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = noteText;

        const notesContainer = document.getElementById('notesContainer');
        if (notesContainer.querySelector('p')) {
            notesContainer.querySelector('p').remove();
        }

        notesContainer.appendChild(note);
        document.getElementById('noteInput').value = "";  
    }
});
