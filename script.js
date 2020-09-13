

let playerLife = document.getElementById("player-life")
let life = 10
playerLife.innerHTML = life+' pv'

let retry = document.getElementById('retry')
let end = document.getElementById('end')


let pok = document.getElementById("pok")
pok.innerHTML = '<img src="carap.gif" id="ennemy-pokemon" class="game__option"/>'

let bulbizarre = document.getElementById("bulbizarre")
bulbizarre.innerHTML = '<img src="bulbi.gif" height=150px id="player-pokemon" class="game__option" style="transform: scaleX(-1)">'


let regis = document.getElementById('regis')
let regisname = document.getElementById('regisname')

let game = document.getElementById('game')
let container = document.getElementById('container')
let dead = document.getElementById('dead')

let bazooka = document.getElementById('bazooka')
let baz = false

let kill = 0

let esqui = 0.2


// let playerJauge = document.getElementById("player-jauge")
// let jauge = "200px"
// playerJauge.innerCSS

let computerLife = document.getElementById("computer-life")
let life2 = 4
computerLife.innerHTML = life2+' pv'

let health = 15*(life)
let health2 = 200
let jauge =  document.getElementById("jauge")
let jauge2 =  document.getElementById("jauge2")
let mult = 50
let mult1 = 1

jauge.innerHTML = '<div style="width:'+health+'px;height:20px;border:1px solid #000; background: red"></div>'
jauge2.innerHTML = '<div style="width'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'

let ennemyChoice = document.getElementById('ennemy-choice')
let playerChoice = document.getElementById('player-choice')

let ennemyPokemon = document.getElementById('ennemy-pokemon')
let playerPokemon = document.getElementById('player-pokemon')

function clear () {
    ennemyPokemon.style.backgroundColor = "transparent"
    playerPokemon.style.backgroundColor = "transparent"

}

function clear2 () {
    playerChoice.style.display = 'none'
    ennemyChoice.style.display = 'none'

}

let attack1 = document.getElementById("attack1")
let attack2 = document.getElementById("attack2")
let attack3 = document.getElementById("attack3")

let blocker = new Boolean(false);

let impact1 = new Audio('impact1.wav');
let impact2 = new Audio('impact2.wav');
let impact3 = new Audio('impact3.wav');
let sound = new Audio('sound.wav');
let red = new Audio('red.mp3');
let win = new Audio('win.mp3');
let bazoo = new Audio('bazoo.wav');
let florievo = new Audio('florizvo.ogg');



attack1.addEventListener('click', () => {
    
    if (blocker == false) {

    playerChoice.innerHTML = ""
    ennemyChoice.innerHTML = ""
    setTimeout(fight,1200)

    playerChoice.innerHTML = "SHI"
    setTimeout(fu, 400)
    setTimeout(mi, 800)

    }

    setTimeout(block, 1)
    
    })


attack2.addEventListener('click', () => {

    if (blocker == false) {

    playerChoice.innerHTML = ""
    ennemyChoice.innerHTML = ""
    setTimeout(fightb,1200)

    playerChoice.innerHTML = "SHI"
    setTimeout(fu, 400)
    setTimeout(mi, 800)

    }

    setTimeout(block, 1)
    })

attack3.addEventListener('click', () => {

    if (blocker == false) {

    playerChoice.innerHTML = ""
    ennemyChoice.innerHTML = ""
    setTimeout(fightc,1200)

    playerChoice.innerHTML = "SHI"
    setTimeout(fu, 400)
    setTimeout(mi, 800)

    }

    setTimeout(block, 1)
    
    })


    bazooka.addEventListener('click', () => {
    
        if (blocker == false) {
    
        playerChoice.innerHTML = ""
        ennemyChoice.innerHTML = ""
        setTimeout(fightbazooka,1200)
    
        playerChoice.innerHTML = "SHI"
        setTimeout(fu, 400)
        setTimeout(mi, 800)
    
        }
    
        setTimeout(block, 1)
        
        })
    

