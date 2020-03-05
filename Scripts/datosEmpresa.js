let select = document.getElementById('numeros');

//AYUDADO POR GABRIEL MENDEZ CORTIZO
select.addEventListener('change', event => {
    let valueSelect = event.srcElement.value;
    let centrosPadre = document.querySelector('div.centros');
    centrosPadre.innerHTML = '';
    for (let i = 1; i <= valueSelect; i++) {
        centrosPadre.innerHTML += `
        <div style="margin-bottom: 50px; padding-top: 20px;">
        <h2>Inicio Solicitudes</h2>
        <h3 style='color:#2E8F9E; '>Centro ${i}</h3>
        <input type="text" placeholder="Nombre del centro">
        <input type="text" placeholder="Direccion">
        <input type="text" placeholder="Email de Contacto">
        <input type="text" placeholder="Año cr">
        <input type="text" placeholder="Cantidad Solicitada">
        <input type="text" placeholder="Gastos Previstos">
    </div>
      `;
    }
});