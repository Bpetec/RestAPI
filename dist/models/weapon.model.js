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
class Weapon {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                weaponName: { type: String, maxlength: 24 },
                weaponType: { type: String, maxlength: 24 },
            }, 'A table to store weapon info', [
                {
                    route: '/get-all-weapons',
                    method: 'POST',
                    callback: this.getAllWeapons,
                    requireToken: true,
                },
                {
                    route: '/get-weapon-by-id/:id',
                    method: 'POST',
                    callback: this.getWeaponById,
                    requireToken: true,
                },
                {
                    route: '/create-weapon',
                    method: 'POST',
                    callback: this.createWeapon,
                    requireToken: true,
                },
                {
                    route: '/update-weapon/id/:id',
                    method: 'PUT',
                    callback: this.updateWeapon,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteWeapon,
                    requireToken: true,
                }
            ]
        ];
    }
    createWeapon(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let weaponCtrl = model.controller;
            let resp = yield weaponCtrl.insert(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    updateWeapon(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let weaponCtrl = model.controller;
            let resp = yield weaponCtrl.update(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    deleteWeapon(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let weaponCtrl = model.controller;
            let resp = yield weaponCtrl.remove(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    getAllWeapons(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
            };
            let weaponCtrl = model.controller;
            let resp = yield weaponCtrl.get(req, null, null);
            res.json({ message: 'Success ', resp });
        });
    }
    getWeaponById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let weaponCtrl = model.controller;
            let resp = yield weaponCtrl.get(req, null, null);
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
exports.Weapon = Weapon;
