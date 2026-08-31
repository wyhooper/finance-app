import * as styles from "../colors"  

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// TODO Needs to go to a shared file at some point
export const pageContainer = {
    padding: '1.5rem 2.5rem 1.5rem 2.5rem',
    backgroundColor: styles.colors.background,
    width: '100%',
    display: 'flex',
    // justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '1.25rem'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// TODO Needs to go to a shared file at some point
export const pageTitle = {
    fontSize: '2rem',
    color:  '#F8FAFC',
    backgroundColor: styles.colors.background,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ' 0 0.5rem 0 0.5rem'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const dateDropDown = {
    width: '6rem',
    height: '.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: styles.colors.background,
    fontSize: '1rem',
    size: 'small',
    border: '2px grey'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const overviewCards = {
    width: "calc(25% - 1rem)",
    height: '8rem',
    backgroundColor: styles.colors.cards,
    color: "#fff",
    padding: "1rem",
    gap: '1.5rem',
    border: '2px red',
    borderRadius: '0.75rem'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const overviewCardBox = {
    display: 'flex',
    gap: '1.5rem'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const chartsCardBox = {
    display: 'flex',
    gap: '1.5rem',
    height: '22rem',
    justifyContent: 'space-between',
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const spendingOverviewBox = {
    width: "calc(54%)",
    height: '21rem',
    color: "#fff",
    padding: "1rem",
    backgroundColor: styles.colors.cards,
    borderRadius: '0.75rem'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const cashFlowBox = {
    width: "calc(45%)",
    height: '21rem',
    color: "#fff",
    padding: "1rem",
    backgroundColor: styles.colors.cards,
    borderRadius: '0.75rem'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const recentTransactionsBox = {
    width: "calc(50% - 1rem)",
    height: '21rem',
    color: "#fff",
    padding: "1rem",
    backgroundColor: styles.colors.cards,
    borderRadius: '0.75rem'
}
