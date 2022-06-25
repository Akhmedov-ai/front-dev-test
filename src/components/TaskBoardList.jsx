import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { Droppable } from 'react-beautiful-dnd'
import { isEmpty } from 'lodash'
import { TaskBoardCard } from './TaskBoardCard'
import Add from '../static/add.svg'
import { applicationTypes } from '../utils/types'

export function TaskBoardList({ items, index }) {
    const getListStyle = (isDraggingOver) => {
        let h = 445
        let oY = {}

        if (items.length >= 3) {
            h = 445 + ((items.length - (isDraggingOver ? 3 : 4)) * 144)
            oY = { overflowY: 'scroll' }
        } if (items.length === 3) {
            h = 445
        }
        return { height: h, ...oY }
    }

    return (
        <div className={css(styles.cont)}>
            <div className={css(styles.caption)}>
                <h3 className={css(styles.title)}>{applicationTypes[index]} • {items.length}</h3>
            </div>

            <Droppable droppableId={`${index}`}>
                {(provided, snapshot) => (
                    <div className={css(styles.list)} style={getListStyle(snapshot.isDraggingOver)}>
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={css(styles.wrap)}>
                            {!isEmpty(items) ? (
                                <>
                                    {items.map((item, ind) => (
                                        <TaskBoardCard key={item.id} index={ind} data={item} />
                                    ))}

                                    {items.length > 3 ? (
                                        <div style={{ height: 0.1, width: '100%' }} />
                                    ) : null}
                                </>
                            ) : (
                                <div className={css(styles.noCardWrap)}>
                                    <img src={Add} alt="#add " />

                                    <h3 className={css(styles.noCard)}>
                                        Если есть подходящие заявки, перетащите их сюда 🤓
                                    </h3>
                                </div>
                            )}
                            {provided.placeholder}
                        </div>
                    </div>
                )}
            </Droppable>
        </div>
    )
}

const styles = StyleSheet.create({
    cont: {
        width: 276,
        marginRight: '1.625rem',
    },
    wrap: {
        height: '100%',
        paddingTop: 12,
        ':nth-child(1n) > :first-child': {
            marginTop: 0,
        },
    },
    list: {
        border: '1px solid #c9d2ce',
        borderTopWidth: 0,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        '::-webkit-scrollbar': {
            display: 'none',
        },
    },
    caption: {
        backgroundColor: '#f2faf6',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        border: '1px solid #c9d2ce',
        height: 39,
        padding: 10,
        zIndex: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: 500,
        color: '#414644',
    },
    noCardWrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '28.8%',
    },
    noCard: {
        lineHeight: 1.2,
        fontSize: 13,
        fontWeight: '600',
        color: '#6d7471',
        textAlign: 'center',
        marginTop: '1.5rem',
    },
})
