import superagent from "superagent"
import { expect } from "chai"

describe("Make API request", () => {
    it("get posts", async () => {
        const res = await superagent.get("https://jsonplaceholder.typicode.com/posts")
        expect(res.status).equal(200)
    });

    it("get single post", async () => {
        const res = await superagent.get("https://jsonplaceholder.typicode.com/posts/1")
        expect(res.status).equal(200)
    });

    it("get comments", async () => {
        const res = await superagent.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        expect(res.status).equal(200)
    });

    it("create post", async () => {
        const res = await superagent
            .post("https://jsonplaceholder.typicode.com/posts")
            .set("Content-Type", "application/json")
            .send({
                title: "morpheus",
                body: "leader",
            })
        expect(res.status).equal(201)
        expect(res.body.title).equal("morpheus")
        expect(res.body.body).equal("leader")
    });

    it("create another post", async () => {
        const res = await superagent
            .post("https://jsonplaceholder.typicode.com/posts")
            .set("Content-Type", "application/json")
            .send({
                title: "black",
                body: "leader",
            })
        expect(res.status).equal(201)
        expect(res.body.title).equal("black")
        expect(res.body.body).equal("leader")
    });

    it("update post with patch", async () => {
        const res = await superagent
            .patch("https://jsonplaceholder.typicode.com/posts/1")
            .set("Content-Type", "application/json")
            .send({
                title: "zion resident",
            })
        expect(res.status).equal(200)
        expect(res.body.title).equal("zion resident")
    });

    it("update another post with patch", async () => {
        const res = await superagent
            .patch("https://jsonplaceholder.typicode.com/posts/1")
            .set("Content-Type", "application/json")
            .send({
                title: "zion president",
            })
        expect(res.status).equal(200)
        expect(res.body.title).equal("zion president")
    });

    it("update post with put", async () => {
        const res = await superagent
            .put("https://jsonplaceholder.typicode.com/posts/1")
            .set("Content-Type", "application/json")
            .send({
                title: "morpheus666",
                body: "zion resident",
            })
        expect(res.status).equal(200)
        expect(res.body.title).equal("morpheus666")
        expect(res.body.body).equal("zion resident")
    });

    it("update post with put", async () => {
        const res = await superagent
            .put("https://jsonplaceholder.typicode.com/posts/1")
            .set("Content-Type", "application/json")
            .send({
                title: "morpheus777",
                body: "zion resident",
            })
        expect(res.status).equal(200)
        expect(res.body.title).equal("morpheus777")
        expect(res.body.body).equal("zion resident")
    });

    it("delete post", async () => {
        const res = await superagent.delete("https://jsonplaceholder.typicode.com/posts/1")
        expect(res.status).equal(200)
    })
})