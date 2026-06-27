import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
    res.json({ status: "ok", message: "API operando 100%" });
});

router.post("/users", (req: Request, res: Response) => {
    const { name } = req.body;

    if(!name) { 
        return res.status(400).json({ error: "Nome é obrigatório" });
    }

    return res.status(201).json({ message: `Usuário ${name} criado com sucesso` });
});

export { router };
