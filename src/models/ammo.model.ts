import { Request, Response, NextFunction } from 'express';

export class Ammo {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            ammoName: { type: String },
            ammoDescription: { type: String },
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
            }
            ,
            {
                route: '/deleteAmmo/id/:id',
                method: 'DELETE',
                callback: this.deleteAmmo,
                requireToken: true,
            }
        ]
        ];
    }
    createAmmo(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let ammoCtrl = model.controller;
            let resp = await ammoCtrl.insert(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }

    updateAmmo(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let ammoCtrl = model.controller;
            let resp = await ammoCtrl.update(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }

    deleteAmmo(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let ammoCtrl = model.controller;
            let resp = await ammoCtrl.remove(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }
    getAllAmmo(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body={
                get: ['*'],
            }
            let ammoCtrl = model.controller;
            let resp = await ammoCtrl.get(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }
    getAmmoById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body={
                get: ['*'],
                where: {
                    id: req.params.id
                }
            }
            let ammoCtrl = model.controller;
            let resp = await ammoCtrl.get(req, null, null);
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