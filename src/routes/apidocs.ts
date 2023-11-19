import express, { Router } from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
import openapiDoc from "../schemas/openapi.json"

export const router=Router();

router.use("/",swaggerUi.serve)
router.get("/",swaggerUi.setup(openapiDoc));

router.use('/openapi.json',
    express.static(path.join(__dirname,'../schemas/openapi.json')
))