function block () {
    blocker = true
}

function fu () {
    playerChoice.innerHTML = "FU"
}
function mi () {
    playerChoice.innerHTML = "MI!"
}


// quand clique sur l'attaque pierre

function fight () {
    
    blocker=false

    let dice = Math.trunc(Math.random()*3+1)

    if (dice === 2) {
        
        let dice2 = Math.random()

        if (dice2 < esqui) { 

            actupoke = bulbizarre.innerHTML
            bulbizarre.innerHTML = '<img src="esquive.png" height=150px id="player-pokemon" class="game__option">'
            playerChoice.innerHTML = '<img src=pierre.png height=70px />'
            ennemyChoice.innerHTML = '<img src=feuille.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
    
            setTimeout(clear,700)
            setTimeout(resetpok,700)
            // pas réglé le blocker mais osef
            }
        else if (dice2 > esqui && life > 1) {
        life = life-1
        health = health-15*(mult1)
        jauge.innerHTML = '<div style="width:'+health+'px;height:20px;border:1px solid #000; background: red"; margin= "auto"></div>'
        playerLife.innerHTML = life+' pv'
        playerChoice.innerHTML = '<img src=pierre.png height=70px />'
        ennemyChoice.innerHTML = '<img src=feuille.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        playerPokemon.style.backgroundColor = "red"
        impact3.play();
        setTimeout(clear, 300)
        }
        else if (dice2 > esqui && life < 2) {
        death()
        }
    }

    if (dice === 3) {
        life2 = life2-1
        health2 = health2-mult
        computerLife.innerHTML = life2+' pv'
        jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    
        playerChoice.innerHTML = '<img src=pierre.png height=70px />'
        ennemyChoice.innerHTML = '<img src=ciseaux.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        ennemyPokemon.style.backgroundColor = "red"
        impact2.play();
        setTimeout(clear, 300)
        if (life2 < 1 && kill == 3) {
            blocker = true
            kill = kill+1
            clear
            pokemon5()
        }
        if (life2 < 1 && kill == 2) {
            blocker = true
            kill = kill+1
            clear
            pokemon4()
        }
        if (life2 < 1 && kill == 1) {
            blocker = true
            kill = kill+1
            clear
            pokemon3()
        }
        if (life2 < 1 && kill == 0) {
            blocker = true
            kill = kill+1
            clear
            pokemon2()
        }

    
}

    if (dice === 1) {
        playerChoice.innerHTML = '<img src=pierre.png height=70px />'
        ennemyChoice.innerHTML = '<img src=pierre.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        impact1.play();
    }
}





// quand clique sur l'attaque feuille

function fightb () {
    
    blocker=false

    let dice = Math.trunc(Math.random()*3+1)

    if (dice === 3) {

        let dice2 = Math.random()

        if (dice2 < esqui) { 

            actupoke = bulbizarre.innerHTML
            bulbizarre.innerHTML = '<img src="esquive.png" id="player-pokemon" class="game__option">'
            playerChoice.innerHTML = '<img src=pierre.png height=70px />'
            ennemyChoice.innerHTML = '<img src=feuille.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
            setTimeout(clear,700)
            setTimeout(resetpok,700)
            }    
        else if (dice2 > esqui && life > 1) {
            life = life-1
            health = health-(15*(mult1))
            jauge.innerHTML = '<div style="width:'+health+'px;height:20px;border:1px solid #000; background: red"; margin= "auto"></div>'
            playerLife.innerHTML = life+' pv'
            playerChoice.innerHTML = '<img src=feuille.png height=70px />'
            ennemyChoice.innerHTML = '<img src=ciseaux.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
            playerPokemon.style.backgroundColor = "red"
            impact3.play();
            setTimeout(clear, 300)
        }
        else if (dice2 > esqui && life < 2) {
            death()
        }   
}

    if (dice === 1) {
        
        life2 = life2-1
        health2 = health2-mult
        computerLife.innerHTML = life2+' pv'
        jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    
        playerChoice.innerHTML = '<img src=feuille.png height=70px />'
        ennemyChoice.innerHTML = '<img src=pierre.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        ennemyPokemon.style.backgroundColor = "red"
        impact2.play();
        setTimeout(clear, 300)
        if (life2 < 1 && kill == 3) {
            blocker = true
            kill = kill+1
            clear
            pokemon5()
        }
        if (life2 < 1 && kill == 2) {
            blocker = true
            kill = kill+1
            clear
            pokemon4()
        }
        if (life2 < 1 && kill == 1) {
            blocker = true
            kill = kill+1
            clear
            pokemon3()
        }
        if (life2 < 1 && kill == 0) {
            blocker = true
            kill = kill+1
            clear
            pokemon2()
        }
    }

    if (dice === 2) {
        playerChoice.innerHTML = '<img src=feuille.png height=70px />'
        ennemyChoice.innerHTML = '<img src=feuille.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        impact1.play();
    }
}

