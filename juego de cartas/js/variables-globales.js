var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas1 = [["🧠","🐰"],["🍔","🏈"],["🎮","💡", "💩", "🎃"],["☢","🎪", "🤖", "👹"],["🌈", "👽","☠️", "👾"]];
var nivelActual = 0;
var niveles = [
    {
        tarjetas: grupoTarjetas1[0],
        movimientosMax: 3
    },
    {
        tarjetas: grupoTarjetas1[0].concat(grupoTarjetas1[1]),
        movimientosMax: 8
    },
    {
        tarjetas: grupoTarjetas1[0].concat(grupoTarjetas1[1], grupoTarjetas1[2]),
        movimientosMax: 12
    },
    {
        tarjetas: grupoTarjetas1[0].concat(
          grupoTarjetas1[1],
          grupoTarjetas1[2],
          grupoTarjetas1[3]
        ),
        movimientosMax: 25
      },
      {
        tarjetas: grupoTarjetas1[0].concat(
          grupoTarjetas1[1],
          grupoTarjetas1[2],
          grupoTarjetas1[3],
          grupoTarjetas1[4]
        ),
        movimientosMax: 60
      }
    ];
