const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth()
});

// Muestra el QR para escanear con tu WhatsApp
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log('Escanea este QR con WhatsApp');
});

client.on('ready', () => {
  console.log('✅ Bot conectado y listo');
});

// Aquí va toda la lógica de respuestas
client.on('message', async (msg) => {
  const texto = msg.body.toLowerCase().trim();
  const chat = await msg.getChat();

  // Menú principal
  if (texto === 'hola' || texto === 'menu' || texto === 'inicio') {
    await msg.reply(
      '👋 ¡Bienvenido! ¿En qué te podemos ayudar?\n\n' +
      '1️⃣ Ver el menú\n' +
      '2️⃣ Hacer un pedido\n' +
      '3️⃣ Horario y ubicación\n' +
      '4 Hacer una reservación/n' +
      '4️⃣ Hablar con un humano\n\n' +
      'Responde con el número de tu opción.'
    );
  }

  else if (texto === '1') {
    await msg.reply(
      '🍖 *Nuestro menú*\n\n' +
      '• Taco de bistec — $35\n' +
      '• Taco de costilla — $45\n' +
      '• Taco de picaña — $45\n' +
      '• Hamburguesa al carbón — desde $110\n\n' +
      'Escribe *2* para hacer tu pedido.'
    );
  }

  else if (texto === '2') {
    await msg.reply(
      '📝 *Para hacer tu pedido*, dinos:\n\n' +
      '• ¿Qué quieres pedir?\n' +
      '• ¿Cuántas porciones?\n' +
      '• ¿Es para llevar o a domicilio?\n\n' +
      'Escríbenos y en un momento te atendemos 🙌'
    );
  }

  else if (texto === '3') {
    await msg.reply(
      '📍 *Ubicación:* [Tu dirección aquí]\n' +
      '🕐 *Horario:* Lunes a domingo, 1pm – 10pm\n\n' +
      '¿Algo más en que podamos ayudarte?'
    );
  }

  else if (texto === '4') {
    await msg.reply(
      '👤 En un momento un miembro de nuestro equipo te atiende.\n' +
      '¡Gracias por tu paciencia!'
    );
  }
});

client.initialize();
