import { Request, Response, NextFunction } from 'express';

export class Weapon {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            weaponName: { type: String },
            weaponType: { type: String, maxlength: 30 },
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
            }
            ,
            {
                route: '/delete/id/:id',
                method: 'DELETE',
                callback: this.deleteWeapon,
                requireToken: true,
            }
        ]
        ];
    }
    createWeapon(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let weaponCtrl = model.controller;
            let resp = await weaponCtrl.insert(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }

    updateWeapon(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let weaponCtrl = model.controller;
            let resp = await weaponCtrl.update(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }

    deleteWeapon(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let weaponCtrl = model.controller;
            let resp = await weaponCtrl.remove(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }
    getAllWeapons(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body={
                get: ['*'],
            }
            let weaponCtrl = model.controller;
            let resp = await weaponCtrl.get(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }
    getWeaponById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body={
                get: ['*'],
                where: {
                    id: req.params.id
                }
            }
            let weaponCtrl = model.controller;
            let resp = await weaponCtrl.get(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

}