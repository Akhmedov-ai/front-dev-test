import { find } from 'lodash'

export const types = [
    {
        id: 'priority',
        name: 'В приоритете',
        color: '#856ec6',
        linearBg: '#f6f2ff',
    },
    {
        id: 'secondary',
        name: 'Второстепенная',
        color: '#0095f2',
        linearBg: '#f0f9ff',
    },
    {
        id: 'urgent',
        name: 'Срочная заявка',
        color: '#f33b5c',
        linearBg: '#fff2f5',
    },
]

export const applicationTypes = ['Новые', 'Текущие', 'Закрытые', 'Архив', 'Удаленные']

export function typesCheck(status) {
    return find(types, { id: status })
}
