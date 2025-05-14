// Definindo o nome do herói e a quantidade de XP
let nome = "Arthas";  // Você pode trocar por outro nome ou usar gets() se for entrada do usuário
let xp = 7520;        // Você pode trocar por outro valor ou usar gets() se for entrada do usuário

// Variável para armazenar o nível
let nivel = "";

// Estrutura de decisão para classificar o nível do herói
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
  nivel = "Bronze";
} else if (xp <= 5000) {
  nivel = "Prata";
} else if (xp <= 7000) {
  nivel = "Ouro";
} else if (xp <= 8000) {
  nivel = "Platina";
} else if (xp <= 9000) {
  nivel = "Ascendente";
} else if (xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
