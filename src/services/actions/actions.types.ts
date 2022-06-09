import TActionTypesAPI from './API';
import TActionTypesForms from './forms';
import TActionTypesIngredients from './ingredients';
import TActionTypesOrders from './orders';
import TActionTypesOrderSelect from './order-select';
import TActionTypesPrivateFeed from './private-feed';
import TActionTypesPublicFeed from './public-feed';
import TActionTypesUser from './user';

type TAppActions = TActionTypesAPI
& TActionTypesForms &
TActionTypesIngredients &
TActionTypesOrders &
TActionTypesOrderSelect
& TActionTypesPrivateFeed &
TActionTypesPublicFeed &
TActionTypesUser;

export default TAppActions;