// quand clique sur l'attaque ciseaux

function fightc () {
    
    blocker=false

    let dice = Math.trunc(Math.random()*3+1)

    if (dice === 1) {
    
            let dice2 = Math.random()

        if (dice2 < esqui) { 

            actupoke = bulbizarre.innerHTML
            bulbizarre.innerHTML = '<img src="esquive.png" id="player-pokemon" class="game__option">'
            playerChoice.innerHTML = '<img src=pierre.png height=70px />'
            ennemyChoice.innerHTML = '<img src=feuille.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
            setTimeout(clear,700)
            setTimeout(resetpok,700)
            }    
            else if (dice2 > esqui && life > 1) {
                life = life-1
            health = health-15*(mult1)
            jauge.innerHTML = '<div style="width:'+health+'px;height:20px;border:1px solid #000; background: red"; margin= "auto"></div>'
            playerLife.innerHTML = life+' pv'
            playerChoice.innerHTML = '<img src=ciseaux.png height=70px />'
            ennemyChoice.innerHTML = '<img src=pierre.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
            playerPokemon.style.backgroundColor = "red"
            impact3.play();
            setTimeout(clear, 300)
        }
        else if (dice2 > esqui && life < 2) {
            death()
        }   
    }
    

    if (dice === 2) {
        life2 = life2-1
        health2 = health2-mult
        computerLife.innerHTML = life2+' pv'
        jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    
        playerChoice.innerHTML = '<img src=ciseaux.png height=70px />'
        ennemyChoice.innerHTML = '<img src=feuille.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        ennemyPokemon.style.backgroundColor = "red"
        impact2.play();
        setTimeout(clear, 300)
        killcheck()
    }

    if (dice === 3) {
        playerChoice.innerHTML = '<img src=ciseaux.png height=70px />'
        ennemyChoice.innerHTML = '<img src=ciseaux.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        impact1.play();
    }
}



// quand clique sur l'attaque bazooka

