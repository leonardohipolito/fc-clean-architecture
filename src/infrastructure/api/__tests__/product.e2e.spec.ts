import { app, sequelize } from "../express";
import ProductModel from "../../product/repository/sequelize/product.model";
import request from "supertest";

describe("E2E test for product", () => {
    beforeEach(async () => {
        await sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("should list all products", async () => {
        await ProductModel.create({
            id: "1",
            name: "Product 1",
            price: 100,
        });
        await ProductModel.create({
            id: "2",
            name: "Product 2",
            price: 200,
        });

        const response = await request(app).get("/product").send();

        expect(response.status).toBe(200);
        expect(response.body.products).toEqual(
            expect.arrayContaining([
                { id: "1", name: "Product 1", price: 100 },
                { id: "2", name: "Product 2", price: 200 },
            ])
        );
    });
});
