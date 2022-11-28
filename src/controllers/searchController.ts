import { Request, Response } from 'express';
import { Clothe } from '../models/clothe';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
  let query: string = req.query.busca as string;

  if (!query) {
    res.redirect('/');
    return;
  }

  let list = Clothe.getFromName(query);

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query,
  });
};
