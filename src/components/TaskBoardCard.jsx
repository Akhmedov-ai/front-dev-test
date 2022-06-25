import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { Draggable } from 'react-beautiful-dnd'
import group from '../static/group.svg'
import doc from '../static/doc.svg'
import Status from './common/Status'

export function TaskBoardCard({ data, index }) {
    return (
        <Draggable key={data.id} draggableId={data.id} index={index}>
            {(prov) => (
                <div
                    className={css(styles.wrap)}
                    ref={prov.innerRef}
                    {...prov.draggableProps}
                    {...prov.dragHandleProps}
                >
                    <div style={{ width: '83%' }}>
                        <h3 className={css(styles.pos)}>{data.position}</h3>

                        <h3 className={css(styles.wp)}>
                            {data.workplace.length > 27 ? `${data.workplace.slice(0, 27)}...` : data.workplace}
                        </h3>

                        <div className="is-flex is-justify-content-space-between is-align-items-center mt-2 mb-3">
                            <Status data={data} />

                            <span className={css(styles.st)}>
                                <img src={group} alt="#group" />
                        &nbsp;
                                {data.num}
                            </span>

                            <span className={css(styles.st)}>
                                <img src={doc} alt="#doc" />
                                {data.doc}
                            </span>
                        </div>

                        <div className="is-flex is-align-items-center is-justify-content-flex-start">
                            <img src={data.img} alt="#person" />

                            <div className="ml-2">
                                <h3 className={css(styles.rec)}>Рекруитер</h3>

                                <h3 className={css(styles.name)}>{data.name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#fff',
        width: 258,
        height: 132,
        margin: '12px 9px',
        padding: 12,
        boxShadow: 'inset 0px 2px 0px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
    },
    pos: {
        fontSize: 14,
        fontWeight: '600',
        color: '#181a19',
    },
    wp: {
        fontSize: 12,
        fontWeight: '400',
        color: '#6d7471',
        lineHeight: 1.2,
    },
    st: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 11,
        fontWeight: '500',
        color: '#414644',
        backgroundColor: '#fafffc',
        border: '1px solid #ebf3ef',
        borderRadius: 4,
        height: 24,
        padding: '4px',
    },
    rec: {
        fontSize: 11,
        fontWeight: '400',
        color: '#969f9b',
        lineHeight: 1.2,
    },
    name: {
        lineHeight: 1.2,
        fontSize: 12,
        fontWeight: '500',
        color: '#414644',
    },
//    ':nth-child(1n) > :first-child': {
//             borderRadius: '8px 0 0 8px'
//         },
//
//
})
