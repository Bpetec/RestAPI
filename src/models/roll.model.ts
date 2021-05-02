import { Request, Response, NextFunction } from 'express';

export class Roll {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            name: { type: String },
            barrel: { type: String },
            ammo: { type: String },
            perkOne: { type: String},
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
            }
            ,
            {
                route: '/delete/id/:id',
                method: 'DELETE',
                callback: this.deleteRoll,
                requireToken: true,
            }
        ]
        ];
    }
    createRoll(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let rollCtrl = model.controller;
            let resp = await rollCtrl.insert(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }

    updateRoll(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let rollCtrl = model.controller;
            let resp = await rollCtrl.update(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }

    deleteRoll(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let rollCtrl = model.controller;
            let resp = await rollCtrl.remove(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }
    getAllRolls(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body={
                get: ['*'],
            }
            let rollCtrl = model.controller;
            let resp = await rollCtrl.get(req, null, null);
            res.json({ message: 'Success ', resp });
        }
    }
    getRollById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body={
                get: ['*'],
                where: {
                    id: req.params.id
                }
            }
            let rollCtrl = model.controller;
            let resp = await rollCtrl.get(req, null, null);
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