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
class Ammo {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                ammoName: { type: String },
            }, 'A table to store ammo info', [
                {
                    route: '/get-all-ammos',
                    method: 'POST',
                    callback: this.getAllAmmo,
                    requireToken: true,
                },
                {
                    route: '/get-ammo-by-id/:id',
                    method: 'POST',
                    callback: this.getAmmoById,
                    requireToken: true,
                },
                {
                    route: '/create-ammo',
                    method: 'POST',
                    callback: this.createAmmo,
                    requireToken: true,
                },
                {
                    route: '/update-ammo/id/:id',
                    method: 'PUT',
                    callback: this.updateAmmo,
                    requireToken: true,
                },
                {
                    route: '/deleteAmmo/id/:id',
                    method: 'DELETE',
                    callback: this.deleteAmmo,
                    requireToken: true,
                }
            ]
        ];
    }
    createAmmo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let ammoCtrl = model.controller;
            let resp = yield ammoCtrl.insert(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    updateAmmo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let ammoCtrl = model.controller;
            let resp = yield ammoCtrl.update(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    deleteAmmo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let ammoCtrl = model.controller;
            let resp = yield ammoCtrl.remove(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    getAllAmmo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
            };
            let ammoCtrl = model.controller;
            let resp = yield ammoCtrl.get(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    getAmmoById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let ammoCtrl = model.controller;
            let resp = yield ammoCtrl.get(req, null, null);
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
exports.Ammo = Ammo;
