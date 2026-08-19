import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { nome, email, cpf, dataNascimento, procedimento, comoConheceu, dataSubmissao, horaSubmissao } = req.body;

    // Validar dados
    if (!nome || !email || !cpf || !dataNascimento || !procedimento || !comoConheceu) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }

    // Configurar transporte de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email para a clínica
    const mailToClinica = {
      from: process.env.EMAIL_USER,
      to: process.env.CLINIC_EMAIL,
      subject: `Novo agendamento: ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C99A3D;">Novo Agendamento Recebido</h2>
          <div style="background-color: #F5F1E8; padding: 20px; border-radius: 8px;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>CPF:</strong> ${cpf}</p>
            <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
            <p><strong>Procedimento:</strong> ${procedimento}</p>
            <p><strong>Como conheceu:</strong> ${comoConheceu}</p>
            <p><strong>Data de submissão:</strong> ${dataSubmissao} às ${horaSubmissao}</p>
          </div>
        </div>
      `
    };

    // Email de confirmação para o cliente
    const mailToClient = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Agendamento Recebido - Clínica de Estética',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C99A3D;">Obrigado pelo seu agendamento!</h2>
          <p>Olá <strong>${nome}</strong>,</p>
          <p>Recebemos sua solicitação de agendamento para o procedimento de <strong>${procedimento}</strong>.</p>
          <p>Em breve entraremos em contato para confirmar a data e horário.</p>
          <p style="color: #8A5A16; font-size: 12px; margin-top: 30px;">
            Este é um email automático. Não responda a este endereço.
          </p>
        </div>
      `
    };

    // Enviar emails em paralelo
    await Promise.all([
      transporter.sendMail(mailToClinica),
      transporter.sendMail(mailToClient)
    ]);

    return res.status(200).json({
      success: true,
      message: 'Formulário enviado com sucesso!'
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({
      success: false,
      message: 'Erro ao enviar formulário: ' + error.message
    });
  }
}
