import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/vestidos', PageController.vestidos);
router.get('/sapatos', PageController.sapatos);
router.get('/joias', PageController.joias);

router.get('/search', SearchController.search);

export default router;
