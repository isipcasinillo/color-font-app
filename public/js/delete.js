
$(document).ready(function() {
    
    $('.delete-row').click(function() {
    const id = $(this).data('value')
       fetch(`/delete/${id}`, {
            method: 'DELETE',
        }).then((
            fetch('/view'), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }
        ))
        
    })
    
})

