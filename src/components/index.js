import { ComponentLoader } from 'adminjs'

const componentLoader = new ComponentLoader()

const Components = {
    Dashboard: componentLoader.add('DashboardComponent', './dashboard'),
    ImageCell: componentLoader.add('ImageCellComponent', './imageCell')
}

export { componentLoader, Components }