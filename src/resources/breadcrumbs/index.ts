import { routesBrands } from '../routes/brands';
import { routesBricks } from '../routes/bricks';
import { routesBudgets } from '../routes/budgets';
import { routesOmc } from '../routes/calculatorOmc';
import { routesCities } from '../routes/cities';
import { routesDoctors } from '../routes/doctors';
import { routesEmail } from '../routes/email';
import { routesEvents } from '../routes/events';
import { routesEventSubTypes } from '../routes/eventSubTypes';
import { routesEventThemes } from '../routes/eventThemes';
import { routesEventTypes } from '../routes/eventTypes';
import { routesFolders } from '../routes/folders';
import { routesFranchises } from '../routes/franchises';
import { routesLegal } from '../routes/legal';
import { routesLicenses } from '../routes/licenses';
import { routesMaterials } from '../routes/materials';
import { routesMedInstitution } from '../routes/medInstitution';
import { routesPharmacies } from '../routes/pharmacies';
import { routesPharmacyNetworks } from '../routes/pharmacyNetworks';
import { routesProducts } from '../routes/products';
import { routesPromo } from '../routes/promo';
import { routesSampleTypes } from '../routes/sampleTypes';
import { routesSpecialties } from '../routes/specialties';
import { routesStorageGroup } from '../routes/storageGroup';
import { routesSurveys } from '../routes/surveys';
import { routesTerritories } from '../routes/territories';
import { routesUserEvents } from '../routes/userEvents';
import { routesUsers } from '../routes/users';
import { routesVisits } from '../routes/visits';
import { Voc } from '../navbar/constants';

