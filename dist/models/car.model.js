"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                make: { type: String, maxlength: 24 },
                model: { type: String, maxlength: 24 },
                year: { type: Number, maxlength: 4 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store car model', []];
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Car = Car;
