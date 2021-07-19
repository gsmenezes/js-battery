document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLowerCase()); //quando eu pressionar e soltar a tecla / o evento vem em letras minusculas
}); //adicione um observador de evento -> tecla pressionada = console.log(event.code)

document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value; //querySelector tem uma versatilidade melhor que getElementById

  if(song !== ''){
    let songArray = song.split(''); // vai transformar em array
    playComposition(songArray);
  }
})

function playSound(sound){
  let audioElement = document.querySelector(`#s_${sound}`); //vai completar com o que for enviado 
  let keyElement = document.querySelector(`div[data-key="${sound}]`); //seleciona a Div que possui a key conforme o evento é disparado

    if(audioElement){
      audioElement.currentTime = 0; //volta pro início do audio quando o evento é disparado, sem esperar pelo tempo estipulado
      audioElement.play(); //função disponível que toca arquivos de audio
    }

    if(keyElement){
      keyElement.classList.add('active'); //adiciona uma classe que queremos da lista de classes disponíveis

    setTimeout(() => {
      keyElement.classList.remove('active'); //remove a classe mencionada
        }, 300); 
    }
}

function playComposition(songArray){
  let wait = 0; // inicia o timeout em 0 e vai aumentando de 250 em 250.
  
  for(let songItem of songArray){ //loop com tempo de execução para os elementos
    setTimeout(()=>{
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}