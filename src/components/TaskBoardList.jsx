import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { Droppable } from 'react-beautiful-dnd'
import { isEmpty } from 'lodash'
import { TaskBoardCard } from './TaskBoardCard'
import Add from '../static/add.svg'
import { applicationTypes } from '../utils/types'

export function TaskBoardList({ items, index }) {
    let h = 484

    const getListStyle = (isDraggingOver) => {
        if (items.length >= 3) {
            h = 484 + ((items.length - 3) * 144)
            h = isDraggingOver ? h + 144 : h
        }

        return { height: h }
    }

    return (
        <Droppable droppableId={`${index}`}>
            {(provided, snapshot) => (
                <div
                    className={css(styles.list)}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    <div
                        className={css(styles.caption)}>
                        <h3 className={css(styles.title)}>{applicationTypes[index]} • {items.length}</h3>
                    </div>

                    <div style={{ height: '100%' }} {...provided.droppableProps} ref={provided.innerRef}>
                        {!isEmpty(items) ? items.map((item, ind) => (
                            <TaskBoardCard key={item.id} index={ind} data={item} />
                        )) : (
                            <div className={css(styles.wrap)}>
                                <img src={Add} alt="#add" />

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
    )
}

const styles = StyleSheet.create({
    list: {
        width: 276,
        marginRight: '1.625rem',
        border: '1px solid #c9d2ce',
        borderRadius: 4,
    },
    caption: {
        backgroundColor: '#f2faf6',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottom: '1px solid #c9d2ce',
        height: 39,
        padding: 10,
        zIndex: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: 500,
        color: '#414644',
    },
    wrap: {
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