export const BC = {
  USERS_AND_TERRITORIES: [{ name: Voc.USERS_AND_TERRITORIES }],
  USERS: [{ name: Voc.USERS_AND_TERRITORIES }, { name: Voc.USERS, url: routesUsers.list }],
  LICENSES: [{ name: Voc.USERS_AND_TERRITORIES }, { name: Voc.LICENSES, url: routesLicenses.list }],
  TERRITORIES: [
    { name: Voc.USERS_AND_TERRITORIES },
    { name: Voc.TERRITORIES, url: routesTerritories.list },
  ],
  BRICKS: [{ name: Voc.USERS_AND_TERRITORIES }, { name: Voc.BRICKS, url: routesBricks.list }],
  DIVISIONS: [
    { name: Voc.USERS_AND_TERRITORIES },
    { name: Voc.DIVISIONS, url: routesFranchises.list },
  ],

  CONTACTS_BASE: [{ name: Voc.CONTACTS_BASE }],
  DOCTORS: [{ name: Voc.CONTACTS_BASE }, { name: Voc.DOCTORS, url: routesDoctors.list }],
  LPU: [{ name: Voc.CONTACTS_BASE }, { name: Voc.LPU, url: routesMedInstitution.list }],
  PHARMACY: [{ name: Voc.CONTACTS_BASE }, { name: Voc.PHARMACY, url: routesPharmacies.list }],
  PHARMACY_NETWORK: [
    { name: Voc.CONTACTS_BASE },
    { name: Voc.PHARMACY_NETWORK, url: routesPharmacyNetworks.list },
  ],
  LEGAL_ENTITIES: [
    { name: Voc.CONTACTS_BASE },
    { name: Voc.LEGAL_ENTITIES, url: routesLegal.list },
  ],

  LIBRARY: [{ name: Voc.LIBRARY }],
  CLM: [{ name: Voc.LIBRARY }, { name: Voc.CLM, url: routesMaterials.list }],
  SEQUANCES: [{ name: Voc.LIBRARY }, { name: Voc.SEQUANCES, url: routesMaterials.sequance }],
  FOLDERS: [{ name: Voc.LIBRARY }, { name: Voc.FOLDERS, url: routesFolders.list }],

  VISIT_ACTIVITY: [{ name: Voc.VISIT_ACTIVITY }],
  VISIT_LIST: [{ name: Voc.VISIT_ACTIVITY }, { name: Voc.VISIT_LIST, url: routesVisits.list }],

  ACTIVITY_LIST: {
    OTHER: [
      { name: Voc.NON_VISIT_ACTIVITY },
      { name: Voc.NON_VISIT_ACTIVITY_LIST, url: routesUserEvents.OTHER.list },
    ],
    FOLLOWUP_EVENT: [
      { name: Voc.VISIT_ACTIVITY },
      { name: Voc.FOLLOWUP_VISIT_LIST, url: routesUserEvents.FOLLOWUP_EVENT.list },
    ],
    JOINT_EVENT: [
      { name: Voc.VISIT_ACTIVITY },
      { name: Voc.JOINT_VISIT_LIST, url: routesUserEvents.JOINT_EVENT.list },
    ],
  },

  STORAGE_AND_PROMO: [{ name: Voc.STORAGE_AND_PROMO }],
  STORAGE_LIST: [
    { name: Voc.STORAGE_AND_PROMO },
    { name: Voc.STORAGE_LIST, url: routesStorageGroup.storage },
  ],
  STORAGE_DISTRIBUTION: [
    { name: Voc.STORAGE_AND_PROMO },
    { name: Voc.STORAGE_DISTRIBUTION, url: routesStorageGroup.distribution },
  ],
  SAMPLE_TYPES: [
    { name: Voc.STORAGE_AND_PROMO },
    { name: Voc.SAMPLE_TYPES, url: routesSampleTypes.list },
  ],
  TRANSACTION_HISTORY: [
    { name: Voc.STORAGE_AND_PROMO },
    { name: Voc.TRANSACTION_HISTORY, url: routesStorageGroup.transaction },
  ],

  STATISTIC: [{ name: Voc.STATISTIC }],
  DASHBOARDS: [{ name: Voc.STATISTIC }, { name: '-' }],
  EXPORT: [{ name: Voc.STATISTIC }, { name: '-' }],

  SURVEYS: [{ name: Voc.SURVEYS }],
  TEMPLATE_LIST: [{ name: Voc.SURVEYS }, { name: Voc.TEMPLATE_LIST, url: routesSurveys.list }],

  IMPORT: [{ name: Voc.IMPORT }],

  EMAILS: [{ name: Voc.EMAILS }],
  EMAIL_LIST: [{ name: Voc.EMAILS }, { name: Voc.EMAIL_LIST, url: routesEmail.list }],

  OMC: [{ name: Voc.OMC }],
  OMC_LIST: [{ name: Voc.OMC }, { name: Voc.OMC_LIST, url: routesOmc.list }],

  SFE: [{ name: Voc.SFE }],
  CALENDARS: [{ name: Voc.SFE }, { name: Voc.CALENDARS, url: routesPromo.listSfe }],
  PROMOGRIDS: [{ name: Voc.SFE }, { name: Voc.PROMOGRIDS, url: routesPromo.listPromoGrid }],

  NON_VISIT_ACTIVITY: [{ name: Voc.NON_VISIT_ACTIVITY }],

  EVENTS: [{ name: Voc.EVENTS }],
  EVENT_LIST: [{ name: Voc.EVENTS }, { name: Voc.EVENT_LIST, url: routesEvents.list }],
  EVENT_TYPES: {
    ACTIVITY: [
      { name: Voc.EVENTS },
      { name: Voc.EVENT_TYPES, url: routesEventTypes.ACTIVITY.list },
    ],
    OTHER: [
      { name: Voc.NON_VISIT_ACTIVITY },
      { name: Voc.NON_VISIT_ACTIVITY_TYPES, url: routesEventTypes.OTHER.list },
    ],
  },
  EVENT_SUBTYPES: {
    ACTIVITY: [
      { name: Voc.EVENTS },
      { name: Voc.EVENT_SUBTYPES, url: routesEventSubTypes.ACTIVITY.list },
    ],
    OTHER: [
      { name: Voc.NON_VISIT_ACTIVITY },
      { name: Voc.NON_VISIT_ACTIVITY_SUBTYPES, url: routesEventSubTypes.OTHER.list },
    ],
  },
  EVENT_THEMES: [{ name: Voc.EVENTS }, { name: Voc.EVENT_THEMES, url: routesEventThemes.list }],
  EVENT_CYCLE_BUDGETS: [
    { name: Voc.EVENTS },
    { name: Voc.EVENT_CYCLE_BUDGETS, url: routesBudgets.list },
  ],
  EVENT_GIVEN_BUDGETS: [
    { name: Voc.EVENTS },
    { name: Voc.EVENT_GIVEN_BUDGETS, url: routesBudgets.listSpread },
  ],

  HANDBOOKS: [{ name: Voc.HANDBOOKS }],
  CITIES: [{ name: Voc.HANDBOOKS }, { name: Voc.CITIES, url: routesCities.list }],
  REGIONS: [{ name: Voc.HANDBOOKS }, { name: '-' }],
  DISTRICTS: [{ name: Voc.HANDBOOKS }, { name: '-' }],
  SPECIALTIES: [{ name: Voc.HANDBOOKS }, { name: Voc.SPECIALTIES, url: routesSpecialties.list }],
  PRODUCTS: [{ name: Voc.HANDBOOKS }, { name: Voc.PRODUCTS, url: routesProducts.list }],
  FRANCHISES: [{ name: Voc.HANDBOOKS }, { name: Voc.FRANCHISES, url: routesFranchises.list }],
  BRANDS: [{ name: Voc.HANDBOOKS }, { name: Voc.BRANDS, url: routesBrands.list }],
};
