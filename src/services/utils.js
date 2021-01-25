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

    dateAgo(value) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 0) // less than 0 seconds ago will show as 'Just now'
              return 'Agora';
            const intervals = {
              'ano': 31536000,
              'mês': 2592000,
              'semana': 604800,
              'dia': 86400,
              'hora': 3600,
              'minuto': 60,
              'segundo': 1
            };
            let counter;
            for (const i in intervals) {
              counter = Math.floor(seconds / intervals[i]);
              if (counter > 0)
                if (counter === 1) {
                  return counter + ' ' + i +' atrás'; // singular (1 day ago)
                } else {
                  return counter + ' ' + i +'s atrás'; // plural (2 days ago)
                }
            }
          }
          return value;
    },
}