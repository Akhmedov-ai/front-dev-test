import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { DragDropContext } from 'react-beautiful-dnd'
import { TaskBoardList } from './TaskBoardList'
import { staff } from '../utils/staffData'

export function TaskBoard() {
    const [elements, setElements] = React.useState(staff)

    const removeFromList = (list, index) => {
        const result = Array.from(list)
        const [removed] = result.splice(index, 1)
        return [removed, result]
    }

    const addToList = (list, index, element) => {
        const result = Array.from(list)
        result.splice(index, 0, element)
        return result
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return
        }

        const listCopy = { ...elements }

        const sourceList = listCopy[result.source.droppableId]
        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            result.source.index,
        )
        listCopy[result.source.droppableId] = newSourceList
        const destinationList = listCopy[result.destination.droppableId]
        listCopy[result.destination.droppableId] = addToList(
            destinationList,
            result.destination.index,
            removedElement,
        )
        setElements(Object.values(listCopy))
    }

    return (
        <div className={css(styles.cont)}>
            <DragDropContext
                onDragEnd={onDragEnd}>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-evenly' }}>
                    {elements.map((i, ind) => (
                        <TaskBoardList items={i} key={ind} index={ind} />
                    ))}
                </div>
            </DragDropContext>
        </div>
    )
}

const styles = StyleSheet.create({
    cont: {
        display: 'flex',
        marginTop: 21,
    },
})
