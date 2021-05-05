"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Roll {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                image_url: { type: String },
                name: { type: String },
                source: { type: String },
                barrel: { type: String },
                ammo: { type: String },
                perkOne: { type: String },
                perkTwo: { type: String },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store roll info', [
                {
                    route: '/get-all-rolls',
                    method: 'POST',
                    callback: this.getAllRolls,
                    requireToken: true,
                },
                {
                    route: '/get-roll-by-id/:id',
                    method: 'POST',
                    callback: this.getRollById,
                    requireToken: true,
                },
                {
                    route: '/create-roll',
                    method: 'POST',
                    callback: this.createRoll,
                    requireToken: true,
                },
                {
                    route: '/update-roll/id/:id',
                    method: 'PUT',
                    callback: this.updateRoll,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteRoll,
                    requireToken: true,
                }
            ]
        ];
    }
    createRoll(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let rollCtrl = model.controller;
            let resp = yield rollCtrl.insert(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    updateRoll(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let rollCtrl = model.controller;
            let resp = yield rollCtrl.update(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    deleteRoll(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let rollCtrl = model.controller;
            let resp = yield rollCtrl.remove(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    getAllRolls(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
            };
            let rollCtrl = model.controller;
            let resp = yield rollCtrl.get(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    getRollById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let rollCtrl = model.controller;
            let resp = yield rollCtrl.get(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Roll = Roll;
