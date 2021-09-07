
$(document).ready(function() {
    
    $('.delete-row').click(function() {
    const id = $(this).data('value')
       fetch(`/delete/${id}`, {
            method: 'DELETE',
        });
        
    });
    
})

