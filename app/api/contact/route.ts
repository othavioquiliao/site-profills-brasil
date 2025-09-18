import { sendContactEmail } from "@/lib/emails/contact-form/email-contact";
import { contactFormSchema } from "@/lib/schemas/contact-form";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar os dados usando o schema
    const validatedData = contactFormSchema.parse(body);

    console.log("=== NOVA SOLICITAÇÃO DE ORÇAMENTO ===");
    console.log("Data/Hora:", new Date().toLocaleString("pt-BR"));
    console.log("Dados da solicitação:", {
      email: validatedData.email,
      phone: validatedData.phone,
      endereco: {
        cep: validatedData.cep,
        street: validatedData.street,
        number: validatedData.number,
        complement: validatedData.complement,
        neighborhood: validatedData.neighborhood,
        city: validatedData.city,
        state: validatedData.state,
      },
      projeto: {
        material: validatedData.material,
        service: validatedData.service,
        finish: validatedData.finish,
        details: validatedData.details || "Nenhum detalhe adicional",
      },
    });

    // Enviar e-mail com os dados do contato
    try {
      await sendContactEmail(validatedData);
      // Log já é feito dentro da função sendContactEmail
    } catch (emailError) {
      console.error("❌ Erro no envio do e-mail:", emailError);
      // Continuar mesmo se o e-mail falhar, mas registrar o erro
    }

    console.log("========================================");

    return NextResponse.json(
      {
        success: true,
        message: "Solicitação enviada com sucesso!",
        data: {
          id: Date.now(),
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro ao processar solicitação de orçamento:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Dados inválidos",
          errors: error.message,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erro interno do servidor",
      },
      { status: 500 },
    );
  }
}
