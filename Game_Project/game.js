//const canvas = document.querySelector('canvas')
//const context = canvas.getContext('2d')
//let corVirus = document.querySelector('.corVirus')

const gridElement = document.querySelector('.grid')
const putin = document.querySelector('.putin')
const coronas = document.querySelector('.coronas')
const xiJinping = document.querySelector('.xi-Jinping')

const gridWidth = 15
const gridHeight = 15
const cells = []

let score = 0

const initialPosition = 202
let currentPosition = initialPosition

let initialCoronaPosition = currentPosition
let coronaPosition = currentPosition

let XiInitialPosition = 34
let xiCurrentPosition = XiInitialPosition

let trumpInitialPosition = 36
let trumpCurrentPosition = trumpInitialPosition

let merkelInitialPosition = 32
let merkelCurrentPosition = merkelInitialPosition

let harryInitialPosition = 20
let harryCurrentPosition = harryInitialPosition

let popeInitialPosition = 18
let popeCurrentPosition = popeInitialPosition

let muskInitialPosition = 22
let muskCurrentPosition = muskInitialPosition

let macronInitialPosition = 38
let macronCurrentPosition = macronInitialPosition

let borisInitialPosition = 24
let borisCurrentPosition = borisInitialPosition

let erdoganInitialPosition = 40
let erdoganCurrentPosition = erdoganInitialPosition

let kimInitialPosition = 26
let kimCurrentPosition = kimInitialPosition


for (let i = 0; i < gridWidth * gridHeight; i++) {
    const cell = createCell()
    gridElement.appendChild(cell)
    cells.push(cell)
}

function createCell() {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    return cell
}


