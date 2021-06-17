let atividadesPendentes;
let atividadesRealizadas = 0;
const consultarAtividadesDoDia = () => {
    if (atividadesReealizadas === 3){
        return [];
    }
    return [
        "Atividades 1",
        "Atividades 2",
        "Atividades 3"
    ];
}

const informarAtividades = (atividades) => {
    if (atividades.length === 0) {
        console.log("Voce nao tem mais atividade pendente");
        return;
    }
    console.log(`Atividades pendentes ${atividades}`)
}

do {
    atividadesPendentes = consultarAtividadesDoDia();
    informarAtividades(atividadesPendentes);
    atividadesRealizadas++;
} while (atividadesPendentes.length > 0);