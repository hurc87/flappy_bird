# flappy_bird

Using the following tutorial on [youtube](https://www.youtube.com/watch?v=3SsYZDJdeXk)

## Key Learning

### addEventListener('animationiteration', () => {} )

The animationiteration event is fired when an iteration of a CSS Animation ends, and another one begins. By adding the event listener for this event, once the animation has run it will come back to this and run what code we have in the event listener.

eg.

    const hole = document.getElementById('hole')

    hole.addEventListener('animationiteration', () => {
        <!-- Code to be run -->
    })

### clearInterval()

By setting the setInterval to a varible we can stop the code in the setInterval later on in the function. 

eg.


    var jumpInterval = setInterval(() => {

        <!-- code to be run as part of the function  -->

        if (jumpCount > 20 ){

            <!-- This will clear the interval and stop any code running in the setInveral function -->
            clearInterval(jumpInterval)
        }
    })
}

### css - overflow: hidden;

When used in this game it makes any animation which goes outside of our game container hidden from view.