function showCorona(classToAdd) {
    // Show the player in the currentPosition
    cells[coronaPosition].classList.add('coronas')
    if (classToAdd) {
      cells[coronaPosition].classList.add(classToAdd)
    }
  }

  function removeCorona() {
    // Stop showing the player in the currentPosition
    cells[coronaPosition].classList.remove('coronas')
  }
  
  function moveCorona(newCoronaPosition, classToAdd) {
    if (newCoronaPosition < 0) {
      return
    }
    if (newCoronaPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeCorona()
    coronaPosition = newCoronaPosition
  
    
    // Always show last
    showCorona(classToAdd)
  }




  function showPlayer(classToAdd) {
    // Show the player in the currentPosition
    cells[currentPosition].classList.add('putin')
    if (classToAdd) {
      cells[currentPosition].classList.add(classToAdd)
    }
  }

  function removePlayer() {
    // Stop showing the player in the currentPosition
    cells[currentPosition].classList.remove('putin')
  }
  
  function movePlayer(XinewPosition, classToAdd) {
    if (XinewPosition < 0) {
      return
    }
    if (XinewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removePlayer()
    currentPosition = XinewPosition
  
    
    // Always show last
    showPlayer(classToAdd)
  }







document.addEventListener('keydown', function (event) {
    console.log(event.key, event.keyCode, event.code)
  
    switch (event.key) {
    
    
      case 'ArrowLeft':
        if (currentPosition % gridWidth === 0) {
          break
        }
        movePlayer(currentPosition - 1)
        break
      case 'ArrowRight':
        if (currentPosition % gridWidth === gridWidth - 1) {
          break
        }
        movePlayer(currentPosition + 1)
        break
        case 'ArrowUp':
          moveCorona(currentPosition - gridWidth)
      break

    }
  })



  function showXi(classToAdd) {
    // Show the player in the currentPosition
    cells[xiCurrentPosition].classList.add('xi-Jinping')
    if (classToAdd) {
      cells[xiCurrentPosition].classList.add(classToAdd)
    }
  }

  function removeXi() {
    // Stop showing the player in the currentPosition
    cells[xiCurrentPosition].classList.remove('xi-Jinping')
  }
  
  function moveXi(xiNewPosition, classToAdd) {
    if (xiNewPosition < 0) {
      return
    }
    if (xiNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeXi()
    xiCurrentPosition = xiNewPosition
  
    
    // Always show last
    showXi(classToAdd)
  }





  function showTrump(classToAdd) {
    // Show the player in the currentPosition
    cells[trumpCurrentPosition].classList.add('trump')
    if (classToAdd) {
      cells[trumpCurrentPosition].classList.add(classToAdd)
    }
  }

  function removeTrump() {
    // Stop showing the player in the currentPosition
    cells[trumpCurrentPosition].classList.remove('trump')
  }
  
  function moveTrump(trumpNewPosition, classToAdd) {
    if (trumpNewPosition < 0) {
      return
    }
    if (trumpNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeTrump()
    trumpCurrentPosition = trumpNewPosition
  
    
    // Always show last
    showTrump(classToAdd)
  }


  function showMerkel(classToAdd) {
    // Show the player in the currentPosition
    cells[merkelCurrentPosition].classList.add('merkel')
    if (classToAdd) {
      cells[merkelCurrentPosition].classList.add(classToAdd)
    }
  }

  function removeMerkel() {
    // Stop showing the player in the currentPosition
    cells[merkelCurrentPosition].classList.remove('merkel')
  }
  
  function moveMerkel(merkelNewPosition, classToAdd) {
    if (merkelNewPosition < 0) {
      return
    }
    if (merkelNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeMerkel()
    merkelCurrentPosition = merkelNewPosition
  
    
    // Always show last
    showMerkel(classToAdd)
  }


  function showHarry(classToAdd) {
    // Show the player in the currentPosition
    cells[harryCurrentPosition].classList.add('harry')
    if (classToAdd) {
      cells[harryCurrentPosition].classList.add(classToAdd)
    }
  }

  function removeHarry() {
    // Stop showing the player in the currentPosition
    cells[harryCurrentPosition].classList.remove('harry')
  }
  
  function moveHarry(harryNewPosition, classToAdd) {
    if (harryNewPosition < 0) {
      return
    }
    if (harryNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeHarry()
    harryCurrentPosition = harryNewPosition
  
    
    // Always show last
    showHarry(classToAdd)
  }


  function showPope(classToAdd) {
    // Show the player in the currentPosition
    cells[popeCurrentPosition].classList.add('pope')
    if (classToAdd) {
      cells[popeCurrentPosition].classList.add(classToAdd)
    }
  }

  function removePope() {
    // Stop showing the player in the currentPosition
    cells[popeCurrentPosition].classList.remove('pope')
  }
  
  function movePope(popeNewPosition, classToAdd) {
    if (popeNewPosition < 0) {
      return
    }
    if (popeNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removePope()
    popeCurrentPosition = popeNewPosition
  
    
    // Always show last
    showPope(classToAdd)
  }




  function showMusk(classToAdd) {
    // Show the player in the currentPosition
    cells[muskCurrentPosition].classList.add('musk')
    if (classToAdd) {
      cells[muskCurrentPosition].classList.add(classToAdd)
    }
  }

  function removeMusk() {
    // Stop showing the player in the currentPosition
    cells[muskCurrentPosition].classList.remove('musk')
  }
  
  function moveMusk(muskNewPosition, classToAdd) {
    if (muskNewPosition < 0) {
      return
    }
    if (muskNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeMusk()
    muskCurrentPosition = muskNewPosition
  
    
    // Always show last
    showMusk(classToAdd)
  }

  function showMacron(classToAdd) {
    // Show the player in the currentPosition
    cells[macronCurrentPosition].classList.add('macron')
    if (classToAdd) {
      cells[macronCurrentPosition].classList.add(classToAdd)
    }
  }

  function removeMacron() {
    // Stop showing the player in the currentPosition
    cells[macronCurrentPosition].classList.remove('macron')
  }
  
  function moveMacron(macronNewPosition, classToAdd) {
    if (macronNewPosition < 0) {
      return
    }
    if (macronNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeMacron()
    macronCurrentPosition = macronNewPosition
  
    
    // Always show last
    showMacron(classToAdd)
  }



  function showBoris(classToAdd) {
    // Show the player in the currentPosition
    cells[borisCurrentPosition].classList.add('boris')
    if (classToAdd) {
      cells[borisCurrentPosition].classList.add(classToAdd)
    }
  }

  function removeBoris() {
    // Stop showing the player in the currentPosition
    cells[borisCurrentPosition].classList.remove('boris')
  }
  
  function moveBoris(borisNewPosition, classToAdd) {
    if (borisNewPosition < 0) {
      return
    }
    if (borisNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeBoris()
    borisCurrentPosition = borisNewPosition
  
    
    // Always show last
    showBoris(classToAdd)
  }



  function showErdogan(classToAdd) {
    // Show the player in the currentPosition
    cells[erdoganCurrentPosition].classList.add('erdogan')
    if (classToAdd) {
      cells[erdoganCurrentPosition].classList.add(classToAdd)
    }
  }

  function removeErdogan() {
    // Stop showing the player in the currentPosition
    cells[erdoganCurrentPosition].classList.remove('erdogan')
  }
  
  function moveErdogan(erdoganNewPosition, classToAdd) {
    if (erdoganNewPosition < 0) {
      return
    }
    if (erdoganNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeErdogan()
    erdoganCurrentPosition = erdoganNewPosition
  
    
    // Always show last
    showErdogan(classToAdd)
  }


  function showKim(classToAdd) {
    // Show the player in the currentPosition
    cells[kimCurrentPosition].classList.add('kim')
    if (classToAdd) {
      cells[kimCurrentPosition].classList.add(classToAdd)
    }
  }

  function removeKim() {
    // Stop showing the player in the currentPosition
    cells[kimCurrentPosition].classList.remove('kim')
  }
  
  function moveKim(kimNewPosition, classToAdd) {
    if (kimNewPosition < 0) {
      return
    }
    if (kimNewPosition > gridWidth * gridHeight - 1) {
      return
    }
    removeKim()
    kimCurrentPosition = kimNewPosition
  
    
    // Always show last
    showKim(classToAdd)
  }


movePlayer(currentPosition)
moveXi(xiCurrentPosition)
moveTrump(trumpCurrentPosition)
moveMerkel(merkelCurrentPosition)
moveHarry(harryCurrentPosition)
movePope(popeCurrentPosition)
moveMusk(muskCurrentPosition)
moveMacron(macronCurrentPosition)
moveBoris(borisCurrentPosition)
moveErdogan(erdoganCurrentPosition)
moveKim(kimCurrentPosition)


let corPosition = shootPosition
function theShot () {}