function fightbazooka () {
    
    blocker=false

    let dice = Math.trunc(Math.random()*3+1)

    if (dice === 2) {
        life2 = life2-1
        health2 = health2-mult
        computerLife.innerHTML = life2+' pv'
        jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    
        ennemyPokemon.style.backgroundColor = "red"
        playerChoice.innerHTML = '<img src=bazooka.png height=70px />'
        ennemyChoice.innerHTML = '<img src=feuille.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        bazoo.play();
        bazooka.innerHTML = ''
        setTimeout(clear, 300)
        setTimeout(bam,400)
        setTimeout(clear, 700)
        setTimeout(bam,800)
        setTimeout(bam,1100)
        setTimeout(clear, 1200)
        setTimeout(killcheck, 1200)
        


    }

    if (dice === 3) {
        life2 = life2-1
        health2 = health2-mult
        computerLife.innerHTML = life2+' pv'
        jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    
        ennemyPokemon.style.backgroundColor = "red"
        playerChoice.innerHTML = '<img src=bazooka.png height=70px />'
        ennemyChoice.innerHTML = '<img src=ciseaux.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        bazoo.play();
        bazooka.innerHTML = ''
        setTimeout(clear, 300)
        setTimeout(bam,400)
        setTimeout(clear, 700)
        setTimeout(bam,800)
        setTimeout(bam,1100)
        setTimeout(clear, 1200)
        setTimeout(killcheck, 1200)

    
}

    if (dice === 1) {
        life2 = life2-1
        health2 = health2-mult
        computerLife.innerHTML = life2+' pv'
        jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    
        ennemyPokemon.style.backgroundColor = "red"
        playerChoice.innerHTML = '<img src=bazooka.png height=70px />'
        ennemyChoice.innerHTML = '<img src=pierre.png height=70px style="transform: scaleX(-1);"; margin= "auto"/>'
        bazoo.play();
        bazooka.innerHTML = ''

        setTimeout(clear, 300)
        setTimeout(bam,400)
        setTimeout(clear, 700)
        setTimeout(bam,800)
        setTimeout(bam,1100)
        setTimeout(clear, 1200)
        setTimeout(killcheck, 1200)
    }
}

function bam () {

    life2 = life2-1
    health2 = health2-mult
    ennemyPokemon.style.backgroundColor = "red"
    computerLife.innerHTML = life2+' pv'
    jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    


}

function pokemon2 () {

    playerChoice.style.display = 'none'
    ennemyChoice.style.display = 'none'
    pok.innerHTML = ''
    computerLife.innerHTML = ''
    jauge2.innerHTML = ''
    pok.innerHTML = 'Bravo, tu as tué mon<br>carapuce, mais...'
    setTimeout (dialogue1, 3000)
    setTimeout (dialogue2, 6000)

    regis.innerHTML = '<img height="120px" src="https://thumbs.gfycat.com/BonyAlarmedBlackbear-max-1mb.gif" />'
}

function killcheck () {
    if (life2 < 1 && kill == 3) {
        blocker = true
        kill = kill+1
        clear
        pokemon5()
    }
    if (life2 < 1 && kill == 2) {
        blocker = true
        kill = kill+1
        clear
        pokemon4()
    }
    if (life2 < 1 && kill == 1) {
        blocker = true
        kill = kill+1
        clear
        pokemon3()
    }
    if (life2 < 1 && kill == 0) {
        blocker = true
        kill = kill+1
        clear
        pokemon2()
    }
}



function dialogue1 () {
    pok.innerHTML = "J'ai une surprise pour toi...<br>Mon pokémon le plus mignon."
}
function dialogue2 () {
    pok.innerHTML = '<img src="evoli.gif" id="ennemy-pokemon" class="game__option"/>'
    life2 = 6
    health2 = 200
    console.log(health2)
    computerLife.innerHTML = life2+' pv'
    jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    
    regis.innerHTML = '<img height="120px" src="https://vignette.wikia.nocookie.net/pokemon59/images/7/7b/Gary_badges.png/revision/latest/scale-to-width-down/340?cb=20140525124550&path-prefix=fr" />'
    blocker = false
    playerChoice.style.display = 'initial'
    ennemyChoice.style.display = 'initial'
    mult = 200/6
}

function pokemon3 () {

    playerChoice.style.display = 'none'
    ennemyChoice.style.display = 'none'
    pok.innerHTML = ''
    computerLife.innerHTML = ''
    jauge2.innerHTML = ''
    pok.innerHTML = "Nooooon ! Évoli !!!<br>Mais tu l'as tué !<br>Tu vas le regretter..."
    setTimeout (dialogue3, 3000)
    setTimeout (dialogue4, 7000)

}

