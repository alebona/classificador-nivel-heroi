// Definição dos heróis e suas experiências
const herois = [
    { nome: "Flash", xp: 3800 },
    { nome: "Capitão América", xp: 5100 },
    { nome: "Mulher Maravilha", xp: 5800 },
    { nome: "Aquaman", xp: 7600 },
    { nome: "Superman", xp: 9900 },
    { nome: "Homem de Ferro", xp: 20000 }
];

// Função para determinar o nível com base na experiência
function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Iteração sobre cada herói para determinar o nível e imprimir
herois.forEach(hero => {
    const { nome, xp } = hero; // Destructuring para obter nome e xp
    const nivel = determinarNivel(xp); // Determinar o nível baseado na experiência

    console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
});
