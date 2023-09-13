document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("box");
    const scoreDisplay = document.getElementById("score");
    const nextblock = document.getElementById("nextblock");
    const startingminutes=5;
    let time=startingminutes*60;
    const countdown=document.getElementById("countdown");
    setInterval(updateCountdown,1000);
    function updateCountdown(){
        const minutes=Math.floor(time/60);
        let seconds=time%60;
        countdown.innerHTML=`${minutes}:${seconds}`;
        time--;
        if(time===0)
        window.location.reload();
    }

    const phrases = [
        "WE", "DESIGN", "AND", "DEVELOP", "APPLICATIONS",
        "THAT", "RUN", "THE", "WORLD", "AND",
        "SHOWCASE", "THE", "FUTURE"
    ];
        let score = 0;
        let currentBlock;
        let interval;
        
        // Function to create a block
        function createBlock() {
            const block = document.createElement("div");
            block.classList.add("block");
            return block;
        }
    
        // Function to create a random phrase block
        function createPhraseBlock() {
            const phrase = phrases[Math.floor(Math.random() * phrases.length)];
            const phraseBlock = createBlock();
            
            phraseBlock.innerText= phrase;
            nextblock.innerHTML=phrase;
            return phraseBlock;
        }
    
        // Function to update the game board
        function updateBoard() {
            if (!currentBlock) {
                currentBlock = createPhraseBlock();
                gameBoard.appendChild(currentBlock);
                currentBlock.style.left = Math.floor(Math.random() * (gameBoard.clientWidth - 32)) + 'px';
                currentBlock.style.top = '0px';
            } else {
                const topPosition = parseInt(currentBlock.style.top) || 0;
                const bottomPosition = topPosition + 32;
                currentBlock.style.top = bottomPosition + 'px';
    
                if (bottomPosition >= gameBoard.clientHeight - 32) {
                    // Block reached the bottom, check for word match
                    const word = currentBlock.innerText.trim();
                    const matched = phrases.some(phrase => phrase === word);
                    if (matched) {
                        score += 10;
                        scoreDisplay.innerText = `Score: ${score}`;
                        // currentBlock.remove();
                        currentBlock = null;
                    }
                }
            }
        }
    
        // Handle user input for horizontal movement
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft" && currentBlock) {
                const leftPosition = parseInt(currentBlock.style.left) || 0;
                if (leftPosition > 0) {
                    currentBlock.style.left = leftPosition - 30 + 'px';
                }
            } else if (event.key === "ArrowRight" && currentBlock) {
                const leftPosition = parseInt(currentBlock.style.left) || 0;
                if (leftPosition < gameBoard.clientWidth - 30) {
                    currentBlock.style.left = leftPosition + 30 + 'px';
                }
            }
        });
    
        // Start the game loop
        interval = setInterval(updateBoard, 450); // Adjust the interval for block generation
    });
    function myFunction(){
        alert("There is no hint");
    }
    function clicked()
    {
        window.location.reload();
    }