function dialogue3 () {
    pok.innerHTML = "En fait il était moche Évoli.<br>Je l'ai jamais aimé.<br>Tu veux voir une beauté de la nature ?..."
    regis.innerHTML = '<img height="120px" src="regis.png" />'

}

function dialogue4 () {
    pok.innerHTML = '<img src="https://www.pokemontrash.com/pokedex/images/anime-6g/150.gif" id="ennemy-pokemon" class="game__option"/>'
    life2 = 8
    health2 = 200
    mult = 200/8
    console.log(health2)
    computerLife.innerHTML = life2+' pv'
    jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    
    playerChoice.style.display = 'initial'
    ennemyChoice.style.display = 'initial'
    sound.play();
    setTimeout(evolution,3000)
    
}

function pokemon4 () {

    playerChoice.style.display = 'none'
    ennemyChoice.style.display = 'none'
    red.play();
    pok.innerHTML = ''
    computerLife.innerHTML = ''
    jauge2.innerHTML = ''
    pok.innerHTML = "..."
    setTimeout (dialogue5, 4000)
    setTimeout (dialogue6, 9000)
    setTimeout (dialogue7, 14000)
    setTimeout (dialogue8, 21000)
}

function dialogue5 () {
    pok.innerHTML = "J'y crois pas, t'as tué tous mes pokémons...<br>Assassin..."
}

function dialogue6 () {
    pok.innerHTML = "Quel est l'intérêt de vivre dans un monde aussi horrible rempli de gens comme toi..."
}

function dialogue7 () {
    pok.innerHTML = "Je n'ai plus rien à perdre... je suis prêt à mourir pour venger toutes tes victimes...<br>Maman je t'aime !..."
}

function dialogue8 () {
    pok.innerHTML = '<img src="regis.png" id="ennemy-pokemon" class="game__option"/>'
    life2 = 5
    health2 = 200
    mult = 40
    console.log(health2)
    computerLife.innerHTML = life2+' pv'
    jauge2.innerHTML = '<div style="width:'+health2+'px;height:20px;border:1px solid #000; background: purple"></div>'    
    blocker = false
    playerChoice.style.display = 'initial'
    ennemyChoice.style.display = 'initial'
    regis.style.display = 'none'
    regisname.style.display = 'none'



}

function pokemon5 () {

    playerChoice.style.display = 'none'
    ennemyChoice.style.display = 'none'
    computerLife.innerHTML = ''
    jauge2.innerHTML = ''
    pok.innerHTML = "..."
    red.pause();
    win.play();
    setTimeout (dialogue9, 3000)
    setTimeout (dialogue10, 7000)
    setTimeout (dialogue11, 12000)
    setTimeout (dialogue12, 17000)
    setTimeout (dialogue13, 22000)
    setTimeout (dialogue14, 26000)
    setTimeout (dialogue15, 29000)
    setTimeout (dialogue16, 34000)
    setTimeout (dialogue17, 36000)



}


function dialogue9 () {
    pok.innerHTML = "Je... j'agonise Sacha..."
}

function dialogue10 () {
    pok.innerHTML = "J'avais tellement de choses à accomplir, de vies à sauver... Je voulais être infirmier..."
}

function dialogue11 () {
    pok.innerHTML = "Sa... Sacha, tu dois savoir une chose que tout le monde t'a toujours cachée..."
}

function dialogue12 () {
    pok.innerHTML = "Ton père... tu ne l'as jamais connu... en fait... il..."
}

function dialogue13 () {
    
    pok.innerHTML = "Trop tard, je meurs. Pas grave. Oublie ce que j'ai dit. Arg..."
}

function dialogue14 () {
    pok.style.display = 'none'
}

function dialogue15 () {
    florievo.play();
    bulbizarre.innerHTML = '<img src="flori.gif" height=150px id="player-pokemon" class="game__option" style="transform: scaleX(-1)">'
}

