import TActionsAPI from './API';
import TActionsForms from './forms';
import TActionsIngredients from './ingredients';
import TActionsOrders from './orders';
import TActionsOrderSelect from './order-select';
import TActionsPrivateFeed from './private-feed';
import TActionsPublicFeed from './public-feed';
import TActionsUser from './user';

type TAppActions = TActionsAPI & TActionsForms & TActionsIngredients & TActionsOrders & TActionsOrderSelect
  & TActionsPrivateFeed & TActionsPublicFeed & TActionsUser;

export default TAppActions;
