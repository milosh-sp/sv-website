const COLOR_SCHEMES = {
  blue: {
    iconBg: 'from-accent to-accent/80',
    iconColor: 'text-primary',
  },
  emerald: {
    iconBg: 'from-success/20 to-success/10',
    iconColor: 'text-success',
  },
  purple: {
    iconBg: 'from-primary/20 to-primary/10',
    iconColor: 'text-primary',
  },
  orange: {
    iconBg: 'from-warning/20 to-warning/10',
    iconColor: 'text-warning',
  },
} as const

const senderGroups = {
  inactive: 'bq84PR',
}

const senderTransactionalCampaigns = {
  confirmEmail: 'bY54Np',
}

export { COLOR_SCHEMES, senderGroups, senderTransactionalCampaigns }
