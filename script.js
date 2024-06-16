document.addEventListener('DOMContentLoaded', function() {
    const personagens = [
        {
            nome: 'Ichigo Kurosaki',
            imagem: 'ichago.jpg',
            descricao: 'Ichigo Kurosaki é um estudante colegial que acidentalmente recebe poderes de um shinigami.'
        },
        {
            nome: 'Aizen',
            imagem: 'aizen.jpg',
            descricao: 'Aizen é um shinigami que se tornou o vilão principal do anime.'
        },
        {
            nome: 'Byakuya Kuchiki',
            imagem: 'byakuya.jpg',
            descricao: 'Byakuya Kuchiki é o capitão da 6ª Divisão do Gotei 13 e irmão mais velho de Rukia.'
        },
        {
            nome: 'Renji Abarai',
            imagem: 'renji.jpg',
            descricao: 'Renji Abarai é um tenente da 6ª Divisão e amigo próximo de Ichigo.'
        },
        {
            nome: 'Toshiro Hitsugaya',
            imagem: 'toshiro.jpg',
            descricao: 'Toshiro Hitsugaya é o capitão da 10ª Divisão do Gotei 13, conhecido por sua habilidade com gelo.'
        },
        {
            nome: 'Ulquiorra Cifer',
            imagem: 'ulquiorra.jpg',
            descricao: 'Ulquiorra Cifer é um arrancar e um dos principais antagonistas do anime.'
        },
        {
            nome: 'Grimmjow Jaegerjaquez',
            imagem: 'grimmjow.jpg',
            descricao: 'Grimmjow Jaegerjaquez é outro arrancar e um dos inimigos de Ichigo.'
        },
        {
            nome: 'Orihime Inoue',
            imagem: 'Orihime.jpg',
            descricao: 'Orihime Inoue é uma amiga de Ichigo com habilidades espirituais especiais.'
        }
    ];

    const personagensContainer = document.getElementById('personagens-container');

    personagens.forEach(personagem => {
        const divPersonagem = document.createElement('div');
        divPersonagem.classList.add('personagem');

        const imgPersonagem = document.createElement('img');
        imgPersonagem.src = personagem.imagem;
        imgPersonagem.alt = personagem.nome;

        const divInfo = document.createElement('div');
        divInfo.classList.add('info');
        divInfo.innerHTML = `<strong>${personagem.nome}</strong><br>${personagem.descricao}`;

        divPersonagem.appendChild(imgPersonagem);
        divPersonagem.appendChild(divInfo);
        personagensContainer.appendChild(divPersonagem);
    });

 
