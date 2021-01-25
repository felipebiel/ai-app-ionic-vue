export default {
    tratarNivel(value) {
        switch (value) {
          case 0:
            value = "Vazio";
            break;
          case 1:
            value = "Baixo";
            break;
          case 2:
            value = "Médio";
            break;
  
          case 3:
            value = "Cheio";
            break;
          default:
            break;
        }
        return value;
      },
}