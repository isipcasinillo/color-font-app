
$(document).ready(function() {
    
    $('.delete-button').click(function() {
    const id = $(this).data('value')
       fetch(`/delete/${id}`, {
            method: 'DELETE',
        }).then(() => {
            location.reload();
        })

    })
    
})

