import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, email, company, phone, message } = formData

    // Configurar o transporte de email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "seu-email-de-envio@gmail.com", // Idealmente, use variáveis de ambiente
        pass: process.env.EMAIL_PASS || "sua-senha-ou-app-password", // Idealmente, use variáveis de ambiente
      },
    })

    // Configurar o email
    const mailOptions = {
      from: process.env.EMAIL_USER || "seu-email-de-envio@gmail.com",
      to: "ezequielshartz@gmail.com",
      subject: "Novo contato do site Dogma Marketing",
      html: `
        <h1>Novo contato do site</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Telefone/WhatsApp:</strong> ${phone || "Não informado"}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    }

    // Enviar o email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso!" })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json(
      { success: false, message: "Erro ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 },
    )
  }
}
