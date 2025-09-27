/**
 * Main types index file
 * Re-exports all type definitions and constants
 */

// Re-export property types
export * from './property.js';

// Additional type definitions
export const UserTypes = {
  USER: 'User',
  AGENT: 'Agent',
  ADMIN: 'Admin',
  GUEST: 'Guest',
};

export const UserRoles = {
  BUYER: 'buyer',
  SELLER: 'seller',
  AGENT: 'agent',
  ADMIN: 'admin',
};

export const ContactTypes = {
  EMAIL: 'email',
  PHONE: 'phone',
  TEXT: 'text',
  VIDEO_CALL: 'video_call',
  IN_PERSON: 'in_person',
};

export const InquiryTypes = {
  GENERAL: 'general',
  PROPERTY: 'property',
  TOUR: 'tour',
  VALUATION: 'valuation',
  INVESTMENT: 'investment',
};

export const NotificationTypes = {
  EMAIL: 'email',
  SMS: 'sms',
  PUSH: 'push',
  IN_APP: 'in_app',
};

export const SearchTypes = {
  PROPERTIES: 'properties',
  NEIGHBORHOODS: 'neighborhoods',
  AGENTS: 'agents',
  SERVICES: 'services',
};

export const SortDirections = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FilterOperators = {
  EQUALS: 'equals',
  NOT_EQUALS: 'not_equals',
  GREATER_THAN: 'greater_than',
  LESS_THAN: 'less_than',
  GREATER_THAN_OR_EQUAL: 'greater_than_or_equal',
  LESS_THAN_OR_EQUAL: 'less_than_or_equal',
  CONTAINS: 'contains',
  NOT_CONTAINS: 'not_contains',
  IN: 'in',
  NOT_IN: 'not_in',
  BETWEEN: 'between',
  IS_NULL: 'is_null',
  IS_NOT_NULL: 'is_not_null',
};

export const ApiResponseStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

export const HttpStatusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

export const ValidationRules = {
  REQUIRED: 'required',
  EMAIL: 'email',
  PHONE: 'phone',
  URL: 'url',
  MIN_LENGTH: 'min_length',
  MAX_LENGTH: 'max_length',
  MIN_VALUE: 'min_value',
  MAX_VALUE: 'max_value',
  PATTERN: 'pattern',
  CUSTOM: 'custom',
};

export const FileTypes = {
  IMAGE: 'image',
  DOCUMENT: 'document',
  VIDEO: 'video',
  AUDIO: 'audio',
  ARCHIVE: 'archive',
};

export const ImageFormats = {
  JPEG: 'jpeg',
  JPG: 'jpg',
  PNG: 'png',
  GIF: 'gif',
  WEBP: 'webp',
  SVG: 'svg',
};

export const DocumentFormats = {
  PDF: 'pdf',
  DOC: 'doc',
  DOCX: 'docx',
  XLS: 'xls',
  XLSX: 'xlsx',
  PPT: 'ppt',
  PPTX: 'pptx',
  TXT: 'txt',
};

export const VideoFormats = {
  MP4: 'mp4',
  AVI: 'avi',
  MOV: 'mov',
  WMV: 'wmv',
  FLV: 'flv',
  WEBM: 'webm',
};

export const AudioFormats = {
  MP3: 'mp3',
  WAV: 'wav',
  AAC: 'aac',
  OGG: 'ogg',
  FLAC: 'flac',
};

export const ArchiveFormats = {
  ZIP: 'zip',
  RAR: 'rar',
  '7Z': '7z',
  TAR: 'tar',
  GZ: 'gz',
};

export const MediaTypes = {
  IMAGE: 'image/*',
  DOCUMENT: 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  VIDEO: 'video/*',
  AUDIO: 'audio/*',
  ARCHIVE: 'application/zip,application/x-rar-compressed,application/x-7z-compressed',
};

export const CacheKeys = {
  PROPERTIES: 'properties',
  NEIGHBORHOODS: 'neighborhoods',
  TESTIMONIALS: 'testimonials',
  AGENTS: 'agents',
  SERVICES: 'services',
  USER_PREFERENCES: 'user_preferences',
  SEARCH_RESULTS: 'search_results',
  FAVORITES: 'favorites',
};

export const CacheDurations = {
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 30 * 60 * 1000, // 30 minutes
  LONG: 2 * 60 * 60 * 1000, // 2 hours
  VERY_LONG: 24 * 60 * 60 * 1000, // 24 hours
};

export const EventTypes = {
  PROPERTY_VIEWED: 'property_viewed',
  PROPERTY_FAVORITED: 'property_favorited',
  PROPERTY_INQUIRY: 'property_inquiry',
  TOUR_REQUESTED: 'tour_requested',
  SEARCH_PERFORMED: 'search_performed',
  CONTACT_FORM_SUBMITTED: 'contact_form_submitted',
  NEWSLETTER_SUBSCRIBED: 'newsletter_subscribed',
};

export const AnalyticsEvents = {
  PAGE_VIEW: 'page_view',
  PROPERTY_VIEW: 'property_view',
  SEARCH: 'search',
  CONTACT: 'contact',
  TOUR_REQUEST: 'tour_request',
  FAVORITE: 'favorite',
  SHARE: 'share',
  DOWNLOAD: 'download',
};

export const SocialPlatforms = {
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  INSTAGRAM: 'instagram',
  LINKEDIN: 'linkedin',
  YOUTUBE: 'youtube',
  PINTEREST: 'pinterest',
  TIKTOK: 'tiktok',
};

export const DeviceTypes = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

export const BrowserTypes = {
  CHROME: 'chrome',
  FIREFOX: 'firefox',
  SAFARI: 'safari',
  EDGE: 'edge',
  OPERA: 'opera',
  IE: 'ie',
};

export const OperatingSystems = {
  WINDOWS: 'windows',
  MACOS: 'macos',
  LINUX: 'linux',
  IOS: 'ios',
  ANDROID: 'android',
};

export const TimeZones = {
  UTC: 'UTC',
  EST: 'America/New_York',
  PST: 'America/Los_Angeles',
  CST: 'America/Chicago',
  MST: 'America/Denver',
  GMT: 'Europe/London',
  CET: 'Europe/Paris',
  JST: 'Asia/Tokyo',
  AEST: 'Australia/Sydney',
};

export const DateFormats = {
  ISO: 'YYYY-MM-DD',
  US: 'MM/DD/YYYY',
  EU: 'DD/MM/YYYY',
  LONG: 'MMMM DD, YYYY',
  SHORT: 'MMM DD, YYYY',
  TIME: 'HH:mm:ss',
  DATETIME: 'YYYY-MM-DD HH:mm:ss',
};

export const CurrencyCodes = {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  JPY: 'JPY',
  CAD: 'CAD',
  AUD: 'AUD',
  CHF: 'CHF',
  CNY: 'CNY',
  INR: 'INR',
  BRL: 'BRL',
};

export const LanguageCodes = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  DE: 'de',
  IT: 'it',
  PT: 'pt',
  RU: 'ru',
  JA: 'ja',
  KO: 'ko',
  ZH: 'zh',
};

export const CountryCodes = {
  US: 'US',
  CA: 'CA',
  GB: 'GB',
  FR: 'FR',
  DE: 'DE',
  IT: 'IT',
  ES: 'ES',
  AU: 'AU',
  JP: 'JP',
  CN: 'CN',
  IN: 'IN',
  BR: 'BR',
  MX: 'MX',
  RU: 'RU',
};

export const StateCodes = {
  // US States
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
  DC: 'District of Columbia',
};