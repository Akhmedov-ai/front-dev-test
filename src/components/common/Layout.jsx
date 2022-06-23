import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import cn from 'classnames'

export default function Layout({ children }) {
    return (
        <div>
            <div className={css(styles.head)} />

            <div className="is-flex is-fullwidth">
                <div className={css(
                    styles.sidebar,
                )} />

                <div className={cn(css(styles.container))}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    head: {
        height: 40,
        width: '100%',
        backgroundColor: '#2ea97d',
        position: 'fixed',
        zIndex: 2,
    },
    sidebar: {
        minHeight: '100%',
        position: 'relative',
        background: '#fff',
        width: 200,
        zIndex: 1,
        '::-webkit-scrollbar': {
            display: 'none',
        },
    },
    container: {
        overflowX: 'auto',
        '@media (max-width: 769px)': {
            margin: '0',
        },
    },

})
