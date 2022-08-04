const inventory = newInventory()
move(inventory).to(0, 0)


const character = newImage('assets/green-character/static.gif')


let direction = null;
let x = 100;
let y = 250;



setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1) 
                            
document.addEventListener('keydown', function(e){   //key press
    if(e.repeat) return 
    
    if(e.key === 'a' ){
        direction = 'west'
    }

    if(e.key === 'w'  ){ 
        direction = 'north'
       
    }
    if(e.key === 'd' ){ 
        direction = 'east'
    }
    if(e.key === 's' ){
        direction = 'south'
    }

   
    if(e.key === 'ArrowLeft' ){
        direction = 'west'
    }

    if(e.key === 'ArrowUp'  ){ 
        direction = 'north'
       
    }
    if(e.key === 'ArrowRight' ){ 
        direction = 'east'
    }
    if(e.key === 'ArrowDown' ){
        direction = 'south'
    }

    

if(direction === 'west'){
    character.src = 'assets/green-character/west.gif'
}
if(direction === 'north'){
    character.src = 'assets/green-character/north.gif'
}
if(direction === 'east'){
    character.src = 'assets/green-character/east.gif'
}
if(direction === 'south'){
    character.src = 'assets/green-character/south.gif'
}




})

document.addEventListener('keyup', function(e){  //key leave
    direction = 0
    character.src = 'assets/green-character/static.gif'
})







function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom){
       
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        





    
}




move(character).to(100, 250)




move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

