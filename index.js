const nickName = "SeTTh";
let xp = 8000;
let patent;

if (xp < 1000) {
  patent = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  patent = "Bronze";
} else if (xp >= 2001 && xp <= 3000) {
  patent = "Prata";
} else if (xp >= 3001 && xp <= 4000) {
  patent = "Ouro";
} else if (xp >= 4001 && xp <= 5000) {
  patent = "Platina";
} else if (xp >= 5001 && xp <= 6000) {
  patent = "Ascendente";
} else if (xp >= 6001 && xp <= 7000) {
  patent = "Imortal";
} else if (xp > 7001) {
  patent = "Radiante";
} else {
  console.log("Qual a sua XP ?");
}
console.log(`O Herío de nome: ${nickName} está na patente: ${patent}`);
