const express = require('express');
const bookController = require("../controllers/bookController");
const BookValidator = require("../middlewares/bookValidator");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Crud-Books
 *   description: Crud for object books
 * definitions:
 *   Book:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *         required: true
 *         description: Title of the book
 *       description:
 *         type: string
 *         required: false
 *         description: Description of the book
 *       author:
 *         type: string
 *         required: true
 *         description: Author of the book
 *       gender:
 *         type: string
 *         required: false
 *         description: Gender of the book
 *       editorial:
 *         type: string
 *         required: false
 *         description: Editorial of the book
 */

 /**
 * @swagger
 * path:
 *  /api/book:
 *    get:
 *      tags: [Crud-Books]
 *      summary: Get all books from database
 *      requestBody:
 *        required: false
 *      responses:
 *        "200":
 *          description: Return all books from database
 *        "400":
 *          description: Unexpected error occurred
 */

router.get("/", bookController.getAll);

/**
 * @swagger
 * path:
 *  /api/book/{id}:
 *    get:
 *      tags: [Crud-Books]
 *      summary: Get information from a specific book
 *      parameters:
 *        - name: id
 *          required: true
 *          type: string
 *          in: query
 *      requestBody:
 *        required: false
 *      responses:
 *        "200":
 *          description: Return information from a specific book
 *        "400":
 *          description: Unexpected error occurred
 */

router.get("/:id", bookController.getById);

/**
 * @swagger
 * path:
 *  /api/book:
 *    post:
 *      tags: [Crud-Books]
 *      summary: Create new book
 *      requestBody:
 *        required: true
 *        content:
 *              application/json:
 *                schema:
 *                  $ref: '#/definitions/Book'
 *      responses:
 *        "200":
 *          description: Book has been created succesfully!
 *        "400":
 *          description: Unexpected error occurred
 */

router.post("/", BookValidator.validateSchema, bookController.add);

/**
 * @swagger
 * path:
 *  /api/book/{id}:
 *    put:
 *      tags: [Crud-Books]
 *      summary: Update information of a book
 *      parameters:
 *        - name: id
 *          required: true
 *          type: string
 *          in: query
 *      requestBody:
 *        required: true
 *        content:
 *              application/json:
 *                schema:
 *                  $ref: '#/definitions/Book'
 *      responses:
 *        "200":
 *          description: Book has been updated succesfully!
 *        "400":
 *          description: Unexpected error occurred
 */

router.put("/:id", bookController.update);

/**
 * @swagger
 * path:
 *  /api/book/{id}:
 *    delete:
 *      tags: [Crud-Books]
 *      summary: Delete information of a book
 *      parameters:
 *        - name: id
 *          required: true
 *          type: string
 *          in: query
 *      requestBody:
 *        required: false
 *      responses:
 *        "200":
 *          description: Book has been deleted succesfully!
 *        "400":
 *          description: Unexpected error occurred
 */

router.delete("/:id", bookController.delete);

module.exports = router;
// router.get("*", bookController.notFound);
