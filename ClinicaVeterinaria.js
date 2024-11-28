const prompt = require("prompt-sync")();

//Adicionar um animal de estimação:            -OK
// O nome e o nome do dono não estejam vazios. -ok
// A idade seja um número positivo.            -ok


//Listar todos os animais cadastrados:                  -OK
//Exiba os dados de todos os animais registrados de forma organizada.           --OK    
//Crie uma função para listar os animais cadastrados, organizando-os por tipo (ex.: todos os gatos juntos).  --OK

//Adicione uma funcionalidade para buscar animais pelo nome ou tipo.  -OK

//Permita editar as informações de um animal (ex.: corrigir a idade ou mudar o nome do dono).

//Adicione a possibilidade de remover um animal pelo nome.

const listaAnimal = [];
let sairMenu = false;
do {
    console.log("Bem vindo a Veterinaria\n" +
        "Menu: \n" +
        "[1] - Adicionar Animal.\n" +
        "[2] - Listar todos animais registrados.\n" +
        "[3] - Buscar Animal pelo nome.\n" +
        "[4] - Buscar animais pelo tipo.\n" +
        "[5] - Remover um Animal.\n" +
        "[6] - Sair do app\n")
    let escolha = parseInt(prompt("Digite o numero da Opcao:"));
    switch (escolha) {
        case 1:
            AdicionarAnimal();
            break;
        case 2:
            ListarTodosAnimais();
            break
        case 3:
            BuscarAnimalPeloNome();
            break;
        case 4:
            BuscarAnimalPeloTipo();
            break;
        case 5:
            RemoverAnimal();
            break;
        case 6:
            sairMenu = true;
            break;
        default:
            console.log("opção invalida, tente novamente.");
            break;
    }
} while (!sairMenu);


function AdicionarAnimal() {
    let sairAdicionarAnimal = false;
    do {
        let nomeAnimal = prompt("Digite o nome do Animal: ");
        let tipoAnimal = prompt("Digite o tipo do Animal: ");
        let idadeAnimal = prompt("Digite a idade do Animal: ");
        let nomeDoDono = prompt("Digite o nome do dono do Animal: ");
        if (nomeAnimal !== "" & nomeDoDono !== "" & idadeAnimal > 0) {
            listaAnimal.push({ nomeDoDono, nomeAnimal, idadeAnimal, tipoAnimal });
            sairAdicionarAnimal = true;
        } else {
            console.log("Preencha todos os dados.");
        };
    } while (!sairAdicionarAnimal);
};

function ListarTodosAnimais() {
    listaAnimal.sort(function (a, b) {
        if (a.tipoAnimal < b.tipoAnimal) return -1;
        if (a.tipoAnimal > b.tipoAnimal) return 1;
        return 0;
    });
    listaAnimal.forEach(listaAnimal => {
        console.log(listaAnimal);
    });
};

function BuscarAnimalPeloNome() {
    let nomeDoAnimalParaBuscar = prompt("Digite o nome do Animal: ").toLowerCase();
    function encontrarNomeAnimal() {
        return listaAnimal.nomeAnimal = nomeDoAnimalParaBuscar;
    };
    console.log(listaAnimal.find(encontrarNomeAnimal));
};

function BuscarAnimalPeloTipo() {
    let tipoDoAnimalParaBuscar = prompt("Digite o tipo dos animais: ").toLowerCase();

    let listaBuscada = listaAnimal.filter(animal => animal.tipoAnimal.toLowerCase() === tipoDoAnimalParaBuscar);

    listaBuscada.forEach(animal => {
        console.log(animal);
    });
};

function RemoverAnimal(){
    let animalParaRemover = prompt("Digite o nome do Animal que vai ser removido: ");
    let indiceParaRemover = listaAnimal.findIndex(listaAnimal => listaAnimal.nomeAnimal.toLowerCase() === animalParaRemover.toLowerCase());

    if (indiceParaRemover !== -1){
        listaAnimal.splice(indiceParaRemover,1);
        console.log("Animal removido.")
    }
}
