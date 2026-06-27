if(process.env.NODE_ENV === "development") {
    console.log("Aplicação iniciada com sucesso em ambientes de desenvolvimento!");
} else {
    throw new Error("Mensagem de erro aqui!");
}