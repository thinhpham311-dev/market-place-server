import { ComponentLoader } from 'adminjs'

const componentLoader = new ComponentLoader()

const Components = {
    Dashboard: componentLoader.add('DashboardComponent', './dashboard'),
    ImageCell: componentLoader.add('ImageCellComponent', './imageCell'),
    TextAreaInput: componentLoader.add('TextAreaInputComponent', './textAreaInput')
}

export { componentLoader, Components }