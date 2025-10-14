export const VALIDATION_CONSTANTS = {
  DELIVERY_ADDRESS: {
    CITY: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 30
    },
    ZIP: {
      MAX_LENGTH: 10
    },
    STREET: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 30
    },
    HOUSE: {
      MAX_LENGTH: 15
    },
    FLAT: {
      MAX_LENGTH: 15
    }
  }
} as const
