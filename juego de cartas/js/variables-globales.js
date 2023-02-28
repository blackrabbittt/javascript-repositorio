var movimientos = 0;
var grupoTarjetas1 = [["🧠","🐰"],["🍔","🏈"],["🎮","💡"],["☢","🎪"]];
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
    }
];
