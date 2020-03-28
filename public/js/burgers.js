$(function() {
    $('change-devour').click(function (event) {
        const id = $(this).data('id');
        const eaten = $(this).data('eaten');
    
        const eatenState = {
            devoured: 1
        };
    
        $.ajax('/api/burgers' + id, {
            type: 'PUT',
            data: eatenState
        }).then(()=> {
            console.log('This burger has been devoured!', eaten);
            location.reload();
        });
    });

    $('.create-form').on('submit', event => {
        event.preventDeafault();
        
        const newBurger = {name: $('#burg').val().trim()};
        console.log(newBurger);
        
    
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(()=> {
            console.log('Created new burger!');
            location.reload();
        })
    })



});