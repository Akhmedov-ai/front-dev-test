import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { typesCheck } from '../../utils/types'

export default function Status({ data }) {
    const st = typesCheck(data.status) || []
    return (
        <span style={{ color: st.color, background: st.linearBg }} className={css(styles.tag)}>
            {st.name}
        </span>
    )
}

const styles = StyleSheet.create({
    tag: {
        padding: '4px 8px',
        width: 'auto',
        height: 24,
        fontSize: 11,
        fontWeight: '500',
        borderRadius: 4,
    },
})