function dialogue16 () {
game.style.display = 'none'  
container.style.display = 'none'  
}

function dialogue17 () {
    end.style.display = 'block'
    }

function death() {
    game.style.display = 'none'  
    container.style.display = 'none'  
    red.pause();
    dead.innerHTML = '<br>LA HONTE !!! Tu as perdu.<br><br><img src="deadcara.gif"><br><br>'
    retry.style.display = "block"
}

    retry.addEventListener("click", () => {
    document.location.reload(true);
}
)


function evolution () {
    bulbizarre.innerHTML = '<img src="herbi.gif" height=150px id="player-pokemon" class="game__option" style="transform: scaleX(-1)">'

    playerChoice.style.display = 'none'
    ennemyChoice.style.display = 'none'

    module.style.display = 'block'
    life=life+2
    health=health+30
    playerLife.innerHTML = life+' pv'
    jauge.innerHTML = '<div style="width:'+health+'px;height:20px;border:1px solid #000; background: red"></div>'    

}

// $(document).keypress(function(e) {
//     var keyCode = e.keyCode;

//     if(keyCode == 87 || keyCode == 119){
//         console.log("You pressed W!");
//         alert("You pressed W!");
//         let actupoke = bulbizarre.innerHTML
//         console.log(actupoke)
//     }
// })

let module = document.getElementById('modal')


document.addEventListener("keydown", event => {
    if (event.keyCode === 87) {
      bulbizarre.innerHTML = '<img src="flori.gif" height=150px id="player-pokemon" class="game__option" style="transform: scaleX(-1)">'
      life=life+2
      jauge.innerHTML = '<div style="width:'+health+'px;height:20px;border:1px solid #000; background: red"; margin= "auto"></div>'
      playerLife.innerHTML = life+' pv'

        
    }
    
}
)

let lifeXp = document.getElementById('lifeXp')
let esquiXp = document.getElementById('esquiXp')
let bazooXp = document.getElementById('bazooXp')

function resetpok () {
    bulbizarre.innerHTML = actupoke
}

lifeXp.addEventListener("click", () => {
    life = life+5
    health = health+75
    // mult1 = health/15/life
    playerLife.innerHTML = life+' pv'
    jauge.innerHTML = '<div style="width:'+health+'px;height:20px;border:1px solid #000; background: red"></div>'
    module.style.display = 'none'
    blocker = false
    playerChoice.style.display = 'initial'
    ennemyChoice.style.display = 'initial'
})

esquiXp.addEventListener("click", () => {
    esqui = 0.6
    playerLife.innerHTML = life+' pv'
    jauge.innerHTML = '<div style="width:'+health+'px;height:20px;border:1px solid #000; background: red"></div>'
    module.style.display = 'none'
    blocker = false
    playerChoice.style.display = 'initial'
    ennemyChoice.style.display = 'initial'
})

bazooXp.addEventListener("click", () => {
    bazooka.innerHTML = '<div class="attack"><img src="bazooka.png" height="50px" width="50px" style="display:flex" class="icone" class="attack" style="border:2px solid #57657F"></div>'
    baz = true
    playerLife.innerHTML = life+' pv'
    jauge.innerHTML = '<div style="width:'+health+'px;height:20px;border:1px solid #000; background: red"></div>'
    module.style.display = 'none'
    blocker = false
    playerChoice.style.display = 'initial'
    ennemyChoice.style.display = 'initial'
})
    

// var gif = new SuperGif({
//     gif: playerPokemon,
//     loop_mode: 'auto',
//     auto_play: true,
//     draw_while_loading: false,
//     show_progress_bar: true,
//     progressbar_height: 10,
//     progressbar_foreground_color: 'rgba(0, 255, 4, 0.1)',
//     progressbar_background_color: 'rgba(255,255,255,0.8)'
  
//   });

// gif.pause()
