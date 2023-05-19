
const viewFactory = (viewType: string): string => {
    switch (viewType) {
    case 'list':
        return 'studentListView.ejs'
    default:
        throw new Error('Unknown view type')
    }
}

export default viewFactory