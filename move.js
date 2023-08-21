function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }


function moveWithArrowKeys(left, bottom, callback) {
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    
    function moveCharacter(){ 
        if(direction === 'west'){
            x-=1
        }
        if(direction === 'north'){
            y+=1
        }
        if(direction === 'east'){
            x+=1
        }
        if(direction === 'south'){
            y-=1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }
    
    setInterval(moveCharacter, 1)
    
    document.addEventListener('keydown', function(e){
        if(e.repeat) return;
    
        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
        callback(direction)
    })
    
    document.addEventListener('keyup', function(e){
        direction = null
        callback(direction)
    })
    }
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

/* Currently, if you make the tree moveable with arrow keys, 
you will probably see an error in the console warning that "callback is not a function."
We aren't passing a callback, because we don't need to respond to the tree changing directions.
Use an if statement inside of move to only call callback if it is passed.

Currently, a player can make the character walk past the edges of the screen.
Add some if conditions to the setInterval callback to prevent this.

Currently, the character can walk under things, even when it appears it should be in front of them. 
Read the z-index documentation. 
(You can set this with JavaScript by changing element.style.zIndex and using it to make the character appear to be above the other images, 
only disappearing behind one when the character walks north far enough to be behind the image.)

*/