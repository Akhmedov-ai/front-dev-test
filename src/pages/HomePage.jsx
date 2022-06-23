import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Layout from '../components/common/Layout'
import { TaskBoard } from '../components/TaskBoard'

export function HomePage() {
    return (
        <Layout>
            <div style={{ margin: 'calc(1.25rem + 40px) 2rem' }}>
                <h3 className={css(styles.title)}>Заявки • <span className={css(styles.amount)}>18</span></h3>

                <TaskBoard />
            </div>
        </Layout>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#181a19',
    },
    amount: {
        fontWeight: '500',
        color: '#6d7471',
    },
})
